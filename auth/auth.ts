// typings for btoa are incorrect
//@ts-ignore
import * as btoa from "btoa";
import { RequestContext } from "../http/http";
import * as crypto from 'crypto';

/**
 * Interface authentication schemes.
 */
export interface SecurityAuthentication {
    /*
     * @return returns the name of the security authentication as specified in OAI
     */
    getName(): string;

    /**
     * Applies the authentication scheme to the request context
     *
     * @params context the request context which should use this authentication scheme
     */
    applySecurityAuthentication(context: RequestContext): void | Promise<void>;
}

export interface TokenProvider {
  getToken(): Promise<string> | string;
}

/**
 * Applies apiKey authentication to the request context.
 */
export class CookieAuthAuthentication implements SecurityAuthentication {
    /**
     * Configures this api key authentication with the necessary properties
     *
     * @param apiKey: The api key to be used for every request
     */
    public constructor(private apiKey: string) {}

    public getName(): string {
        return "cookieAuth";
    }

    public applySecurityAuthentication(context: RequestContext) {
        context.setQueryParam("X-Starship-Token", this.apiKey);
    }
}

/**
 * Applies http authentication to the request context.
 */
export class HttpSignatureAuthentication implements SecurityAuthentication {
    private keyId: string;
    private privateKey: string;
    private signingAlgo: string;
    private digestAlgo: string;

    public constructor ({keyId, privateKey, signingAlgo = "SHA256withRSA"} : HttpSignatureConfiguration) {
        this.keyId = keyId.trim();
        this.privateKey = privateKey;
        this.signingAlgo = signingAlgo;
        this.digestAlgo = 'rsa-sha256';
    }

    public getName(): string {
        return "http_signature";
    }

    public applySecurityAuthentication(context: RequestContext) {
        const targetHost = context.getHost();
        const targetPath = context.getPath();
        const method = context.getHttpMethod();
        let bodyString = "";

        // Stringify the body
        if (method != "GET") {
            bodyString = JSON.stringify(context.getBody());
        }

        const requestTarget = method + " " + targetPath;

        // Get the current GMT Date/Time
        const currDate = this.getUTCDate();

        // Generate the body digest
        const b64BodyDigest = this.getSHA256Digest(bodyString);

        // Generate the authorization header
        const authHeader = {
            'Date' : currDate,
            'Host' : targetHost,
            'Digest' : 'SHA-256=' + b64BodyDigest
        };

        const stringToSign = this.prepStringToSign(requestTarget, authHeader);
        const b64SignedMsg = this.getRSASigSHA256b64Encode(stringToSign);
        const headerAuth = this.getAuthHeader(authHeader, b64SignedMsg);


        // Set the generated headers
        context.setHeaderParam('Host', targetHost);
        context.setHeaderParam('Date', currDate);
        context.setHeaderParam('Digest', `SHA-256=${b64BodyDigest}`);
        context.setHeaderParam('Authorization', headerAuth);
        // console.log(`authHeader: ${JSON.stringify(authHeader)}`);
        // console.log(`Host: ${targetHost}`)
        // console.log(`Digest: SHA-256=${b64BodyDigest}`)
        // console.log(`Authorization: ${headerAuth}`)
        // console.log(`bodyString: ${bodyString}`)
    }

    /**
     * Generates a SHA256 digest from a JSON Object.
     * @function getSHA256Digest
     * @private
     * @param  {Object} data    JSON object.
     * @return {string}         Base64 formatted string.
     */
    private getSHA256Digest(data: any): string {
        return crypto.createHash('sha256').update(data, 'utf8').digest().toString('base64');
    }


    /**
     * Generates an RSA Signed SHA256 digest from a String.
     * @function getRSASigSHA256b64Encode
     * @private
     * @param  {String} data    String to be signed & hashed.
     * @return {string}         Base64 formatted string.
     */
    private getRSASigSHA256b64Encode(data: string): string {
        const keyData = {
            key: this.privateKey,
            padding: crypto.constants.RSA_PKCS1_PADDING
        };

        return crypto.createSign('RSA-SHA256').update(data).sign(keyData, 'base64');
    }

    /**
     * Assmebled an Intersight formatted authorization header.
     * @function getAuthHeader
     * @private
     * @param  {Object} hdrs        Object with header keys.
     * @param  {String} signedMsg   Base64 encoded SHA256 hashed body.
     * @return {string}             Concatenated authorization header.
     */
    private getAuthHeader(hdrs: any, signedMsg: string): string {
        const keys = [];

        let authStr = "Signature";

        authStr = authStr + " " + "keyId=\"" + this.keyId + "\"," + "algorithm=\"" + this.digestAlgo + "\"," + "headers=\"(request-target)";

        for (const objKey in hdrs) {
            keys.push(objKey);
        }
        keys.sort();

        for (let i = 0; i < keys.length; i++) {
            authStr = authStr + " " + keys[i].toLowerCase();
        }
        authStr = authStr + "\"";

        authStr = authStr + "," + "signature=\"" + signedMsg + "\"";

        return authStr;
    }

    /**
     * Concatenates Intersight headers in preparation to be RSA signed.
     * @function prepStringToSign
     * @private
     * @param  {String} reqTarget   HTTP Method + endpoint.
     * @param  {Object} hdrs        Object with header keys.
     * @return {string}             Concatenated header authorization string.
     */
    private prepStringToSign(reqTarget: string, hdrs: any): string {
        const keys = [];

        let ss = "(request-target): " + reqTarget.toLowerCase() + "\n";

        for (const objKey in hdrs) {
            keys.push(objKey);
        }
        keys.sort();

        for (let i = 0; i < keys.length; i++) {
            ss = ss + keys[i].toLowerCase() + ": " + hdrs[keys[i]];
            if(i < keys.length-1) {
                ss = ss + "\n";
            }
        }

        return ss;
    }

    /**
     * Generated a GMT formatted Date.
     * @function getGMTDate
     * @private
     * @return {String} GMT formatted Date string.
     */
    private getUTCDate(): string {
        return new Date().toUTCString();
    }

}

/**
 * Applies oauth2 authentication to the request context.
 */
export class OAuth2Authentication implements SecurityAuthentication {
    // TODO: How to handle oauth2 authentication!
    public constructor() {}

    public getName(): string {
        return "oAuth2";
    }

    public applySecurityAuthentication(context: RequestContext) {
        // TODO
    }
}


export type AuthMethods = {
    "cookieAuth"?: SecurityAuthentication,
    "http_signature"?: SecurityAuthentication,
    "oAuth2"?: SecurityAuthentication
}

export type ApiKeyConfiguration = string;
export type HttpBasicConfiguration = { "username": string, "password": string };
export type HttpBearerConfiguration = { tokenProvider: TokenProvider };
export type OAuth2Configuration = string;
export type HttpSignatureConfiguration = {
    "keyId": string,
    "privateKey": string,
    "signingAlgo"?: string
}

export type AuthMethodsConfiguration = {
    "cookieAuth"?: ApiKeyConfiguration,
    "http_signature"?: HttpSignatureConfiguration,
    "oAuth2"?: OAuth2Configuration
}

/**
 * Creates the authentication methods from a swagger description.
 *
 */
export function configureAuthMethods(config: AuthMethodsConfiguration | undefined): AuthMethods {
    let authMethods: AuthMethods = {}

    if (!config) {
        return authMethods;
    }

    if (config["cookieAuth"]) {
        authMethods["cookieAuth"] = new CookieAuthAuthentication(
            config["cookieAuth"]
        );
    }

    if (config["http_signature"]) {
        authMethods["http_signature"] = new HttpSignatureAuthentication(
          config['http_signature']
        );
    }

    if (config["oAuth2"]) {
        authMethods["oAuth2"] = new OAuth2Authentication(
        );
    }

    return authMethods;
}