// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi';
import {Configuration} from '../configuration';
import { RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import * as FormData from "form-data";
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {isCodeInRange} from '../util';

import { TelemetryDruidAggregateRequest } from '../models/TelemetryDruidAggregateRequest';
import { TelemetryDruidIntervalResult } from '../models/TelemetryDruidIntervalResult';

/**
 * no description
 */
export class TelemetryApiRequestFactory extends BaseAPIRequestFactory {
	
    /**
     * Endpoint that exposes Druid requests for time series data. This endpoint exposes multiple requests, including Time series, Top N, GroupBy, Scan, Time Boundary, Segment meta-data and datasource meta-data.
     * Perform a Druid time series aggregation request.
     * @param telemetryDruidAggregateRequest The Druid request schema for time series queries.
     */
    public async queryTelemetryTimeSeries(telemetryDruidAggregateRequest: TelemetryDruidAggregateRequest, options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
        // verify required parameter 'telemetryDruidAggregateRequest' is not null or undefined
        if (telemetryDruidAggregateRequest === null || telemetryDruidAggregateRequest === undefined) {
            throw new RequiredError('Required parameter telemetryDruidAggregateRequest was null or undefined when calling queryTelemetryTimeSeries.');
        }

		
		// Path Params
    	const localVarPath = '/telemetry/TimeSeries';

		// Make Request Context
    	const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
	
		// Header Params
	
		// Form Params


		// Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(telemetryDruidAggregateRequest, "TelemetryDruidAggregateRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["cookieAuth"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }
        authMethod = config.authMethods["http_signature"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }
        authMethod = config.authMethods["oAuth2"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}



export class TelemetryApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to queryTelemetryTimeSeries
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async queryTelemetryTimeSeries(response: ResponseContext): Promise<Array<TelemetryDruidIntervalResult> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<TelemetryDruidIntervalResult> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<TelemetryDruidIntervalResult>", ""
            ) as Array<TelemetryDruidIntervalResult>;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "");
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<TelemetryDruidIntervalResult> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<TelemetryDruidIntervalResult>", ""
            ) as Array<TelemetryDruidIntervalResult>;
            return body;
        }

        let body = response.body || "";
    	throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
			
}
