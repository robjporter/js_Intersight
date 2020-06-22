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
* Definition of the list of properties defined in 'niatelemetry.NiaFeatureUsage', excluding properties defined in parent classes.
*/
export class NiatelemetryNiaFeatureUsageAllOf {
    /**
    * Number of APIC controllers. This determines the value of controllers for the fabric.
    */
    'apicCount'?: number;
    /**
    * ACI APPs feature usage. This determines the total number of apps installed on the fabric.
    */
    'appCenterCount'?: number;
    /**
    * AVE feature usage. This determines if ACI virtual edge feature is enabled or disabled.
    */
    'ave'?: string;
    /**
    * Number of BDs. This determines the total number of Broadcast Domains across the fabric.
    */
    'bdCount'?: number;
    /**
    * Consistency checker application usage. This determines if the fabric has Consistency checker application installed.
    */
    'consistencyCheckerApp'?: string;
    /**
    * Number of contracts. This determines the total number of Contracts configured across the fabric.
    */
    'contractCount'?: number;
    /**
    * DNS feature usage. This determines the total number of DNS configurations across the fabric.
    */
    'dnsCount'?: number;
    /**
    * Eigrp feature usage. This determines the total number of EIGRP sessions across the fabric.
    */
    'eigrpCount'?: number;
    /**
    * Number of EPGs. This determines the total number of End Point Groups across the fabric.
    */
    'epgCount'?: number;
    /**
    * Hsrp feature usage. This determines the total number of HSRP sessions across the fabric.
    */
    'hsrpCount'?: number;
    /**
    * Ibgp feature usage. This determines the total number of BGP sessions across the fabric.
    */
    'ibgpCount'?: number;
    /**
    * IGMP Access List feature usage. This determines the total number of IGMP access lists configured across the fabric.
    */
    'igmpAccessListCount'?: number;
    /**
    * IGMP Snooping feature usage. This determines if this feature is enabled or disabled.
    */
    'igmpSnoop'?: string;
    /**
    * Number of IP based EPGs. This determines the total number of IP End Point Groups across the fabric.
    */
    'ipEpgCount'?: number;
    /**
    * Isis feature usage. TThis determines the total number of ISIS sessions across the fabric.
    */
    'isisCount'?: number;
    /**
    * L2Multicast feature usage. This determines if this Layer 2 Multicast feature is being enabled / disabled on the fabric.
    */
    'l2Multicast'?: string;
    /**
    * Number of Leafs. This determines the total number of Leaf switches in the fabric.
    */
    'leafCount'?: number;
    /**
    * Maintenance Mode feature usage. This determines the number of switches that are currently in maintenance mode.
    */
    'maintenanceModeCount'?: number;
    /**
    * Management over IPv6 feature usage. This determines the total number of IPv6 configurtaions in the fabric.
    */
    'managementOverV6Count'?: number;
    /**
    * NIR application usage. This determines if the fabric has NIR application installed.
    */
    'nir'?: string;
    /**
    * Opflex for Kubernetes feature usage. This determines the total number of VMM sessions of type kubernetes.
    */
    'opflexKubernetesCount'?: number;
    /**
    * Ospf feature usage. This determines the total number of OSPF sessions across the fabric.
    */
    'ospfCount'?: number;
    /**
    * POE feature usage. This determines the total number of POE configurations across the fabric.
    */
    'poeCount'?: number;
    /**
    * QinVniTunnel feature usage. This determines if the qinVniTunnel feature is being used on the fabric and the scale of it.
    */
    'qinVniTunnelCount'?: number;
    /**
    * Number of remote Leafs. This determines if this feature is being enabled or disabled.
    */
    'remoteLeafCount'?: number;
    /**
    * SCVMM feature usage. This determines the total number of SCVMM configurations in the fabric.
    */
    'scvmmCount'?: number;
    /**
    * SharedL3Out feature usage. This determines the total number of Shared L3 out configured across the fabric.
    */
    'sharedL3OutCount'?: number;
    /**
    * Smart callhome feature usage. This determines if this feature is being enabled or disabled.
    */
    'smartCallHome'?: string;
    /**
    * SNMP feature usage. This determines if this feature is enabled or disabled.
    */
    'snmp'?: string;
    /**
    * Number of Spines. This determines the total number of spine switches in the fabric.
    */
    'spineCount'?: number;
    /**
    * Ssh over IPv6 feature usage. This determines the total number of IPv6 configurtaions in the fabric.
    */
    'sshOverV6Count'?: number;
    /**
    * Syslog over IPv6 feature usage. This determines the total number of IPv6 configurtaions in the fabric.
    */
    'syslogOverV6Count'?: number;
    /**
    * Number of tenants. This determines the total number of tenants configured across the fabric.
    */
    'tenantCount'?: number;
    /**
    * Number of tier 2 Leafs. This determines the total number of tier 2 Leaf switches in the fabric.
    */
    'tierTwoLeafCount'?: number;
    /**
    * TWAMP feature usage. This determines if this feature is enabled or disabled.
    */
    'twamp'?: string;
    /**
    * VMM uSegmentation feature usage. This determines if microsegmentation feature is enabled or disabled.
    */
    'useg'?: string;
    /**
    * Virtual pod feature usage. This determines the total number of virtual POD configurations in the fabrics.
    */
    'vpodCount'?: number;
    'registeredDevice'?: AssetDeviceRegistrationRelationship;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "apicCount",
            "baseName": "ApicCount",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "appCenterCount",
            "baseName": "AppCenterCount",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "ave",
            "baseName": "Ave",
            "type": "string",
            "format": ""
        },
        {
            "name": "bdCount",
            "baseName": "BdCount",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "consistencyCheckerApp",
            "baseName": "ConsistencyCheckerApp",
            "type": "string",
            "format": ""
        },
        {
            "name": "contractCount",
            "baseName": "ContractCount",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "dnsCount",
            "baseName": "DnsCount",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "eigrpCount",
            "baseName": "EigrpCount",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "epgCount",
            "baseName": "EpgCount",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "hsrpCount",
            "baseName": "HsrpCount",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "ibgpCount",
            "baseName": "IbgpCount",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "igmpAccessListCount",
            "baseName": "IgmpAccessListCount",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "igmpSnoop",
            "baseName": "IgmpSnoop",
            "type": "string",
            "format": ""
        },
        {
            "name": "ipEpgCount",
            "baseName": "IpEpgCount",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "isisCount",
            "baseName": "IsisCount",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "l2Multicast",
            "baseName": "L2Multicast",
            "type": "string",
            "format": ""
        },
        {
            "name": "leafCount",
            "baseName": "LeafCount",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "maintenanceModeCount",
            "baseName": "MaintenanceModeCount",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "managementOverV6Count",
            "baseName": "ManagementOverV6Count",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "nir",
            "baseName": "Nir",
            "type": "string",
            "format": ""
        },
        {
            "name": "opflexKubernetesCount",
            "baseName": "OpflexKubernetesCount",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "ospfCount",
            "baseName": "OspfCount",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "poeCount",
            "baseName": "PoeCount",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "qinVniTunnelCount",
            "baseName": "QinVniTunnelCount",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "remoteLeafCount",
            "baseName": "RemoteLeafCount",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "scvmmCount",
            "baseName": "ScvmmCount",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "sharedL3OutCount",
            "baseName": "SharedL3OutCount",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "smartCallHome",
            "baseName": "SmartCallHome",
            "type": "string",
            "format": ""
        },
        {
            "name": "snmp",
            "baseName": "Snmp",
            "type": "string",
            "format": ""
        },
        {
            "name": "spineCount",
            "baseName": "SpineCount",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "sshOverV6Count",
            "baseName": "SshOverV6Count",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "syslogOverV6Count",
            "baseName": "SyslogOverV6Count",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "tenantCount",
            "baseName": "TenantCount",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "tierTwoLeafCount",
            "baseName": "TierTwoLeafCount",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "twamp",
            "baseName": "Twamp",
            "type": "string",
            "format": ""
        },
        {
            "name": "useg",
            "baseName": "Useg",
            "type": "string",
            "format": ""
        },
        {
            "name": "vpodCount",
            "baseName": "VpodCount",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "registeredDevice",
            "baseName": "RegisteredDevice",
            "type": "AssetDeviceRegistrationRelationship",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return NiatelemetryNiaFeatureUsageAllOf.attributeTypeMap;
    }
    
    public constructor() {
    }
}

