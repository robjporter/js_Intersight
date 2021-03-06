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
import { VnicFcErrorRecoverySettingsAllOf } from './VnicFcErrorRecoverySettingsAllOf';
import { HttpFile } from '../http/http';

/**
* Fibre Channel Error Recovery Settings.
*/
export class VnicFcErrorRecoverySettings extends MoBaseComplexType {
    /**
    * Enables Fibre Channel Error recovery.
    */
    'enabled'?: boolean;
    /**
    * The number of times an I/O request to a port is retried because the port is busy before the system decides the port is unavailable.
    */
    'ioRetryCount'?: number;
    /**
    * The number of seconds the adapter waits before aborting the pending command and resending the same IO request.
    */
    'ioRetryTimeout'?: number;
    /**
    * The number of milliseconds the port should actually be down before it is marked down and fabric connectivity is lost.
    */
    'linkDownTimeout'?: number;
    /**
    * The number of milliseconds a remote Fibre Channel port should be offline before informing the SCSI upper layer that the port is unavailable. For a server with a VIC adapter running ESXi, the recommended value is 10000. For a server with a port used to boot a Windows OS from the SAN, the recommended value is 5000 milliseconds.
    */
    'portDownTimeout'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "enabled",
            "baseName": "Enabled",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "ioRetryCount",
            "baseName": "IoRetryCount",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "ioRetryTimeout",
            "baseName": "IoRetryTimeout",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "linkDownTimeout",
            "baseName": "LinkDownTimeout",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "portDownTimeout",
            "baseName": "PortDownTimeout",
            "type": "number",
            "format": "int64"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(VnicFcErrorRecoverySettings.attributeTypeMap);
    }
    
    public constructor() {
        super();
    }
}

