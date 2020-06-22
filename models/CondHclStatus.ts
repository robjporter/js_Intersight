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
import { CondHclStatusAllOf } from './CondHclStatusAllOf';
import { CondHclStatusDetailRelationship } from './CondHclStatusDetailRelationship';
import { InventoryBaseRelationship } from './InventoryBaseRelationship';
import { MoBaseMo } from './MoBaseMo';
import { MoBaseMoRelationship } from './MoBaseMoRelationship';
import { MoTag } from './MoTag';
import { MoVersionContext } from './MoVersionContext';
import { HttpFile } from '../http/http';

/**
* The HCL status of a managed object after we have validated the managed object components' firmware and drivers against the HCL.
*/
export class CondHclStatus extends MoBaseMo {
    /**
    * The overall status for the components found in the HCL. This will provide the HCL validation status for all the components. It can be one of the following. \"Validated\" - all the components hardware/software profiles are listed in the HCL. \"Not-Listed\" - one or more components hardware/software profiles are not listed in the HCL \"Incomplete\" - the components are not evaluated as the server's software/hardware profiles are not listed in the HCL. \"Not-Evaluated\" - The components are not evaluated against the HCL because it is exempted.
    */
    'componentStatus'?: CondHclStatusComponentStatusEnum;
    /**
    * The server model, processor and firmware are considered as part of the hardware profile for the server. This will provide the HCL validation status for the hardware profile. For the failure reason see the serverReason property. The status can be one of the following \"Validated\" - The server model, processor and firmware combination is listed in the HCL \"Not-Listed\" - The server model, processor and firmware combination is not listed in the HCL. \"Not-Evaluated\" - The server is not evaluated against the HCL because it is exempted.
    */
    'hardwareStatus'?: CondHclStatusHardwareStatusEnum;
    /**
    * The current CIMC version for the server normalized for querying HCL data. It is empty if we are missing this information.
    */
    'hclFirmwareVersion'?: string;
    /**
    * The managed object's model to validate normalized for querying HCL data. It is empty if we are missing this information.
    */
    'hclModel'?: string;
    /**
    * The OS Vendor for the managed object to validate normalized for querying HCL data. It is empty if we are missing this information.
    */
    'hclOsVendor'?: string;
    /**
    * The OS Version for the managed object to validate normalized for querying HCL data. It is empty if we are missing this information.
    */
    'hclOsVersion'?: string;
    /**
    * The managed object's processor to validate if applicable normalized for querying HCL data. It is empty if we are missing this information.
    */
    'hclProcessor'?: string;
    /**
    * The current CIMC version for the server as received from inventory. It is empty if we are missing this information.
    */
    'invFirmwareVersion'?: string;
    /**
    * The managed object's model to validate as received from the inventory. It is empty if we are missing this information.
    */
    'invModel'?: string;
    /**
    * The OS Vendor for the managed object to validate as received from inventory. It is empty if we are missing this information.
    */
    'invOsVendor'?: string;
    /**
    * The OS Version for the managed object to validate as received from inventory. It is empty if we are missing this information.
    */
    'invOsVersion'?: string;
    /**
    * The managed object's processor to validate if applicable as received from inventory. It is empty if we are missing this information.
    */
    'invProcessor'?: string;
    /**
    * The reason for the HCL status. It will be one of the following \"Missing-Os-Info\" - we are missing os information in the inventory from the device connector \"Incompatible-Components\" - we have 1 or more components with \"Not-Validated\" status \"Compatible\" - all the components have \"Validated\" status. \"Not-Evaluated\" - The server is not evaluated against the HCL because it is exempted.
    */
    'reason'?: CondHclStatusReasonEnum;
    /**
    * The reason generated by the server's HCL validation. For HCL the evaluation can be seen in three logical stages 1. Evaluate the server's hardware status 2. Evaluate the server's software status 3. Evaluate the server's components (each component has its own hardware/software evaluation) The evaluation does not proceed to the next stage until the previous stage is evaluated. Therefore there can be only one validation reason. \"Incompatible-Server\" - the server model is not listed in the HCL. \"Incompatible-Processor\" - the server model and processor combination is not listed in HCL. \"Incompatible-Firmware\" - the server model, processor and server firmware is not listed in HCL. \"Missing-Os-Info\" - the os vendor and version is not listed in HCL with the HW profile. \"Incompatible-Os-Info\" - the os vendor and version is not listed in HCL with the HW profile. \"Incompatible-Components\" - there is one or more components with \"Not-Validated\" status \"Service-Unavailable\" - HCL data service is unavailable at the moment (try again later). \"Compatible\" - the server and all its components are validated. \"Not-Evaluated\" - The server is not evaluated against the HCL because it is exempted.
    */
    'serverReason'?: CondHclStatusServerReasonEnum;
    /**
    * The OS vendor and version are considered part of the software profile for the server. This will provide the HCL validation status for the software profile. For the failure reason see the serverReason property. The status can be be one of the following \"Validated\" - The os vendor/version is listed in the HCL for the server model, processor and firmware \"Not-Listed\" - The os vendor/version is not listed in the HCL for the server model, processor and firmware \"Incomplete\" - The inventory is missing os vendor/version and HCL validation was not performed. \"Not-Evaluated\" - The server is not evaluated against the HCL because it is exempted.
    */
    'softwareStatus'?: CondHclStatusSoftwareStatusEnum;
    /**
    * The HCL compatibility status of the managed object. The status can be one of the following \"Incomplete\" - there is no enough information to evaluate against the HCL data \"Validated\" - all components have been evaluated against the HCL and they all have \"Validated\" status \"Not-Listed\" - all components have been evaluated against the HCL and one or more have \"Not-Listed\" status. \"Not-Evaluated\" - server is not evaluated against the HCL because it is exempted.
    */
    'status'?: CondHclStatusStatusEnum;
    /**
    * An array of relationships to condHclStatusDetail resources.
    */
    'details'?: Array<CondHclStatusDetailRelationship>;
    'managedObject'?: InventoryBaseRelationship;
    'registeredDevice'?: AssetDeviceRegistrationRelationship;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "componentStatus",
            "baseName": "ComponentStatus",
            "type": "CondHclStatusComponentStatusEnum",
            "format": ""
        },
        {
            "name": "hardwareStatus",
            "baseName": "HardwareStatus",
            "type": "CondHclStatusHardwareStatusEnum",
            "format": ""
        },
        {
            "name": "hclFirmwareVersion",
            "baseName": "HclFirmwareVersion",
            "type": "string",
            "format": ""
        },
        {
            "name": "hclModel",
            "baseName": "HclModel",
            "type": "string",
            "format": ""
        },
        {
            "name": "hclOsVendor",
            "baseName": "HclOsVendor",
            "type": "string",
            "format": ""
        },
        {
            "name": "hclOsVersion",
            "baseName": "HclOsVersion",
            "type": "string",
            "format": ""
        },
        {
            "name": "hclProcessor",
            "baseName": "HclProcessor",
            "type": "string",
            "format": ""
        },
        {
            "name": "invFirmwareVersion",
            "baseName": "InvFirmwareVersion",
            "type": "string",
            "format": ""
        },
        {
            "name": "invModel",
            "baseName": "InvModel",
            "type": "string",
            "format": ""
        },
        {
            "name": "invOsVendor",
            "baseName": "InvOsVendor",
            "type": "string",
            "format": ""
        },
        {
            "name": "invOsVersion",
            "baseName": "InvOsVersion",
            "type": "string",
            "format": ""
        },
        {
            "name": "invProcessor",
            "baseName": "InvProcessor",
            "type": "string",
            "format": ""
        },
        {
            "name": "reason",
            "baseName": "Reason",
            "type": "CondHclStatusReasonEnum",
            "format": ""
        },
        {
            "name": "serverReason",
            "baseName": "ServerReason",
            "type": "CondHclStatusServerReasonEnum",
            "format": ""
        },
        {
            "name": "softwareStatus",
            "baseName": "SoftwareStatus",
            "type": "CondHclStatusSoftwareStatusEnum",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "Status",
            "type": "CondHclStatusStatusEnum",
            "format": ""
        },
        {
            "name": "details",
            "baseName": "Details",
            "type": "Array<CondHclStatusDetailRelationship>",
            "format": ""
        },
        {
            "name": "managedObject",
            "baseName": "ManagedObject",
            "type": "InventoryBaseRelationship",
            "format": ""
        },
        {
            "name": "registeredDevice",
            "baseName": "RegisteredDevice",
            "type": "AssetDeviceRegistrationRelationship",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(CondHclStatus.attributeTypeMap);
    }
    
    public constructor() {
        super();
    }
}


export type CondHclStatusComponentStatusEnum = "Incomplete" | "Not-Found" | "Not-Listed" | "Validated" | "Not-Evaluated" ;
export type CondHclStatusHardwareStatusEnum = "Incomplete" | "Not-Found" | "Not-Listed" | "Validated" | "Not-Evaluated" ;
export type CondHclStatusReasonEnum = "Missing-Os-Info" | "Incompatible-Components" | "Compatible" | "Not-Evaluated" ;
export type CondHclStatusServerReasonEnum = "Missing-Os-Driver-Info" | "Incompatible-Server" | "Incompatible-Processor" | "Incompatible-Os-Info" | "Incompatible-Firmware" | "Service-Unavailable" | "Service-Error" | "Not-Evaluated" | "Incompatible-Components" | "Compatible" ;
export type CondHclStatusSoftwareStatusEnum = "Incomplete" | "Not-Found" | "Not-Listed" | "Validated" | "Not-Evaluated" ;
export type CondHclStatusStatusEnum = "Incomplete" | "Not-Found" | "Not-Listed" | "Validated" | "Not-Evaluated" ;

