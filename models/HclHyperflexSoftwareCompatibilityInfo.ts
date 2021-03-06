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

import { HclConstraint } from './HclConstraint';
import { HclHyperflexSoftwareCompatibilityInfoAllOf } from './HclHyperflexSoftwareCompatibilityInfoAllOf';
import { HyperflexAppCatalogRelationship } from './HyperflexAppCatalogRelationship';
import { MoBaseMo } from './MoBaseMo';
import { MoBaseMoRelationship } from './MoBaseMoRelationship';
import { MoTag } from './MoTag';
import { MoVersionContext } from './MoVersionContext';
import { HttpFile } from '../http/http';

/**
* Lists software compatibility information between different HperFlex component versions like HyperFlex Data Platform, Hypervisor, Drive Firmware, etc.
*/
export class HclHyperflexSoftwareCompatibilityInfo extends MoBaseMo {
    'constraints'?: Array<HclConstraint>;
    /**
    * HXDP component software version.
    */
    'hxdpVersion'?: string;
    /**
    * Type fo Hypervisor the HyperFlex components versions are compatible with. For example ESX, Hyperv or KVM.
    */
    'hypervisorType'?: HclHyperflexSoftwareCompatibilityInfoHypervisorTypeEnum;
    /**
    * Hypervisor component software version.
    */
    'hypervisorVersion'?: string;
    /**
    * UCS Server Firmware component software version.
    */
    'serverFwVersion'?: string;
    'appCatalog'?: HyperflexAppCatalogRelationship;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "constraints",
            "baseName": "Constraints",
            "type": "Array<HclConstraint>",
            "format": ""
        },
        {
            "name": "hxdpVersion",
            "baseName": "HxdpVersion",
            "type": "string",
            "format": ""
        },
        {
            "name": "hypervisorType",
            "baseName": "HypervisorType",
            "type": "HclHyperflexSoftwareCompatibilityInfoHypervisorTypeEnum",
            "format": ""
        },
        {
            "name": "hypervisorVersion",
            "baseName": "HypervisorVersion",
            "type": "string",
            "format": ""
        },
        {
            "name": "serverFwVersion",
            "baseName": "ServerFwVersion",
            "type": "string",
            "format": ""
        },
        {
            "name": "appCatalog",
            "baseName": "AppCatalog",
            "type": "HyperflexAppCatalogRelationship",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(HclHyperflexSoftwareCompatibilityInfo.attributeTypeMap);
    }
    
    public constructor() {
        super();
    }
}


export type HclHyperflexSoftwareCompatibilityInfoHypervisorTypeEnum = "ESXi" ;

