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

import { WorkflowExpectPrompt } from './WorkflowExpectPrompt';
import { HttpFile } from '../http/http';

/**
* Definition of the list of properties defined in 'workflow.CliCommand', excluding properties defined in parent classes.
*/
export class WorkflowCliCommandAllOf {
    /**
    * The command to run on the device connector.
    */
    'command'?: string;
    /**
    * The regex string that identifies the end of the command response.
    */
    'endPrompt'?: string;
    'expectPrompts'?: Array<WorkflowExpectPrompt>;
    /**
    * Skips the execution status check of the terminal command. One use case for this is while exiting the terminal session from esxi host.
    */
    'skipStatusCheck'?: boolean;
    /**
    * If this flag is set, it marks the end of the terminal session where the previous commands were executed.
    */
    'terminalEnd'?: boolean;
    /**
    * If this flag is set, the execution of this command initiates a terminal session in which the subsequent CLI commands are executed until a command with terminalEnd flag is encountered or the end of the batch.
    */
    'terminalStart'?: boolean;
    /**
    * The type of the command - can be interactive or non-interactive.
    */
    'type'?: WorkflowCliCommandAllOfTypeEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "command",
            "baseName": "Command",
            "type": "string",
            "format": ""
        },
        {
            "name": "endPrompt",
            "baseName": "EndPrompt",
            "type": "string",
            "format": ""
        },
        {
            "name": "expectPrompts",
            "baseName": "ExpectPrompts",
            "type": "Array<WorkflowExpectPrompt>",
            "format": ""
        },
        {
            "name": "skipStatusCheck",
            "baseName": "SkipStatusCheck",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "terminalEnd",
            "baseName": "TerminalEnd",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "terminalStart",
            "baseName": "TerminalStart",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "Type",
            "type": "WorkflowCliCommandAllOfTypeEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return WorkflowCliCommandAllOf.attributeTypeMap;
    }
    
    public constructor() {
    }
}


export type WorkflowCliCommandAllOfTypeEnum = "NonInteractive" | "Interactive" ;

