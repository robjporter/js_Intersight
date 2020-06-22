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

import { StorageArrayControllerRelationship } from './StorageArrayControllerRelationship';
import { StorageGenericArrayRelationship } from './StorageGenericArrayRelationship';
import { HttpFile } from '../http/http';

/**
* Definition of the list of properties defined in 'storage.PhysicalPort', excluding properties defined in parent classes.
*/
export class StoragePhysicalPortAllOf {
    /**
    * ISCSI qualified name applicable for ethernet port. Example - 'iqn.2008-05.com.storage:fnm00151300643-514f0c50141faf05'.
    */
    'iqn'?: string;
    /**
    * Name of the physical port available in storage array.
    */
    'name'?: string;
    /**
    * Operational speed of physical port measured in Gbps.
    */
    'speed'?: number;
    /**
    * Status of storage array port.
    */
    'status'?: StoragePhysicalPortAllOfStatusEnum;
    /**
    * Port type - possible values are FC, FCoE and iSCSI.
    */
    'type'?: StoragePhysicalPortAllOfTypeEnum;
    /**
    * World wide name of FC port. It is a combination of WWNN and WWPN represented in 128 bit hexadecimal formatted with colon. Example: '51:4f:0c:50:14:1f:af:01:51:4f:0c:51:14:1f:af:01'.
    */
    'wwn'?: string;
    /**
    * World wide node name of FC port. Represented in 64 bit hex digits, formatted with colon. Example - '51:4f:0c:50:14:1f:af:01'.
    */
    'wwnn'?: string;
    /**
    * World wide port name of FC port. Represented in 64 bit hex digits, formatted with colon. Example - '51:4f:0c:51:14:1f:af:01'.
    */
    'wwpn'?: string;
    'controller'?: StorageArrayControllerRelationship;
    'storageArray'?: StorageGenericArrayRelationship;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "iqn",
            "baseName": "Iqn",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "Name",
            "type": "string",
            "format": ""
        },
        {
            "name": "speed",
            "baseName": "Speed",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "status",
            "baseName": "Status",
            "type": "StoragePhysicalPortAllOfStatusEnum",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "Type",
            "type": "StoragePhysicalPortAllOfTypeEnum",
            "format": ""
        },
        {
            "name": "wwn",
            "baseName": "Wwn",
            "type": "string",
            "format": ""
        },
        {
            "name": "wwnn",
            "baseName": "Wwnn",
            "type": "string",
            "format": ""
        },
        {
            "name": "wwpn",
            "baseName": "Wwpn",
            "type": "string",
            "format": ""
        },
        {
            "name": "controller",
            "baseName": "Controller",
            "type": "StorageArrayControllerRelationship",
            "format": ""
        },
        {
            "name": "storageArray",
            "baseName": "StorageArray",
            "type": "StorageGenericArrayRelationship",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return StoragePhysicalPortAllOf.attributeTypeMap;
    }
    
    public constructor() {
    }
}


export type StoragePhysicalPortAllOfStatusEnum = "Unknown" | "Ok" | "Degraded" | "Critical" | "Offline" | "Identifying" | "NotAvailable" | "Updating" | "Unrecognized" ;
export type StoragePhysicalPortAllOfTypeEnum = "FC" | "iSCSI" | "FCoE" ;

