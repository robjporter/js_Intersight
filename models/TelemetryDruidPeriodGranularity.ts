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

import { TelemetryDruidBaseGranularity } from './TelemetryDruidBaseGranularity';
import { TelemetryDruidPeriodGranularityAllOf } from './TelemetryDruidPeriodGranularityAllOf';
import { HttpFile } from '../http/http';

/**
* Period granularities are specified as arbitrary period combinations of years, months, weeks, hours, minutes and seconds (e.g. P2W, P3M, PT1H30M, PT0.750S) in ISO8601 format. They support specifying a time zone which determines where period boundaries start as well as the timezone of the returned timestamps. By default, years start on the first of January, months start on the first of the month and weeks start on Mondays unless an origin is specified. Time zone is optional (defaults to UTC). Origin is optional (defaults to 1970-01-01T00:00:00 in the given time zone).
*/
export class TelemetryDruidPeriodGranularity {
    /**
    * the type of granularity.
    */
    'type': string;
    /**
    * The period in ISO 8601 format. Examples are P2W, P3M, PT1H30M, PT0.750S.
    */
    'period': string;
    /**
    * An optional value specifying the time zone. Standard [IANA time zones](http://joda-time.sourceforge.net/timezones.html) are supported.
    */
    'timeZone'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "string",
            "format": ""
        },
        {
            "name": "period",
            "baseName": "period",
            "type": "string",
            "format": ""
        },
        {
            "name": "timeZone",
            "baseName": "timeZone",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return TelemetryDruidPeriodGranularity.attributeTypeMap;
    }
    
    public constructor() {
    }
}

