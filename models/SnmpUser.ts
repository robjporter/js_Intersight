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

import { MoBaseComplexType } from './MoBaseComplexType';
import { SnmpUserAllOf } from './SnmpUserAllOf';
import { HttpFile } from '../http/http';

/**
* Complex type for a User based security model, for communication between an agent and manager. Applicable only for SNMPv3.
*/
export class SnmpUser extends MoBaseComplexType {
    /**
    * Authorization password for the user.
    */
    'authPassword'?: string;
    /**
    * Authorization protocol for authenticating the user.
    */
    'authType'?: SnmpUserAuthTypeEnum;
    /**
    * Indicates whether the value of the 'authPassword' property has been set.
    */
    'isAuthPasswordSet'?: boolean;
    /**
    * Indicates whether the value of the 'privacyPassword' property has been set.
    */
    'isPrivacyPasswordSet'?: boolean;
    /**
    * SNMP username. Must have a minimum of 1 and and a maximum of 31 characters.
    */
    'name'?: string;
    /**
    * Privacy password for the user.
    */
    'privacyPassword'?: string;
    /**
    * Privacy protocol for the user.
    */
    'privacyType'?: SnmpUserPrivacyTypeEnum;
    /**
    * Security mechanism used for communication between agent and manager.
    */
    'securityLevel'?: SnmpUserSecurityLevelEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "authPassword",
            "baseName": "AuthPassword",
            "type": "string",
            "format": ""
        },
        {
            "name": "authType",
            "baseName": "AuthType",
            "type": "SnmpUserAuthTypeEnum",
            "format": ""
        },
        {
            "name": "isAuthPasswordSet",
            "baseName": "IsAuthPasswordSet",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isPrivacyPasswordSet",
            "baseName": "IsPrivacyPasswordSet",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "Name",
            "type": "string",
            "format": ""
        },
        {
            "name": "privacyPassword",
            "baseName": "PrivacyPassword",
            "type": "string",
            "format": ""
        },
        {
            "name": "privacyType",
            "baseName": "PrivacyType",
            "type": "SnmpUserPrivacyTypeEnum",
            "format": ""
        },
        {
            "name": "securityLevel",
            "baseName": "SecurityLevel",
            "type": "SnmpUserSecurityLevelEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(SnmpUser.attributeTypeMap);
    }
    
    public constructor() {
        super();
    }
}


export type SnmpUserAuthTypeEnum = "NA" | "MD5" | "SHA" ;
export type SnmpUserPrivacyTypeEnum = "NA" | "DES" | "AES" ;
export type SnmpUserSecurityLevelEnum = "AuthPriv" | "NoAuthNoPriv" | "AuthNoPriv" ;

