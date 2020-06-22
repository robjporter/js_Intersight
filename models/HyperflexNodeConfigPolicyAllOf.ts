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

import { HyperflexClusterProfileRelationship } from './HyperflexClusterProfileRelationship';
import { HyperflexIpAddrRange } from './HyperflexIpAddrRange';
import { OrganizationOrganizationRelationship } from './OrganizationOrganizationRelationship';
import { HttpFile } from '../http/http';

/**
* Definition of the list of properties defined in 'hyperflex.NodeConfigPolicy', excluding properties defined in parent classes.
*/
export class HyperflexNodeConfigPolicyAllOf {
    'dataIpRange'?: HyperflexIpAddrRange;
    'hxdpIpRange'?: HyperflexIpAddrRange;
    'mgmtIpRange'?: HyperflexIpAddrRange;
    /**
    * The node name prefix that is used to automatically generate the default hostname for each server. A dash (-) will be appended to the prefix followed by the node number to form a hostname. This default naming scheme can be manually overridden in the node configuration. The maximum length of a prefix is 60, must only contain alphanumeric characters or dash (-), and must start with an alphanumeric character.
    */
    'nodeNamePrefix'?: string;
    /**
    * An array of relationships to hyperflexClusterProfile resources.
    */
    'clusterProfiles'?: Array<HyperflexClusterProfileRelationship>;
    'organization'?: OrganizationOrganizationRelationship;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "dataIpRange",
            "baseName": "DataIpRange",
            "type": "HyperflexIpAddrRange",
            "format": ""
        },
        {
            "name": "hxdpIpRange",
            "baseName": "HxdpIpRange",
            "type": "HyperflexIpAddrRange",
            "format": ""
        },
        {
            "name": "mgmtIpRange",
            "baseName": "MgmtIpRange",
            "type": "HyperflexIpAddrRange",
            "format": ""
        },
        {
            "name": "nodeNamePrefix",
            "baseName": "NodeNamePrefix",
            "type": "string",
            "format": ""
        },
        {
            "name": "clusterProfiles",
            "baseName": "ClusterProfiles",
            "type": "Array<HyperflexClusterProfileRelationship>",
            "format": ""
        },
        {
            "name": "organization",
            "baseName": "Organization",
            "type": "OrganizationOrganizationRelationship",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return HyperflexNodeConfigPolicyAllOf.attributeTypeMap;
    }
    
    public constructor() {
    }
}

