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

import { TelemetryDruidDataSource } from './TelemetryDruidDataSource';
import { TelemetryDruidFilter } from './TelemetryDruidFilter';
import { TelemetryDruidQueryContext } from './TelemetryDruidQueryContext';
import { HttpFile } from '../http/http';

export class TelemetryDruidScanRequestAllOf {
    'dataSource': TelemetryDruidDataSource;
    /**
    * A JSON Object representing ISO-8601 Intervals. This defines the time ranges to run the query over.
    */
    'intervals': Array<string>;
    /**
    * How the results are represented, list, compactedList or valueVector. Currently only list and compactedList are supported.
    */
    'resultFormat'?: TelemetryDruidScanRequestAllOfResultFormatEnum;
    'filter'?: TelemetryDruidFilter;
    /**
    * A String array of dimensions and metrics to scan. If left empty, all dimensions and metrics are returned.
    */
    'columns'?: Array<string>;
    /**
    * The maximum number of rows buffered before being returned to the client.
    */
    'batchSize'?: number;
    /**
    * How many rows to return. If not specified, all rows will be returned.
    */
    'limit'?: number;
    /**
    * The ordering of returned rows based on timestamp. \"ascending\", \"descending\", and \"none\" (default) are supported. Currently, \"ascending\" and \"descending\" are only supported for queries where the __time column is included in the columns field and the requirements outlined in the time ordering section are met.
    */
    'order'?: TelemetryDruidScanRequestAllOfOrderEnum;
    /**
    * Return results consistent with the legacy \"scan-query\" contrib extension. Defaults to the value set by druid.query.scan.legacy, which in turn defaults to false.
    */
    'legacy'?: boolean;
    'context'?: TelemetryDruidQueryContext;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "dataSource",
            "baseName": "dataSource",
            "type": "TelemetryDruidDataSource",
            "format": ""
        },
        {
            "name": "intervals",
            "baseName": "intervals",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "resultFormat",
            "baseName": "resultFormat",
            "type": "TelemetryDruidScanRequestAllOfResultFormatEnum",
            "format": ""
        },
        {
            "name": "filter",
            "baseName": "filter",
            "type": "TelemetryDruidFilter",
            "format": ""
        },
        {
            "name": "columns",
            "baseName": "columns",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "batchSize",
            "baseName": "batchSize",
            "type": "number",
            "format": ""
        },
        {
            "name": "limit",
            "baseName": "limit",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "order",
            "baseName": "order",
            "type": "TelemetryDruidScanRequestAllOfOrderEnum",
            "format": ""
        },
        {
            "name": "legacy",
            "baseName": "legacy",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "context",
            "baseName": "context",
            "type": "TelemetryDruidQueryContext",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return TelemetryDruidScanRequestAllOf.attributeTypeMap;
    }
    
    public constructor() {
    }
}


export type TelemetryDruidScanRequestAllOfResultFormatEnum = "list" | "compactedList" ;
export type TelemetryDruidScanRequestAllOfOrderEnum = "none" | "ascending" | "descending" ;

