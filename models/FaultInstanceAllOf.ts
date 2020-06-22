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

import { AssetDeviceRegistrationRelationship } from './AssetDeviceRegistrationRelationship';
import { HttpFile } from '../http/http';

/**
* Definition of the list of properties defined in 'fault.Instance', excluding properties defined in parent classes.
*/
export class FaultInstanceAllOf {
    'acknowledged'?: string;
    'affectedDn'?: string;
    /**
    * Managed object Id which was affected.
    */
    'affectedMoId'?: string;
    /**
    * Managed object type which was affected.
    */
    'affectedMoType'?: string;
    'ancestorMoId'?: string;
    'ancestorMoType'?: string;
    'code'?: string;
    'creationTime'?: string;
    /**
    * Short summary of the fault found.
    */
    'description'?: string;
    /**
    * Last transition time of the fault.
    */
    'lastTransitionTime'?: string;
    /**
    * The number of times this fault has occured.
    */
    'numOccurrences'?: number;
    'originalSeverity'?: string;
    'previousSeverity'?: string;
    'rule'?: string;
    /**
    * Severity of the fault found.
    */
    'severity'?: string;
    'registeredDevice'?: AssetDeviceRegistrationRelationship;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "acknowledged",
            "baseName": "Acknowledged",
            "type": "string",
            "format": ""
        },
        {
            "name": "affectedDn",
            "baseName": "AffectedDn",
            "type": "string",
            "format": ""
        },
        {
            "name": "affectedMoId",
            "baseName": "AffectedMoId",
            "type": "string",
            "format": ""
        },
        {
            "name": "affectedMoType",
            "baseName": "AffectedMoType",
            "type": "string",
            "format": ""
        },
        {
            "name": "ancestorMoId",
            "baseName": "AncestorMoId",
            "type": "string",
            "format": ""
        },
        {
            "name": "ancestorMoType",
            "baseName": "AncestorMoType",
            "type": "string",
            "format": ""
        },
        {
            "name": "code",
            "baseName": "Code",
            "type": "string",
            "format": ""
        },
        {
            "name": "creationTime",
            "baseName": "CreationTime",
            "type": "string",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "Description",
            "type": "string",
            "format": ""
        },
        {
            "name": "lastTransitionTime",
            "baseName": "LastTransitionTime",
            "type": "string",
            "format": ""
        },
        {
            "name": "numOccurrences",
            "baseName": "NumOccurrences",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "originalSeverity",
            "baseName": "OriginalSeverity",
            "type": "string",
            "format": ""
        },
        {
            "name": "previousSeverity",
            "baseName": "PreviousSeverity",
            "type": "string",
            "format": ""
        },
        {
            "name": "rule",
            "baseName": "Rule",
            "type": "string",
            "format": ""
        },
        {
            "name": "severity",
            "baseName": "Severity",
            "type": "string",
            "format": ""
        },
        {
            "name": "registeredDevice",
            "baseName": "RegisteredDevice",
            "type": "AssetDeviceRegistrationRelationship",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return FaultInstanceAllOf.attributeTypeMap;
    }
    
    public constructor() {
    }
}
