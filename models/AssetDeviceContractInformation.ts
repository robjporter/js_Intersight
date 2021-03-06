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

import { AssetContractInformation } from './AssetContractInformation';
import { AssetCustomerInformation } from './AssetCustomerInformation';
import { AssetDeviceContractInformationAllOf } from './AssetDeviceContractInformationAllOf';
import { AssetDeviceRegistrationRelationship } from './AssetDeviceRegistrationRelationship';
import { AssetGlobalUltimate } from './AssetGlobalUltimate';
import { AssetProductInformation } from './AssetProductInformation';
import { MoBaseMo } from './MoBaseMo';
import { MoBaseMoRelationship } from './MoBaseMoRelationship';
import { MoTag } from './MoTag';
import { MoVersionContext } from './MoVersionContext';
import { HttpFile } from '../http/http';

/**
* Contains information about the Cisco device identified by a unique identifier like serial number. It also contains information about warranty, contract status, validity of the device. In future this object could be expanded to store Case, RMA, device topology details. We observe new asset.DeviceRegisteration and use it as a trigger for creating an instance of this object. Currently the data is restricted to Cisco Standalone IMC servers and Fabric Interconnects. Support for more product lines will be added in future.
*/
export class AssetDeviceContractInformation extends MoBaseMo {
    'contract'?: AssetContractInformation;
    /**
    * Calculated contract status that is derived based on the service line status and contract end date. It is different from serviceLineStatus property. serviceLineStatus gives us ACTIVE, OVERDUE, EXPIRED. These are transformed into Active, Expiring Soon and Not Covered.
    */
    'contractStatus'?: AssetDeviceContractInformationContractStatusEnum;
    /**
    * End date of the covered product line. The coverage end date is fetched from Cisco SN2INFO API.
    */
    'coveredProductLineEndDate'?: string;
    /**
    * Unique identifier of the Cisco device. This information is used to query Cisco APIx SN2INFO and CCWR databases.
    */
    'deviceId'?: string;
    /**
    * Type used to classify the device in Cisco Intersight. Currently supported values are Server and FabricInterconnect. This will be expanded to support more types in future.
    */
    'deviceType'?: AssetDeviceContractInformationDeviceTypeEnum;
    'endCustomer'?: AssetCustomerInformation;
    'endUserGlobalUltimate'?: AssetGlobalUltimate;
    /**
    * Validates if the device is a genuine Cisco device. Validated is done using the Cisco SN2INFO APIs.
    */
    'isValid'?: boolean;
    /**
    * Item type of this specific Cisco device. example \"Chassis\".
    */
    'itemType'?: string;
    /**
    * Maintenance purchase order number for the Cisco device.
    */
    'maintenancePurchaseOrderNumber'?: string;
    /**
    * Maintenance sales order number for the Cisco device.
    */
    'maintenanceSalesOrderNumber'?: string;
    /**
    * The platform type of the Cisco device.
    */
    'platformType'?: AssetDeviceContractInformationPlatformTypeEnum;
    'product'?: AssetProductInformation;
    /**
    * Purchase order number for the Cisco device. It is a unique number assigned for every purchase.
    */
    'purchaseOrderNumber'?: string;
    'resellerGlobalUltimate'?: AssetGlobalUltimate;
    /**
    * Sales order number for the Cisco device. It is a unique number assigned for every sale.
    */
    'salesOrderNumber'?: string;
    /**
    * The type of service contract that covers the Cisco device.
    */
    'serviceDescription'?: string;
    /**
    * End date for the Cisco service contract that covers this Cisco device.
    */
    'serviceEndDate'?: Date;
    /**
    * The type of service contract that covers the Cisco device.
    */
    'serviceLevel'?: string;
    /**
    * The SKU of the service contract that covers the Cisco device.
    */
    'serviceSku'?: string;
    /**
    * Start date for the Cisco service contract that covers this Cisco device.
    */
    'serviceStartDate'?: Date;
    /**
    * Internal property used for triggering and tracking actions for contract information.
    */
    'stateContract'?: AssetDeviceContractInformationStateContractEnum;
    /**
    * End date for the warranty that covers the Cisco device.
    */
    'warrantyEndDate'?: string;
    /**
    * Type of warranty that covers the Cisco device.
    */
    'warrantyType'?: string;
    'registeredDevice'?: AssetDeviceRegistrationRelationship;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "contract",
            "baseName": "Contract",
            "type": "AssetContractInformation",
            "format": ""
        },
        {
            "name": "contractStatus",
            "baseName": "ContractStatus",
            "type": "AssetDeviceContractInformationContractStatusEnum",
            "format": ""
        },
        {
            "name": "coveredProductLineEndDate",
            "baseName": "CoveredProductLineEndDate",
            "type": "string",
            "format": ""
        },
        {
            "name": "deviceId",
            "baseName": "DeviceId",
            "type": "string",
            "format": ""
        },
        {
            "name": "deviceType",
            "baseName": "DeviceType",
            "type": "AssetDeviceContractInformationDeviceTypeEnum",
            "format": ""
        },
        {
            "name": "endCustomer",
            "baseName": "EndCustomer",
            "type": "AssetCustomerInformation",
            "format": ""
        },
        {
            "name": "endUserGlobalUltimate",
            "baseName": "EndUserGlobalUltimate",
            "type": "AssetGlobalUltimate",
            "format": ""
        },
        {
            "name": "isValid",
            "baseName": "IsValid",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "itemType",
            "baseName": "ItemType",
            "type": "string",
            "format": ""
        },
        {
            "name": "maintenancePurchaseOrderNumber",
            "baseName": "MaintenancePurchaseOrderNumber",
            "type": "string",
            "format": ""
        },
        {
            "name": "maintenanceSalesOrderNumber",
            "baseName": "MaintenanceSalesOrderNumber",
            "type": "string",
            "format": ""
        },
        {
            "name": "platformType",
            "baseName": "PlatformType",
            "type": "AssetDeviceContractInformationPlatformTypeEnum",
            "format": ""
        },
        {
            "name": "product",
            "baseName": "Product",
            "type": "AssetProductInformation",
            "format": ""
        },
        {
            "name": "purchaseOrderNumber",
            "baseName": "PurchaseOrderNumber",
            "type": "string",
            "format": ""
        },
        {
            "name": "resellerGlobalUltimate",
            "baseName": "ResellerGlobalUltimate",
            "type": "AssetGlobalUltimate",
            "format": ""
        },
        {
            "name": "salesOrderNumber",
            "baseName": "SalesOrderNumber",
            "type": "string",
            "format": ""
        },
        {
            "name": "serviceDescription",
            "baseName": "ServiceDescription",
            "type": "string",
            "format": ""
        },
        {
            "name": "serviceEndDate",
            "baseName": "ServiceEndDate",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "serviceLevel",
            "baseName": "ServiceLevel",
            "type": "string",
            "format": ""
        },
        {
            "name": "serviceSku",
            "baseName": "ServiceSku",
            "type": "string",
            "format": ""
        },
        {
            "name": "serviceStartDate",
            "baseName": "ServiceStartDate",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "stateContract",
            "baseName": "StateContract",
            "type": "AssetDeviceContractInformationStateContractEnum",
            "format": ""
        },
        {
            "name": "warrantyEndDate",
            "baseName": "WarrantyEndDate",
            "type": "string",
            "format": ""
        },
        {
            "name": "warrantyType",
            "baseName": "WarrantyType",
            "type": "string",
            "format": ""
        },
        {
            "name": "registeredDevice",
            "baseName": "RegisteredDevice",
            "type": "AssetDeviceRegistrationRelationship",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(AssetDeviceContractInformation.attributeTypeMap);
    }
    
    public constructor() {
        super();
    }
}


export type AssetDeviceContractInformationContractStatusEnum = "Not Covered" | "Active" | "Expiring Soon" ;
export type AssetDeviceContractInformationDeviceTypeEnum = "None" | "CiscoUcsServer" | "CiscoUcsFI" | "CiscoUcsChassis" ;
export type AssetDeviceContractInformationPlatformTypeEnum = "" | "APIC" | "DCNM" | "UCSFI" | "UCSFIISM" | "IMC" | "IMCM4" | "IMCM5" | "UCSIOM" | "HX" | "HyperFlexAP" | "UCSD" | "IntersightAppliance" | "PureStorageFlashArray" | "NetAppOntap" | "EmcScaleIo" | "EmcVmax" | "EmcVplex" | "EmcXtremIo" | "VmwareVcenter" | "MicrosoftHyperV" | "AppDynamics" | "Dynatrace" | "MicrosoftSqlServer" | "Kubernetes" | "MicrosoftAzure" | "ServiceEngine" | "IMCBlade" ;
export type AssetDeviceContractInformationStateContractEnum = "Update" | "OK" | "Failed" | "Retry" ;

