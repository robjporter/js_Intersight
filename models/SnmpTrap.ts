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
import { SnmpTrapAllOf } from './SnmpTrapAllOf';
import { HttpFile } from '../http/http';

/**
* Complex type that models a trap message sent from an agent to the manager.
*/
export class SnmpTrap extends MoBaseComplexType {
    /**
    * Address to which the SNMP trap information is sent.
    */
    'destination'?: string;
    /**
    * Enables/disables the trap on the server If enabled, trap is active on the server.
    */
    'enabled'?: boolean;
    /**
    * Port used by the server to communicate with trap destination. Enter a value between 1-65535.
    */
    'port'?: number;
    /**
    * Type of trap which decides whether to receive a notification when a trap is received at the destination.
    */
    'type'?: SnmpTrapTypeEnum;
    /**
    * SNMP user for the trap. Applicable only to SNMPv3.
    */
    'user'?: string;
    /**
    * SNMP version used for the trap.
    */
    'version'?: SnmpTrapVersionEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "destination",
            "baseName": "Destination",
            "type": "string",
            "format": ""
        },
        {
            "name": "enabled",
            "baseName": "Enabled",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "port",
            "baseName": "Port",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "type",
            "baseName": "Type",
            "type": "SnmpTrapTypeEnum",
            "format": ""
        },
        {
            "name": "user",
            "baseName": "User",
            "type": "string",
            "format": ""
        },
        {
            "name": "version",
            "baseName": "Version",
            "type": "SnmpTrapVersionEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(SnmpTrap.attributeTypeMap);
    }
    
    public constructor() {
        super();
    }
}


export type SnmpTrapTypeEnum = "Trap" | "Inform" ;
export type SnmpTrapVersionEnum = "V3" | "V2" ;

