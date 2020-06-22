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

import { FirmwareServerConfigurationUtilityDistributable } from './FirmwareServerConfigurationUtilityDistributable';
import { MoBaseMoRelationship } from './MoBaseMoRelationship';
import { MoMoRef } from './MoMoRef';
import { MoTag } from './MoTag';
import { MoVersionContext } from './MoVersionContext';
import { SoftwarerepositoryCatalogRelationship } from './SoftwarerepositoryCatalogRelationship';
import { SoftwarerepositoryFileServer } from './SoftwarerepositoryFileServer';
import { HttpFile } from '../http/http';

/**
* A relationship to the 'firmware.ServerConfigurationUtilityDistributable' resource, or the expanded 'firmware.ServerConfigurationUtilityDistributable' resource, or the 'null' value.
*/
export class FirmwareServerConfigurationUtilityDistributableRelationship {
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
    /**
    * User provided description about the file. Cisco provided description for image inventoried from a Cisco repository.
    */
    'description'?: string;
    /**
    * The number of times this file has been downloaded from the local repository. It is used by the repository monitoring process to determine the files that are to be evicted from the cache.
    */
    'downloadCount'?: number;
    /**
    * The action to be performed on the imported file. If 'PreCache' is set, the image will be cached in Appliance. Applicable in Intersight appliance deployment. If 'Evict' is set, the cached file will be removed. Applicable in Intersight appliance deployment. If 'GeneratePreSignedUploadUrl' is set, generates pre signed URL (s) for the file to be imported into the repository. Applicable for local machine source. The URL (s) will be populated under LocalMachine file server. If 'CompleteImportProcess' is set, the ImportState is marked as 'Imported'. Applicable for local machine source. If 'Cancel' is set, the ImportState is marked as 'Failed'. Applicable for local machine source.
    */
    'importAction'?: FirmwareServerConfigurationUtilityDistributableRelationshipImportActionEnum;
    /**
    * The state  of this file in the repository or Appliance. The importState is updated during the import operation and as part of the repository monitoring process.
    */
    'importState'?: FirmwareServerConfigurationUtilityDistributableRelationshipImportStateEnum;
    /**
    * The time at which this image or file was imported/cached into the repositry. if the 'ImportState' is 'Imported', the time at which this image or file was imported. if the 'ImportState' is 'Cached', the time at which this image or file was cached.
    */
    'importedTime'?: Date;
    /**
    * The time at which this file was last downloaded from the local repository. It is used by the repository monitoring process to determine the files that are to be evicted from the cache.
    */
    'lastAccessTime'?: Date;
    /**
    * The md5sum checksum of the file. This information is available for all Cisco distributed images and files imported to the local repository.
    */
    'md5sum'?: string;
    /**
    * The name of the file. It is populated as part of the image import operation.
    */
    'name'?: string;
    /**
    * The date on which the file was released or distributed by its vendor.
    */
    'releaseDate'?: Date;
    /**
    * The sha512sum of the file. This information is available for all Cisco distributed images and files imported to the local repository.
    */
    'sha512sum'?: string;
    /**
    * The size (in bytes) of the file. This information is available for all Cisco distributed images and files imported to the local repository.
    */
    'size'?: number;
    /**
    * The software advisory, if any, provided by the vendor for this file.
    */
    'softwareAdvisoryUrl'?: string;
    'source'?: SoftwarerepositoryFileServer;
    /**
    * Vendor provided version for the file.
    */
    'version'?: string;
    /**
    * The bundle type of the image, as published on cisco.com.
    */
    'bundleType'?: string;
    /**
    * The unique identifier for an image in a Cisco repository.
    */
    'guid'?: string;
    /**
    * The mdfid of the image provided by cisco.com.
    */
    'mdfid'?: string;
    /**
    * The endpoint model for which this firmware image is applicable.
    */
    'model'?: string;
    /**
    * The platform type of the image.
    */
    'platformType'?: string;
    /**
    * The build which is recommended by Cisco.
    */
    'recommendedBuild'?: string;
    /**
    * The url for the release notes of this image.
    */
    'releaseNotesUrl'?: string;
    /**
    * The software type id provided by cisco.com.
    */
    'softwareTypeId'?: string;
    'supportedModels'?: Array<string>;
    /**
    * The vendor or publisher of this file.
    */
    'vendor'?: string;
    'catalog'?: SoftwarerepositoryCatalogRelationship;

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
            "name": "description",
            "baseName": "Description",
            "type": "string",
            "format": ""
        },
        {
            "name": "downloadCount",
            "baseName": "DownloadCount",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "importAction",
            "baseName": "ImportAction",
            "type": "FirmwareServerConfigurationUtilityDistributableRelationshipImportActionEnum",
            "format": ""
        },
        {
            "name": "importState",
            "baseName": "ImportState",
            "type": "FirmwareServerConfigurationUtilityDistributableRelationshipImportStateEnum",
            "format": ""
        },
        {
            "name": "importedTime",
            "baseName": "ImportedTime",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "lastAccessTime",
            "baseName": "LastAccessTime",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "md5sum",
            "baseName": "Md5sum",
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
            "name": "releaseDate",
            "baseName": "ReleaseDate",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "sha512sum",
            "baseName": "Sha512sum",
            "type": "string",
            "format": ""
        },
        {
            "name": "size",
            "baseName": "Size",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "softwareAdvisoryUrl",
            "baseName": "SoftwareAdvisoryUrl",
            "type": "string",
            "format": ""
        },
        {
            "name": "source",
            "baseName": "Source",
            "type": "SoftwarerepositoryFileServer",
            "format": ""
        },
        {
            "name": "version",
            "baseName": "Version",
            "type": "string",
            "format": ""
        },
        {
            "name": "bundleType",
            "baseName": "BundleType",
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
            "name": "mdfid",
            "baseName": "Mdfid",
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
            "name": "platformType",
            "baseName": "PlatformType",
            "type": "string",
            "format": ""
        },
        {
            "name": "recommendedBuild",
            "baseName": "RecommendedBuild",
            "type": "string",
            "format": ""
        },
        {
            "name": "releaseNotesUrl",
            "baseName": "ReleaseNotesUrl",
            "type": "string",
            "format": ""
        },
        {
            "name": "softwareTypeId",
            "baseName": "SoftwareTypeId",
            "type": "string",
            "format": ""
        },
        {
            "name": "supportedModels",
            "baseName": "SupportedModels",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "vendor",
            "baseName": "Vendor",
            "type": "string",
            "format": ""
        },
        {
            "name": "catalog",
            "baseName": "Catalog",
            "type": "SoftwarerepositoryCatalogRelationship",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return FirmwareServerConfigurationUtilityDistributableRelationship.attributeTypeMap;
    }
    
    public constructor() {
    }
}


export type FirmwareServerConfigurationUtilityDistributableRelationshipImportActionEnum = "None" | "GeneratePreSignedUploadUrl" | "GeneratePreSignedDownloadUrl" | "CompleteImportProcess" | "PreCache" | "Cancel" | "Evict" ;
export type FirmwareServerConfigurationUtilityDistributableRelationshipImportStateEnum = "ReadyForImport" | "Importing" | "Imported" | "Failed" | "MetaOnly" | "ReadyForCache" | "Caching" | "Cached" | "CachingFailed" | "Corrupted" | "Evicted" ;

