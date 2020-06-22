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

import { MoBaseMo } from './MoBaseMo';
import { MoBaseMoRelationship } from './MoBaseMoRelationship';
import { MoTag } from './MoTag';
import { MoVersionContext } from './MoVersionContext';
import { StorageGenericArrayRelationship } from './StorageGenericArrayRelationship';
import { StorageProtectionGroupRelationship } from './StorageProtectionGroupRelationship';
import { StorageReplicationScheduleAllOf } from './StorageReplicationScheduleAllOf';
import { HttpFile } from '../http/http';

/**
* Configuration parameters for snapshot creation on target arrays.
*/
export class StorageReplicationSchedule extends MoBaseMo {
    /**
    * Replication frequency. It is an interval at which replication is set to trigger. Examples:     PT2H, Snapshot is generated every 2 hours.     P30D, Snapshot is scheduled for every 30 days.     PT2H34M56.123S is 2 hours, 34 minutes, 56 seconds and 123 milliseconds.
    */
    'frequency'?: string;
    /**
    * Replication schedule name.
    */
    'name'?: string;
    /**
    * Preferred time of day at which to replicate the snapshots on target array. It is applicable only if the replication frequency is set for a day or more. Format: hh:mm:ss Example: 15:00:00, Replication is set for 3:00 PM.
    */
    'replicationTime'?: string;
    /**
    * Duration to keep the replicated snapshots on the targets. Replicated snapshots are deleted from target array once the retention period has elapsed. Examples: P30D, Snapshots are available for 30 days. PT2H34M56.123S, 2 hours, 34 minutes, 56 seconds and 123 milliseconds.
    */
    'retentionTime'?: string;
    'protectionGroup'?: StorageProtectionGroupRelationship;
    'storageArray'?: StorageGenericArrayRelationship;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "frequency",
            "baseName": "Frequency",
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
            "name": "replicationTime",
            "baseName": "ReplicationTime",
            "type": "string",
            "format": "time"
        },
        {
            "name": "retentionTime",
            "baseName": "RetentionTime",
            "type": "string",
            "format": ""
        },
        {
            "name": "protectionGroup",
            "baseName": "ProtectionGroup",
            "type": "StorageProtectionGroupRelationship",
            "format": ""
        },
        {
            "name": "storageArray",
            "baseName": "StorageArray",
            "type": "StorageGenericArrayRelationship",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(StorageReplicationSchedule.attributeTypeMap);
    }
    
    public constructor() {
        super();
    }
}

