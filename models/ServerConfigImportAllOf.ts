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

import { ComputeRackUnitRelationship } from './ComputeRackUnitRelationship';
import { OrganizationOrganizationRelationship } from './OrganizationOrganizationRelationship';
import { ServerProfileRelationship } from './ServerProfileRelationship';
import { HttpFile } from '../http/http';

/**
* Definition of the list of properties defined in 'server.ConfigImport', excluding properties defined in parent classes.
*/
export class ServerConfigImportAllOf {
    /**
    * Description of the imported profile.
    */
    'description'?: string;
    /**
    * Policy prefix for the policies of the imported server profile.
    */
    'policyPrefix'?: string;
    'policyTypes'?: Array<string>;
    /**
    * Profile name for the imported server profile.
    */
    'profileName'?: string;
    'organization'?: OrganizationOrganizationRelationship;
    'server'?: ComputeRackUnitRelationship;
    'serverProfile'?: ServerProfileRelationship;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "description",
            "baseName": "Description",
            "type": "string",
            "format": ""
        },
        {
            "name": "policyPrefix",
            "baseName": "PolicyPrefix",
            "type": "string",
            "format": ""
        },
        {
            "name": "policyTypes",
            "baseName": "PolicyTypes",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "profileName",
            "baseName": "ProfileName",
            "type": "string",
            "format": ""
        },
        {
            "name": "organization",
            "baseName": "Organization",
            "type": "OrganizationOrganizationRelationship",
            "format": ""
        },
        {
            "name": "server",
            "baseName": "Server",
            "type": "ComputeRackUnitRelationship",
            "format": ""
        },
        {
            "name": "serverProfile",
            "baseName": "ServerProfile",
            "type": "ServerProfileRelationship",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ServerConfigImportAllOf.attributeTypeMap;
    }
    
    public constructor() {
    }
}

