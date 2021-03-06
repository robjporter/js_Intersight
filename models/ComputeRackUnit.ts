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
import { BiosBootModeRelationship } from './BiosBootModeRelationship';
import { BiosUnitRelationship } from './BiosUnitRelationship';
import { BootDeviceBootModeRelationship } from './BootDeviceBootModeRelationship';
import { ComputeBoardRelationship } from './ComputeBoardRelationship';
import { ComputeIpAddress } from './ComputeIpAddress';
import { ComputePhysical } from './ComputePhysical';
import { ComputeRackUnitAllOf } from './ComputeRackUnitAllOf';
import { EquipmentFanModuleRelationship } from './EquipmentFanModuleRelationship';
import { EquipmentLocatorLedRelationship } from './EquipmentLocatorLedRelationship';
import { EquipmentPsuRelationship } from './EquipmentPsuRelationship';
import { EquipmentRackEnclosureSlotRelationship } from './EquipmentRackEnclosureSlotRelationship';
import { InventoryGenericInventoryHolderRelationship } from './InventoryGenericInventoryHolderRelationship';
import { ManagementControllerRelationship } from './ManagementControllerRelationship';
import { MoBaseMoRelationship } from './MoBaseMoRelationship';
import { MoTag } from './MoTag';
import { MoVersionContext } from './MoVersionContext';
import { PciDeviceRelationship } from './PciDeviceRelationship';
import { StorageEnclosureRelationship } from './StorageEnclosureRelationship';
import { StorageSasExpanderRelationship } from './StorageSasExpanderRelationship';
import { TopSystemRelationship } from './TopSystemRelationship';
import { HttpFile } from '../http/http';

/**
* Rack-mounted server.
*/
export class ComputeRackUnit extends ComputePhysical {
    /**
    * The server id of the Rack server.
    */
    'serverId'?: number;
    /**
    * An array of relationships to adapterUnit resources.
    */
    'adapters'?: Array<AdapterUnitRelationship>;
    'biosBootmode'?: BiosBootModeRelationship;
    /**
    * An array of relationships to biosUnit resources.
    */
    'biosunits'?: Array<BiosUnitRelationship>;
    'bmc'?: ManagementControllerRelationship;
    'board'?: ComputeBoardRelationship;
    'bootDeviceBootmode'?: BootDeviceBootModeRelationship;
    /**
    * An array of relationships to equipmentFanModule resources.
    */
    'fanmodules'?: Array<EquipmentFanModuleRelationship>;
    /**
    * An array of relationships to inventoryGenericInventoryHolder resources.
    */
    'genericInventoryHolders'?: Array<InventoryGenericInventoryHolderRelationship>;
    'locatorLed'?: EquipmentLocatorLedRelationship;
    /**
    * An array of relationships to pciDevice resources.
    */
    'pciDevices'?: Array<PciDeviceRelationship>;
    /**
    * An array of relationships to equipmentPsu resources.
    */
    'psus'?: Array<EquipmentPsuRelationship>;
    'rackEnclosureSlot'?: EquipmentRackEnclosureSlotRelationship;
    'registeredDevice'?: AssetDeviceRegistrationRelationship;
    /**
    * An array of relationships to storageSasExpander resources.
    */
    'sasExpanders'?: Array<StorageSasExpanderRelationship>;
    /**
    * An array of relationships to storageEnclosure resources.
    */
    'storageEnclosures'?: Array<StorageEnclosureRelationship>;
    'topSystem'?: TopSystemRelationship;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "serverId",
            "baseName": "ServerId",
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
            "name": "biosBootmode",
            "baseName": "BiosBootmode",
            "type": "BiosBootModeRelationship",
            "format": ""
        },
        {
            "name": "biosunits",
            "baseName": "Biosunits",
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
            "name": "bootDeviceBootmode",
            "baseName": "BootDeviceBootmode",
            "type": "BootDeviceBootModeRelationship",
            "format": ""
        },
        {
            "name": "fanmodules",
            "baseName": "Fanmodules",
            "type": "Array<EquipmentFanModuleRelationship>",
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
            "name": "psus",
            "baseName": "Psus",
            "type": "Array<EquipmentPsuRelationship>",
            "format": ""
        },
        {
            "name": "rackEnclosureSlot",
            "baseName": "RackEnclosureSlot",
            "type": "EquipmentRackEnclosureSlotRelationship",
            "format": ""
        },
        {
            "name": "registeredDevice",
            "baseName": "RegisteredDevice",
            "type": "AssetDeviceRegistrationRelationship",
            "format": ""
        },
        {
            "name": "sasExpanders",
            "baseName": "SasExpanders",
            "type": "Array<StorageSasExpanderRelationship>",
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
        return super.getAttributeTypeMap().concat(ComputeRackUnit.attributeTypeMap);
    }
    
    public constructor() {
        super();
    }
}

