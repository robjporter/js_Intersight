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
import { MoBaseMo } from './MoBaseMo';
import { MoBaseMoRelationship } from './MoBaseMoRelationship';
import { MoTag } from './MoTag';
import { MoVersionContext } from './MoVersionContext';
import { WorkflowDynamicWorkflowActionTaskList } from './WorkflowDynamicWorkflowActionTaskList';
import { WorkflowPendingDynamicWorkflowInfoAllOf } from './WorkflowPendingDynamicWorkflowInfoAllOf';
import { WorkflowWorkflowInfoRelationship } from './WorkflowWorkflowInfoRelationship';
import { HttpFile } from '../http/http';

/**
* Information for a pending Dynamic Workflow Instance before it is run.  Validation needs to be done on the dynamic workflow tasks before starting.  After it begins, it will be tracked with regular WorkflowInstance.
*/
export class WorkflowPendingDynamicWorkflowInfo extends MoBaseMo {
    /**
    * The inputs of the workflow.
    */
    'input'?: AnyType;
    /**
    * A name for the pending dynamic workflow.
    */
    'name'?: string;
    'pendingServices'?: Array<string>;
    /**
    * The src is workflow owner service.
    */
    'src'?: string;
    /**
    * The current status of the PendingDynamicWorkflowInfo.
    */
    'status'?: WorkflowPendingDynamicWorkflowInfoStatusEnum;
    /**
    * When set to true workflow engine will wait for a duplicate to finish before starting a new one.
    */
    'waitOnDuplicate'?: boolean;
    'workflowActionTaskLists'?: Array<WorkflowDynamicWorkflowActionTaskList>;
    /**
    * The workflow's workflow context which contains initiator and target information.
    */
    'workflowCtx'?: AnyType;
    /**
    * This key contains workflow, initiator and target name. Workflow engine uses the key to do workflow dedup.
    */
    'workflowKey'?: string;
    /**
    * The metadata of the workflow.
    */
    'workflowMeta'?: AnyType;
    'workflowInfo'?: WorkflowWorkflowInfoRelationship;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "input",
            "baseName": "Input",
            "type": "AnyType",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "Name",
            "type": "string",
            "format": ""
        },
        {
            "name": "pendingServices",
            "baseName": "PendingServices",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "src",
            "baseName": "Src",
            "type": "string",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "Status",
            "type": "WorkflowPendingDynamicWorkflowInfoStatusEnum",
            "format": ""
        },
        {
            "name": "waitOnDuplicate",
            "baseName": "WaitOnDuplicate",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "workflowActionTaskLists",
            "baseName": "WorkflowActionTaskLists",
            "type": "Array<WorkflowDynamicWorkflowActionTaskList>",
            "format": ""
        },
        {
            "name": "workflowCtx",
            "baseName": "WorkflowCtx",
            "type": "AnyType",
            "format": ""
        },
        {
            "name": "workflowKey",
            "baseName": "WorkflowKey",
            "type": "string",
            "format": ""
        },
        {
            "name": "workflowMeta",
            "baseName": "WorkflowMeta",
            "type": "AnyType",
            "format": ""
        },
        {
            "name": "workflowInfo",
            "baseName": "WorkflowInfo",
            "type": "WorkflowWorkflowInfoRelationship",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WorkflowPendingDynamicWorkflowInfo.attributeTypeMap);
    }
    
    public constructor() {
        super();
    }
}


export type WorkflowPendingDynamicWorkflowInfoStatusEnum = "GatheringTasks" | "Waiting" ;
