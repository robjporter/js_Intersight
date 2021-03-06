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
import { InventoryBase } from './InventoryBase';
import { MoBaseMoRelationship } from './MoBaseMoRelationship';
import { MoTag } from './MoTag';
import { MoVersionContext } from './MoVersionContext';
import { StorageControllerRelationship } from './StorageControllerRelationship';
import { StorageVirtualDriveExtensionAllOf } from './StorageVirtualDriveExtensionAllOf';
import { StorageVirtualDriveRelationship } from './StorageVirtualDriveRelationship';
import { HttpFile } from '../http/http';

/**
* Information of virtual drives as reported by a storage controller. In certain cases like S-series servers, virtual drive information will be reported by the controller separately and this represents such information.
*/
export class StorageVirtualDriveExtension extends InventoryBase {
    /**
    * It shows virtual drive is bootable.
    */
    'bootable'?: string;
    'containerId'?: number;
    'driveState'?: string;
    'name'?: string;
    'operDeviceId'?: string;
    'uuid'?: string;
    'vendorUuid'?: string;
    'virtualDriveDn'?: string;
    /**
    * It shows virtual drive Id.
    */
    'virtualDriveId'?: string;
    'registeredDevice'?: AssetDeviceRegistrationRelationship;
    'storageController'?: StorageControllerRelationship;
    'virtualDrive'?: StorageVirtualDriveRelationship;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "bootable",
            "baseName": "Bootable",
            "type": "string",
            "format": ""
        },
        {
            "name": "containerId",
            "baseName": "ContainerId",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "driveState",
            "baseName": "DriveState",
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
            "name": "operDeviceId",
            "baseName": "OperDeviceId",
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
            "name": "vendorUuid",
            "baseName": "VendorUuid",
            "type": "string",
            "format": ""
        },
        {
            "name": "virtualDriveDn",
            "baseName": "VirtualDriveDn",
            "type": "string",
            "format": ""
        },
        {
            "name": "virtualDriveId",
            "baseName": "VirtualDriveId",
            "type": "string",
            "format": ""
        },
        {
            "name": "registeredDevice",
            "baseName": "RegisteredDevice",
            "type": "AssetDeviceRegistrationRelationship",
            "format": ""
        },
        {
            "name": "storageController",
            "baseName": "StorageController",
            "type": "StorageControllerRelationship",
            "format": ""
        },
        {
            "name": "virtualDrive",
            "baseName": "VirtualDrive",
            "type": "StorageVirtualDriveRelationship",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(StorageVirtualDriveExtension.attributeTypeMap);
    }
    
    public constructor() {
        super();
    }
}

