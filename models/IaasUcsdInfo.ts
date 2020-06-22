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
import { IaasConnectorPackRelationship } from './IaasConnectorPackRelationship';
import { IaasDeviceStatusRelationship } from './IaasDeviceStatusRelationship';
import { IaasLicenseInfoRelationship } from './IaasLicenseInfoRelationship';
import { IaasMostRunTasksRelationship } from './IaasMostRunTasksRelationship';
import { IaasUcsdInfoAllOf } from './IaasUcsdInfoAllOf';
import { IaasUcsdManagedInfraRelationship } from './IaasUcsdManagedInfraRelationship';
import { MoBaseMo } from './MoBaseMo';
import { MoBaseMoRelationship } from './MoBaseMoRelationship';
import { MoTag } from './MoTag';
import { MoVersionContext } from './MoVersionContext';
import { HttpFile } from '../http/http';

/**
* UCS Director accounts managed by Intersight.
*/
export class IaasUcsdInfo extends MoBaseMo {
    /**
    * Moid of the UCS Director device connector's asset.DeviceRegistration.
    */
    'deviceId'?: string;
    /**
    * Unique ID of UCS Director getting registerd with Intersight.
    */
    'guid'?: string;
    /**
    * The UCS Director hostname for management.
    */
    'hostName'?: string;
    /**
    * The UCS Director IP address for management.
    */
    'ip'?: string;
    /**
    * Last successful backup created for this UCS Director appliance if backup is configured.
    */
    'lastBackup'?: Date;
    /**
    * NodeType specifies if UCS Director is deployed in Stand-alone or Multi Node.
    */
    'nodeType'?: string;
    /**
    * The UCS Director product name.
    */
    'productName'?: string;
    /**
    * The UCS Director product vendor.
    */
    'productVendor'?: string;
    /**
    * The UCS Director product/platform version.
    */
    'productVersion'?: string;
    /**
    * The UCS Director status. Possible values are Active, Inactive, Unknown.
    */
    'status'?: string;
    /**
    * An array of relationships to iaasConnectorPack resources.
    */
    'connectorPack'?: Array<IaasConnectorPackRelationship>;
    /**
    * An array of relationships to iaasDeviceStatus resources.
    */
    'deviceStatus'?: Array<IaasDeviceStatusRelationship>;
    'licenseInfo'?: IaasLicenseInfoRelationship;
    /**
    * An array of relationships to iaasMostRunTasks resources.
    */
    'mostRunTasks'?: Array<IaasMostRunTasksRelationship>;
    'registeredDevice'?: AssetDeviceRegistrationRelationship;
    'ucsdManagedInfra'?: IaasUcsdManagedInfraRelationship;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "deviceId",
            "baseName": "DeviceId",
            "type": "string",
            "format": ""
        },
        {
            "name": "guid",
            "baseName": "Guid",
            "type": "string",
            "format": ""
        },
        {
            "name": "hostName",
            "baseName": "HostName",
            "type": "string",
            "format": ""
        },
        {
            "name": "ip",
            "baseName": "Ip",
            "type": "string",
            "format": ""
        },
        {
            "name": "lastBackup",
            "baseName": "LastBackup",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "nodeType",
            "baseName": "NodeType",
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
            "name": "productVendor",
            "baseName": "ProductVendor",
            "type": "string",
            "format": ""
        },
        {
            "name": "productVersion",
            "baseName": "ProductVersion",
            "type": "string",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "Status",
            "type": "string",
            "format": ""
        },
        {
            "name": "connectorPack",
            "baseName": "ConnectorPack",
            "type": "Array<IaasConnectorPackRelationship>",
            "format": ""
        },
        {
            "name": "deviceStatus",
            "baseName": "DeviceStatus",
            "type": "Array<IaasDeviceStatusRelationship>",
            "format": ""
        },
        {
            "name": "licenseInfo",
            "baseName": "LicenseInfo",
            "type": "IaasLicenseInfoRelationship",
            "format": ""
        },
        {
            "name": "mostRunTasks",
            "baseName": "MostRunTasks",
            "type": "Array<IaasMostRunTasksRelationship>",
            "format": ""
        },
        {
            "name": "registeredDevice",
            "baseName": "RegisteredDevice",
            "type": "AssetDeviceRegistrationRelationship",
            "format": ""
        },
        {
            "name": "ucsdManagedInfra",
            "baseName": "UcsdManagedInfra",
            "type": "IaasUcsdManagedInfraRelationship",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(IaasUcsdInfo.attributeTypeMap);
    }
    
    public constructor() {
        super();
    }
}

