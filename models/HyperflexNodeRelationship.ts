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

import { AssetClusterMemberRelationship } from './AssetClusterMemberRelationship';
import { ComputePhysicalRelationship } from './ComputePhysicalRelationship';
import { HyperflexClusterRelationship } from './HyperflexClusterRelationship';
import { HyperflexHxNetworkAddressDt } from './HyperflexHxNetworkAddressDt';
import { HyperflexHxUuIdDt } from './HyperflexHxUuIdDt';
import { HyperflexNode } from './HyperflexNode';
import { MoBaseMoRelationship } from './MoBaseMoRelationship';
import { MoMoRef } from './MoMoRef';
import { MoTag } from './MoTag';
import { MoVersionContext } from './MoVersionContext';
import { HttpFile } from '../http/http';

/**
* A relationship to the 'hyperflex.Node' resource, or the expanded 'hyperflex.Node' resource, or the 'null' value.
*/
export class HyperflexNodeRelationship {
    /**
    * The Account ID for this managed object.
    */
    'accountMoid'?: string;
    /**
    * The concrete type of this complex type. Its value must be the same as the 'objectType' property. The OpenAPI document references this property as a discriminator value.
    */
    'classId': string;
    /**
    * The time when this managed object was created.
    */
    'createTime'?: Date;
    /**
    * The DomainGroup ID for this managed object.
    */
    'domainGroupMoid'?: string;
    /**
    * The time when this managed object was last modified.
    */
    'modTime'?: Date;
    /**
    * The unique identifier of this Managed Object instance.
    */
    'moid'?: string;
    /**
    * The fully-qualified type of this managed object, i.e. the class name. This property is optional. The ObjectType is implied from the URL path. If specified, the value of objectType must match the class name specified in the URL path.
    */
    'objectType': string;
    'owners'?: Array<string>;
    /**
    * Intersight provides pre-built workflows, tasks and policies to end users through global catalogs. Objects that are made available through global catalogs are said to have a 'shared' ownership. Shared objects are either made globally available to all end users or restricted to end users based on their license entitlement. Users can use this property to differentiate the scope (global or a specific license tier) to which a shared MO belongs.
    */
    'sharedScope'?: string;
    'tags'?: Array<MoTag>;
    'versionContext'?: MoVersionContext;
    /**
    * An array of relationships to moBaseMo resources.
    */
    'ancestors'?: Array<MoBaseMoRelationship>;
    'parent'?: MoBaseMoRelationship;
    /**
    * An array of relationships to moBaseMo resources.
    */
    'permissionResources'?: Array<MoBaseMoRelationship>;
    /**
    * a map of display names for a resource.
    */
    'displayNames'?: { [key: string]: Array<string>; };
    'buildNumber'?: string;
    'displayVersion'?: string;
    'hostName'?: string;
    'hypervisor'?: string;
    'identity'?: HyperflexHxUuIdDt;
    'ip'?: HyperflexHxNetworkAddressDt;
    'lockdown'?: boolean;
    'modelNumber'?: string;
    'role'?: HyperflexNodeRelationshipRoleEnum;
    'serialNumber'?: string;
    'status'?: HyperflexNodeRelationshipStatusEnum;
    'version'?: string;
    'cluster'?: HyperflexClusterRelationship;
    'clusterMember'?: AssetClusterMemberRelationship;
    'physicalServer'?: ComputePhysicalRelationship;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "accountMoid",
            "baseName": "AccountMoid",
            "type": "string",
            "format": ""
        },
        {
            "name": "classId",
            "baseName": "ClassId",
            "type": "string",
            "format": ""
        },
        {
            "name": "createTime",
            "baseName": "CreateTime",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "domainGroupMoid",
            "baseName": "DomainGroupMoid",
            "type": "string",
            "format": ""
        },
        {
            "name": "modTime",
            "baseName": "ModTime",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "moid",
            "baseName": "Moid",
            "type": "string",
            "format": ""
        },
        {
            "name": "objectType",
            "baseName": "ObjectType",
            "type": "string",
            "format": ""
        },
        {
            "name": "owners",
            "baseName": "Owners",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "sharedScope",
            "baseName": "SharedScope",
            "type": "string",
            "format": ""
        },
        {
            "name": "tags",
            "baseName": "Tags",
            "type": "Array<MoTag>",
            "format": ""
        },
        {
            "name": "versionContext",
            "baseName": "VersionContext",
            "type": "MoVersionContext",
            "format": ""
        },
        {
            "name": "ancestors",
            "baseName": "Ancestors",
            "type": "Array<MoBaseMoRelationship>",
            "format": ""
        },
        {
            "name": "parent",
            "baseName": "Parent",
            "type": "MoBaseMoRelationship",
            "format": ""
        },
        {
            "name": "permissionResources",
            "baseName": "PermissionResources",
            "type": "Array<MoBaseMoRelationship>",
            "format": ""
        },
        {
            "name": "displayNames",
            "baseName": "DisplayNames",
            "type": "{ [key: string]: Array<string>; }",
            "format": ""
        },
        {
            "name": "buildNumber",
            "baseName": "BuildNumber",
            "type": "string",
            "format": ""
        },
        {
            "name": "displayVersion",
            "baseName": "DisplayVersion",
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
            "name": "hypervisor",
            "baseName": "Hypervisor",
            "type": "string",
            "format": ""
        },
        {
            "name": "identity",
            "baseName": "Identity",
            "type": "HyperflexHxUuIdDt",
            "format": ""
        },
        {
            "name": "ip",
            "baseName": "Ip",
            "type": "HyperflexHxNetworkAddressDt",
            "format": ""
        },
        {
            "name": "lockdown",
            "baseName": "Lockdown",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "modelNumber",
            "baseName": "ModelNumber",
            "type": "string",
            "format": ""
        },
        {
            "name": "role",
            "baseName": "Role",
            "type": "HyperflexNodeRelationshipRoleEnum",
            "format": ""
        },
        {
            "name": "serialNumber",
            "baseName": "SerialNumber",
            "type": "string",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "Status",
            "type": "HyperflexNodeRelationshipStatusEnum",
            "format": ""
        },
        {
            "name": "version",
            "baseName": "Version",
            "type": "string",
            "format": ""
        },
        {
            "name": "cluster",
            "baseName": "Cluster",
            "type": "HyperflexClusterRelationship",
            "format": ""
        },
        {
            "name": "clusterMember",
            "baseName": "ClusterMember",
            "type": "AssetClusterMemberRelationship",
            "format": ""
        },
        {
            "name": "physicalServer",
            "baseName": "PhysicalServer",
            "type": "ComputePhysicalRelationship",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return HyperflexNodeRelationship.attributeTypeMap;
    }
    
    public constructor() {
    }
}


export type HyperflexNodeRelationshipRoleEnum = "UNKNOWN" | "STORAGE" | "COMPUTE" ;
export type HyperflexNodeRelationshipStatusEnum = "UNKNOWN" | "ONLINE" | "OFFLINE" | "INMAINTENANCE" | "DEGRADED" ;
