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
import { EquipmentBase } from './EquipmentBase';
import { MoBaseMoRelationship } from './MoBaseMoRelationship';
import { MoTag } from './MoTag';
import { MoVersionContext } from './MoVersionContext';
import { StorageEnclosureDiskAllOf } from './StorageEnclosureDiskAllOf';
import { StorageEnclosureRelationship } from './StorageEnclosureRelationship';
import { StoragePhysicalDiskRelationship } from './StoragePhysicalDiskRelationship';
import { HttpFile } from '../http/http';

/**
* Physical Disk on the enclosure.
*/
export class StorageEnclosureDisk extends EquipmentBase {
    /**
    * The block size of the physical disk in bytes.
    */
    'blockSize'?: string;
    /**
    * This field represents the disk Id in the storage enclosure.
    */
    'diskId'?: string;
    /**
    * This field identifies the current disk configuration applied in the physical disk.
    */
    'diskState'?: string;
    'health'?: string;
    /**
    * The number of blocks present on the physical disk.
    */
    'numBlocks'?: string;
    /**
    * This field identifies the Product ID for physicalDisk.
    */
    'pid'?: string;
    /**
    * This field identifies the SAS address assigned to the disk SAS port-1.
    */
    'sasAddress1'?: string;
    /**
    * This field identifies the SAS address assigned to the disk SAS port-2.
    */
    'sasAddress2'?: string;
    /**
    * The size of the physical disk in MB.
    */
    'size'?: string;
    'physicalDisk'?: StoragePhysicalDiskRelationship;
    'registeredDevice'?: AssetDeviceRegistrationRelationship;
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
            "name": "health",
            "baseName": "Health",
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
            "name": "pid",
            "baseName": "Pid",
            "type": "string",
            "format": ""
        },
        {
            "name": "sasAddress1",
            "baseName": "SasAddress1",
            "type": "string",
            "format": ""
        },
        {
            "name": "sasAddress2",
            "baseName": "SasAddress2",
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
            "name": "physicalDisk",
            "baseName": "PhysicalDisk",
            "type": "StoragePhysicalDiskRelationship",
            "format": ""
        },
        {
            "name": "registeredDevice",
            "baseName": "RegisteredDevice",
            "type": "AssetDeviceRegistrationRelationship",
            "format": ""
        },
        {
            "name": "storageEnclosure",
            "baseName": "StorageEnclosure",
            "type": "StorageEnclosureRelationship",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(StorageEnclosureDisk.attributeTypeMap);
    }
    
    public constructor() {
        super();
    }
}

