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

import { IamEndPointPasswordPropertiesAllOf } from './IamEndPointPasswordPropertiesAllOf';
import { MoBaseComplexType } from './MoBaseComplexType';
import { HttpFile } from '../http/http';

/**
* Password properties for endpoint users.
*/
export class IamEndPointPasswordProperties extends MoBaseComplexType {
    /**
    * Enables password expiry on the endpoint.
    */
    'enablePasswordExpiry'?: boolean;
    /**
    * Enables a strong password policy Strong password requirements: A. The password must have a minimum of 8 and a maximum of 20 characters. B. The password must not contain the User's Name. C. The password must contain characters from three of the following four categories. 1) English uppercase characters (A through Z). 2) English lowercase characters (a through z). 3) Base 10 digits (0 through 9). 4) Non-alphabetic characters (! , @, #, $, %, ^, &, *, -, _, +, =).
    */
    'enforceStrongPassword'?: boolean;
    /**
    * User password will always be sent to endpoint device. If the option is not selected, then users password will be sent to endpoint device if password is changed for existing users and for new users.
    */
    'forceSendPassword'?: boolean;
    /**
    * Time period until when you can use the existing password, after it expires.
    */
    'gracePeriod'?: number;
    /**
    * The duration by when the password will expire.
    */
    'notificationPeriod'?: number;
    /**
    * Set time period for password expiration. Value should be greater than notification period and grace period.
    */
    'passwordExpiryDuration'?: number;
    /**
    * Tracks password change history. Specifies in number of instances, that the new password was already used.
    */
    'passwordHistory'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "enablePasswordExpiry",
            "baseName": "EnablePasswordExpiry",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "enforceStrongPassword",
            "baseName": "EnforceStrongPassword",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "forceSendPassword",
            "baseName": "ForceSendPassword",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "gracePeriod",
            "baseName": "GracePeriod",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "notificationPeriod",
            "baseName": "NotificationPeriod",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "passwordExpiryDuration",
            "baseName": "PasswordExpiryDuration",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "passwordHistory",
            "baseName": "PasswordHistory",
            "type": "number",
            "format": "int64"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(IamEndPointPasswordProperties.attributeTypeMap);
    }
    
    public constructor() {
        super();
    }
}

