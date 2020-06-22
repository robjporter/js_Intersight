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
import { ComputeRackUnitRelationship } from './ComputeRackUnitRelationship';
import { EquipmentBase } from './EquipmentBase';
import { EquipmentChassisRelationship } from './EquipmentChassisRelationship';
import { EquipmentFanModuleAllOf } from './EquipmentFanModuleAllOf';
import { EquipmentFanRelationship } from './EquipmentFanRelationship';
import { EquipmentRackEnclosureRelationship } from './EquipmentRackEnclosureRelationship';
import { MoBaseMoRelationship } from './MoBaseMoRelationship';
import { MoTag } from './MoTag';
import { MoVersionContext } from './MoVersionContext';
import { NetworkElementRelationship } from './NetworkElementRelationship';
import { HttpFile } from '../http/http';

/**
* Moudule housing one or more fans.
*/
export class EquipmentFanModule extends EquipmentBase {
    /**
    * This field is to provide description for the fan module.
    */
    'description'?: string;
    /**
    * This field acts as the identifier for this particular Module, within the Fabric Interconnect.
    */
    'moduleId'?: number;
    /**
    * This field is used to indicate this fan module's operational state.
    */
    'operState'?: string;
    /**
    * This field identifies the Part Number for this Fan Module.
    */
    'partNumber'?: string;
    /**
    * This field identifies the Product ID for the fan module.
    */
    'pid'?: string;
    /**
    * This field is used to indicate this fan module's presence.
    */
    'presence'?: string;
    /**
    * This field identifies the Stockkeeping Unit for this Fan Module.
    */
    'sku'?: string;
    /**
    * Tray identifier for the fan module.
    */
    'trayId'?: number;
    /**
    * This field identifies the Vendor ID for this Fan Module.
    */
    'vid'?: string;
    'computeRackUnit'?: ComputeRackUnitRelationship;
    'equipmentChassis'?: EquipmentChassisRelationship;
    'equipmentRackEnclosure'?: EquipmentRackEnclosureRelationship;
    /**
    * An array of relationships to equipmentFan resources.
    */
    'fans'?: Array<EquipmentFanRelationship>;
    'networkElement'?: NetworkElementRelationship;
    'registeredDevice'?: AssetDeviceRegistrationRelationship;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "description",
            "baseName": "Description",
            "type": "string",
            "format": ""
        },
        {
            "name": "moduleId",
            "baseName": "ModuleId",
            "type": "number",
            "format": "int64"
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
            "name": "presence",
            "baseName": "Presence",
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
            "name": "trayId",
            "baseName": "TrayId",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "vid",
            "baseName": "Vid",
            "type": "string",
            "format": ""
        },
        {
            "name": "computeRackUnit",
            "baseName": "ComputeRackUnit",
            "type": "ComputeRackUnitRelationship",
            "format": ""
        },
        {
            "name": "equipmentChassis",
            "baseName": "EquipmentChassis",
            "type": "EquipmentChassisRelationship",
            "format": ""
        },
        {
            "name": "equipmentRackEnclosure",
            "baseName": "EquipmentRackEnclosure",
            "type": "EquipmentRackEnclosureRelationship",
            "format": ""
        },
        {
            "name": "fans",
            "baseName": "Fans",
            "type": "Array<EquipmentFanRelationship>",
            "format": ""
        },
        {
            "name": "networkElement",
            "baseName": "NetworkElement",
            "type": "NetworkElementRelationship",
            "format": ""
        },
        {
            "name": "registeredDevice",
            "baseName": "RegisteredDevice",
            "type": "AssetDeviceRegistrationRelationship",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(EquipmentFanModule.attributeTypeMap);
    }
    
    public constructor() {
        super();
    }
}

