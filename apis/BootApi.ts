// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi';
import {Configuration} from '../configuration';
import { RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import * as FormData from "form-data";
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {isCodeInRange} from '../util';

import { BootDeviceBootMode } from '../models/BootDeviceBootMode';
import { BootDeviceBootModeResponse } from '../models/BootDeviceBootModeResponse';
import { BootPrecisionPolicy } from '../models/BootPrecisionPolicy';
import { BootPrecisionPolicyResponse } from '../models/BootPrecisionPolicyResponse';

/**
 * no description
 */
export class BootApiRequestFactory extends BaseAPIRequestFactory {
	
    /**
     * Create a 'boot.PrecisionPolicy' resource.
     * @param bootPrecisionPolicy The &#39;boot.PrecisionPolicy&#39; resource to create.
     * @param ifMatch For methods that apply server-side changes, and in particular for PUT, If-Match can be used to prevent the lost update problem. It can check if the modification of a resource that the user wants to upload will not override another change that has been done since the original resource was fetched. If the request cannot be fulfilled, the 412 (Precondition Failed) response is returned. When modifying a resource using POST or PUT, the If-Match header must be set to the value of the resource ModTime property after which no lost update problem should occur. For example, a client send a GET request to obtain a resource, which includes the ModTime property. The ModTime indicates the last time the resource was created or modified. The client then sends a POST or PUT request with the If-Match header set to the ModTime property of the resource as obtained in the GET request.
     * @param ifNoneMatch For methods that apply server-side changes, If-None-Match used with the * value can be used to create a resource not known to exist, guaranteeing that another resource creation didn&#39;t happen before, losing the data of the previous put. The request will be processed only if the eventually existing resource&#39;s ETag doesn&#39;t match any of the values listed. Otherwise, the status code 412 (Precondition Failed) is used. The asterisk is a special value representing any resource. It is only useful when creating a resource, usually with PUT, to check if another resource with the identity has already been created before. The comparison with the stored ETag uses the weak comparison algorithm, meaning two resources are considered identical if the content is equivalent - they don&#39;t have to be identical byte for byte.
     */
    public async createBootPrecisionPolicy(bootPrecisionPolicy: BootPrecisionPolicy, ifMatch?: string, ifNoneMatch?: string, options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
        // verify required parameter 'bootPrecisionPolicy' is not null or undefined
        if (bootPrecisionPolicy === null || bootPrecisionPolicy === undefined) {
            throw new RequiredError('Required parameter bootPrecisionPolicy was null or undefined when calling createBootPrecisionPolicy.');
        }

		
		
		
		// Path Params
    	const localVarPath = '/boot/PrecisionPolicies';

		// Make Request Context
    	const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
	
		// Header Params
		requestContext.setHeaderParam("If-Match", ObjectSerializer.serialize(ifMatch, "string", ""));
		requestContext.setHeaderParam("If-None-Match", ObjectSerializer.serialize(ifNoneMatch, "string", ""));
	
		// Form Params


		// Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(bootPrecisionPolicy, "BootPrecisionPolicy", ""),
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

    /**
     * Delete a 'boot.PrecisionPolicy' resource.
     * @param moid The unique Moid identifier of a resource instance.
     */
    public async deleteBootPrecisionPolicy(moid: string, options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
        // verify required parameter 'moid' is not null or undefined
        if (moid === null || moid === undefined) {
            throw new RequiredError('Required parameter moid was null or undefined when calling deleteBootPrecisionPolicy.');
        }

		
		// Path Params
    	const localVarPath = '/boot/PrecisionPolicies/{Moid}'
            .replace('{' + 'Moid' + '}', encodeURIComponent(String(moid)));

		// Make Request Context
    	const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
	
		// Header Params
	
		// Form Params


		// Body Params

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

    /**
     * Read a 'boot.DeviceBootMode' resource.
     * @param moid The unique Moid identifier of a resource instance.
     */
    public async getBootDeviceBootModeByMoid(moid: string, options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
        // verify required parameter 'moid' is not null or undefined
        if (moid === null || moid === undefined) {
            throw new RequiredError('Required parameter moid was null or undefined when calling getBootDeviceBootModeByMoid.');
        }

		
		// Path Params
    	const localVarPath = '/boot/DeviceBootModes/{Moid}'
            .replace('{' + 'Moid' + '}', encodeURIComponent(String(moid)));

		// Make Request Context
    	const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
	
		// Header Params
	
		// Form Params


		// Body Params

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

    /**
     * Read a 'boot.DeviceBootMode' resource.
     * @param filter Filter criteria for the resources to return. A URI with a $filter query option identifies a subset of the entries from the Collection of Entries. The subset is determined by selecting only the Entries that satisfy the predicate expression specified by the $filter option. The expression language that is used in $filter queries supports references to properties and literals. The literal values can be strings enclosed in single quotes, numbers and boolean values (true or false).
     * @param orderby Determines what properties are used to sort the collection of resources.
     * @param top Specifies the maximum number of resources to return in the response.
     * @param skip Specifies the number of resources to skip in the response.
     * @param select Specifies a subset of properties to return.
     * @param expand Specify additional attributes or related resources to return in addition to the primary resources.
     * @param apply Specify one or more transformation operations to perform aggregation on the resources. The transformations are processed in order with the output from a transformation being used as input for the subsequent transformation. The \&quot;$apply\&quot; query takes a sequence of set transformations, separated by forward slashes to express that they are consecutively applied, i.e. the result of each transformation is the input to the next transformation. Supported aggregation methods are \&quot;aggregate\&quot; and \&quot;groupby\&quot;. The **aggregate** transformation takes a comma-separated list of one or more aggregate expressions as parameters and returns a result set with a single instance, representing the aggregated value for all instances in the input set. The **groupby** transformation takes one or two parameters and 1. Splits the initial set into subsets where all instances in a subset have the same values for the grouping properties specified in the first parameter, 2. Applies set transformations to each subset according to the second parameter, resulting in a new set of potentially different structure and cardinality, 3. Ensures that the instances in the result set contain all grouping properties with the correct values for the group, 4. Concatenates the intermediate result sets into one result set. A groupby transformation affects the structure of the result set.
     * @param count The $count query specifies the service should return the count of the matching resources, instead of returning the resources.
     * @param inlinecount The $inlinecount query option allows clients to request an inline count of the matching resources included with the resources in the response.
     * @param at Similar to \&quot;$filter\&quot;, but \&quot;at\&quot; is specifically used to filter versioning information properties for resources to return. A URI with an \&quot;at\&quot; Query Option identifies a subset of the Entries from the Collection of Entries identified by the Resource Path section of the URI. The subset is determined by selecting only the Entries that satisfy the predicate expression specified by the query option. The expression language that is used in at operators supports references to properties and literals. The literal values can be strings enclosed in single quotes, numbers and boolean values (true or false) or any of the additional literal representations shown in the Abstract Type System section.
     * @param tags The &#39;tags&#39; parameter is used to request a summary of the Tag utilization for this resource. When the &#39;tags&#39; parameter is specified, the response provides a list of tag keys, the number of times the key has been used across all documents, and the tag values that have been assigned to the tag key.
     */
    public async getBootDeviceBootModeList(filter?: string, orderby?: string, top?: number, skip?: number, select?: string, expand?: string, apply?: string, count?: boolean, inlinecount?: 'allpages' | 'none', at?: string, tags?: string, options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
		
		
		
		
		
		
		
		
		
		
		
		// Path Params
    	const localVarPath = '/boot/DeviceBootModes';

		// Make Request Context
    	const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (filter !== undefined) {
        	requestContext.setQueryParam("$filter", ObjectSerializer.serialize(filter, "string", ""));
        }
        if (orderby !== undefined) {
        	requestContext.setQueryParam("$orderby", ObjectSerializer.serialize(orderby, "string", ""));
        }
        if (top !== undefined) {
        	requestContext.setQueryParam("$top", ObjectSerializer.serialize(top, "number", "int32"));
        }
        if (skip !== undefined) {
        	requestContext.setQueryParam("$skip", ObjectSerializer.serialize(skip, "number", "int32"));
        }
        if (select !== undefined) {
        	requestContext.setQueryParam("$select", ObjectSerializer.serialize(select, "string", ""));
        }
        if (expand !== undefined) {
        	requestContext.setQueryParam("$expand", ObjectSerializer.serialize(expand, "string", ""));
        }
        if (apply !== undefined) {
        	requestContext.setQueryParam("$apply", ObjectSerializer.serialize(apply, "string", ""));
        }
        if (count !== undefined) {
        	requestContext.setQueryParam("$count", ObjectSerializer.serialize(count, "boolean", ""));
        }
        if (inlinecount !== undefined) {
        	requestContext.setQueryParam("$inlinecount", ObjectSerializer.serialize(inlinecount, "'allpages' | 'none'", ""));
        }
        if (at !== undefined) {
        	requestContext.setQueryParam("at", ObjectSerializer.serialize(at, "string", ""));
        }
        if (tags !== undefined) {
        	requestContext.setQueryParam("tags", ObjectSerializer.serialize(tags, "string", ""));
        }
	
		// Header Params
	
		// Form Params


		// Body Params

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

    /**
     * Read a 'boot.PrecisionPolicy' resource.
     * @param moid The unique Moid identifier of a resource instance.
     */
    public async getBootPrecisionPolicyByMoid(moid: string, options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
        // verify required parameter 'moid' is not null or undefined
        if (moid === null || moid === undefined) {
            throw new RequiredError('Required parameter moid was null or undefined when calling getBootPrecisionPolicyByMoid.');
        }

		
		// Path Params
    	const localVarPath = '/boot/PrecisionPolicies/{Moid}'
            .replace('{' + 'Moid' + '}', encodeURIComponent(String(moid)));

		// Make Request Context
    	const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
	
		// Header Params
	
		// Form Params


		// Body Params

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

    /**
     * Read a 'boot.PrecisionPolicy' resource.
     * @param filter Filter criteria for the resources to return. A URI with a $filter query option identifies a subset of the entries from the Collection of Entries. The subset is determined by selecting only the Entries that satisfy the predicate expression specified by the $filter option. The expression language that is used in $filter queries supports references to properties and literals. The literal values can be strings enclosed in single quotes, numbers and boolean values (true or false).
     * @param orderby Determines what properties are used to sort the collection of resources.
     * @param top Specifies the maximum number of resources to return in the response.
     * @param skip Specifies the number of resources to skip in the response.
     * @param select Specifies a subset of properties to return.
     * @param expand Specify additional attributes or related resources to return in addition to the primary resources.
     * @param apply Specify one or more transformation operations to perform aggregation on the resources. The transformations are processed in order with the output from a transformation being used as input for the subsequent transformation. The \&quot;$apply\&quot; query takes a sequence of set transformations, separated by forward slashes to express that they are consecutively applied, i.e. the result of each transformation is the input to the next transformation. Supported aggregation methods are \&quot;aggregate\&quot; and \&quot;groupby\&quot;. The **aggregate** transformation takes a comma-separated list of one or more aggregate expressions as parameters and returns a result set with a single instance, representing the aggregated value for all instances in the input set. The **groupby** transformation takes one or two parameters and 1. Splits the initial set into subsets where all instances in a subset have the same values for the grouping properties specified in the first parameter, 2. Applies set transformations to each subset according to the second parameter, resulting in a new set of potentially different structure and cardinality, 3. Ensures that the instances in the result set contain all grouping properties with the correct values for the group, 4. Concatenates the intermediate result sets into one result set. A groupby transformation affects the structure of the result set.
     * @param count The $count query specifies the service should return the count of the matching resources, instead of returning the resources.
     * @param inlinecount The $inlinecount query option allows clients to request an inline count of the matching resources included with the resources in the response.
     * @param at Similar to \&quot;$filter\&quot;, but \&quot;at\&quot; is specifically used to filter versioning information properties for resources to return. A URI with an \&quot;at\&quot; Query Option identifies a subset of the Entries from the Collection of Entries identified by the Resource Path section of the URI. The subset is determined by selecting only the Entries that satisfy the predicate expression specified by the query option. The expression language that is used in at operators supports references to properties and literals. The literal values can be strings enclosed in single quotes, numbers and boolean values (true or false) or any of the additional literal representations shown in the Abstract Type System section.
     * @param tags The &#39;tags&#39; parameter is used to request a summary of the Tag utilization for this resource. When the &#39;tags&#39; parameter is specified, the response provides a list of tag keys, the number of times the key has been used across all documents, and the tag values that have been assigned to the tag key.
     */
    public async getBootPrecisionPolicyList(filter?: string, orderby?: string, top?: number, skip?: number, select?: string, expand?: string, apply?: string, count?: boolean, inlinecount?: 'allpages' | 'none', at?: string, tags?: string, options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
		
		
		
		
		
		
		
		
		
		
		
		// Path Params
    	const localVarPath = '/boot/PrecisionPolicies';

		// Make Request Context
    	const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (filter !== undefined) {
        	requestContext.setQueryParam("$filter", ObjectSerializer.serialize(filter, "string", ""));
        }
        if (orderby !== undefined) {
        	requestContext.setQueryParam("$orderby", ObjectSerializer.serialize(orderby, "string", ""));
        }
        if (top !== undefined) {
        	requestContext.setQueryParam("$top", ObjectSerializer.serialize(top, "number", "int32"));
        }
        if (skip !== undefined) {
        	requestContext.setQueryParam("$skip", ObjectSerializer.serialize(skip, "number", "int32"));
        }
        if (select !== undefined) {
        	requestContext.setQueryParam("$select", ObjectSerializer.serialize(select, "string", ""));
        }
        if (expand !== undefined) {
        	requestContext.setQueryParam("$expand", ObjectSerializer.serialize(expand, "string", ""));
        }
        if (apply !== undefined) {
        	requestContext.setQueryParam("$apply", ObjectSerializer.serialize(apply, "string", ""));
        }
        if (count !== undefined) {
        	requestContext.setQueryParam("$count", ObjectSerializer.serialize(count, "boolean", ""));
        }
        if (inlinecount !== undefined) {
        	requestContext.setQueryParam("$inlinecount", ObjectSerializer.serialize(inlinecount, "'allpages' | 'none'", ""));
        }
        if (at !== undefined) {
        	requestContext.setQueryParam("at", ObjectSerializer.serialize(at, "string", ""));
        }
        if (tags !== undefined) {
        	requestContext.setQueryParam("tags", ObjectSerializer.serialize(tags, "string", ""));
        }
	
		// Header Params
	
		// Form Params


		// Body Params

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

    /**
     * Update a 'boot.DeviceBootMode' resource.
     * @param moid The unique Moid identifier of a resource instance.
     * @param bootDeviceBootMode The &#39;boot.DeviceBootMode&#39; resource to update.
     * @param ifMatch For methods that apply server-side changes, and in particular for PUT, If-Match can be used to prevent the lost update problem. It can check if the modification of a resource that the user wants to upload will not override another change that has been done since the original resource was fetched. If the request cannot be fulfilled, the 412 (Precondition Failed) response is returned. When modifying a resource using POST or PUT, the If-Match header must be set to the value of the resource ModTime property after which no lost update problem should occur. For example, a client send a GET request to obtain a resource, which includes the ModTime property. The ModTime indicates the last time the resource was created or modified. The client then sends a POST or PUT request with the If-Match header set to the ModTime property of the resource as obtained in the GET request.
     */
    public async patchBootDeviceBootMode(moid: string, bootDeviceBootMode: BootDeviceBootMode, ifMatch?: string, options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
        // verify required parameter 'moid' is not null or undefined
        if (moid === null || moid === undefined) {
            throw new RequiredError('Required parameter moid was null or undefined when calling patchBootDeviceBootMode.');
        }

		
        // verify required parameter 'bootDeviceBootMode' is not null or undefined
        if (bootDeviceBootMode === null || bootDeviceBootMode === undefined) {
            throw new RequiredError('Required parameter bootDeviceBootMode was null or undefined when calling patchBootDeviceBootMode.');
        }

		
		
		// Path Params
    	const localVarPath = '/boot/DeviceBootModes/{Moid}'
            .replace('{' + 'Moid' + '}', encodeURIComponent(String(moid)));

		// Make Request Context
    	const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
	
		// Header Params
		requestContext.setHeaderParam("If-Match", ObjectSerializer.serialize(ifMatch, "string", ""));
	
		// Form Params


		// Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json",
        
            "application/json-patch+json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(bootDeviceBootMode, "BootDeviceBootMode", ""),
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

    /**
     * Update a 'boot.PrecisionPolicy' resource.
     * @param moid The unique Moid identifier of a resource instance.
     * @param bootPrecisionPolicy The &#39;boot.PrecisionPolicy&#39; resource to update.
     * @param ifMatch For methods that apply server-side changes, and in particular for PUT, If-Match can be used to prevent the lost update problem. It can check if the modification of a resource that the user wants to upload will not override another change that has been done since the original resource was fetched. If the request cannot be fulfilled, the 412 (Precondition Failed) response is returned. When modifying a resource using POST or PUT, the If-Match header must be set to the value of the resource ModTime property after which no lost update problem should occur. For example, a client send a GET request to obtain a resource, which includes the ModTime property. The ModTime indicates the last time the resource was created or modified. The client then sends a POST or PUT request with the If-Match header set to the ModTime property of the resource as obtained in the GET request.
     */
    public async patchBootPrecisionPolicy(moid: string, bootPrecisionPolicy: BootPrecisionPolicy, ifMatch?: string, options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
        // verify required parameter 'moid' is not null or undefined
        if (moid === null || moid === undefined) {
            throw new RequiredError('Required parameter moid was null or undefined when calling patchBootPrecisionPolicy.');
        }

		
        // verify required parameter 'bootPrecisionPolicy' is not null or undefined
        if (bootPrecisionPolicy === null || bootPrecisionPolicy === undefined) {
            throw new RequiredError('Required parameter bootPrecisionPolicy was null or undefined when calling patchBootPrecisionPolicy.');
        }

		
		
		// Path Params
    	const localVarPath = '/boot/PrecisionPolicies/{Moid}'
            .replace('{' + 'Moid' + '}', encodeURIComponent(String(moid)));

		// Make Request Context
    	const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
	
		// Header Params
		requestContext.setHeaderParam("If-Match", ObjectSerializer.serialize(ifMatch, "string", ""));
	
		// Form Params


		// Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json",
        
            "application/json-patch+json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(bootPrecisionPolicy, "BootPrecisionPolicy", ""),
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

    /**
     * Update a 'boot.DeviceBootMode' resource.
     * @param moid The unique Moid identifier of a resource instance.
     * @param bootDeviceBootMode The &#39;boot.DeviceBootMode&#39; resource to update.
     * @param ifMatch For methods that apply server-side changes, and in particular for PUT, If-Match can be used to prevent the lost update problem. It can check if the modification of a resource that the user wants to upload will not override another change that has been done since the original resource was fetched. If the request cannot be fulfilled, the 412 (Precondition Failed) response is returned. When modifying a resource using POST or PUT, the If-Match header must be set to the value of the resource ModTime property after which no lost update problem should occur. For example, a client send a GET request to obtain a resource, which includes the ModTime property. The ModTime indicates the last time the resource was created or modified. The client then sends a POST or PUT request with the If-Match header set to the ModTime property of the resource as obtained in the GET request.
     */
    public async updateBootDeviceBootMode(moid: string, bootDeviceBootMode: BootDeviceBootMode, ifMatch?: string, options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
        // verify required parameter 'moid' is not null or undefined
        if (moid === null || moid === undefined) {
            throw new RequiredError('Required parameter moid was null or undefined when calling updateBootDeviceBootMode.');
        }

		
        // verify required parameter 'bootDeviceBootMode' is not null or undefined
        if (bootDeviceBootMode === null || bootDeviceBootMode === undefined) {
            throw new RequiredError('Required parameter bootDeviceBootMode was null or undefined when calling updateBootDeviceBootMode.');
        }

		
		
		// Path Params
    	const localVarPath = '/boot/DeviceBootModes/{Moid}'
            .replace('{' + 'Moid' + '}', encodeURIComponent(String(moid)));

		// Make Request Context
    	const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
	
		// Header Params
		requestContext.setHeaderParam("If-Match", ObjectSerializer.serialize(ifMatch, "string", ""));
	
		// Form Params


		// Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json",
        
            "application/json-patch+json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(bootDeviceBootMode, "BootDeviceBootMode", ""),
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

    /**
     * Update a 'boot.PrecisionPolicy' resource.
     * @param moid The unique Moid identifier of a resource instance.
     * @param bootPrecisionPolicy The &#39;boot.PrecisionPolicy&#39; resource to update.
     * @param ifMatch For methods that apply server-side changes, and in particular for PUT, If-Match can be used to prevent the lost update problem. It can check if the modification of a resource that the user wants to upload will not override another change that has been done since the original resource was fetched. If the request cannot be fulfilled, the 412 (Precondition Failed) response is returned. When modifying a resource using POST or PUT, the If-Match header must be set to the value of the resource ModTime property after which no lost update problem should occur. For example, a client send a GET request to obtain a resource, which includes the ModTime property. The ModTime indicates the last time the resource was created or modified. The client then sends a POST or PUT request with the If-Match header set to the ModTime property of the resource as obtained in the GET request.
     */
    public async updateBootPrecisionPolicy(moid: string, bootPrecisionPolicy: BootPrecisionPolicy, ifMatch?: string, options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
        // verify required parameter 'moid' is not null or undefined
        if (moid === null || moid === undefined) {
            throw new RequiredError('Required parameter moid was null or undefined when calling updateBootPrecisionPolicy.');
        }

		
        // verify required parameter 'bootPrecisionPolicy' is not null or undefined
        if (bootPrecisionPolicy === null || bootPrecisionPolicy === undefined) {
            throw new RequiredError('Required parameter bootPrecisionPolicy was null or undefined when calling updateBootPrecisionPolicy.');
        }

		
		
		// Path Params
    	const localVarPath = '/boot/PrecisionPolicies/{Moid}'
            .replace('{' + 'Moid' + '}', encodeURIComponent(String(moid)));

		// Make Request Context
    	const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
	
		// Header Params
		requestContext.setHeaderParam("If-Match", ObjectSerializer.serialize(ifMatch, "string", ""));
	
		// Form Params


		// Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json",
        
            "application/json-patch+json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(bootPrecisionPolicy, "BootPrecisionPolicy", ""),
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



export class BootApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createBootPrecisionPolicy
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createBootPrecisionPolicy(response: ResponseContext): Promise<BootPrecisionPolicy > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BootPrecisionPolicy = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BootPrecisionPolicy", ""
            ) as BootPrecisionPolicy;
            return body;
        }
        if (isCodeInRange("202", response.httpStatusCode)) {
            const body: BootPrecisionPolicy = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BootPrecisionPolicy", ""
            ) as BootPrecisionPolicy;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Error", ""
            ) as Error;
            throw new ApiException<Error>(400, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Error", ""
            ) as Error;
            throw new ApiException<Error>(401, body);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Error", ""
            ) as Error;
            throw new ApiException<Error>(403, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Error", ""
            ) as Error;
            throw new ApiException<Error>(404, body);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Error", ""
            ) as Error;
            throw new ApiException<Error>(0, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: BootPrecisionPolicy = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BootPrecisionPolicy", ""
            ) as BootPrecisionPolicy;
            return body;
        }

        let body = response.body || "";
    	throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
			
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteBootPrecisionPolicy
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteBootPrecisionPolicy(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return;
        }
        if (isCodeInRange("202", response.httpStatusCode)) {
            return;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Error", ""
            ) as Error;
            throw new ApiException<Error>(400, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Error", ""
            ) as Error;
            throw new ApiException<Error>(401, body);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Error", ""
            ) as Error;
            throw new ApiException<Error>(403, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Error", ""
            ) as Error;
            throw new ApiException<Error>(404, body);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Error", ""
            ) as Error;
            throw new ApiException<Error>(0, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return body;
        }

        let body = response.body || "";
    	throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
			
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getBootDeviceBootModeByMoid
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getBootDeviceBootModeByMoid(response: ResponseContext): Promise<BootDeviceBootMode > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BootDeviceBootMode = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BootDeviceBootMode", ""
            ) as BootDeviceBootMode;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Error", ""
            ) as Error;
            throw new ApiException<Error>(400, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Error", ""
            ) as Error;
            throw new ApiException<Error>(401, body);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Error", ""
            ) as Error;
            throw new ApiException<Error>(403, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Error", ""
            ) as Error;
            throw new ApiException<Error>(404, body);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Error", ""
            ) as Error;
            throw new ApiException<Error>(0, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: BootDeviceBootMode = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BootDeviceBootMode", ""
            ) as BootDeviceBootMode;
            return body;
        }

        let body = response.body || "";
    	throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
			
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getBootDeviceBootModeList
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getBootDeviceBootModeList(response: ResponseContext): Promise<BootDeviceBootModeResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BootDeviceBootModeResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BootDeviceBootModeResponse", ""
            ) as BootDeviceBootModeResponse;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Error", ""
            ) as Error;
            throw new ApiException<Error>(400, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Error", ""
            ) as Error;
            throw new ApiException<Error>(401, body);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Error", ""
            ) as Error;
            throw new ApiException<Error>(403, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Error", ""
            ) as Error;
            throw new ApiException<Error>(404, body);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Error", ""
            ) as Error;
            throw new ApiException<Error>(0, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: BootDeviceBootModeResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BootDeviceBootModeResponse", ""
            ) as BootDeviceBootModeResponse;
            return body;
        }

        let body = response.body || "";
    	throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
			
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getBootPrecisionPolicyByMoid
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getBootPrecisionPolicyByMoid(response: ResponseContext): Promise<BootPrecisionPolicy > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BootPrecisionPolicy = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BootPrecisionPolicy", ""
            ) as BootPrecisionPolicy;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Error", ""
            ) as Error;
            throw new ApiException<Error>(400, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Error", ""
            ) as Error;
            throw new ApiException<Error>(401, body);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Error", ""
            ) as Error;
            throw new ApiException<Error>(403, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Error", ""
            ) as Error;
            throw new ApiException<Error>(404, body);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Error", ""
            ) as Error;
            throw new ApiException<Error>(0, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: BootPrecisionPolicy = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BootPrecisionPolicy", ""
            ) as BootPrecisionPolicy;
            return body;
        }

        let body = response.body || "";
    	throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
			
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getBootPrecisionPolicyList
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getBootPrecisionPolicyList(response: ResponseContext): Promise<BootPrecisionPolicyResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BootPrecisionPolicyResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BootPrecisionPolicyResponse", ""
            ) as BootPrecisionPolicyResponse;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Error", ""
            ) as Error;
            throw new ApiException<Error>(400, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Error", ""
            ) as Error;
            throw new ApiException<Error>(401, body);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Error", ""
            ) as Error;
            throw new ApiException<Error>(403, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Error", ""
            ) as Error;
            throw new ApiException<Error>(404, body);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Error", ""
            ) as Error;
            throw new ApiException<Error>(0, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: BootPrecisionPolicyResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BootPrecisionPolicyResponse", ""
            ) as BootPrecisionPolicyResponse;
            return body;
        }

        let body = response.body || "";
    	throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
			
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to patchBootDeviceBootMode
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async patchBootDeviceBootMode(response: ResponseContext): Promise<BootDeviceBootMode > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BootDeviceBootMode = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BootDeviceBootMode", ""
            ) as BootDeviceBootMode;
            return body;
        }
        if (isCodeInRange("202", response.httpStatusCode)) {
            const body: BootDeviceBootMode = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BootDeviceBootMode", ""
            ) as BootDeviceBootMode;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Error", ""
            ) as Error;
            throw new ApiException<Error>(400, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Error", ""
            ) as Error;
            throw new ApiException<Error>(401, body);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Error", ""
            ) as Error;
            throw new ApiException<Error>(403, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Error", ""
            ) as Error;
            throw new ApiException<Error>(404, body);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Error", ""
            ) as Error;
            throw new ApiException<Error>(0, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: BootDeviceBootMode = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BootDeviceBootMode", ""
            ) as BootDeviceBootMode;
            return body;
        }

        let body = response.body || "";
    	throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
			
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to patchBootPrecisionPolicy
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async patchBootPrecisionPolicy(response: ResponseContext): Promise<BootPrecisionPolicy > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BootPrecisionPolicy = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BootPrecisionPolicy", ""
            ) as BootPrecisionPolicy;
            return body;
        }
        if (isCodeInRange("202", response.httpStatusCode)) {
            const body: BootPrecisionPolicy = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BootPrecisionPolicy", ""
            ) as BootPrecisionPolicy;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Error", ""
            ) as Error;
            throw new ApiException<Error>(400, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Error", ""
            ) as Error;
            throw new ApiException<Error>(401, body);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Error", ""
            ) as Error;
            throw new ApiException<Error>(403, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Error", ""
            ) as Error;
            throw new ApiException<Error>(404, body);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Error", ""
            ) as Error;
            throw new ApiException<Error>(0, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: BootPrecisionPolicy = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BootPrecisionPolicy", ""
            ) as BootPrecisionPolicy;
            return body;
        }

        let body = response.body || "";
    	throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
			
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateBootDeviceBootMode
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateBootDeviceBootMode(response: ResponseContext): Promise<BootDeviceBootMode > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BootDeviceBootMode = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BootDeviceBootMode", ""
            ) as BootDeviceBootMode;
            return body;
        }
        if (isCodeInRange("202", response.httpStatusCode)) {
            const body: BootDeviceBootMode = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BootDeviceBootMode", ""
            ) as BootDeviceBootMode;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Error", ""
            ) as Error;
            throw new ApiException<Error>(400, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Error", ""
            ) as Error;
            throw new ApiException<Error>(401, body);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Error", ""
            ) as Error;
            throw new ApiException<Error>(403, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Error", ""
            ) as Error;
            throw new ApiException<Error>(404, body);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Error", ""
            ) as Error;
            throw new ApiException<Error>(0, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: BootDeviceBootMode = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BootDeviceBootMode", ""
            ) as BootDeviceBootMode;
            return body;
        }

        let body = response.body || "";
    	throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
			
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateBootPrecisionPolicy
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateBootPrecisionPolicy(response: ResponseContext): Promise<BootPrecisionPolicy > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BootPrecisionPolicy = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BootPrecisionPolicy", ""
            ) as BootPrecisionPolicy;
            return body;
        }
        if (isCodeInRange("202", response.httpStatusCode)) {
            const body: BootPrecisionPolicy = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BootPrecisionPolicy", ""
            ) as BootPrecisionPolicy;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Error", ""
            ) as Error;
            throw new ApiException<Error>(400, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Error", ""
            ) as Error;
            throw new ApiException<Error>(401, body);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Error", ""
            ) as Error;
            throw new ApiException<Error>(403, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Error", ""
            ) as Error;
            throw new ApiException<Error>(404, body);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Error", ""
            ) as Error;
            throw new ApiException<Error>(0, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: BootPrecisionPolicy = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BootPrecisionPolicy", ""
            ) as BootPrecisionPolicy;
            return body;
        }

        let body = response.body || "";
    	throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
			
}
