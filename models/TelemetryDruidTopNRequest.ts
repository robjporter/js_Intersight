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

import { TelemetryDruidAggregator } from './TelemetryDruidAggregator';
import { TelemetryDruidBaseRequest } from './TelemetryDruidBaseRequest';
import { TelemetryDruidDataSource } from './TelemetryDruidDataSource';
import { TelemetryDruidDimensionSpec } from './TelemetryDruidDimensionSpec';
import { TelemetryDruidFilter } from './TelemetryDruidFilter';
import { TelemetryDruidGranularity } from './TelemetryDruidGranularity';
import { TelemetryDruidPostAggregator } from './TelemetryDruidPostAggregator';
import { TelemetryDruidQueryContext } from './TelemetryDruidQueryContext';
import { TelemetryDruidTopNMetricSpec } from './TelemetryDruidTopNMetricSpec';
import { TelemetryDruidTopNRequestAllOf } from './TelemetryDruidTopNRequestAllOf';
import { HttpFile } from '../http/http';

/**
* TopN queries return a sorted set of results for the values in a given dimension according to some criteria. Conceptually, they can be thought of as an approximate GroupByQuery over a single dimension with an Ordering spec. TopNs are much faster and resource efficient than GroupBys for this use case. These types of queries take a topN query object and return an array of JSON objects where each object represents a value asked for by the topN query. TopNs are approximate in that each data process will rank their top K results and only return those top K results to the Broker. K, by default in Druid, is max(1000, threshold). In practice, this means that if you ask for the top 1000 items ordered, the correctness of the first ~900 items will be 100%, and the ordering of the results after that is not guaranteed. TopNs can be made more accurate by increasing the threshold.
*/
export class TelemetryDruidTopNRequest {
    /**
    * null
    */
    'queryType': string;
    'dataSource': TelemetryDruidDataSource;
    /**
    * A JSON Object representing ISO-8601 Intervals. This defines the time ranges to run the query over.
    */
    'intervals': Array<string>;
    'granularity': TelemetryDruidGranularity;
    'filter'?: TelemetryDruidFilter;
    'aggregations'?: TelemetryDruidAggregator;
    'postAggregations'?: TelemetryDruidPostAggregator;
    'dimension': TelemetryDruidDimensionSpec;
    /**
    * An integer defining the N in the topN (i.e. how many results you want in the top list).
    */
    'threshold': number;
    'metric': TelemetryDruidTopNMetricSpec;
    'context'?: TelemetryDruidQueryContext;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "queryType",
            "baseName": "queryType",
            "type": "string",
            "format": ""
        },
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
            "name": "granularity",
            "baseName": "granularity",
            "type": "TelemetryDruidGranularity",
            "format": ""
        },
        {
            "name": "filter",
            "baseName": "filter",
            "type": "TelemetryDruidFilter",
            "format": ""
        },
        {
            "name": "aggregations",
            "baseName": "aggregations",
            "type": "TelemetryDruidAggregator",
            "format": ""
        },
        {
            "name": "postAggregations",
            "baseName": "postAggregations",
            "type": "TelemetryDruidPostAggregator",
            "format": ""
        },
        {
            "name": "dimension",
            "baseName": "dimension",
            "type": "TelemetryDruidDimensionSpec",
            "format": ""
        },
        {
            "name": "threshold",
            "baseName": "threshold",
            "type": "number",
            "format": ""
        },
        {
            "name": "metric",
            "baseName": "metric",
            "type": "TelemetryDruidTopNMetricSpec",
            "format": ""
        },
        {
            "name": "context",
            "baseName": "context",
            "type": "TelemetryDruidQueryContext",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return TelemetryDruidTopNRequest.attributeTypeMap;
    }
    
    public constructor() {
    }
}
