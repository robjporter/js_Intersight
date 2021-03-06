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

import { AssetDeviceRegistrationRelationship } from './AssetDeviceRegistrationRelationship';
import { ManagementControllerRelationship } from './ManagementControllerRelationship';
import { ManagementInterface } from './ManagementInterface';
import { MoBaseMoRelationship } from './MoBaseMoRelationship';
import { MoMoRef } from './MoMoRef';
import { MoTag } from './MoTag';
import { MoVersionContext } from './MoVersionContext';
import { HttpFile } from '../http/http';

/**
* A relationship to the 'management.Interface' resource, or the expanded 'management.Interface' resource, or the 'null' value.
*/
export class ManagementInterfaceRelationship {
    /**
    * The Account ID for this managed object.
    */
    'accountMoid'?: string;
    /**
    * The concrete type of this complex type. Its value must be the same as the 'objectType' property. The OpenAPI document references this property as a discriminator value.
    */
    'classId': string;
    /**
    * The time when this managed object was created.
    */
    'createTime'?: Date;
    /**
    * The DomainGroup ID for this managed object.
    */
    'domainGroupMoid'?: string;
    /**
    * The time when this managed object was last modified.
    */
    'modTime'?: Date;
    /**
    * The unique identifier of this Managed Object instance.
    */
    'moid'?: string;
    /**
    * The fully-qualified type of this managed object, i.e. the class name. This property is optional. The ObjectType is implied from the URL path. If specified, the value of objectType must match the class name specified in the URL path.
    */
    'objectType': string;
    'owners'?: Array<string>;
    /**
    * Intersight provides pre-built workflows, tasks and policies to end users through global catalogs. Objects that are made available through global catalogs are said to have a 'shared' ownership. Shared objects are either made globally available to all end users or restricted to end users based on their license entitlement. Users can use this property to differentiate the scope (global or a specific license tier) to which a shared MO belongs.
    */
    'sharedScope'?: string;
    'tags'?: Array<MoTag>;
    'versionContext'?: MoVersionContext;
    /**
    * An array of relationships to moBaseMo resources.
    */
    'ancestors'?: Array<MoBaseMoRelationship>;
    'parent'?: MoBaseMoRelationship;
    /**
    * An array of relationships to moBaseMo resources.
    */
    'permissionResources'?: Array<MoBaseMoRelationship>;
    /**
    * a map of display names for a resource.
    */
    'displayNames'?: { [key: string]: Array<string>; };
    'deviceMoId'?: string;
    /**
    * The Distinguished Name unambiguously identifies an object in the system.
    */
    'dn'?: string;
    /**
    * The Relative Name uniquely identifies an object within a given context.
    */
    'rn'?: string;
    /**
    * Default gateway for the interface.
    */
    'gateway'?: string;
    /**
    * Hostname configured for the interface.
    */
    'hostName'?: string;
    /**
    * IP address of the interface.
    */
    'ipAddress'?: string;
    /**
    * IPv4 address of the interface.
    */
    'ipv4Address'?: string;
    /**
    * IPv4 default gateway for the interface.
    */
    'ipv4Gateway'?: string;
    /**
    * IPv4 Netmask for the interface.
    */
    'ipv4Mask'?: string;
    /**
    * IPv6 address of the interface.
    */
    'ipv6Address'?: string;
    /**
    * IPv6 default gateway for the interface.
    */
    'ipv6Gateway'?: string;
    /**
    * IPv6 prefix for the interface.
    */
    'ipv6Prefix'?: number;
    /**
    * MAC address configured for the interface.
    */
    'macAddress'?: string;
    /**
    * Netmask for the interface.
    */
    'mask'?: string;
    /**
    * Switch Id of the interface.
    */
    'switchId'?: string;
    /**
    * Status of UEM connection.
    */
    'uemConnStatus'?: string;
    /**
    * Virtual hostname configured for the interface in case of clustered environment.
    */
    'virtualHostName'?: string;
    'managementController'?: ManagementControllerRelationship;
    'registeredDevice'?: AssetDeviceRegistrationRelationship;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "accountMoid",
            "baseName": "AccountMoid",
            "type": "string",
            "format": ""
        },
        {
            "name": "classId",
            "baseName": "ClassId",
            "type": "string",
            "format": ""
        },
        {
            "name": "createTime",
            "baseName": "CreateTime",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "domainGroupMoid",
            "baseName": "DomainGroupMoid",
            "type": "string",
            "format": ""
        },
        {
            "name": "modTime",
            "baseName": "ModTime",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "moid",
            "baseName": "Moid",
            "type": "string",
            "format": ""
        },
        {
            "name": "objectType",
            "baseName": "ObjectType",
            "type": "string",
            "format": ""
        },
        {
            "name": "owners",
            "baseName": "Owners",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "sharedScope",
            "baseName": "SharedScope",
            "type": "string",
            "format": ""
        },
        {
            "name": "tags",
            "baseName": "Tags",
            "type": "Array<MoTag>",
            "format": ""
        },
        {
            "name": "versionContext",
            "baseName": "VersionContext",
            "type": "MoVersionContext",
            "format": ""
        },
        {
            "name": "ancestors",
            "baseName": "Ancestors",
            "type": "Array<MoBaseMoRelationship>",
            "format": ""
        },
        {
            "name": "parent",
            "baseName": "Parent",
            "type": "MoBaseMoRelationship",
            "format": ""
        },
        {
            "name": "permissionResources",
            "baseName": "PermissionResources",
            "type": "Array<MoBaseMoRelationship>",
            "format": ""
        },
        {
            "name": "displayNames",
            "baseName": "DisplayNames",
            "type": "{ [key: string]: Array<string>; }",
            "format": ""
        },
        {
            "name": "deviceMoId",
            "baseName": "DeviceMoId",
            "type": "string",
            "format": ""
        },
        {
            "name": "dn",
            "baseName": "Dn",
            "type": "string",
            "format": ""
        },
        {
            "name": "rn",
            "baseName": "Rn",
            "type": "string",
            "format": ""
        },
        {
            "name": "gateway",
            "baseName": "Gateway",
            "type": "string",
            "format": ""
        },
        {
            "name": "hostName",
            "baseName": "HostName",
            "type": "string",
            "format": ""
        },
        {
            "name": "ipAddress",
            "baseName": "IpAddress",
            "type": "string",
            "format": ""
        },
        {
            "name": "ipv4Address",
            "baseName": "Ipv4Address",
            "type": "string",
            "format": ""
        },
        {
            "name": "ipv4Gateway",
            "baseName": "Ipv4Gateway",
            "type": "string",
            "format": ""
        },
        {
            "name": "ipv4Mask",
            "baseName": "Ipv4Mask",
            "type": "string",
            "format": ""
        },
        {
            "name": "ipv6Address",
            "baseName": "Ipv6Address",
            "type": "string",
            "format": ""
        },
        {
            "name": "ipv6Gateway",
            "baseName": "Ipv6Gateway",
            "type": "string",
            "format": ""
        },
        {
            "name": "ipv6Prefix",
            "baseName": "Ipv6Prefix",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "macAddress",
            "baseName": "MacAddress",
            "type": "string",
            "format": ""
        },
        {
            "name": "mask",
            "baseName": "Mask",
            "type": "string",
            "format": ""
        },
        {
            "name": "switchId",
            "baseName": "SwitchId",
            "type": "string",
            "format": ""
        },
        {
            "name": "uemConnStatus",
            "baseName": "UemConnStatus",
            "type": "string",
            "format": ""
        },
        {
            "name": "virtualHostName",
            "baseName": "VirtualHostName",
            "type": "string",
            "format": ""
        },
        {
            "name": "managementController",
            "baseName": "ManagementController",
            "type": "ManagementControllerRelationship",
            "format": ""
        },
        {
            "name": "registeredDevice",
            "baseName": "RegisteredDevice",
            "type": "AssetDeviceRegistrationRelationship",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ManagementInterfaceRelationship.attributeTypeMap;
    }
    
    public constructor() {
    }
}

