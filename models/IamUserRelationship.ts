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

import { IamApiKeyRelationship } from './IamApiKeyRelationship';
import { IamAppRegistrationRelationship } from './IamAppRegistrationRelationship';
import { IamIdpReferenceRelationship } from './IamIdpReferenceRelationship';
import { IamIdpRelationship } from './IamIdpRelationship';
import { IamLocalUserPasswordRelationship } from './IamLocalUserPasswordRelationship';
import { IamOAuthTokenRelationship } from './IamOAuthTokenRelationship';
import { IamPermissionRelationship } from './IamPermissionRelationship';
import { IamSessionRelationship } from './IamSessionRelationship';
import { IamUser } from './IamUser';
import { MoBaseMoRelationship } from './MoBaseMoRelationship';
import { MoMoRef } from './MoMoRef';
import { MoTag } from './MoTag';
import { MoVersionContext } from './MoVersionContext';
import { HttpFile } from '../http/http';

/**
* A relationship to the 'iam.User' resource, or the expanded 'iam.User' resource, or the 'null' value.
*/
export class IamUserRelationship {
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
    * IP address from which the user last logged in to Intersight.
    */
    'clientIpAddress'?: string;
    /**
    * Email of the user. Users are added to Intersight using the email configured in the IdP.
    */
    'email'?: string;
    /**
    * First name of the user. This field is populated from the IdP attributes received after authentication.
    */
    'firstName'?: string;
    /**
    * Last successful login time for user.
    */
    'lastLoginTime'?: Date;
    /**
    * Last name of the user. This field is populated from the IdP attributes received after authentication.
    */
    'lastName'?: string;
    /**
    * Name as configured in the IdP.
    */
    'name'?: string;
    /**
    * UserID or email as configured in the IdP.
    */
    'userIdOrEmail'?: string;
    /**
    * Type of the User. If a user is added manually by specifying the email address, or has logged in using groups, based on the IdP attributes received during authentication. If added manually, the user type will be static, otherwise dynamic.
    */
    'userType'?: string;
    /**
    * An array of relationships to iamApiKey resources.
    */
    'apiKeys'?: Array<IamApiKeyRelationship>;
    /**
    * An array of relationships to iamAppRegistration resources.
    */
    'appRegistrations'?: Array<IamAppRegistrationRelationship>;
    'idp'?: IamIdpRelationship;
    'idpreference'?: IamIdpReferenceRelationship;
    'localUserPassword'?: IamLocalUserPasswordRelationship;
    /**
    * An array of relationships to iamOAuthToken resources.
    */
    'oauthTokens'?: Array<IamOAuthTokenRelationship>;
    /**
    * An array of relationships to iamPermission resources.
    */
    'permissions'?: Array<IamPermissionRelationship>;
    /**
    * An array of relationships to iamSession resources.
    */
    'sessions'?: Array<IamSessionRelationship>;

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
            "name": "clientIpAddress",
            "baseName": "ClientIpAddress",
            "type": "string",
            "format": ""
        },
        {
            "name": "email",
            "baseName": "Email",
            "type": "string",
            "format": ""
        },
        {
            "name": "firstName",
            "baseName": "FirstName",
            "type": "string",
            "format": ""
        },
        {
            "name": "lastLoginTime",
            "baseName": "LastLoginTime",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "lastName",
            "baseName": "LastName",
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
            "name": "userIdOrEmail",
            "baseName": "UserIdOrEmail",
            "type": "string",
            "format": ""
        },
        {
            "name": "userType",
            "baseName": "UserType",
            "type": "string",
            "format": ""
        },
        {
            "name": "apiKeys",
            "baseName": "ApiKeys",
            "type": "Array<IamApiKeyRelationship>",
            "format": ""
        },
        {
            "name": "appRegistrations",
            "baseName": "AppRegistrations",
            "type": "Array<IamAppRegistrationRelationship>",
            "format": ""
        },
        {
            "name": "idp",
            "baseName": "Idp",
            "type": "IamIdpRelationship",
            "format": ""
        },
        {
            "name": "idpreference",
            "baseName": "Idpreference",
            "type": "IamIdpReferenceRelationship",
            "format": ""
        },
        {
            "name": "localUserPassword",
            "baseName": "LocalUserPassword",
            "type": "IamLocalUserPasswordRelationship",
            "format": ""
        },
        {
            "name": "oauthTokens",
            "baseName": "OauthTokens",
            "type": "Array<IamOAuthTokenRelationship>",
            "format": ""
        },
        {
            "name": "permissions",
            "baseName": "Permissions",
            "type": "Array<IamPermissionRelationship>",
            "format": ""
        },
        {
            "name": "sessions",
            "baseName": "Sessions",
            "type": "Array<IamSessionRelationship>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return IamUserRelationship.attributeTypeMap;
    }
    
    public constructor() {
    }
}
