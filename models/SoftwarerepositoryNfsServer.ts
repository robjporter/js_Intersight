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

import { SoftwarerepositoryFileServer } from './SoftwarerepositoryFileServer';
import { SoftwarerepositoryNfsServerAllOf } from './SoftwarerepositoryNfsServerAllOf';
import { HttpFile } from '../http/http';

/**
* An external file repository accessible through the NFS protocol.
*/
export class SoftwarerepositoryNfsServer extends SoftwarerepositoryFileServer {
    /**
    * The location to the image file. The accepted format is IP-or-hostname/folder1/folder2/.../imageFile.
    */
    'fileLocation'?: string;
    /**
    * For NFS, leave the field blank or enter one or more comma seperated options from the following.For Example, \" \" , \" ro \" , \" ro , rw \" . * ro. * rw. * nolock. * noexec. * soft. * PORT=VALUE. * timeo=VALUE. * retry=VALUE.
    */
    'mountOptions'?: string;
    /**
    * Filename of the image in the NFS server. For example:ucs-c220m5-huu-3.1.2c.iso.
    */
    'remoteFile'?: string;
    /**
    * Hostname or IP Address of the NFS server.
    */
    'remoteIp'?: string;
    /**
    * Remote directory where the image is present. For example:/share/subfolder.
    */
    'remoteShare'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "fileLocation",
            "baseName": "FileLocation",
            "type": "string",
            "format": ""
        },
        {
            "name": "mountOptions",
            "baseName": "MountOptions",
            "type": "string",
            "format": ""
        },
        {
            "name": "remoteFile",
            "baseName": "RemoteFile",
            "type": "string",
            "format": ""
        },
        {
            "name": "remoteIp",
            "baseName": "RemoteIp",
            "type": "string",
            "format": ""
        },
        {
            "name": "remoteShare",
            "baseName": "RemoteShare",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(SoftwarerepositoryNfsServer.attributeTypeMap);
    }
    
    public constructor() {
        super();
    }
}

