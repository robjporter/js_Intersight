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

import { FirmwareHttpServer } from './FirmwareHttpServer';
import { HttpFile } from '../http/http';

/**
* Definition of the list of properties defined in 'firmware.DirectDownload', excluding properties defined in parent classes.
*/
export class FirmwareDirectDownloadAllOf {
    'httpServer'?: FirmwareHttpServer;
    /**
    * Source type referring the image to be downloaded from CCO or from a local https server.
    */
    'imageSource'?: FirmwareDirectDownloadAllOfImageSourceEnum;
    /**
    * Indicates whether the value of the 'password' property has been set.
    */
    'isPasswordSet'?: boolean;
    /**
    * Password as configured on the local https server.
    */
    'password'?: string;
    /**
    * Option to control the upgrade, e.g., sd_upgrade_mount_only - download the image into sd and upgrade wait for the server on-next boot.
    */
    'upgradeoption'?: FirmwareDirectDownloadAllOfUpgradeoptionEnum;
    /**
    * Username as configured on the local https server.
    */
    'username'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "httpServer",
            "baseName": "HttpServer",
            "type": "FirmwareHttpServer",
            "format": ""
        },
        {
            "name": "imageSource",
            "baseName": "ImageSource",
            "type": "FirmwareDirectDownloadAllOfImageSourceEnum",
            "format": ""
        },
        {
            "name": "isPasswordSet",
            "baseName": "IsPasswordSet",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "password",
            "baseName": "Password",
            "type": "string",
            "format": ""
        },
        {
            "name": "upgradeoption",
            "baseName": "Upgradeoption",
            "type": "FirmwareDirectDownloadAllOfUpgradeoptionEnum",
            "format": ""
        },
        {
            "name": "username",
            "baseName": "Username",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return FirmwareDirectDownloadAllOf.attributeTypeMap;
    }
    
    public constructor() {
    }
}


export type FirmwareDirectDownloadAllOfImageSourceEnum = "cisco" | "localHttp" ;
export type FirmwareDirectDownloadAllOfUpgradeoptionEnum = "sd_upgrade_mount_only" | "sd_download_only" | "sd_upgrade_only" | "sd_upgrade_full" ;

