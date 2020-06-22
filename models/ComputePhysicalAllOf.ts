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

import { ComputeIpAddress } from './ComputeIpAddress';
import { HttpFile } from '../http/http';

/**
* Definition of the list of properties defined in 'compute.Physical', excluding properties defined in parent classes.
*/
export class ComputePhysicalAllOf {
    /**
    * Desired power state of the server.
    */
    'adminPowerState'?: string;
    'assetTag'?: string;
    /**
    * The actual amount of memory currently available to the server.
    */
    'availableMemory'?: number;
    'faultSummary'?: number;
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
    /**
    * The service profile assigned.
    */
    'serviceProfile'?: string;
    /**
    * The total amount of memory installed on the server.
    */
    'totalMemory'?: number;
    'userLabel'?: string;
    'uuid'?: string;

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
            "name": "faultSummary",
            "baseName": "FaultSummary",
            "type": "number",
            "format": "int64"
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
            "name": "serviceProfile",
            "baseName": "ServiceProfile",
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
        }    ];

    static getAttributeTypeMap() {
        return ComputePhysicalAllOf.attributeTypeMap;
    }
    
    public constructor() {
    }
}

