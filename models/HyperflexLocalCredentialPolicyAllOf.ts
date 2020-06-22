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
import { OrganizationOrganizationRelationship } from './OrganizationOrganizationRelationship';
import { HttpFile } from '../http/http';

/**
* Definition of the list of properties defined in 'hyperflex.LocalCredentialPolicy', excluding properties defined in parent classes.
*/
export class HyperflexLocalCredentialPolicyAllOf {
    /**
    * Indicates if Hypervisor password is the factory set default password. For HyperFlex Data Platform versions 3.0 or higher, enable this if the default password was not changed on the Hypervisor. It is required to supply a new custom Hypervisor password that will be applied to the Hypervisor during deployment. For HyperFlex Data Platform versions prior to 3.0 release, this setting has no effect and the default password will be used for initial install. The Hypervisor password should be changed after deployment.
    */
    'factoryHypervisorPassword'?: boolean;
    /**
    * HyperFlex storage controller VM password must contain a minimum of 10 characters, with at least 1 lowercase, 1 uppercase, 1 numeric, and 1 of these -_@#$%^&*! special characters.
    */
    'hxdpRootPwd'?: string;
    /**
    * Hypervisor administrator username must contain only alphanumeric characters. Use the root account for ESXi deployments.
    */
    'hypervisorAdmin'?: string;
    /**
    * The ESXi root password. For HyperFlex Data Platform 3.0 or later, if the factory default password was not manually changed, you must set a new custom password. If the password was manually changed, you must not enable the factory default password property and provide the current hypervisor password. Note - All HyperFlex nodes require the same hypervisor password for installation. For HyperFlex Data Platform prior to 3.0, use the default password \"Cisco123\" for newly manufactured HyperFlex servers. A custom password should only be entered if hypervisor credentials were manually changed prior to deployment.
    */
    'hypervisorAdminPwd'?: string;
    /**
    * Indicates whether the value of the 'hxdpRootPwd' property has been set.
    */
    'isHxdpRootPwdSet'?: boolean;
    /**
    * Indicates whether the value of the 'hypervisorAdminPwd' property has been set.
    */
    'isHypervisorAdminPwdSet'?: boolean;
    /**
    * An array of relationships to hyperflexClusterProfile resources.
    */
    'clusterProfiles'?: Array<HyperflexClusterProfileRelationship>;
    'organization'?: OrganizationOrganizationRelationship;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "factoryHypervisorPassword",
            "baseName": "FactoryHypervisorPassword",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "hxdpRootPwd",
            "baseName": "HxdpRootPwd",
            "type": "string",
            "format": ""
        },
        {
            "name": "hypervisorAdmin",
            "baseName": "HypervisorAdmin",
            "type": "string",
            "format": ""
        },
        {
            "name": "hypervisorAdminPwd",
            "baseName": "HypervisorAdminPwd",
            "type": "string",
            "format": ""
        },
        {
            "name": "isHxdpRootPwdSet",
            "baseName": "IsHxdpRootPwdSet",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isHypervisorAdminPwdSet",
            "baseName": "IsHypervisorAdminPwdSet",
            "type": "boolean",
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
        return HyperflexLocalCredentialPolicyAllOf.attributeTypeMap;
    }
    
    public constructor() {
    }
}

