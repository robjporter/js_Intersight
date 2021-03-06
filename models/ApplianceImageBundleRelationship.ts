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

import { ApplianceImageBundle } from './ApplianceImageBundle';
import { MoBaseMoRelationship } from './MoBaseMoRelationship';
import { MoMoRef } from './MoMoRef';
import { MoTag } from './MoTag';
import { MoVersionContext } from './MoVersionContext';
import { OnpremImagePackage } from './OnpremImagePackage';
import { HttpFile } from '../http/http';

/**
* A relationship to the 'appliance.ImageBundle' resource, or the expanded 'appliance.ImageBundle' resource, or the 'null' value.
*/
export class ApplianceImageBundleRelationship {
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
    'ansiblePackages'?: Array<OnpremImagePackage>;
    /**
    * Indicates that the software upgrade was automatically initiated by the Intersight Appliance.
    */
    'autoUpgrade'?: boolean;
    'dcPackages'?: Array<OnpremImagePackage>;
    'debugPackages'?: Array<OnpremImagePackage>;
    /**
    * Short description of the software upgrade bundle.
    */
    'description'?: string;
    'endpointPackages'?: Array<OnpremImagePackage>;
    /**
    * Fingerprint of the software manifest from which this bundle is created. Fingerprint is calculated using the SHA256 algorithm.
    */
    'fingerprint'?: string;
    /**
    * Indicates that the ImageBundle has errors. The upgrade service sets this field when it encounters errors during the manifest processing.
    */
    'hasError'?: boolean;
    'infraPackages'?: Array<OnpremImagePackage>;
    'initPackages'?: Array<OnpremImagePackage>;
    /**
    * Name of the software upgrade bundle.
    */
    'name'?: string;
    /**
    * Detailed description of the software upgrade bundle.
    */
    'notes'?: string;
    /**
    * Software upgrade manifest's upgrade priority. The upgrade service supports two priorities, Normal and Critical. Normal priority is used for regular software upgrades, and the upgrade service uses the Upgrade Policy to compute upgrade start time. Critical priority is used for the critical software security patches, and the upgrade service ignores the Upgrade Policy when it computes the upgrade start time.
    */
    'priority'?: ApplianceImageBundleRelationshipPriorityEnum;
    /**
    * Software upgrade manifest's release date and time.
    */
    'releaseTime'?: Date;
    'servicePackages'?: Array<OnpremImagePackage>;
    /**
    * Status message set during the manifest processing.
    */
    'statusMessage'?: string;
    'systemPackages'?: Array<OnpremImagePackage>;
    'uiPackages'?: Array<OnpremImagePackage>;
    /**
    * End date of the software upgrade process.
    */
    'upgradeEndTime'?: Date;
    /**
    * Grace period in seconds before the automatic upgrade is initiated. The upgrade service uses the grace period to compute the upgrade start time when it receives an upgrade notfication from the Intersight. If there is an Upgrade Policy configured for the Intersight Appliance, then the upgrade service uses the policy to compute the upgrade start time. However, the upgrade start time cannot not exceed the limit enforced by the grace period.
    */
    'upgradeGracePeriod'?: number;
    /**
    * Duration (in minutes) for which services will be disrupted.
    */
    'upgradeImpactDuration'?: number;
    /**
    * UpgradeImpactEnum is used to indicate the kind of impact the upgrade has on currently running services on the appliance.
    */
    'upgradeImpactEnum'?: ApplianceImageBundleRelationshipUpgradeImpactEnumEnum;
    /**
    * Start date of the software upgrade process.
    */
    'upgradeStartTime'?: Date;
    /**
    * Software upgrade manifest's version.
    */
    'version'?: string;

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
            "name": "ansiblePackages",
            "baseName": "AnsiblePackages",
            "type": "Array<OnpremImagePackage>",
            "format": ""
        },
        {
            "name": "autoUpgrade",
            "baseName": "AutoUpgrade",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "dcPackages",
            "baseName": "DcPackages",
            "type": "Array<OnpremImagePackage>",
            "format": ""
        },
        {
            "name": "debugPackages",
            "baseName": "DebugPackages",
            "type": "Array<OnpremImagePackage>",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "Description",
            "type": "string",
            "format": ""
        },
        {
            "name": "endpointPackages",
            "baseName": "EndpointPackages",
            "type": "Array<OnpremImagePackage>",
            "format": ""
        },
        {
            "name": "fingerprint",
            "baseName": "Fingerprint",
            "type": "string",
            "format": ""
        },
        {
            "name": "hasError",
            "baseName": "HasError",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "infraPackages",
            "baseName": "InfraPackages",
            "type": "Array<OnpremImagePackage>",
            "format": ""
        },
        {
            "name": "initPackages",
            "baseName": "InitPackages",
            "type": "Array<OnpremImagePackage>",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "Name",
            "type": "string",
            "format": ""
        },
        {
            "name": "notes",
            "baseName": "Notes",
            "type": "string",
            "format": ""
        },
        {
            "name": "priority",
            "baseName": "Priority",
            "type": "ApplianceImageBundleRelationshipPriorityEnum",
            "format": ""
        },
        {
            "name": "releaseTime",
            "baseName": "ReleaseTime",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "servicePackages",
            "baseName": "ServicePackages",
            "type": "Array<OnpremImagePackage>",
            "format": ""
        },
        {
            "name": "statusMessage",
            "baseName": "StatusMessage",
            "type": "string",
            "format": ""
        },
        {
            "name": "systemPackages",
            "baseName": "SystemPackages",
            "type": "Array<OnpremImagePackage>",
            "format": ""
        },
        {
            "name": "uiPackages",
            "baseName": "UiPackages",
            "type": "Array<OnpremImagePackage>",
            "format": ""
        },
        {
            "name": "upgradeEndTime",
            "baseName": "UpgradeEndTime",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "upgradeGracePeriod",
            "baseName": "UpgradeGracePeriod",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "upgradeImpactDuration",
            "baseName": "UpgradeImpactDuration",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "upgradeImpactEnum",
            "baseName": "UpgradeImpactEnum",
            "type": "ApplianceImageBundleRelationshipUpgradeImpactEnumEnum",
            "format": ""
        },
        {
            "name": "upgradeStartTime",
            "baseName": "UpgradeStartTime",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "version",
            "baseName": "Version",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ApplianceImageBundleRelationship.attributeTypeMap;
    }
    
    public constructor() {
    }
}


export type ApplianceImageBundleRelationshipPriorityEnum = "Normal" | "Critical" ;
export type ApplianceImageBundleRelationshipUpgradeImpactEnumEnum = "None" | "Disruptive" | "Disruptive-reboot" ;

