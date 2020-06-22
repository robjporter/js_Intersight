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
import { VmediaMappingAllOf } from './VmediaMappingAllOf';
import { HttpFile } from '../http/http';

/**
* Virtual Media mapping settings required to map images from remote server.
*/
export class VmediaMapping extends MoBaseComplexType {
    /**
    * Type of Authentication protocol when CIFS is used for communication with the remote server.
    */
    'authenticationProtocol'?: VmediaMappingAuthenticationProtocolEnum;
    /**
    * Type of remote Virtual Media device.
    */
    'deviceType'?: VmediaMappingDeviceTypeEnum;
    /**
    * IP address or hostname of the remote server.
    */
    'hostName'?: string;
    /**
    * Indicates whether the value of the 'password' property has been set.
    */
    'isPasswordSet'?: boolean;
    /**
    * Mount options for the Virtual Media mapping. The field can be left blank or filled in a comma separated list with the following options.\\n For NFS, supported options are ro, rw, nolock, noexec, soft, port=VALUE, timeo=VALUE, retry=VALUE.\\n For CIFS, supported options are soft, nounix, noserverino, guest.\\n For CIFS version < 3.0, vers=VALUE is mandatory. e.g. vers=2.0\\n For HTTP/HTTPS, the only supported option is noauto.
    */
    'mountOptions'?: string;
    /**
    * Protocol to use to communicate with the remote server.
    */
    'mountProtocol'?: VmediaMappingMountProtocolEnum;
    /**
    * Password associated with the username.
    */
    'password'?: string;
    /**
    * Name of the remote file. It should be of .img format for HDD Virtual Media mapping and .iso format for CDD Virtual Media mapping.
    */
    'remoteFile'?: string;
    /**
    * URL path to the location of the image on the remote server. The preferred format is '/path'.
    */
    'remotePath'?: string;
    /**
    * Username to log in to the remote server.
    */
    'username'?: string;
    /**
    * Identity of the image for Virtual Media mapping.
    */
    'volumeName'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "authenticationProtocol",
            "baseName": "AuthenticationProtocol",
            "type": "VmediaMappingAuthenticationProtocolEnum",
            "format": ""
        },
        {
            "name": "deviceType",
            "baseName": "DeviceType",
            "type": "VmediaMappingDeviceTypeEnum",
            "format": ""
        },
        {
            "name": "hostName",
            "baseName": "HostName",
            "type": "string",
            "format": ""
        },
        {
            "name": "isPasswordSet",
            "baseName": "IsPasswordSet",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "mountOptions",
            "baseName": "MountOptions",
            "type": "string",
            "format": ""
        },
        {
            "name": "mountProtocol",
            "baseName": "MountProtocol",
            "type": "VmediaMappingMountProtocolEnum",
            "format": ""
        },
        {
            "name": "password",
            "baseName": "Password",
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
            "name": "remotePath",
            "baseName": "RemotePath",
            "type": "string",
            "format": ""
        },
        {
            "name": "username",
            "baseName": "Username",
            "type": "string",
            "format": ""
        },
        {
            "name": "volumeName",
            "baseName": "VolumeName",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(VmediaMapping.attributeTypeMap);
    }
    
    public constructor() {
        super();
    }
}


export type VmediaMappingAuthenticationProtocolEnum = "none" | "ntlm" | "ntlmi" | "ntlmv2" | "ntlmv2i" | "ntlmssp" | "ntlmsspi" ;
export type VmediaMappingDeviceTypeEnum = "cdd" | "hdd" ;
export type VmediaMappingMountProtocolEnum = "nfs" | "cifs" | "http" | "https" ;
