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
import { ComputeBladeRelationship } from './ComputeBladeRelationship';
import { EquipmentBase } from './EquipmentBase';
import { EquipmentChassisAllOf } from './EquipmentChassisAllOf';
import { EquipmentFanModuleRelationship } from './EquipmentFanModuleRelationship';
import { EquipmentIoCardRelationship } from './EquipmentIoCardRelationship';
import { EquipmentPsuRelationship } from './EquipmentPsuRelationship';
import { EquipmentSystemIoControllerRelationship } from './EquipmentSystemIoControllerRelationship';
import { MoBaseMoRelationship } from './MoBaseMoRelationship';
import { MoTag } from './MoTag';
import { MoVersionContext } from './MoVersionContext';
import { StorageEnclosureRelationship } from './StorageEnclosureRelationship';
import { StorageSasExpanderRelationship } from './StorageSasExpanderRelationship';
import { HttpFile } from '../http/http';

/**
* A physical holder housing blade servers.
*/
export class EquipmentChassis extends EquipmentBase {
    /**
    * The assigned identifier for a chassis.
    */
    'chassisId'?: number;
    /**
    * This field identifies the connectivity path for the chassis enclosure.
    */
    'connectionPath'?: string;
    /**
    * This field identifies the connectivity status for the chassis enclosure.
    */
    'connectionStatus'?: string;
    /**
    * This field is to provide description for chassis model.
    */
    'description'?: string;
    'faultSummary'?: number;
    /**
    * This field identifies the name for the chassis enclosure.
    */
    'name'?: string;
    'operState'?: string;
    /**
    * Part Number identifier for the chassis enclosure.
    */
    'partNumber'?: string;
    /**
    * This field identifies the Product ID for the chassis enclosure.
    */
    'pid'?: string;
    'platformType'?: string;
    /**
    * This field identifies the Product Name for the chassis enclosure.
    */
    'productName'?: string;
    /**
    * This field identifies the Stock Keeping Unit for the chassis enclosure.
    */
    'sku'?: string;
    /**
    * This field identifies the Vendor ID for the chassis enclosure.
    */
    'vid'?: string;
    /**
    * An array of relationships to computeBlade resources.
    */
    'blades'?: Array<ComputeBladeRelationship>;
    /**
    * An array of relationships to equipmentFanModule resources.
    */
    'fanmodules'?: Array<EquipmentFanModuleRelationship>;
    /**
    * An array of relationships to equipmentIoCard resources.
    */
    'ioms'?: Array<EquipmentIoCardRelationship>;
    /**
    * An array of relationships to equipmentPsu resources.
    */
    'psus'?: Array<EquipmentPsuRelationship>;
    'registeredDevice'?: AssetDeviceRegistrationRelationship;
    /**
    * An array of relationships to storageSasExpander resources.
    */
    'sasexpanders'?: Array<StorageSasExpanderRelationship>;
    /**
    * An array of relationships to equipmentSystemIoController resources.
    */
    'siocs'?: Array<EquipmentSystemIoControllerRelationship>;
    /**
    * An array of relationships to storageEnclosure resources.
    */
    'storageEnclosures'?: Array<StorageEnclosureRelationship>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "chassisId",
            "baseName": "ChassisId",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "connectionPath",
            "baseName": "ConnectionPath",
            "type": "string",
            "format": ""
        },
        {
            "name": "connectionStatus",
            "baseName": "ConnectionStatus",
            "type": "string",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "Description",
            "type": "string",
            "format": ""
        },
        {
            "name": "faultSummary",
            "baseName": "FaultSummary",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "name",
            "baseName": "Name",
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
            "name": "partNumber",
            "baseName": "PartNumber",
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
            "name": "platformType",
            "baseName": "PlatformType",
            "type": "string",
            "format": ""
        },
        {
            "name": "productName",
            "baseName": "ProductName",
            "type": "string",
            "format": ""
        },
        {
            "name": "sku",
            "baseName": "Sku",
            "type": "string",
            "format": ""
        },
        {
            "name": "vid",
            "baseName": "Vid",
            "type": "string",
            "format": ""
        },
        {
            "name": "blades",
            "baseName": "Blades",
            "type": "Array<ComputeBladeRelationship>",
            "format": ""
        },
        {
            "name": "fanmodules",
            "baseName": "Fanmodules",
            "type": "Array<EquipmentFanModuleRelationship>",
            "format": ""
        },
        {
            "name": "ioms",
            "baseName": "Ioms",
            "type": "Array<EquipmentIoCardRelationship>",
            "format": ""
        },
        {
            "name": "psus",
            "baseName": "Psus",
            "type": "Array<EquipmentPsuRelationship>",
            "format": ""
        },
        {
            "name": "registeredDevice",
            "baseName": "RegisteredDevice",
            "type": "AssetDeviceRegistrationRelationship",
            "format": ""
        },
        {
            "name": "sasexpanders",
            "baseName": "Sasexpanders",
            "type": "Array<StorageSasExpanderRelationship>",
            "format": ""
        },
        {
            "name": "siocs",
            "baseName": "Siocs",
            "type": "Array<EquipmentSystemIoControllerRelationship>",
            "format": ""
        },
        {
            "name": "storageEnclosures",
            "baseName": "StorageEnclosures",
            "type": "Array<StorageEnclosureRelationship>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(EquipmentChassis.attributeTypeMap);
    }
    
    public constructor() {
        super();
    }
}

