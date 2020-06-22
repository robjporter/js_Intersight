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

import { MoBaseMo } from './MoBaseMo';
import { MoBaseMoRelationship } from './MoBaseMoRelationship';
import { MoTag } from './MoTag';
import { MoVersionContext } from './MoVersionContext';
import { NiaapiSoftwareEolAllOf } from './NiaapiSoftwareEolAllOf';
import { HttpFile } from '../http/http';

/**
* This contains the end of life notice of software release.
*/
export class NiaapiSoftwareEol extends MoBaseMo {
    /**
    * String contains the Release versions affected by this notice, seperated by comma.
    */
    'affectedVersions'?: string;
    /**
    * Date time of this notice Announced.
    */
    'announcementDate'?: Date;
    /**
    * Epoch time of this notice Announced.
    */
    'announcementDateEpoch'?: number;
    /**
    * The bulletinno of this software release end of life notice.
    */
    'bulletinNo'?: string;
    /**
    * The description of this software release end of life notice.
    */
    'description'?: string;
    /**
    * Date time of End of New service attachment .
    */
    'endofNewServiceAttachmentDate'?: Date;
    /**
    * Epoch time of End of New service attachment .
    */
    'endofNewServiceAttachmentDateEpoch'?: number;
    /**
    * Date time of End of Renewal of service contract .
    */
    'endofServiceContractRenewalDate'?: Date;
    /**
    * Epoch time of End of Renewal of service contract .
    */
    'endofServiceContractRenewalDateEpoch'?: number;
    /**
    * Date time of End of Maintenance.
    */
    'endofSwMaintenanceDate'?: Date;
    /**
    * Epoch time of End of Maintenance.
    */
    'endofSwMaintenanceDateEpoch'?: number;
    /**
    * The title of this software release end of life notice.
    */
    'headline'?: string;
    /**
    * Date time of Last day of Support .
    */
    'lastDateofSupport'?: Date;
    /**
    * Epoch time of Last day of Support .
    */
    'lastDateofSupportEpoch'?: number;
    /**
    * Date time of Lastship Date.
    */
    'lastShipDate'?: Date;
    /**
    * Epoch time of Lastship Date.
    */
    'lastShipDateEpoch'?: number;
    /**
    * The URL of this migration notice.
    */
    'migrationUrl'?: string;
    /**
    * Software end of life notice URL link to the notice webpage.
    */
    'softwareEolUrl'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "affectedVersions",
            "baseName": "AffectedVersions",
            "type": "string",
            "format": ""
        },
        {
            "name": "announcementDate",
            "baseName": "AnnouncementDate",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "announcementDateEpoch",
            "baseName": "AnnouncementDateEpoch",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "bulletinNo",
            "baseName": "BulletinNo",
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
            "name": "endofNewServiceAttachmentDate",
            "baseName": "EndofNewServiceAttachmentDate",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "endofNewServiceAttachmentDateEpoch",
            "baseName": "EndofNewServiceAttachmentDateEpoch",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "endofServiceContractRenewalDate",
            "baseName": "EndofServiceContractRenewalDate",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "endofServiceContractRenewalDateEpoch",
            "baseName": "EndofServiceContractRenewalDateEpoch",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "endofSwMaintenanceDate",
            "baseName": "EndofSwMaintenanceDate",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "endofSwMaintenanceDateEpoch",
            "baseName": "EndofSwMaintenanceDateEpoch",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "headline",
            "baseName": "Headline",
            "type": "string",
            "format": ""
        },
        {
            "name": "lastDateofSupport",
            "baseName": "LastDateofSupport",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "lastDateofSupportEpoch",
            "baseName": "LastDateofSupportEpoch",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "lastShipDate",
            "baseName": "LastShipDate",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "lastShipDateEpoch",
            "baseName": "LastShipDateEpoch",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "migrationUrl",
            "baseName": "MigrationUrl",
            "type": "string",
            "format": ""
        },
        {
            "name": "softwareEolUrl",
            "baseName": "SoftwareEolUrl",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(NiaapiSoftwareEol.attributeTypeMap);
    }
    
    public constructor() {
        super();
    }
}
