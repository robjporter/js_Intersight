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
import { EquipmentLocatorLedRelationship } from './EquipmentLocatorLedRelationship';
import { FirmwareRunningFirmwareRelationship } from './FirmwareRunningFirmwareRelationship';
import { StorageControllerRelationship } from './StorageControllerRelationship';
import { StorageEnclosureRelationship } from './StorageEnclosureRelationship';
import { StoragePhysicalDiskExtensionRelationship } from './StoragePhysicalDiskExtensionRelationship';
import { StorageSasPortRelationship } from './StorageSasPortRelationship';
import { HttpFile } from '../http/http';

/**
* Definition of the list of properties defined in 'storage.PhysicalDisk', excluding properties defined in parent classes.
*/
export class StoragePhysicalDiskAllOf {
    /**
    * The block size of the physical disk.
    */
    'blockSize'?: string;
    'bootable'?: string;
    'configurationCheckpoint'?: string;
    'configurationState'?: string;
    'discoveredPath'?: string;
    'diskId'?: string;
    /**
    * This field identifies the health of the disk.
    */
    'diskState'?: string;
    'driveFirmware'?: string;
    /**
    * The drive state as reported by the controller.
    */
    'driveState'?: string;
    'fdeCapable'?: string;
    /**
    * The speed of the link between the drive and the controller.
    */
    'linkSpeed'?: string;
    'linkState'?: string;
    /**
    * The number of blocks present on the physical disk.
    */
    'numBlocks'?: string;
    'operPowerState'?: string;
    'operQualifierReason'?: string;
    'operability'?: string;
    'physicalBlockSize'?: string;
    /**
    * This field identifies the Product ID for physicalDisk.
    */
    'pid'?: string;
    'presence'?: string;
    'protocol'?: string;
    'rawSize'?: string;
    /**
    * This field identifies whether the disk is encrypted.
    */
    'secured'?: string;
    'size'?: string;
    'thermal'?: string;
    'type'?: string;
    'variantType'?: string;
    'locatorLed'?: EquipmentLocatorLedRelationship;
    /**
    * An array of relationships to storagePhysicalDiskExtension resources.
    */
    'physicalDiskExtensions'?: Array<StoragePhysicalDiskExtensionRelationship>;
    'registeredDevice'?: AssetDeviceRegistrationRelationship;
    /**
    * An array of relationships to firmwareRunningFirmware resources.
    */
    'runningFirmware'?: Array<FirmwareRunningFirmwareRelationship>;
    /**
    * An array of relationships to storageSasPort resources.
    */
    'sasPorts'?: Array<StorageSasPortRelationship>;
    'storageController'?: StorageControllerRelationship;
    'storageEnclosure'?: StorageEnclosureRelationship;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "blockSize",
            "baseName": "BlockSize",
            "type": "string",
            "format": ""
        },
        {
            "name": "bootable",
            "baseName": "Bootable",
            "type": "string",
            "format": ""
        },
        {
            "name": "configurationCheckpoint",
            "baseName": "ConfigurationCheckpoint",
            "type": "string",
            "format": ""
        },
        {
            "name": "configurationState",
            "baseName": "ConfigurationState",
            "type": "string",
            "format": ""
        },
        {
            "name": "discoveredPath",
            "baseName": "DiscoveredPath",
            "type": "string",
            "format": ""
        },
        {
            "name": "diskId",
            "baseName": "DiskId",
            "type": "string",
            "format": ""
        },
        {
            "name": "diskState",
            "baseName": "DiskState",
            "type": "string",
            "format": ""
        },
        {
            "name": "driveFirmware",
            "baseName": "DriveFirmware",
            "type": "string",
            "format": ""
        },
        {
            "name": "driveState",
            "baseName": "DriveState",
            "type": "string",
            "format": ""
        },
        {
            "name": "fdeCapable",
            "baseName": "FdeCapable",
            "type": "string",
            "format": ""
        },
        {
            "name": "linkSpeed",
            "baseName": "LinkSpeed",
            "type": "string",
            "format": ""
        },
        {
            "name": "linkState",
            "baseName": "LinkState",
            "type": "string",
            "format": ""
        },
        {
            "name": "numBlocks",
            "baseName": "NumBlocks",
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
            "name": "operQualifierReason",
            "baseName": "OperQualifierReason",
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
            "name": "physicalBlockSize",
            "baseName": "PhysicalBlockSize",
            "type": "string",
            "format": ""
        },
        {
            "name": "pid",
            "baseName": "Pid",
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
            "name": "protocol",
            "baseName": "Protocol",
            "type": "string",
            "format": ""
        },
        {
            "name": "rawSize",
            "baseName": "RawSize",
            "type": "string",
            "format": ""
        },
        {
            "name": "secured",
            "baseName": "Secured",
            "type": "string",
            "format": ""
        },
        {
            "name": "size",
            "baseName": "Size",
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
            "name": "variantType",
            "baseName": "VariantType",
            "type": "string",
            "format": ""
        },
        {
            "name": "locatorLed",
            "baseName": "LocatorLed",
            "type": "EquipmentLocatorLedRelationship",
            "format": ""
        },
        {
            "name": "physicalDiskExtensions",
            "baseName": "PhysicalDiskExtensions",
            "type": "Array<StoragePhysicalDiskExtensionRelationship>",
            "format": ""
        },
        {
            "name": "registeredDevice",
            "baseName": "RegisteredDevice",
            "type": "AssetDeviceRegistrationRelationship",
            "format": ""
        },
        {
            "name": "runningFirmware",
            "baseName": "RunningFirmware",
            "type": "Array<FirmwareRunningFirmwareRelationship>",
            "format": ""
        },
        {
            "name": "sasPorts",
            "baseName": "SasPorts",
            "type": "Array<StorageSasPortRelationship>",
            "format": ""
        },
        {
            "name": "storageController",
            "baseName": "StorageController",
            "type": "StorageControllerRelationship",
            "format": ""
        },
        {
            "name": "storageEnclosure",
            "baseName": "StorageEnclosure",
            "type": "StorageEnclosureRelationship",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return StoragePhysicalDiskAllOf.attributeTypeMap;
    }
    
    public constructor() {
    }
}

