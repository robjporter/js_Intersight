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
import { ComputeIpAddress } from './ComputeIpAddress';
import { HttpFile } from '../http/http';

/**
* Definition of the list of properties defined in 'compute.PhysicalSummary', excluding properties defined in parent classes.
*/
export class ComputePhysicalSummaryAllOf {
    /**
    * Desired power state of the server.
    */
    'adminPowerState'?: string;
    'assetTag'?: string;
    /**
    * The actual amount of memory currently available to the server.
    */
    'availableMemory'?: number;
    /**
    * The id of the chassis that the blade is located in.
    */
    'chassisId'?: string;
    /**
    * CPU Capacity = Number of CPU Sockets x Enabled Cores x Speed (GHz).
    */
    'cpuCapacity'?: number;
    'deviceMoId'?: string;
    /**
    * The Distinguished Name unambiguously identifies an object in the system.
    */
    'dn'?: string;
    'faultSummary'?: number;
    /**
    * The firmware version of the Cisco Integrated Management Controller (CIMC) for this server.
    */
    'firmware'?: string;
    /**
    * The IPv4 address configured on the management interface of the Integrated Management Controller.
    */
    'ipv4Address'?: string;
    'kvmIpAddresses'?: Array<ComputeIpAddress>;
    /**
    * The memory speed, in megahertz.
    */
    'memorySpeed'?: string;
    /**
    * Management address of the server.
    */
    'mgmtIpAddress'?: string;
    /**
    * This field identifies the model of the given component.
    */
    'model'?: string;
    /**
    * The name of the UCS Fabric Interconnect cluster or Cisco Integrated Management Controller (CIMC). When this server is attached to a UCS Fabric Interconnect, the value of this property is the name of the UCS Fabric Interconnect. When this server configured in standalone mode, the value of this property is the name of the Cisco Integrated Management Controller.
    */
    'name'?: string;
    /**
    * Total number of Adaptors available.
    */
    'numAdaptors'?: number;
    /**
    * Total number of CPU cores available.
    */
    'numCpuCores'?: number;
    /**
    * Number of CPU cores enabled.
    */
    'numCpuCoresEnabled'?: number;
    /**
    * Total number of CPU's available.
    */
    'numCpus'?: number;
    /**
    * Number of Ethernet Host Interfaces.
    */
    'numEthHostInterfaces'?: number;
    /**
    * Number of Fibre channel Host Interfaces.
    */
    'numFcHostInterfaces'?: number;
    /**
    * Number of threads enabled.
    */
    'numThreads'?: number;
    /**
    * Current power state of the server.
    */
    'operPowerState'?: string;
    'operState'?: string;
    'operability'?: string;
    /**
    * Platform type of the device.
    */
    'platformType'?: string;
    /**
    * Identifies the presence of the server.
    */
    'presence'?: string;
    'revision'?: string;
    /**
    * The Relative Name uniquely identifies an object within a given context.
    */
    'rn'?: string;
    'scaledMode'?: string;
    /**
    * This field identifies the serial of the given component.
    */
    'serial'?: string;
    /**
    * The server id of the Rack server.
    */
    'serverId'?: number;
    /**
    * The service profile assigned.
    */
    'serviceProfile'?: string;
    /**
    * The slot number in the chassis where the blade is present.
    */
    'slotId'?: number;
    /**
    * The source object type of this view MO.
    */
    'sourceObjectType'?: string;
    /**
    * The total amount of memory installed on the server.
    */
    'totalMemory'?: number;
    'userLabel'?: string;
    'uuid'?: string;
    /**
    * This field identifies the vendor of the given component.
    */
    'vendor'?: string;
    'registeredDevice'?: AssetDeviceRegistrationRelationship;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "adminPowerState",
            "baseName": "AdminPowerState",
            "type": "string",
            "format": ""
        },
        {
            "name": "assetTag",
            "baseName": "AssetTag",
            "type": "string",
            "format": ""
        },
        {
            "name": "availableMemory",
            "baseName": "AvailableMemory",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "chassisId",
            "baseName": "ChassisId",
            "type": "string",
            "format": ""
        },
        {
            "name": "cpuCapacity",
            "baseName": "CpuCapacity",
            "type": "number",
            "format": "float"
        },
        {
            "name": "deviceMoId",
            "baseName": "DeviceMoId",
            "type": "string",
            "format": ""
        },
        {
            "name": "dn",
            "baseName": "Dn",
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
            "name": "firmware",
            "baseName": "Firmware",
            "type": "string",
            "format": ""
        },
        {
            "name": "ipv4Address",
            "baseName": "Ipv4Address",
            "type": "string",
            "format": ""
        },
        {
            "name": "kvmIpAddresses",
            "baseName": "KvmIpAddresses",
            "type": "Array<ComputeIpAddress>",
            "format": ""
        },
        {
            "name": "memorySpeed",
            "baseName": "MemorySpeed",
            "type": "string",
            "format": ""
        },
        {
            "name": "mgmtIpAddress",
            "baseName": "MgmtIpAddress",
            "type": "string",
            "format": ""
        },
        {
            "name": "model",
            "baseName": "Model",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "Name",
            "type": "string",
            "format": ""
        },
        {
            "name": "numAdaptors",
            "baseName": "NumAdaptors",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "numCpuCores",
            "baseName": "NumCpuCores",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "numCpuCoresEnabled",
            "baseName": "NumCpuCoresEnabled",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "numCpus",
            "baseName": "NumCpus",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "numEthHostInterfaces",
            "baseName": "NumEthHostInterfaces",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "numFcHostInterfaces",
            "baseName": "NumFcHostInterfaces",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "numThreads",
            "baseName": "NumThreads",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "operPowerState",
            "baseName": "OperPowerState",
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
            "name": "operability",
            "baseName": "Operability",
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
            "name": "presence",
            "baseName": "Presence",
            "type": "string",
            "format": ""
        },
        {
            "name": "revision",
            "baseName": "Revision",
            "type": "string",
            "format": ""
        },
        {
            "name": "rn",
            "baseName": "Rn",
            "type": "string",
            "format": ""
        },
        {
            "name": "scaledMode",
            "baseName": "ScaledMode",
            "type": "string",
            "format": ""
        },
        {
            "name": "serial",
            "baseName": "Serial",
            "type": "string",
            "format": ""
        },
        {
            "name": "serverId",
            "baseName": "ServerId",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "serviceProfile",
            "baseName": "ServiceProfile",
            "type": "string",
            "format": ""
        },
        {
            "name": "slotId",
            "baseName": "SlotId",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "sourceObjectType",
            "baseName": "SourceObjectType",
            "type": "string",
            "format": ""
        },
        {
            "name": "totalMemory",
            "baseName": "TotalMemory",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "userLabel",
            "baseName": "UserLabel",
            "type": "string",
            "format": ""
        },
        {
            "name": "uuid",
            "baseName": "Uuid",
            "type": "string",
            "format": ""
        },
        {
            "name": "vendor",
            "baseName": "Vendor",
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
        return ComputePhysicalSummaryAllOf.attributeTypeMap;
    }
    
    public constructor() {
    }
}

