/**
 * Cisco Intersight
 * Cisco Intersight is a management platform delivered as a service with embedded analytics for your Cisco and 3rd party IT infrastructure. This platform offers an intelligent level of management that enables IT organizations to analyze, simplify, and automate their environments in more advanced ways than the prior generations of tools. Cisco Intersight provides an integrated and intuitive management experience for resources in the traditional data center as well as at the edge. With flexible deployment options to address complex security needs, getting started with Intersight is quick and easy. Cisco Intersight has deep integration with Cisco UCS and HyperFlex systems allowing for remote deployment, configuration, and ongoing maintenance. The model-based deployment works for a single system in a remote location or hundreds of systems in a data center and enables rapid, standardized configuration and deployment. It also streamlines maintaining those systems whether you are working with small or very large configurations. The Intersight OpenAPI document defines the complete set of properties that are returned in the HTTP response. From that perspective, a client can expect that no additional properties are returned, unless these properties are explicitly defined in the OpenAPI document. However, when a client uses an older version of the Intersight OpenAPI document, the server may send additional properties because the software is more recent than the client. In that case, the client may receive properties that it does not know about. Some generated SDKs perform a strict validation of the HTTP response body against the OpenAPI document. This document was created on 2020-05-14T14:50:55-07:00.
 *
 * OpenAPI spec version: 1.0.9-1731
 * Contact: intersight@cisco.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { CommIpV4Interface } from './CommIpV4Interface';
import { MoBaseComplexType } from './MoBaseComplexType';
import { OsAnswersAllOf } from './OsAnswersAllOf';
import { HttpFile } from '../http/http';

/**
* This MO captures the values for the most common set of fields in OS specific answer files. The values provided in this MO are used to construct the OS specific answer files (kickstart, seed, unattended xml) by replacing the fields/placeholders in selected os.ConfigurationFile content with the values of this MO properties.
*/
export class OsAnswers extends MoBaseComplexType {
    /**
    * If the source of the answers is a static file, the content of the file is stored as value in this property. The value is mandatory only when the 'Source' property has been set to 'File'.
    */
    'answerFile'?: string;
    /**
    * Hostname to be configured for the server in the OS.
    */
    'hostname'?: string;
    /**
    * IP configuration type. Values are Static or Dynamic configuration of IP. In case of static IP configuration, IP address, gateway and other details need to be populated. In case of dynamic the IP configuration is obtained dynamically from DHCP.
    */
    'ipConfigType'?: OsAnswersIpConfigTypeEnum;
    'ipV4Config'?: CommIpV4Interface;
    /**
    * Indicates whether the value of the 'answerFile' property has been set.
    */
    'isAnswerFileSet'?: boolean;
    /**
    * Enable to indicate Root Password provided is encrypted.
    */
    'isRootPasswordCrypted'?: boolean;
    /**
    * Indicates whether the value of the 'rootPassword' property has been set.
    */
    'isRootPasswordSet'?: boolean;
    /**
    * IP address of the name server to be configured in the OS.
    */
    'nameserver'?: string;
    /**
    * The product key to be used for a specific version of Windows installation.
    */
    'productKey'?: string;
    /**
    * Password configured for the root / administrator user in the OS. You can enter a plain text or an encrypted password. Intersight encrypts the plaintext password. Enable the Encrypted Password option to provide an encrypted password. For more details on encrypting passwords, see Help Center.
    */
    'rootPassword'?: string;
    /**
    * Answer values can be provided from three sources - Embedded in OS image, static file, or as placeholder values for an answer file template. Source of the answers is given as value, Embedded/File/Template. 'Embedded' option indicates that the answer file is embedded within the OS Image. 'File' option indicates that the answers are provided as a file. 'Template' indicates that the placeholders in the selected os.ConfigurationFile MO are replaced with values provided as os.Answers MO.
    */
    'source'?: OsAnswersSourceEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "answerFile",
            "baseName": "AnswerFile",
            "type": "string",
            "format": ""
        },
        {
            "name": "hostname",
            "baseName": "Hostname",
            "type": "string",
            "format": ""
        },
        {
            "name": "ipConfigType",
            "baseName": "IpConfigType",
            "type": "OsAnswersIpConfigTypeEnum",
            "format": ""
        },
        {
            "name": "ipV4Config",
            "baseName": "IpV4Config",
            "type": "CommIpV4Interface",
            "format": ""
        },
        {
            "name": "isAnswerFileSet",
            "baseName": "IsAnswerFileSet",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isRootPasswordCrypted",
            "baseName": "IsRootPasswordCrypted",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isRootPasswordSet",
            "baseName": "IsRootPasswordSet",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "nameserver",
            "baseName": "Nameserver",
            "type": "string",
            "format": ""
        },
        {
            "name": "productKey",
            "baseName": "ProductKey",
            "type": "string",
            "format": ""
        },
        {
            "name": "rootPassword",
            "baseName": "RootPassword",
            "type": "string",
            "format": ""
        },
        {
            "name": "source",
            "baseName": "Source",
            "type": "OsAnswersSourceEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(OsAnswers.attributeTypeMap);
    }
    
    public constructor() {
        super();
    }
}


export type OsAnswersIpConfigTypeEnum = "static" | "DHCP" ;
export type OsAnswersSourceEnum = "None" | "Embedded" | "File" | "Template" ;

