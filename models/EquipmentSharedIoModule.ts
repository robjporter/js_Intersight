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
import { EquipmentSharedIoModuleAllOf } from './EquipmentSharedIoModuleAllOf';
import { EquipmentSystemIoControllerRelationship } from './EquipmentSystemIoControllerRelationship';
import { MoBaseMoRelationship } from './MoBaseMoRelationship';
import { MoTag } from './MoTag';
import { MoVersionContext } from './MoVersionContext';
import { PortGroupRelationship } from './PortGroupRelationship';
import { HttpFile } from '../http/http';

/**
* I/O Controller present inside SIOC to provide data path from S-series server to FI.
*/
export class EquipmentSharedIoModule extends EquipmentBase {
    /**
    * This field identifies the configuration state for this SIOM Unit.
    */
    'configState'?: string;
    /**
    * This field identifies the discovery state of SIOM.
    */
    'discovery'?: string;
    /**
    * This field identifies the MAC of IOM-A side.
    */
    'macOfSharedIomAside'?: string;
    /**
    * This field identifies the MAC of IOM-B side.
    */
    'macOfSharedIomBside'?: string;
    /**
    * This field identifies the SIOM operational state.
    */
    'operState'?: string;
    /**
    * This field identifies the Part Number for this SIOM Unit.
    */
    'partNumber'?: string;
    /**
    * This field identifies the reachability to FI-A and B side.
    */
    'reachability'?: string;
    /**
    * User label configured for the SIOM.
    */
    'usrLbl'?: string;
    /**
    * This field identifies the vendor id for this SIOM Unit.
    */
    'vid'?: string;
    'equipmentSystemIoController'?: EquipmentSystemIoControllerRelationship;
    /**
    * An array of relationships to portGroup resources.
    */
    'portGroups'?: Array<PortGroupRelationship>;
    'registeredDevice'?: AssetDeviceRegistrationRelationship;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "configState",
            "baseName": "ConfigState",
            "type": "string",
            "format": ""
        },
        {
            "name": "discovery",
            "baseName": "Discovery",
            "type": "string",
            "format": ""
        },
        {
            "name": "macOfSharedIomAside",
            "baseName": "MacOfSharedIomAside",
            "type": "string",
            "format": ""
        },
        {
            "name": "macOfSharedIomBside",
            "baseName": "MacOfSharedIomBside",
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
            "name": "reachability",
            "baseName": "Reachability",
            "type": "string",
            "format": ""
        },
        {
            "name": "usrLbl",
            "baseName": "UsrLbl",
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
            "name": "equipmentSystemIoController",
            "baseName": "EquipmentSystemIoController",
            "type": "EquipmentSystemIoControllerRelationship",
            "format": ""
        },
        {
            "name": "portGroups",
            "baseName": "PortGroups",
            "type": "Array<PortGroupRelationship>",
            "format": ""
        },
        {
            "name": "registeredDevice",
            "baseName": "RegisteredDevice",
            "type": "AssetDeviceRegistrationRelationship",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(EquipmentSharedIoModule.attributeTypeMap);
    }
    
    public constructor() {
        super();
    }
}
