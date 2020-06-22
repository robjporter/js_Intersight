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
import { ComputeBoardRelationship } from './ComputeBoardRelationship';
import { EquipmentBase } from './EquipmentBase';
import { FirmwareRunningFirmwareRelationship } from './FirmwareRunningFirmwareRelationship';
import { MoBaseMoRelationship } from './MoBaseMoRelationship';
import { MoTag } from './MoTag';
import { MoVersionContext } from './MoVersionContext';
import { StorageControllerAllOf } from './StorageControllerAllOf';
import { StoragePhysicalDiskExtensionRelationship } from './StoragePhysicalDiskExtensionRelationship';
import { StoragePhysicalDiskRelationship } from './StoragePhysicalDiskRelationship';
import { StorageVirtualDriveExtensionRelationship } from './StorageVirtualDriveExtensionRelationship';
import { StorageVirtualDriveRelationship } from './StorageVirtualDriveRelationship';
import { HttpFile } from '../http/http';

/**
* Storage Controller present in a server.
*/
export class StorageController extends EquipmentBase {
    'controllerFlags'?: string;
    /**
    * It shows the Id of controller.
    */
    'controllerId'?: string;
    /**
    * It shows the current status of controller.
    */
    'controllerStatus'?: string;
    /**
    * It shows the hardware revision of controller.
    */
    'hwRevision'?: string;
    /**
    * It shows CIMC support for out-of-band configuration of controller.
    */
    'oobInterfaceSupported'?: string;
    /**
    * It shows the current operational state of controller.
    */
    'operState'?: string;
    'operability'?: string;
    /**
    * It shows the current pci address of controller.
    */
    'pciAddr'?: string;
    /**
    * It shows the pci slot name for the controller.
    */
    'pciSlot'?: string;
    /**
    * It shows physical presence or absence of the controller on server.
    */
    'presence'?: string;
    /**
    * It shows the RAID levels supported by controller.
    */
    'raidSupport'?: string;
    'rebuildRate'?: string;
    'selfEncryptEnabled'?: string;
    /**
    * Controller types are SAS, SATA, PCH, NVME.
    */
    'type'?: string;
    'computeBoard'?: ComputeBoardRelationship;
    /**
    * An array of relationships to storagePhysicalDiskExtension resources.
    */
    'physicalDiskExtensions'?: Array<StoragePhysicalDiskExtensionRelationship>;
    /**
    * An array of relationships to storagePhysicalDisk resources.
    */
    'physicalDisks'?: Array<StoragePhysicalDiskRelationship>;
    'registeredDevice'?: AssetDeviceRegistrationRelationship;
    /**
    * An array of relationships to firmwareRunningFirmware resources.
    */
    'runningFirmware'?: Array<FirmwareRunningFirmwareRelationship>;
    /**
    * An array of relationships to storageVirtualDriveExtension resources.
    */
    'virtualDriveExtensions'?: Array<StorageVirtualDriveExtensionRelationship>;
    /**
    * An array of relationships to storageVirtualDrive resources.
    */
    'virtualDrives'?: Array<StorageVirtualDriveRelationship>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "controllerFlags",
            "baseName": "ControllerFlags",
            "type": "string",
            "format": ""
        },
        {
            "name": "controllerId",
            "baseName": "ControllerId",
            "type": "string",
            "format": ""
        },
        {
            "name": "controllerStatus",
            "baseName": "ControllerStatus",
            "type": "string",
            "format": ""
        },
        {
            "name": "hwRevision",
            "baseName": "HwRevision",
            "type": "string",
            "format": ""
        },
        {
            "name": "oobInterfaceSupported",
            "baseName": "OobInterfaceSupported",
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
            "name": "pciAddr",
            "baseName": "PciAddr",
            "type": "string",
            "format": ""
        },
        {
            "name": "pciSlot",
            "baseName": "PciSlot",
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
            "name": "raidSupport",
            "baseName": "RaidSupport",
            "type": "string",
            "format": ""
        },
        {
            "name": "rebuildRate",
            "baseName": "RebuildRate",
            "type": "string",
            "format": ""
        },
        {
            "name": "selfEncryptEnabled",
            "baseName": "SelfEncryptEnabled",
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
            "name": "computeBoard",
            "baseName": "ComputeBoard",
            "type": "ComputeBoardRelationship",
            "format": ""
        },
        {
            "name": "physicalDiskExtensions",
            "baseName": "PhysicalDiskExtensions",
            "type": "Array<StoragePhysicalDiskExtensionRelationship>",
            "format": ""
        },
        {
            "name": "physicalDisks",
            "baseName": "PhysicalDisks",
            "type": "Array<StoragePhysicalDiskRelationship>",
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
            "name": "virtualDriveExtensions",
            "baseName": "VirtualDriveExtensions",
            "type": "Array<StorageVirtualDriveExtensionRelationship>",
            "format": ""
        },
        {
            "name": "virtualDrives",
            "baseName": "VirtualDrives",
            "type": "Array<StorageVirtualDriveRelationship>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(StorageController.attributeTypeMap);
    }
    
    public constructor() {
        super();
    }
}
