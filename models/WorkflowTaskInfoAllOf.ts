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

import { AnyType } from './AnyType';
import { WorkflowMessage } from './WorkflowMessage';
import { WorkflowTaskDefinitionRelationship } from './WorkflowTaskDefinitionRelationship';
import { WorkflowTaskRetryInfo } from './WorkflowTaskRetryInfo';
import { WorkflowWorkflowInfoRelationship } from './WorkflowWorkflowInfoRelationship';
import { HttpFile } from '../http/http';

/**
* Definition of the list of properties defined in 'workflow.TaskInfo', excluding properties defined in parent classes.
*/
export class WorkflowTaskInfoAllOf {
    /**
    * The task description and this is the description that was added when the task was included into the workflow.
    */
    'description'?: string;
    /**
    * The time stamp when the task reached a final state.
    */
    'endTime'?: Date;
    /**
    * Description of the reason why the task failed.
    */
    'failureReason'?: string;
    /**
    * The input data that was sent to the task at the start of execution.
    */
    'input'?: AnyType;
    /**
    * The current running task instance Id.
    */
    'instId'?: string;
    /**
    * Denotes whether or not this is an internal task.  Internal tasks will be hidden from the UI within a workflow.
    */
    'internal'?: boolean;
    /**
    * User friendly short label to describe this task instance in the workflow.
    */
    'label'?: string;
    'message'?: Array<WorkflowMessage>;
    /**
    * Task definition name which specifies the task type.
    */
    'name'?: string;
    /**
    * The output data that was generated by this task.
    */
    'output'?: AnyType;
    /**
    * The task reference name to ensure its unique inside a workflow.
    */
    'refName'?: string;
    /**
    * A counter for number of retries.
    */
    'retryCount'?: number;
    /**
    * The time stamp when the task started execution.
    */
    'startTime'?: Date;
    /**
    * The status of the task and this will specify if the task is running or has reached a final state.
    */
    'status'?: string;
    'taskInstIdList'?: Array<WorkflowTaskRetryInfo>;
    'subWorkflowInfo'?: WorkflowWorkflowInfoRelationship;
    'taskDefinition'?: WorkflowTaskDefinitionRelationship;
    'workflowInfo'?: WorkflowWorkflowInfoRelationship;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "description",
            "baseName": "Description",
            "type": "string",
            "format": ""
        },
        {
            "name": "endTime",
            "baseName": "EndTime",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "failureReason",
            "baseName": "FailureReason",
            "type": "string",
            "format": ""
        },
        {
            "name": "input",
            "baseName": "Input",
            "type": "AnyType",
            "format": ""
        },
        {
            "name": "instId",
            "baseName": "InstId",
            "type": "string",
            "format": ""
        },
        {
            "name": "internal",
            "baseName": "Internal",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "label",
            "baseName": "Label",
            "type": "string",
            "format": ""
        },
        {
            "name": "message",
            "baseName": "Message",
            "type": "Array<WorkflowMessage>",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "Name",
            "type": "string",
            "format": ""
        },
        {
            "name": "output",
            "baseName": "Output",
            "type": "AnyType",
            "format": ""
        },
        {
            "name": "refName",
            "baseName": "RefName",
            "type": "string",
            "format": ""
        },
        {
            "name": "retryCount",
            "baseName": "RetryCount",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "startTime",
            "baseName": "StartTime",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "status",
            "baseName": "Status",
            "type": "string",
            "format": ""
        },
        {
            "name": "taskInstIdList",
            "baseName": "TaskInstIdList",
            "type": "Array<WorkflowTaskRetryInfo>",
            "format": ""
        },
        {
            "name": "subWorkflowInfo",
            "baseName": "SubWorkflowInfo",
            "type": "WorkflowWorkflowInfoRelationship",
            "format": ""
        },
        {
            "name": "taskDefinition",
            "baseName": "TaskDefinition",
            "type": "WorkflowTaskDefinitionRelationship",
            "format": ""
        },
        {
            "name": "workflowInfo",
            "baseName": "WorkflowInfo",
            "type": "WorkflowWorkflowInfoRelationship",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return WorkflowTaskInfoAllOf.attributeTypeMap;
    }
    
    public constructor() {
    }
}

