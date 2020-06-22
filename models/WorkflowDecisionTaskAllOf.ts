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
import { WorkflowDecisionCase } from './WorkflowDecisionCase';
import { HttpFile } from '../http/http';

/**
* Definition of the list of properties defined in 'workflow.DecisionTask', excluding properties defined in parent classes.
*/
export class WorkflowDecisionTaskAllOf {
    /**
    * The condition to evaluate for this decision task. The condition can be a workflow or task variable or an expression based on the input parameters. Example value for condition if its Workflow/task variable is -  \"${task1.output.var1} or ${workflow.input.var2}\" which evaluates to a value matching any of the decision case values. Example value for condition if its an expression is - \"if ( $.element ! = null && $.element > 0 ) 'true'; else 'false'; \" which evaluates to 'true' or 'false' and will match one of the decision case values. Here \"element\" is a variable in decisiontask's inputParameters JSON formatted map. You can also use javascript like functions indexOf, toUpperCase in the expression which will be evaluated by the expression evaluator.
    */
    'condition'?: string;
    'decisionCases'?: Array<WorkflowDecisionCase>;
    /**
    * The default next Task to execute if the decision cannot be evaluated to any of the DecisionCases.
    */
    'defaultTask'?: string;
    /**
    * JSON formatted map that defines the input given to the decision task. The inputs are used as variables in the condition property of decision task. The input variables can be static values like \"hello\" , \"24\", \"true\" OR previous task outputs/workflow inputs like \"${task2.output.var1}}\". The input variables are referrenced as $.inputVariableName in the condition property.
    */
    'inputParameters'?: AnyType;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "condition",
            "baseName": "Condition",
            "type": "string",
            "format": ""
        },
        {
            "name": "decisionCases",
            "baseName": "DecisionCases",
            "type": "Array<WorkflowDecisionCase>",
            "format": ""
        },
        {
            "name": "defaultTask",
            "baseName": "DefaultTask",
            "type": "string",
            "format": ""
        },
        {
            "name": "inputParameters",
            "baseName": "InputParameters",
            "type": "AnyType",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return WorkflowDecisionTaskAllOf.attributeTypeMap;
    }
    
    public constructor() {
    }
}
