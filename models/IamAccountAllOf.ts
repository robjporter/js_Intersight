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

import { IamAppRegistrationRelationship } from './IamAppRegistrationRelationship';
import { IamDomainGroupRelationship } from './IamDomainGroupRelationship';
import { IamEndPointRoleRelationship } from './IamEndPointRoleRelationship';
import { IamIdpReferenceRelationship } from './IamIdpReferenceRelationship';
import { IamIdpRelationship } from './IamIdpRelationship';
import { IamPermissionRelationship } from './IamPermissionRelationship';
import { IamPrivilegeRelationship } from './IamPrivilegeRelationship';
import { IamPrivilegeSetRelationship } from './IamPrivilegeSetRelationship';
import { IamResourceLimitsRelationship } from './IamResourceLimitsRelationship';
import { IamRoleRelationship } from './IamRoleRelationship';
import { IamSecurityHolderRelationship } from './IamSecurityHolderRelationship';
import { IamSessionLimitsRelationship } from './IamSessionLimitsRelationship';
import { HttpFile } from '../http/http';

/**
* Definition of the list of properties defined in 'iam.Account', excluding properties defined in parent classes.
*/
export class IamAccountAllOf {
    /**
    * Name of the Intersight account. By default, name is same as the MoID of the account.
    */
    'name'?: string;
    /**
    * Status of the account. To activate the Intersight account, claim a device to the account.
    */
    'status'?: string;
    /**
    * An array of relationships to iamAppRegistration resources.
    */
    'appRegistrations'?: Array<IamAppRegistrationRelationship>;
    /**
    * An array of relationships to iamDomainGroup resources.
    */
    'domainGroups'?: Array<IamDomainGroupRelationship>;
    /**
    * An array of relationships to iamEndPointRole resources.
    */
    'endPointRoles'?: Array<IamEndPointRoleRelationship>;
    /**
    * An array of relationships to iamIdpReference resources.
    */
    'idpreferences'?: Array<IamIdpReferenceRelationship>;
    /**
    * An array of relationships to iamIdp resources.
    */
    'idps'?: Array<IamIdpRelationship>;
    /**
    * An array of relationships to iamPermission resources.
    */
    'permissions'?: Array<IamPermissionRelationship>;
    /**
    * An array of relationships to iamPrivilegeSet resources.
    */
    'privilegeSets'?: Array<IamPrivilegeSetRelationship>;
    /**
    * An array of relationships to iamPrivilege resources.
    */
    'privileges'?: Array<IamPrivilegeRelationship>;
    'resourceLimits'?: IamResourceLimitsRelationship;
    /**
    * An array of relationships to iamRole resources.
    */
    'roles'?: Array<IamRoleRelationship>;
    'securityHolder'?: IamSecurityHolderRelationship;
    'sessionLimits'?: IamSessionLimitsRelationship;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "name",
            "baseName": "Name",
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
            "name": "appRegistrations",
            "baseName": "AppRegistrations",
            "type": "Array<IamAppRegistrationRelationship>",
            "format": ""
        },
        {
            "name": "domainGroups",
            "baseName": "DomainGroups",
            "type": "Array<IamDomainGroupRelationship>",
            "format": ""
        },
        {
            "name": "endPointRoles",
            "baseName": "EndPointRoles",
            "type": "Array<IamEndPointRoleRelationship>",
            "format": ""
        },
        {
            "name": "idpreferences",
            "baseName": "Idpreferences",
            "type": "Array<IamIdpReferenceRelationship>",
            "format": ""
        },
        {
            "name": "idps",
            "baseName": "Idps",
            "type": "Array<IamIdpRelationship>",
            "format": ""
        },
        {
            "name": "permissions",
            "baseName": "Permissions",
            "type": "Array<IamPermissionRelationship>",
            "format": ""
        },
        {
            "name": "privilegeSets",
            "baseName": "PrivilegeSets",
            "type": "Array<IamPrivilegeSetRelationship>",
            "format": ""
        },
        {
            "name": "privileges",
            "baseName": "Privileges",
            "type": "Array<IamPrivilegeRelationship>",
            "format": ""
        },
        {
            "name": "resourceLimits",
            "baseName": "ResourceLimits",
            "type": "IamResourceLimitsRelationship",
            "format": ""
        },
        {
            "name": "roles",
            "baseName": "Roles",
            "type": "Array<IamRoleRelationship>",
            "format": ""
        },
        {
            "name": "securityHolder",
            "baseName": "SecurityHolder",
            "type": "IamSecurityHolderRelationship",
            "format": ""
        },
        {
            "name": "sessionLimits",
            "baseName": "SessionLimits",
            "type": "IamSessionLimitsRelationship",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return IamAccountAllOf.attributeTypeMap;
    }
    
    public constructor() {
    }
}

