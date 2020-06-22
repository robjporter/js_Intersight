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
import { InfraHardwareInfo } from './InfraHardwareInfo';
import { MoBaseMoRelationship } from './MoBaseMoRelationship';
import { MoTag } from './MoTag';
import { MoVersionContext } from './MoVersionContext';
import { VirtualizationComputeCapacity } from './VirtualizationComputeCapacity';
import { VirtualizationCpuInfo } from './VirtualizationCpuInfo';
import { VirtualizationHost } from './VirtualizationHost';
import { VirtualizationMemoryCapacity } from './VirtualizationMemoryCapacity';
import { VirtualizationProductInfo } from './VirtualizationProductInfo';
import { VirtualizationResourceConsumption } from './VirtualizationResourceConsumption';
import { VirtualizationVmwareClusterRelationship } from './VirtualizationVmwareClusterRelationship';
import { VirtualizationVmwareDatacenterRelationship } from './VirtualizationVmwareDatacenterRelationship';
import { VirtualizationVmwareDatastoreRelationship } from './VirtualizationVmwareDatastoreRelationship';
import { VirtualizationVmwareHostAllOf } from './VirtualizationVmwareHostAllOf';
import { HttpFile } from '../http/http';

/**
* The VMware Host entity with its attributes. Every Host belongs to a Datacenter and may run VMs.
*/
export class VirtualizationVmwareHost extends VirtualizationHost {
    /**
    * The time when this host booted up.
    */
    'bootTime'?: Date;
    /**
    * Indicates if the host is connected to the vCenter. Values are connected, not connected.
    */
    'connectionState'?: string;
    /**
    * Is the host Powered-up or Powered-down.
    */
    'hwPowerState'?: VirtualizationVmwareHostHwPowerStateEnum;
    /**
    * The count of all network adapters attached to this host.
    */
    'networkAdapterCount'?: number;
    'resourceConsumed'?: VirtualizationResourceConsumption;
    /**
    * The count of all storage adapters attached to this host.
    */
    'storageAdapterCount'?: number;
    /**
    * The identity of this host within vCenter (optional).
    */
    'vcenterHostId'?: string;
    'cluster'?: VirtualizationVmwareClusterRelationship;
    'datacenter'?: VirtualizationVmwareDatacenterRelationship;
    /**
    * An array of relationships to virtualizationVmwareDatastore resources.
    */
    'datastores'?: Array<VirtualizationVmwareDatastoreRelationship>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "bootTime",
            "baseName": "BootTime",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "connectionState",
            "baseName": "ConnectionState",
            "type": "string",
            "format": ""
        },
        {
            "name": "hwPowerState",
            "baseName": "HwPowerState",
            "type": "VirtualizationVmwareHostHwPowerStateEnum",
            "format": ""
        },
        {
            "name": "networkAdapterCount",
            "baseName": "NetworkAdapterCount",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "resourceConsumed",
            "baseName": "ResourceConsumed",
            "type": "VirtualizationResourceConsumption",
            "format": ""
        },
        {
            "name": "storageAdapterCount",
            "baseName": "StorageAdapterCount",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "vcenterHostId",
            "baseName": "VcenterHostId",
            "type": "string",
            "format": ""
        },
        {
            "name": "cluster",
            "baseName": "Cluster",
            "type": "VirtualizationVmwareClusterRelationship",
            "format": ""
        },
        {
            "name": "datacenter",
            "baseName": "Datacenter",
            "type": "VirtualizationVmwareDatacenterRelationship",
            "format": ""
        },
        {
            "name": "datastores",
            "baseName": "Datastores",
            "type": "Array<VirtualizationVmwareDatastoreRelationship>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(VirtualizationVmwareHost.attributeTypeMap);
    }
    
    public constructor() {
        super();
    }
}


export type VirtualizationVmwareHostHwPowerStateEnum = "Unknown" | "PoweredOn" | "PoweredOff" | "StandBy" | "Paused" ;

