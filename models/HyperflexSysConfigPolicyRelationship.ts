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
import { HyperflexSysConfigPolicy } from './HyperflexSysConfigPolicy';
import { MoBaseMoRelationship } from './MoBaseMoRelationship';
import { MoMoRef } from './MoMoRef';
import { MoTag } from './MoTag';
import { MoVersionContext } from './MoVersionContext';
import { OrganizationOrganizationRelationship } from './OrganizationOrganizationRelationship';
import { HttpFile } from '../http/http';

/**
* A relationship to the 'hyperflex.SysConfigPolicy' resource, or the expanded 'hyperflex.SysConfigPolicy' resource, or the 'null' value.
*/
export class HyperflexSysConfigPolicyRelationship {
    /**
    * The Account ID for this managed object.
    */
    'accountMoid'?: string;
    /**
    * The concrete type of this complex type. Its value must be the same as the 'objectType' property. The OpenAPI document references this property as a discriminator value.
    */
    'classId': string;
    /**
    * The time when this managed object was created.
    */
    'createTime'?: Date;
    /**
    * The DomainGroup ID for this managed object.
    */
    'domainGroupMoid'?: string;
    /**
    * The time when this managed object was last modified.
    */
    'modTime'?: Date;
    /**
    * The unique identifier of this Managed Object instance.
    */
    'moid'?: string;
    /**
    * The fully-qualified type of this managed object, i.e. the class name. This property is optional. The ObjectType is implied from the URL path. If specified, the value of objectType must match the class name specified in the URL path.
    */
    'objectType': string;
    'owners'?: Array<string>;
    /**
    * Intersight provides pre-built workflows, tasks and policies to end users through global catalogs. Objects that are made available through global catalogs are said to have a 'shared' ownership. Shared objects are either made globally available to all end users or restricted to end users based on their license entitlement. Users can use this property to differentiate the scope (global or a specific license tier) to which a shared MO belongs.
    */
    'sharedScope'?: string;
    'tags'?: Array<MoTag>;
    'versionContext'?: MoVersionContext;
    /**
    * An array of relationships to moBaseMo resources.
    */
    'ancestors'?: Array<MoBaseMoRelationship>;
    'parent'?: MoBaseMoRelationship;
    /**
    * An array of relationships to moBaseMo resources.
    */
    'permissionResources'?: Array<MoBaseMoRelationship>;
    /**
    * a map of display names for a resource.
    */
    'displayNames'?: { [key: string]: Array<string>; };
    /**
    * Description of the policy.
    */
    'description'?: string;
    /**
    * Name of the concrete policy.
    */
    'name'?: string;
    /**
    * The DNS Search Domain Name. This setting applies to HyperFlex Data Platform 3.0 or later only.
    */
    'dnsDomainName'?: string;
    'dnsServers'?: Array<string>;
    'ntpServers'?: Array<string>;
    /**
    * The timezone of the HyperFlex cluster's system clock.
    */
    'timezone'?: HyperflexSysConfigPolicyRelationshipTimezoneEnum;
    /**
    * An array of relationships to hyperflexClusterProfile resources.
    */
    'clusterProfiles'?: Array<HyperflexClusterProfileRelationship>;
    'organization'?: OrganizationOrganizationRelationship;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "accountMoid",
            "baseName": "AccountMoid",
            "type": "string",
            "format": ""
        },
        {
            "name": "classId",
            "baseName": "ClassId",
            "type": "string",
            "format": ""
        },
        {
            "name": "createTime",
            "baseName": "CreateTime",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "domainGroupMoid",
            "baseName": "DomainGroupMoid",
            "type": "string",
            "format": ""
        },
        {
            "name": "modTime",
            "baseName": "ModTime",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "moid",
            "baseName": "Moid",
            "type": "string",
            "format": ""
        },
        {
            "name": "objectType",
            "baseName": "ObjectType",
            "type": "string",
            "format": ""
        },
        {
            "name": "owners",
            "baseName": "Owners",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "sharedScope",
            "baseName": "SharedScope",
            "type": "string",
            "format": ""
        },
        {
            "name": "tags",
            "baseName": "Tags",
            "type": "Array<MoTag>",
            "format": ""
        },
        {
            "name": "versionContext",
            "baseName": "VersionContext",
            "type": "MoVersionContext",
            "format": ""
        },
        {
            "name": "ancestors",
            "baseName": "Ancestors",
            "type": "Array<MoBaseMoRelationship>",
            "format": ""
        },
        {
            "name": "parent",
            "baseName": "Parent",
            "type": "MoBaseMoRelationship",
            "format": ""
        },
        {
            "name": "permissionResources",
            "baseName": "PermissionResources",
            "type": "Array<MoBaseMoRelationship>",
            "format": ""
        },
        {
            "name": "displayNames",
            "baseName": "DisplayNames",
            "type": "{ [key: string]: Array<string>; }",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "Description",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "Name",
            "type": "string",
            "format": ""
        },
        {
            "name": "dnsDomainName",
            "baseName": "DnsDomainName",
            "type": "string",
            "format": ""
        },
        {
            "name": "dnsServers",
            "baseName": "DnsServers",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "ntpServers",
            "baseName": "NtpServers",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "timezone",
            "baseName": "Timezone",
            "type": "HyperflexSysConfigPolicyRelationshipTimezoneEnum",
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
        return HyperflexSysConfigPolicyRelationship.attributeTypeMap;
    }
    
    public constructor() {
    }
}


export type HyperflexSysConfigPolicyRelationshipTimezoneEnum = "Pacific/Niue" | "Pacific/Pago_Pago" | "Pacific/Honolulu" | "Pacific/Rarotonga" | "Pacific/Tahiti" | "Pacific/Marquesas" | "America/Anchorage" | "Pacific/Gambier" | "America/Los_Angeles" | "America/Tijuana" | "America/Vancouver" | "America/Whitehorse" | "Pacific/Pitcairn" | "America/Dawson_Creek" | "America/Denver" | "America/Edmonton" | "America/Hermosillo" | "America/Mazatlan" | "America/Phoenix" | "America/Yellowknife" | "America/Belize" | "America/Chicago" | "America/Costa_Rica" | "America/El_Salvador" | "America/Guatemala" | "America/Managua" | "America/Mexico_City" | "America/Regina" | "America/Tegucigalpa" | "America/Winnipeg" | "Pacific/Galapagos" | "America/Bogota" | "America/Cancun" | "America/Cayman" | "America/Guayaquil" | "America/Havana" | "America/Iqaluit" | "America/Jamaica" | "America/Lima" | "America/Nassau" | "America/New_York" | "America/Panama" | "America/Port-au-Prince" | "America/Rio_Branco" | "America/Toronto" | "Pacific/Easter" | "America/Caracas" | "America/Asuncion" | "America/Barbados" | "America/Boa_Vista" | "America/Campo_Grande" | "America/Cuiaba" | "America/Curacao" | "America/Grand_Turk" | "America/Guyana" | "America/Halifax" | "America/La_Paz" | "America/Manaus" | "America/Martinique" | "America/Port_of_Spain" | "America/Porto_Velho" | "America/Puerto_Rico" | "America/Santo_Domingo" | "America/Thule" | "Atlantic/Bermuda" | "America/St_Johns" | "America/Araguaina" | "America/Argentina/Buenos_Aires" | "America/Bahia" | "America/Belem" | "America/Cayenne" | "America/Fortaleza" | "America/Godthab" | "America/Maceio" | "America/Miquelon" | "America/Montevideo" | "America/Paramaribo" | "America/Recife" | "America/Santiago" | "America/Sao_Paulo" | "Antarctica/Palmer" | "Antarctica/Rothera" | "Atlantic/Stanley" | "America/Noronha" | "Atlantic/South_Georgia" | "America/Scoresbysund" | "Atlantic/Azores" | "Atlantic/Cape_Verde" | "Africa/Abidjan" | "Africa/Accra" | "Africa/Bissau" | "Africa/Casablanca" | "Africa/El_Aaiun" | "Africa/Monrovia" | "America/Danmarkshavn" | "Atlantic/Canary" | "Atlantic/Faroe" | "Atlantic/Reykjavik" | "Etc/GMT" | "Europe/Dublin" | "Europe/Lisbon" | "Europe/London" | "Africa/Algiers" | "Africa/Ceuta" | "Africa/Lagos" | "Africa/Ndjamena" | "Africa/Tunis" | "Africa/Windhoek" | "Europe/Amsterdam" | "Europe/Andorra" | "Europe/Belgrade" | "Europe/Berlin" | "Europe/Brussels" | "Europe/Budapest" | "Europe/Copenhagen" | "Europe/Gibraltar" | "Europe/Luxembourg" | "Europe/Madrid" | "Europe/Malta" | "Europe/Monaco" | "Europe/Oslo" | "Europe/Paris" | "Europe/Prague" | "Europe/Rome" | "Europe/Stockholm" | "Europe/Tirane" | "Europe/Vienna" | "Europe/Warsaw" | "Europe/Zurich" | "Africa/Cairo" | "Africa/Johannesburg" | "Africa/Maputo" | "Africa/Tripoli" | "Asia/Amman" | "Asia/Beirut" | "Asia/Damascus" | "Asia/Gaza" | "Asia/Jerusalem" | "Asia/Nicosia" | "Europe/Athens" | "Europe/Bucharest" | "Europe/Chisinau" | "Europe/Helsinki" | "Europe/Istanbul" | "Europe/Kaliningrad" | "Europe/Kiev" | "Europe/Riga" | "Europe/Sofia" | "Europe/Tallinn" | "Europe/Vilnius" | "Africa/Khartoum" | "Africa/Nairobi" | "Antarctica/Syowa" | "Asia/Baghdad" | "Asia/Qatar" | "Asia/Riyadh" | "Europe/Minsk" | "Europe/Moscow" | "Asia/Tehran" | "Asia/Baku" | "Asia/Dubai" | "Asia/Tbilisi" | "Asia/Yerevan" | "Europe/Samara" | "Indian/Mahe" | "Indian/Mauritius" | "Indian/Reunion" | "Asia/Kabul" | "Antarctica/Mawson" | "Asia/Aqtau" | "Asia/Aqtobe" | "Asia/Ashgabat" | "Asia/Dushanbe" | "Asia/Karachi" | "Asia/Tashkent" | "Asia/Yekaterinburg" | "Indian/Kerguelen" | "Indian/Maldives" | "Asia/Calcutta" | "Asia/Kolkata" | "Asia/Colombo" | "Asia/Katmandu" | "Antarctica/Vostok" | "Asia/Almaty" | "Asia/Bishkek" | "Asia/Dhaka" | "Asia/Omsk" | "Asia/Thimphu" | "Indian/Chagos" | "Asia/Rangoon" | "Indian/Cocos" | "Antarctica/Davis" | "Asia/Bangkok" | "Asia/Hovd" | "Asia/Jakarta" | "Asia/Krasnoyarsk" | "Asia/Saigon" | "Indian/Christmas" | "Antarctica/Casey" | "Asia/Brunei" | "Asia/Choibalsan" | "Asia/Hong_Kong" | "Asia/Irkutsk" | "Asia/Kuala_Lumpur" | "Asia/Macau" | "Asia/Makassar" | "Asia/Manila" | "Asia/Shanghai" | "Asia/Singapore" | "Asia/Taipei" | "Asia/Ulaanbaatar" | "Australia/Perth" | "Asia/Pyongyang" | "Asia/Dili" | "Asia/Jayapura" | "Asia/Seoul" | "Asia/Tokyo" | "Asia/Yakutsk" | "Pacific/Palau" | "Australia/Adelaide" | "Australia/Darwin" | "Antarctica/DumontDUrville" | "Asia/Magadan" | "Asia/Vladivostok" | "Australia/Brisbane" | "Australia/Hobart" | "Australia/Sydney" | "Pacific/Chuuk" | "Pacific/Guam" | "Pacific/Port_Moresby" | "Pacific/Efate" | "Pacific/Guadalcanal" | "Pacific/Kosrae" | "Pacific/Norfolk" | "Pacific/Noumea" | "Pacific/Pohnpei" | "Asia/Kamchatka" | "Pacific/Auckland" | "Pacific/Fiji" | "Pacific/Funafuti" | "Pacific/Kwajalein" | "Pacific/Majuro" | "Pacific/Nauru" | "Pacific/Tarawa" | "Pacific/Wake" | "Pacific/Wallis" | "Pacific/Apia" | "Pacific/Enderbury" | "Pacific/Fakaofo" | "Pacific/Tongatapu" | "Pacific/Kiritimati" ;

