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

import { ExternalsiteAuthorizationAllOf } from './ExternalsiteAuthorizationAllOf';
import { IamAccountRelationship } from './IamAccountRelationship';
import { MoBaseMo } from './MoBaseMo';
import { MoBaseMoRelationship } from './MoBaseMoRelationship';
import { MoTag } from './MoTag';
import { MoVersionContext } from './MoVersionContext';
import { HttpFile } from '../http/http';

/**
* An authentication request that will be used to get authorized from external repository like cisco.com in order to download the image. This MO creation is a one time configuration before calling firmware.Upgrade API. This MO has to be modified with updated details whenever the user has updated the credentials in external repository.
*/
export class ExternalsiteAuthorization extends MoBaseMo {
    /**
    * Indicates whether the value of the 'password' property has been set.
    */
    'isPasswordSet'?: boolean;
    /**
    * Indicates whether the value of the 'userId' property has been set.
    */
    'isUserIdSet'?: boolean;
    /**
    * The password of the given username to download the image from external repository like cisco.com.
    */
    'password'?: string;
    /**
    * The repository type to which this authorization will be requested. Cisco is the only available repository today.
    */
    'repositoryType'?: ExternalsiteAuthorizationRepositoryTypeEnum;
    /**
    * The username that has permission to download the image from external repository like cisco.com.
    */
    'userId'?: string;
    'account'?: IamAccountRelationship;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "isPasswordSet",
            "baseName": "IsPasswordSet",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isUserIdSet",
            "baseName": "IsUserIdSet",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "password",
            "baseName": "Password",
            "type": "string",
            "format": ""
        },
        {
            "name": "repositoryType",
            "baseName": "RepositoryType",
            "type": "ExternalsiteAuthorizationRepositoryTypeEnum",
            "format": ""
        },
        {
            "name": "userId",
            "baseName": "UserId",
            "type": "string",
            "format": ""
        },
        {
            "name": "account",
            "baseName": "Account",
            "type": "IamAccountRelationship",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ExternalsiteAuthorization.attributeTypeMap);
    }
    
    public constructor() {
        super();
    }
}


export type ExternalsiteAuthorizationRepositoryTypeEnum = "cisco" ;

