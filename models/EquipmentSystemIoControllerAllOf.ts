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
import { EquipmentChassisRelationship } from './EquipmentChassisRelationship';
import { EquipmentSharedIoModuleRelationship } from './EquipmentSharedIoModuleRelationship';
import { HttpFile } from '../http/http';

/**
* Definition of the list of properties defined in 'equipment.SystemIoController', excluding properties defined in parent classes.
*/
export class EquipmentSystemIoControllerAllOf {
    /**
    * The assigned identifier for a chassis.
    */
    'chassisId'?: string;
    /**
    * Connection Path identifies the data path available between IOModule and FI.
    */
    'connectionPath'?: string;
    /**
    * Connection status identifies the status of data path.
    */
    'connectionStatus'?: string;
    /**
    * This field gives a brief information on systemIOController.
    */
    'description'?: string;
    /**
    * This field identifies the CIMC that manages the controller.
    */
    'managingInstance'?: string;
    /**
    * This field identifies the SIOC operational state.
    */
    'operState'?: string;
    /**
    * Part Number identifier for the IO module.
    */
    'partNumber'?: string;
    /**
    * This field identifies the Product ID for systemIOController.
    */
    'pid'?: string;
    /**
    * This represents system I/O Controller identifier.
    */
    'systemIoControllerId'?: number;
    'equipmentChassis'?: EquipmentChassisRelationship;
    'registeredDevice'?: AssetDeviceRegistrationRelationship;
    'sharedIoModule'?: EquipmentSharedIoModuleRelationship;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "chassisId",
            "baseName": "ChassisId",
            "type": "string",
            "format": ""
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
            "name": "managingInstance",
            "baseName": "ManagingInstance",
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
            "name": "systemIoControllerId",
            "baseName": "SystemIoControllerId",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "equipmentChassis",
            "baseName": "EquipmentChassis",
            "type": "EquipmentChassisRelationship",
            "format": ""
        },
        {
            "name": "registeredDevice",
            "baseName": "RegisteredDevice",
            "type": "AssetDeviceRegistrationRelationship",
            "format": ""
        },
        {
            "name": "sharedIoModule",
            "baseName": "SharedIoModule",
            "type": "EquipmentSharedIoModuleRelationship",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return EquipmentSystemIoControllerAllOf.attributeTypeMap;
    }
    
    public constructor() {
    }
}

