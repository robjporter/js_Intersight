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

import { OrganizationOrganizationRelationship } from './OrganizationOrganizationRelationship';
import { VnicFcErrorRecoverySettings } from './VnicFcErrorRecoverySettings';
import { VnicFcInterruptSettings } from './VnicFcInterruptSettings';
import { VnicFcQueueSettings } from './VnicFcQueueSettings';
import { VnicFlogiSettings } from './VnicFlogiSettings';
import { VnicPlogiSettings } from './VnicPlogiSettings';
import { VnicScsiQueueSettings } from './VnicScsiQueueSettings';
import { HttpFile } from '../http/http';

/**
* Definition of the list of properties defined in 'vnic.FcAdapterPolicy', excluding properties defined in parent classes.
*/
export class VnicFcAdapterPolicyAllOf {
    /**
    * Error Detection Timeout, also referred to as EDTOV, is the number of milliseconds to wait before the system assumes that an error has occurred.
    */
    'errorDetectionTimeout'?: number;
    'errorRecoverySettings'?: VnicFcErrorRecoverySettings;
    'flogiSettings'?: VnicFlogiSettings;
    'interruptSettings'?: VnicFcInterruptSettings;
    /**
    * The maximum number of data or control I/O operations that can be pending for the virtual interface at one time. If this value is exceeded, the additional I/O operations wait in the queue until the number of pending I/O operations decreases and the additional operations can be processed.
    */
    'ioThrottleCount'?: number;
    /**
    * The maximum number of LUNs that the Fibre Channel driver will export or show. The maximum number of LUNs is usually controlled by the operating system running on the server.
    */
    'lunCount'?: number;
    /**
    * The number of commands that the HBA can send and receive in a single transmission per LUN.
    */
    'lunQueueDepth'?: number;
    'plogiSettings'?: VnicPlogiSettings;
    /**
    * Resource Allocation Timeout, also referred to as RATOV, is the number of milliseconds to wait before the system assumes that a resource cannot be properly allocated.
    */
    'resourceAllocationTimeout'?: number;
    'rxQueueSettings'?: VnicFcQueueSettings;
    'scsiQueueSettings'?: VnicScsiQueueSettings;
    'txQueueSettings'?: VnicFcQueueSettings;
    'organization'?: OrganizationOrganizationRelationship;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "errorDetectionTimeout",
            "baseName": "ErrorDetectionTimeout",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "errorRecoverySettings",
            "baseName": "ErrorRecoverySettings",
            "type": "VnicFcErrorRecoverySettings",
            "format": ""
        },
        {
            "name": "flogiSettings",
            "baseName": "FlogiSettings",
            "type": "VnicFlogiSettings",
            "format": ""
        },
        {
            "name": "interruptSettings",
            "baseName": "InterruptSettings",
            "type": "VnicFcInterruptSettings",
            "format": ""
        },
        {
            "name": "ioThrottleCount",
            "baseName": "IoThrottleCount",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "lunCount",
            "baseName": "LunCount",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "lunQueueDepth",
            "baseName": "LunQueueDepth",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "plogiSettings",
            "baseName": "PlogiSettings",
            "type": "VnicPlogiSettings",
            "format": ""
        },
        {
            "name": "resourceAllocationTimeout",
            "baseName": "ResourceAllocationTimeout",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "rxQueueSettings",
            "baseName": "RxQueueSettings",
            "type": "VnicFcQueueSettings",
            "format": ""
        },
        {
            "name": "scsiQueueSettings",
            "baseName": "ScsiQueueSettings",
            "type": "VnicScsiQueueSettings",
            "format": ""
        },
        {
            "name": "txQueueSettings",
            "baseName": "TxQueueSettings",
            "type": "VnicFcQueueSettings",
            "format": ""
        },
        {
            "name": "organization",
            "baseName": "Organization",
            "type": "OrganizationOrganizationRelationship",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return VnicFcAdapterPolicyAllOf.attributeTypeMap;
    }
    
    public constructor() {
    }
}

