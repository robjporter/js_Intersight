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

import { HttpFile } from '../http/http';

/**
* The query context is used for various query configuration parameters. Can be used to modify query behavior, including grand totals and zero-filling.
*/
export class TelemetryDruidQueryContext {
    /**
    * Query timeout in milliseconds, beyond which unfinished queries will be cancelled. 0 timeout means no timeout.
    */
    'timeout'?: number;
    /**
    * Query Priority. Queries with higher priority get precedence for computational resources.
    */
    'priority'?: number;
    /**
    * Unique identifier given to this query. If a query ID is set or known, this can be used to cancel the query.
    */
    'queryId'?: string;
    /**
    * Flag indicating whether to leverage the query cache for this query. When set to false, it disables reading from the query cache for this query. When set to true, Apache Druid uses druid.broker.cache.useCache or druid.historical.cache.useCache to determine whether or not to read from the query cache.
    */
    'useCache'?: boolean;
    /**
    * Flag indicating whether to save the results of the query to the query cache. Primarily used for debugging. When set to false, it disables saving the results of this query to the query cache. When set to true, Druid uses druid.broker.cache.populateCache or druid.historical.cache.populateCache to determine whether or not to save the results of this query to the query cache.
    */
    'populateCache'?: boolean;
    /**
    * Flag indicating whether to leverage the result level cache for this query. When set to false, it disables reading from the query cache for this query. When set to true, Druid uses druid.broker.cache.useResultLevelCache to determine whether or not to read from the result-level query cache.
    */
    'useResultLevelCache'?: boolean;
    /**
    * Flag indicating whether to save the results of the query to the result level cache. Primarily used for debugging. When set to false, it disables saving the results of this query to the query cache. When set to true, Druid uses druid.broker.cache.populateResultLevelCache to determine whether or not to save the results of this query to the result-level query cache.
    */
    'populateResultLevelCache'?: boolean;
    /**
    * Return \"by segment\" results. Primarily used for debugging, setting it to true returns results associated with the data segment they came from.
    */
    'bySegment'?: boolean;
    /**
    * Flag indicating whether to \"finalize\" aggregation results. Primarily used for debugging. For instance, the hyperUnique aggregator will return the full HyperLogLog sketch instead of the estimated cardinality when this flag is set to false.
    */
    'finalize'?: boolean;
    /**
    * At the Broker process level, long interval queries (of any type) may be broken into shorter interval queries to parallelize merging more than normal. Broken up queries will use a larger share of cluster resources, but, if you use groupBy \"v1, it may be able to complete faster as a result. Use ISO 8601 periods. For example, if this property is set to P1M (one month), then a query covering a year would be broken into 12 smaller queries. The broker uses its query processing executor service to initiate processing for query chunks, so make sure druid.processing.numThreads is configured appropriately on the broker. groupBy queries do not support chunkPeriod by default, although they do if using the legacy \"v1\" engine. This context is deprecated since it's only useful for groupBy \"v1\", and will be removed in the future releases.
    */
    'chunkPeriod'?: string;
    /**
    * Maximum number of bytes gathered from data processes such as Historicals and realtime processes to execute a query. This parameter can be used to further reduce maxScatterGatherBytes limit at query time.
    */
    'maxScatterGatherBytes'?: number;
    /**
    * Maximum number of bytes queued per query before exerting backpressure on the channel to the data server. Similar to maxScatterGatherBytes, except unlike that configuration, this one will trigger backpressure rather than query failure. Zero means disabled.
    */
    'maxQueuedBytes'?: number;
    /**
    * If true, DateTime is serialized as long in the result returned by Broker and the data transportation between Broker and compute process.
    */
    'serializeDateTimeAsLong'?: boolean;
    /**
    * If true, DateTime is serialized as long in the data transportation between Broker and compute process.
    */
    'serializeDateTimeAsLongInner'?: boolean;
    /**
    * Enable parallel result merging on the Broker. Note that druid.processing.merge.useParallelMergePool must be enabled for this setting to be set to true.
    */
    'enableParallelMerge'?: boolean;
    /**
    * Maximum number of parallel threads to use for parallel result merging on the Broker.
    */
    'parallelMergeParallelism'?: number;
    /**
    * Number of rows to yield per ForkJoinPool merge task for parallel result merging on the Broker, before forking off a new task to continue merging sequences.
    */
    'parallelMergeInitialYieldRows'?: number;
    /**
    * Size of result batches to operate on in ForkJoinPool merge tasks for parallel result merging on the Broker.
    */
    'parallelMergeSmallBatchRows'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "timeout",
            "baseName": "timeout",
            "type": "number",
            "format": ""
        },
        {
            "name": "priority",
            "baseName": "priority",
            "type": "number",
            "format": ""
        },
        {
            "name": "queryId",
            "baseName": "queryId",
            "type": "string",
            "format": ""
        },
        {
            "name": "useCache",
            "baseName": "useCache",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "populateCache",
            "baseName": "populateCache",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "useResultLevelCache",
            "baseName": "useResultLevelCache",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "populateResultLevelCache",
            "baseName": "populateResultLevelCache",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "bySegment",
            "baseName": "bySegment",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "finalize",
            "baseName": "finalize",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "chunkPeriod",
            "baseName": "chunkPeriod",
            "type": "string",
            "format": ""
        },
        {
            "name": "maxScatterGatherBytes",
            "baseName": "maxScatterGatherBytes",
            "type": "number",
            "format": ""
        },
        {
            "name": "maxQueuedBytes",
            "baseName": "maxQueuedBytes",
            "type": "number",
            "format": ""
        },
        {
            "name": "serializeDateTimeAsLong",
            "baseName": "serializeDateTimeAsLong",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "serializeDateTimeAsLongInner",
            "baseName": "serializeDateTimeAsLongInner",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "enableParallelMerge",
            "baseName": "enableParallelMerge",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "parallelMergeParallelism",
            "baseName": "parallelMergeParallelism",
            "type": "number",
            "format": ""
        },
        {
            "name": "parallelMergeInitialYieldRows",
            "baseName": "parallelMergeInitialYieldRows",
            "type": "number",
            "format": ""
        },
        {
            "name": "parallelMergeSmallBatchRows",
            "baseName": "parallelMergeSmallBatchRows",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return TelemetryDruidQueryContext.attributeTypeMap;
    }
    
    public constructor() {
    }
}

