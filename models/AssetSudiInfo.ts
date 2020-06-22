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

import { AssetSudiInfoAllOf } from './AssetSudiInfoAllOf';
import { MoBaseComplexType } from './MoBaseComplexType';
import { X509Certificate } from './X509Certificate';
import { HttpFile } from '../http/http';

/**
* The SUDI is an X.509v3 certificate, which maintains the product identifier and serial number. The identity is implemented at manufacturing and chained to a publicly identifiable root certificate authority. It can be used as an unchangeable identity for configuration, security, auditing, and management. This strucure contains the SUDI information read from the device's Trust Anchor Module (TAM).
*/
export class AssetSudiInfo extends MoBaseComplexType {
    /**
    * The device model (PID) extracted from the X.509 SUDI Leaf Certificate.
    */
    'pid'?: string;
    /**
    * The device SerialNumber extracted from the X.509 SUDI Leaf Certiicate.
    */
    'serialNumber'?: string;
    /**
    * The signature is obtained by taking the base64 encoding of the Serial Number + PID + Status, taking the SHA256 hash and then signing with the SUDI X.509 Leaf Certifiate.
    */
    'signature'?: string;
    /**
    * The validation status of the device.
    */
    'status'?: AssetSudiInfoStatusEnum;
    'sudiCertificate'?: X509Certificate;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "pid",
            "baseName": "Pid",
            "type": "string",
            "format": ""
        },
        {
            "name": "serialNumber",
            "baseName": "SerialNumber",
            "type": "string",
            "format": ""
        },
        {
            "name": "signature",
            "baseName": "Signature",
            "type": "string",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "Status",
            "type": "AssetSudiInfoStatusEnum",
            "format": ""
        },
        {
            "name": "sudiCertificate",
            "baseName": "SudiCertificate",
            "type": "X509Certificate",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(AssetSudiInfo.attributeTypeMap);
    }
    
    public constructor() {
        super();
    }
}


export type AssetSudiInfoStatusEnum = "DeviceStatusUnknown" | "Verified" | "CertificateValidationFailed" | "UnsupportedFirmware" | "UnsupportedHardware" | "DeviceNotResponding" ;

