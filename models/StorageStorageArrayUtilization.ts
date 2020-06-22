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

import { StorageCapacity } from './StorageCapacity';
import { StorageStorageArrayUtilizationAllOf } from './StorageStorageArrayUtilizationAllOf';
import { HttpFile } from '../http/http';

/**
* Storage space consumption of Pure FlashArray.
*/
export class StorageStorageArrayUtilization extends StorageCapacity {
    /**
    * Ratio of mapped sectors within a volume versus the amount of physical space the data occupies after data compression and deduplication. The data reduction ratio does not include thin provisioning savings. For example, a data reduction ratio of 5.0 means that for every 5 MB the host writes to the array, 1 MB is stored on the array's flash modules.
    */
    'dataReduction'?: number;
    /**
    * Percentage of data that is fully protected. The percentage value will drop below 100% if the data is not fully protected.
    */
    'parity'?: number;
    /**
    * Total provisioned storage capacity in Pure FlashArray, represented in bytes.
    */
    'provisioned'?: number;
    /**
    * Physical space occupied by deduplicated data, represented in bytes. The space is shared with other volumes and snapshots as a result of data deduplication.
    */
    'shared'?: number;
    /**
    * Physical space occupied by the snapshots, represented in bytes.
    */
    'snapshot'?: number;
    /**
    * Physical space occupied by internal array metadata, represented in bytes.
    */
    'system'?: number;
    /**
    * Percentage of volume sectors that do not contain host-written data because the hosts have not written data to them or the sectors have been explicitly trimmed.
    */
    'thinProvisioned'?: number;
    /**
    * Ratio of provisioned sectors within a volume versus the amount of physical space the data occupies after reduction via data compression and deduplication and with thin provisioning savings. Total reduction is data reduction with thin provisioning savings. For example, a total reduction ratio of 10.0 means that for every 10 MB of provisioned space, 1 MB is stored on the array's flash modules.
    */
    'totalReduction'?: number;
    /**
    * Physical space occupied by volume data, excluding shared, array metadata and snapshots. Size is represented in bytes.
    */
    'volume'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "dataReduction",
            "baseName": "DataReduction",
            "type": "number",
            "format": "float"
        },
        {
            "name": "parity",
            "baseName": "Parity",
            "type": "number",
            "format": "float"
        },
        {
            "name": "provisioned",
            "baseName": "Provisioned",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "shared",
            "baseName": "Shared",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "snapshot",
            "baseName": "Snapshot",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "system",
            "baseName": "System",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "thinProvisioned",
            "baseName": "ThinProvisioned",
            "type": "number",
            "format": "float"
        },
        {
            "name": "totalReduction",
            "baseName": "TotalReduction",
            "type": "number",
            "format": "float"
        },
        {
            "name": "volume",
            "baseName": "Volume",
            "type": "number",
            "format": "int64"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(StorageStorageArrayUtilization.attributeTypeMap);
    }
    
    public constructor() {
        super();
    }
}

