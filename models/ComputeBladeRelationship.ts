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

import { AdapterUnitRelationship } from './AdapterUnitRelationship';
import { AssetDeviceRegistrationRelationship } from './AssetDeviceRegistrationRelationship';
import { BiosUnitRelationship } from './BiosUnitRelationship';
import { ComputeBlade } from './ComputeBlade';
import { ComputeBoardRelationship } from './ComputeBoardRelationship';
import { ComputeIpAddress } from './ComputeIpAddress';
import { EquipmentChassisRelationship } from './EquipmentChassisRelationship';
import { EquipmentIoExpanderRelationship } from './EquipmentIoExpanderRelationship';
import { EquipmentLocatorLedRelationship } from './EquipmentLocatorLedRelationship';
import { InventoryGenericInventoryHolderRelationship } from './InventoryGenericInventoryHolderRelationship';
import { ManagementControllerRelationship } from './ManagementControllerRelationship';
import { MoBaseMoRelationship } from './MoBaseMoRelationship';
import { MoMoRef } from './MoMoRef';
import { MoTag } from './MoTag';
import { MoVersionContext } from './MoVersionContext';
import { PciDeviceRelationship } from './PciDeviceRelationship';
import { StorageEnclosureRelationship } from './StorageEnclosureRelationship';
import { TopSystemRelationship } from './TopSystemRelationship';
import { HttpFile } from '../http/http';

/**
* A relationship to the 'compute.Blade' resource, or the expanded 'compute.Blade' resource, or the 'null' value.
*/
export class ComputeBladeRelationship {
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
    * Desired power state of the server.
    */
    'adminPowerState'?: string;
    'assetTag'?: string;
    /**
    * The actual amount of memory currently available to the server.
    */
    'availableMemory'?: number;
    'faultSummary'?: number;
    'kvmIpAddresses'?: Array<ComputeIpAddress>;
    /**
    * The memory speed, in megahertz.
    */
    'memorySpeed'?: string;
    /**
    * Management address of the server.
    */
    'mgmtIpAddress'?: string;
    /**
    * Total number of Adaptors available.
    */
    'numAdaptors'?: number;
    /**
    * Total number of CPU cores available.
    */
    'numCpuCores'?: number;
    /**
    * Number of CPU cores enabled.
    */
    'numCpuCoresEnabled'?: number;
    /**
    * Total number of CPU's available.
    */
    'numCpus'?: number;
    /**
    * Number of Ethernet Host Interfaces.
    */
    'numEthHostInterfaces'?: number;
    /**
    * Number of Fibre channel Host Interfaces.
    */
    'numFcHostInterfaces'?: number;
    /**
    * Number of threads enabled.
    */
    'numThreads'?: number;
    /**
    * Current power state of the server.
    */
    'operPowerState'?: string;
    'operState'?: string;
    'operability'?: string;
    /**
    * Platform type of the device.
    */
    'platformType'?: string;
    /**
    * Identifies the presence of the server.
    */
    'presence'?: string;
    /**
    * The service profile assigned.
    */
    'serviceProfile'?: string;
    /**
    * The total amount of memory installed on the server.
    */
    'totalMemory'?: number;
    'userLabel'?: string;
    'uuid'?: string;
    /**
    * The id of the chassis that the blade is located in.
    */
    'chassisId'?: string;
    'scaledMode'?: string;
    /**
    * The slot number in the chassis where the blade is present.
    */
    'slotId'?: number;
    /**
    * An array of relationships to adapterUnit resources.
    */
    'adapters'?: Array<AdapterUnitRelationship>;
    /**
    * An array of relationships to biosUnit resources.
    */
    'biosUnits'?: Array<BiosUnitRelationship>;
    'bmc'?: ManagementControllerRelationship;
    'board'?: ComputeBoardRelationship;
    'equipmentChassis'?: EquipmentChassisRelationship;
    /**
    * An array of relationships to equipmentIoExpander resources.
    */
    'equipmentIoExpanders'?: Array<EquipmentIoExpanderRelationship>;
    /**
    * An array of relationships to inventoryGenericInventoryHolder resources.
    */
    'genericInventoryHolders'?: Array<InventoryGenericInventoryHolderRelationship>;
    'locatorLed'?: EquipmentLocatorLedRelationship;
    /**
    * An array of relationships to pciDevice resources.
    */
    'pciDevices'?: Array<PciDeviceRelationship>;
    'registeredDevice'?: AssetDeviceRegistrationRelationship;
    /**
    * An array of relationships to storageEnclosure resources.
    */
    'storageEnclosures'?: Array<StorageEnclosureRelationship>;
    'topSystem'?: TopSystemRelationship;

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
            "name": "adminPowerState",
            "baseName": "AdminPowerState",
            "type": "string",
            "format": ""
        },
        {
            "name": "assetTag",
            "baseName": "AssetTag",
            "type": "string",
            "format": ""
        },
        {
            "name": "availableMemory",
            "baseName": "AvailableMemory",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "faultSummary",
            "baseName": "FaultSummary",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "kvmIpAddresses",
            "baseName": "KvmIpAddresses",
            "type": "Array<ComputeIpAddress>",
            "format": ""
        },
        {
            "name": "memorySpeed",
            "baseName": "MemorySpeed",
            "type": "string",
            "format": ""
        },
        {
            "name": "mgmtIpAddress",
            "baseName": "MgmtIpAddress",
            "type": "string",
            "format": ""
        },
        {
            "name": "numAdaptors",
            "baseName": "NumAdaptors",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "numCpuCores",
            "baseName": "NumCpuCores",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "numCpuCoresEnabled",
            "baseName": "NumCpuCoresEnabled",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "numCpus",
            "baseName": "NumCpus",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "numEthHostInterfaces",
            "baseName": "NumEthHostInterfaces",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "numFcHostInterfaces",
            "baseName": "NumFcHostInterfaces",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "numThreads",
            "baseName": "NumThreads",
            "type": "number",
            "format": "int64"
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
            "name": "platformType",
            "baseName": "PlatformType",
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
            "name": "serviceProfile",
            "baseName": "ServiceProfile",
            "type": "string",
            "format": ""
        },
        {
            "name": "totalMemory",
            "baseName": "TotalMemory",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "userLabel",
            "baseName": "UserLabel",
            "type": "string",
            "format": ""
        },
        {
            "name": "uuid",
            "baseName": "Uuid",
            "type": "string",
            "format": ""
        },
        {
            "name": "chassisId",
            "baseName": "ChassisId",
            "type": "string",
            "format": ""
        },
        {
            "name": "scaledMode",
            "baseName": "ScaledMode",
            "type": "string",
            "format": ""
        },
        {
            "name": "slotId",
            "baseName": "SlotId",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "adapters",
            "baseName": "Adapters",
            "type": "Array<AdapterUnitRelationship>",
            "format": ""
        },
        {
            "name": "biosUnits",
            "baseName": "BiosUnits",
            "type": "Array<BiosUnitRelationship>",
            "format": ""
        },
        {
            "name": "bmc",
            "baseName": "Bmc",
            "type": "ManagementControllerRelationship",
            "format": ""
        },
        {
            "name": "board",
            "baseName": "Board",
            "type": "ComputeBoardRelationship",
            "format": ""
        },
        {
            "name": "equipmentChassis",
            "baseName": "EquipmentChassis",
            "type": "EquipmentChassisRelationship",
            "format": ""
        },
        {
            "name": "equipmentIoExpanders",
            "baseName": "EquipmentIoExpanders",
            "type": "Array<EquipmentIoExpanderRelationship>",
            "format": ""
        },
        {
            "name": "genericInventoryHolders",
            "baseName": "GenericInventoryHolders",
            "type": "Array<InventoryGenericInventoryHolderRelationship>",
            "format": ""
        },
        {
            "name": "locatorLed",
            "baseName": "LocatorLed",
            "type": "EquipmentLocatorLedRelationship",
            "format": ""
        },
        {
            "name": "pciDevices",
            "baseName": "PciDevices",
            "type": "Array<PciDeviceRelationship>",
            "format": ""
        },
        {
            "name": "registeredDevice",
            "baseName": "RegisteredDevice",
            "type": "AssetDeviceRegistrationRelationship",
            "format": ""
        },
        {
            "name": "storageEnclosures",
            "baseName": "StorageEnclosures",
            "type": "Array<StorageEnclosureRelationship>",
            "format": ""
        },
        {
            "name": "topSystem",
            "baseName": "TopSystem",
            "type": "TopSystemRelationship",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ComputeBladeRelationship.attributeTypeMap;
    }
    
    public constructor() {
    }
}

