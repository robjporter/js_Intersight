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

import { MoBaseComplexType } from './MoBaseComplexType';
import { WorkflowInternalPropertiesAllOf } from './WorkflowInternalPropertiesAllOf';
import { WorkflowTaskConstraints } from './WorkflowTaskConstraints';
import { HttpFile } from '../http/http';

/**
* Internal properties for a task definition which are not editable by the user.
*/
export class WorkflowInternalProperties extends MoBaseComplexType {
    /**
    * This field will hold the base task type like HttpBaseTask or RemoteAnsibleBaseTask.
    */
    'baseTaskType'?: string;
    'constraints'?: WorkflowTaskConstraints;
    /**
    * Denotes this is an internal task. Internal tasks will be hidden from the UI when executing a workflow.
    */
    'internal'?: boolean;
    /**
    * The service that owns and is responsible for execution of the task.
    */
    'owner'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "baseTaskType",
            "baseName": "BaseTaskType",
            "type": "string",
            "format": ""
        },
        {
            "name": "constraints",
            "baseName": "Constraints",
            "type": "WorkflowTaskConstraints",
            "format": ""
        },
        {
            "name": "internal",
            "baseName": "Internal",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "owner",
            "baseName": "Owner",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WorkflowInternalProperties.attributeTypeMap);
    }
    
    public constructor() {
        super();
    }
}

