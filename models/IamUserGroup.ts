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

import { IamIdpReferenceRelationship } from './IamIdpReferenceRelationship';
import { IamIdpRelationship } from './IamIdpRelationship';
import { IamPermissionRelationship } from './IamPermissionRelationship';
import { IamQualifierRelationship } from './IamQualifierRelationship';
import { IamUserGroupAllOf } from './IamUserGroupAllOf';
import { IamUserRelationship } from './IamUserRelationship';
import { MoBaseMo } from './MoBaseMo';
import { MoBaseMoRelationship } from './MoBaseMoRelationship';
import { MoTag } from './MoTag';
import { MoVersionContext } from './MoVersionContext';
import { HttpFile } from '../http/http';

/**
* User Group provides a way to assign permissions to a group of users based on the IdP attributes received after authentication.
*/
export class IamUserGroup extends MoBaseMo {
    /**
    * The name of the user group which the dynamic user belongs to.
    */
    'name'?: string;
    'idp'?: IamIdpRelationship;
    'idpreference'?: IamIdpReferenceRelationship;
    /**
    * An array of relationships to iamPermission resources.
    */
    'permissions'?: Array<IamPermissionRelationship>;
    'qualifier'?: IamQualifierRelationship;
    /**
    * An array of relationships to iamUser resources.
    */
    'users'?: Array<IamUserRelationship>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "name",
            "baseName": "Name",
            "type": "string",
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
            "name": "permissions",
            "baseName": "Permissions",
            "type": "Array<IamPermissionRelationship>",
            "format": ""
        },
        {
            "name": "qualifier",
            "baseName": "Qualifier",
            "type": "IamQualifierRelationship",
            "format": ""
        },
        {
            "name": "users",
            "baseName": "Users",
            "type": "Array<IamUserRelationship>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(IamUserGroup.attributeTypeMap);
    }
    
    public constructor() {
        super();
    }
}

