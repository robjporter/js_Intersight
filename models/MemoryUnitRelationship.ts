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
import { MemoryArrayRelationship } from './MemoryArrayRelationship';
import { MemoryUnit } from './MemoryUnit';
import { MoBaseMoRelationship } from './MoBaseMoRelationship';
import { MoMoRef } from './MoMoRef';
import { MoTag } from './MoTag';
import { MoVersionContext } from './MoVersionContext';
import { HttpFile } from '../http/http';

/**
* A relationship to the 'memory.Unit' resource, or the expanded 'memory.Unit' resource, or the 'null' value.
*/
export class MemoryUnitRelationship {
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
    * This field identifies the model of the given component.
    */
    'model'?: string;
    'revision'?: string;
    /**
    * This field identifies the serial of the given component.
    */
    'serial'?: string;
    /**
    * This field identifies the vendor of the given component.
    */
    'vendor'?: string;
    /**
    * This represents the administrative state of the memory unit on a server.
    */
    'adminState'?: string;
    /**
    * This represents the memory array to which the memory unit belongs to.
    */
    'arrayId'?: number;
    /**
    * This represents the memory bank of the memory unit on a server.
    */
    'bank'?: number;
    /**
    * This represents the memory capacity in MiB of the memory unit on a server.
    */
    'capacity'?: string;
    /**
    * This represents the clock of the memory unit on a server.
    */
    'clock'?: string;
    /**
    * This represents the form factor of the memory unit on a server.
    */
    'formFactor'?: string;
    /**
    * This represents the latency of the memory unit on a server.
    */
    'latency'?: string;
    /**
    * This represents the location of the memory unit on a server.
    */
    'location'?: string;
    /**
    * This represents the operational power state of the memory unit on a server.
    */
    'operPowerState'?: string;
    /**
    * This represents the operational state of the memory unit on a server.
    */
    'operState'?: string;
    /**
    * This represents the operability of the memory unit on a server.
    */
    'operability'?: string;
    /**
    * This represents the presence state of the memory unit on a server.
    */
    'presence'?: string;
    /**
    * This represents the set of the memory unit on a server.
    */
    'set'?: number;
    /**
    * This represents the speed of the memory unit on a server.
    */
    'speed'?: string;
    /**
    * This represents the thremal state of the memory unit on a server.
    */
    'thermal'?: string;
    /**
    * This represents the memory type of the memory unit on a server.
    */
    'type'?: string;
    /**
    * This represents the visibility of the memory unit on a server.
    */
    'visibility'?: string;
    /**
    * This represents the width of the memory unit on a server.
    */
    'width'?: string;
    /**
    * This represents the ID of a regular DIMM on a server.
    */
    'memoryId'?: number;
    'memoryArray'?: MemoryArrayRelationship;
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
            "name": "model",
            "baseName": "Model",
            "type": "string",
            "format": ""
        },
        {
            "name": "revision",
            "baseName": "Revision",
            "type": "string",
            "format": ""
        },
        {
            "name": "serial",
            "baseName": "Serial",
            "type": "string",
            "format": ""
        },
        {
            "name": "vendor",
            "baseName": "Vendor",
            "type": "string",
            "format": ""
        },
        {
            "name": "adminState",
            "baseName": "AdminState",
            "type": "string",
            "format": ""
        },
        {
            "name": "arrayId",
            "baseName": "ArrayId",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "bank",
            "baseName": "Bank",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "capacity",
            "baseName": "Capacity",
            "type": "string",
            "format": ""
        },
        {
            "name": "clock",
            "baseName": "Clock",
            "type": "string",
            "format": ""
        },
        {
            "name": "formFactor",
            "baseName": "FormFactor",
            "type": "string",
            "format": ""
        },
        {
            "name": "latency",
            "baseName": "Latency",
            "type": "string",
            "format": ""
        },
        {
            "name": "location",
            "baseName": "Location",
            "type": "string",
            "format": ""
        },
        {
            "name": "operPowerState",
            "baseName": "OperPowerState",
            "type": "string",
            "format": ""
        },
        {
            "name": "operState",
            "baseName": "OperState",
            "type": "string",
            "format": ""
        },
        {
            "name": "operability",
            "baseName": "Operability",
            "type": "string",
            "format": ""
        },
        {
            "name": "presence",
            "baseName": "Presence",
            "type": "string",
            "format": ""
        },
        {
            "name": "set",
            "baseName": "Set",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "speed",
            "baseName": "Speed",
            "type": "string",
            "format": ""
        },
        {
            "name": "thermal",
            "baseName": "Thermal",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "Type",
            "type": "string",
            "format": ""
        },
        {
            "name": "visibility",
            "baseName": "Visibility",
            "type": "string",
            "format": ""
        },
        {
            "name": "width",
            "baseName": "Width",
            "type": "string",
            "format": ""
        },
        {
            "name": "memoryId",
            "baseName": "MemoryId",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "memoryArray",
            "baseName": "MemoryArray",
            "type": "MemoryArrayRelationship",
            "format": ""
        },
        {
            "name": "registeredDevice",
            "baseName": "RegisteredDevice",
            "type": "AssetDeviceRegistrationRelationship",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return MemoryUnitRelationship.attributeTypeMap;
    }
    
    public constructor() {
    }
}
