// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi';
import {Configuration} from '../configuration';
import { RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import * as FormData from "form-data";
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {isCodeInRange} from '../util';

import { SdwanProfile } from '../models/SdwanProfile';
import { SdwanProfileResponse } from '../models/SdwanProfileResponse';
import { SdwanRouterNode } from '../models/SdwanRouterNode';
import { SdwanRouterNodeResponse } from '../models/SdwanRouterNodeResponse';
import { SdwanRouterPolicy } from '../models/SdwanRouterPolicy';
import { SdwanRouterPolicyResponse } from '../models/SdwanRouterPolicyResponse';
import { SdwanVmanageAccountPolicy } from '../models/SdwanVmanageAccountPolicy';
import { SdwanVmanageAccountPolicyResponse } from '../models/SdwanVmanageAccountPolicyResponse';

/**
 * no description
 */
export class SdwanApiRequestFactory extends BaseAPIRequestFactory {
	
    /**
     * Create a 'sdwan.Profile' resource.
     * @param sdwanProfile The &#39;sdwan.Profile&#39; resource to create.
     * @param ifMatch For methods that apply server-side changes, and in particular for PUT, If-Match can be used to prevent the lost update problem. It can check if the modification of a resource that the user wants to upload will not override another change that has been done since the original resource was fetched. If the request cannot be fulfilled, the 412 (Precondition Failed) response is returned. When modifying a resource using POST or PUT, the If-Match header must be set to the value of the resource ModTime property after which no lost update problem should occur. For example, a client send a GET request to obtain a resource, which includes the ModTime property. The ModTime indicates the last time the resource was created or modified. The client then sends a POST or PUT request with the If-Match header set to the ModTime property of the resource as obtained in the GET request.
     * @param ifNoneMatch For methods that apply server-side changes, If-None-Match used with the * value can be used to create a resource not known to exist, guaranteeing that another resource creation didn&#39;t happen before, losing the data of the previous put. The request will be processed only if the eventually existing resource&#39;s ETag doesn&#39;t match any of the values listed. Otherwise, the status code 412 (Precondition Failed) is used. The asterisk is a special value representing any resource. It is only useful when creating a resource, usually with PUT, to check if another resource with the identity has already been created before. The comparison with the stored ETag uses the weak comparison algorithm, meaning two resources are considered identical if the content is equivalent - they don&#39;t have to be identical byte for byte.
     */
    public async createSdwanProfile(sdwanProfile: SdwanProfile, ifMatch?: string, ifNoneMatch?: string, options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
        // verify required parameter 'sdwanProfile' is not null or undefined
        if (sdwanProfile === null || sdwanProfile === undefined) {
            throw new RequiredError('Required parameter sdwanProfile was null or undefined when calling createSdwanProfile.');
        }

		
		
		
		// Path Params
    	const localVarPath = '/sdwan/Profiles';

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
            ObjectSerializer.serialize(sdwanProfile, "SdwanProfile", ""),
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
     * Create a 'sdwan.RouterNode' resource.
     * @param sdwanRouterNode The &#39;sdwan.RouterNode&#39; resource to create.
     * @param ifMatch For methods that apply server-side changes, and in particular for PUT, If-Match can be used to prevent the lost update problem. It can check if the modification of a resource that the user wants to upload will not override another change that has been done since the original resource was fetched. If the request cannot be fulfilled, the 412 (Precondition Failed) response is returned. When modifying a resource using POST or PUT, the If-Match header must be set to the value of the resource ModTime property after which no lost update problem should occur. For example, a client send a GET request to obtain a resource, which includes the ModTime property. The ModTime indicates the last time the resource was created or modified. The client then sends a POST or PUT request with the If-Match header set to the ModTime property of the resource as obtained in the GET request.
     * @param ifNoneMatch For methods that apply server-side changes, If-None-Match used with the * value can be used to create a resource not known to exist, guaranteeing that another resource creation didn&#39;t happen before, losing the data of the previous put. The request will be processed only if the eventually existing resource&#39;s ETag doesn&#39;t match any of the values listed. Otherwise, the status code 412 (Precondition Failed) is used. The asterisk is a special value representing any resource. It is only useful when creating a resource, usually with PUT, to check if another resource with the identity has already been created before. The comparison with the stored ETag uses the weak comparison algorithm, meaning two resources are considered identical if the content is equivalent - they don&#39;t have to be identical byte for byte.
     */
    public async createSdwanRouterNode(sdwanRouterNode: SdwanRouterNode, ifMatch?: string, ifNoneMatch?: string, options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
        // verify required parameter 'sdwanRouterNode' is not null or undefined
        if (sdwanRouterNode === null || sdwanRouterNode === undefined) {
            throw new RequiredError('Required parameter sdwanRouterNode was null or undefined when calling createSdwanRouterNode.');
        }

		
		
		
		// Path Params
    	const localVarPath = '/sdwan/RouterNodes';

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
            ObjectSerializer.serialize(sdwanRouterNode, "SdwanRouterNode", ""),
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
     * Create a 'sdwan.RouterPolicy' resource.
     * @param sdwanRouterPolicy The &#39;sdwan.RouterPolicy&#39; resource to create.
     * @param ifMatch For methods that apply server-side changes, and in particular for PUT, If-Match can be used to prevent the lost update problem. It can check if the modification of a resource that the user wants to upload will not override another change that has been done since the original resource was fetched. If the request cannot be fulfilled, the 412 (Precondition Failed) response is returned. When modifying a resource using POST or PUT, the If-Match header must be set to the value of the resource ModTime property after which no lost update problem should occur. For example, a client send a GET request to obtain a resource, which includes the ModTime property. The ModTime indicates the last time the resource was created or modified. The client then sends a POST or PUT request with the If-Match header set to the ModTime property of the resource as obtained in the GET request.
     * @param ifNoneMatch For methods that apply server-side changes, If-None-Match used with the * value can be used to create a resource not known to exist, guaranteeing that another resource creation didn&#39;t happen before, losing the data of the previous put. The request will be processed only if the eventually existing resource&#39;s ETag doesn&#39;t match any of the values listed. Otherwise, the status code 412 (Precondition Failed) is used. The asterisk is a special value representing any resource. It is only useful when creating a resource, usually with PUT, to check if another resource with the identity has already been created before. The comparison with the stored ETag uses the weak comparison algorithm, meaning two resources are considered identical if the content is equivalent - they don&#39;t have to be identical byte for byte.
     */
    public async createSdwanRouterPolicy(sdwanRouterPolicy: SdwanRouterPolicy, ifMatch?: string, ifNoneMatch?: string, options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
        // verify required parameter 'sdwanRouterPolicy' is not null or undefined
        if (sdwanRouterPolicy === null || sdwanRouterPolicy === undefined) {
            throw new RequiredError('Required parameter sdwanRouterPolicy was null or undefined when calling createSdwanRouterPolicy.');
        }

		
		
		
		// Path Params
    	const localVarPath = '/sdwan/RouterPolicies';

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
            ObjectSerializer.serialize(sdwanRouterPolicy, "SdwanRouterPolicy", ""),
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
     * Create a 'sdwan.VmanageAccountPolicy' resource.
     * @param sdwanVmanageAccountPolicy The &#39;sdwan.VmanageAccountPolicy&#39; resource to create.
     * @param ifMatch For methods that apply server-side changes, and in particular for PUT, If-Match can be used to prevent the lost update problem. It can check if the modification of a resource that the user wants to upload will not override another change that has been done since the original resource was fetched. If the request cannot be fulfilled, the 412 (Precondition Failed) response is returned. When modifying a resource using POST or PUT, the If-Match header must be set to the value of the resource ModTime property after which no lost update problem should occur. For example, a client send a GET request to obtain a resource, which includes the ModTime property. The ModTime indicates the last time the resource was created or modified. The client then sends a POST or PUT request with the If-Match header set to the ModTime property of the resource as obtained in the GET request.
     * @param ifNoneMatch For methods that apply server-side changes, If-None-Match used with the * value can be used to create a resource not known to exist, guaranteeing that another resource creation didn&#39;t happen before, losing the data of the previous put. The request will be processed only if the eventually existing resource&#39;s ETag doesn&#39;t match any of the values listed. Otherwise, the status code 412 (Precondition Failed) is used. The asterisk is a special value representing any resource. It is only useful when creating a resource, usually with PUT, to check if another resource with the identity has already been created before. The comparison with the stored ETag uses the weak comparison algorithm, meaning two resources are considered identical if the content is equivalent - they don&#39;t have to be identical byte for byte.
     */
    public async createSdwanVmanageAccountPolicy(sdwanVmanageAccountPolicy: SdwanVmanageAccountPolicy, ifMatch?: string, ifNoneMatch?: string, options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
        // verify required parameter 'sdwanVmanageAccountPolicy' is not null or undefined
        if (sdwanVmanageAccountPolicy === null || sdwanVmanageAccountPolicy === undefined) {
            throw new RequiredError('Required parameter sdwanVmanageAccountPolicy was null or undefined when calling createSdwanVmanageAccountPolicy.');
        }

		
		
		
		// Path Params
    	const localVarPath = '/sdwan/VmanageAccountPolicies';

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
            ObjectSerializer.serialize(sdwanVmanageAccountPolicy, "SdwanVmanageAccountPolicy", ""),
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
     * Delete a 'sdwan.Profile' resource.
     * @param moid The unique Moid identifier of a resource instance.
     */
    public async deleteSdwanProfile(moid: string, options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
        // verify required parameter 'moid' is not null or undefined
        if (moid === null || moid === undefined) {
            throw new RequiredError('Required parameter moid was null or undefined when calling deleteSdwanProfile.');
        }

		
		// Path Params
    	const localVarPath = '/sdwan/Profiles/{Moid}'
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
     * Delete a 'sdwan.RouterNode' resource.
     * @param moid The unique Moid identifier of a resource instance.
     */
    public async deleteSdwanRouterNode(moid: string, options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
        // verify required parameter 'moid' is not null or undefined
        if (moid === null || moid === undefined) {
            throw new RequiredError('Required parameter moid was null or undefined when calling deleteSdwanRouterNode.');
        }

		
		// Path Params
    	const localVarPath = '/sdwan/RouterNodes/{Moid}'
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
     * Delete a 'sdwan.RouterPolicy' resource.
     * @param moid The unique Moid identifier of a resource instance.
     */
    public async deleteSdwanRouterPolicy(moid: string, options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
        // verify required parameter 'moid' is not null or undefined
        if (moid === null || moid === undefined) {
            throw new RequiredError('Required parameter moid was null or undefined when calling deleteSdwanRouterPolicy.');
        }

		
		// Path Params
    	const localVarPath = '/sdwan/RouterPolicies/{Moid}'
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
     * Delete a 'sdwan.VmanageAccountPolicy' resource.
     * @param moid The unique Moid identifier of a resource instance.
     */
    public async deleteSdwanVmanageAccountPolicy(moid: string, options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
        // verify required parameter 'moid' is not null or undefined
        if (moid === null || moid === undefined) {
            throw new RequiredError('Required parameter moid was null or undefined when calling deleteSdwanVmanageAccountPolicy.');
        }

		
		// Path Params
    	const localVarPath = '/sdwan/VmanageAccountPolicies/{Moid}'
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
     * Read a 'sdwan.Profile' resource.
     * @param moid The unique Moid identifier of a resource instance.
     */
    public async getSdwanProfileByMoid(moid: string, options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
        // verify required parameter 'moid' is not null or undefined
        if (moid === null || moid === undefined) {
            throw new RequiredError('Required parameter moid was null or undefined when calling getSdwanProfileByMoid.');
        }

		
		// Path Params
    	const localVarPath = '/sdwan/Profiles/{Moid}'
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
     * Read a 'sdwan.Profile' resource.
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
    public async getSdwanProfileList(filter?: string, orderby?: string, top?: number, skip?: number, select?: string, expand?: string, apply?: string, count?: boolean, inlinecount?: 'allpages' | 'none', at?: string, tags?: string, options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
		
		
		
		
		
		
		
		
		
		
		
		// Path Params
    	const localVarPath = '/sdwan/Profiles';

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
     * Read a 'sdwan.RouterNode' resource.
     * @param moid The unique Moid identifier of a resource instance.
     */
    public async getSdwanRouterNodeByMoid(moid: string, options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
        // verify required parameter 'moid' is not null or undefined
        if (moid === null || moid === undefined) {
            throw new RequiredError('Required parameter moid was null or undefined when calling getSdwanRouterNodeByMoid.');
        }

		
		// Path Params
    	const localVarPath = '/sdwan/RouterNodes/{Moid}'
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
     * Read a 'sdwan.RouterNode' resource.
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
    public async getSdwanRouterNodeList(filter?: string, orderby?: string, top?: number, skip?: number, select?: string, expand?: string, apply?: string, count?: boolean, inlinecount?: 'allpages' | 'none', at?: string, tags?: string, options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
		
		
		
		
		
		
		
		
		
		
		
		// Path Params
    	const localVarPath = '/sdwan/RouterNodes';

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
     * Read a 'sdwan.RouterPolicy' resource.
     * @param moid The unique Moid identifier of a resource instance.
     */
    public async getSdwanRouterPolicyByMoid(moid: string, options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
        // verify required parameter 'moid' is not null or undefined
        if (moid === null || moid === undefined) {
            throw new RequiredError('Required parameter moid was null or undefined when calling getSdwanRouterPolicyByMoid.');
        }

		
		// Path Params
    	const localVarPath = '/sdwan/RouterPolicies/{Moid}'
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
     * Read a 'sdwan.RouterPolicy' resource.
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
    public async getSdwanRouterPolicyList(filter?: string, orderby?: string, top?: number, skip?: number, select?: string, expand?: string, apply?: string, count?: boolean, inlinecount?: 'allpages' | 'none', at?: string, tags?: string, options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
		
		
		
		
		
		
		
		
		
		
		
		// Path Params
    	const localVarPath = '/sdwan/RouterPolicies';

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
     * Read a 'sdwan.VmanageAccountPolicy' resource.
     * @param moid The unique Moid identifier of a resource instance.
     */
    public async getSdwanVmanageAccountPolicyByMoid(moid: string, options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
        // verify required parameter 'moid' is not null or undefined
        if (moid === null || moid === undefined) {
            throw new RequiredError('Required parameter moid was null or undefined when calling getSdwanVmanageAccountPolicyByMoid.');
        }

		
		// Path Params
    	const localVarPath = '/sdwan/VmanageAccountPolicies/{Moid}'
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
     * Read a 'sdwan.VmanageAccountPolicy' resource.
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
    public async getSdwanVmanageAccountPolicyList(filter?: string, orderby?: string, top?: number, skip?: number, select?: string, expand?: string, apply?: string, count?: boolean, inlinecount?: 'allpages' | 'none', at?: string, tags?: string, options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
		
		
		
		
		
		
		
		
		
		
		
		// Path Params
    	const localVarPath = '/sdwan/VmanageAccountPolicies';

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
     * Update a 'sdwan.Profile' resource.
     * @param moid The unique Moid identifier of a resource instance.
     * @param sdwanProfile The &#39;sdwan.Profile&#39; resource to update.
     * @param ifMatch For methods that apply server-side changes, and in particular for PUT, If-Match can be used to prevent the lost update problem. It can check if the modification of a resource that the user wants to upload will not override another change that has been done since the original resource was fetched. If the request cannot be fulfilled, the 412 (Precondition Failed) response is returned. When modifying a resource using POST or PUT, the If-Match header must be set to the value of the resource ModTime property after which no lost update problem should occur. For example, a client send a GET request to obtain a resource, which includes the ModTime property. The ModTime indicates the last time the resource was created or modified. The client then sends a POST or PUT request with the If-Match header set to the ModTime property of the resource as obtained in the GET request.
     */
    public async patchSdwanProfile(moid: string, sdwanProfile: SdwanProfile, ifMatch?: string, options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
        // verify required parameter 'moid' is not null or undefined
        if (moid === null || moid === undefined) {
            throw new RequiredError('Required parameter moid was null or undefined when calling patchSdwanProfile.');
        }

		
        // verify required parameter 'sdwanProfile' is not null or undefined
        if (sdwanProfile === null || sdwanProfile === undefined) {
            throw new RequiredError('Required parameter sdwanProfile was null or undefined when calling patchSdwanProfile.');
        }

		
		
		// Path Params
    	const localVarPath = '/sdwan/Profiles/{Moid}'
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
            ObjectSerializer.serialize(sdwanProfile, "SdwanProfile", ""),
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
     * Update a 'sdwan.RouterNode' resource.
     * @param moid The unique Moid identifier of a resource instance.
     * @param sdwanRouterNode The &#39;sdwan.RouterNode&#39; resource to update.
     * @param ifMatch For methods that apply server-side changes, and in particular for PUT, If-Match can be used to prevent the lost update problem. It can check if the modification of a resource that the user wants to upload will not override another change that has been done since the original resource was fetched. If the request cannot be fulfilled, the 412 (Precondition Failed) response is returned. When modifying a resource using POST or PUT, the If-Match header must be set to the value of the resource ModTime property after which no lost update problem should occur. For example, a client send a GET request to obtain a resource, which includes the ModTime property. The ModTime indicates the last time the resource was created or modified. The client then sends a POST or PUT request with the If-Match header set to the ModTime property of the resource as obtained in the GET request.
     */
    public async patchSdwanRouterNode(moid: string, sdwanRouterNode: SdwanRouterNode, ifMatch?: string, options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
        // verify required parameter 'moid' is not null or undefined
        if (moid === null || moid === undefined) {
            throw new RequiredError('Required parameter moid was null or undefined when calling patchSdwanRouterNode.');
        }

		
        // verify required parameter 'sdwanRouterNode' is not null or undefined
        if (sdwanRouterNode === null || sdwanRouterNode === undefined) {
            throw new RequiredError('Required parameter sdwanRouterNode was null or undefined when calling patchSdwanRouterNode.');
        }

		
		
		// Path Params
    	const localVarPath = '/sdwan/RouterNodes/{Moid}'
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
            ObjectSerializer.serialize(sdwanRouterNode, "SdwanRouterNode", ""),
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
     * Update a 'sdwan.RouterPolicy' resource.
     * @param moid The unique Moid identifier of a resource instance.
     * @param sdwanRouterPolicy The &#39;sdwan.RouterPolicy&#39; resource to update.
     * @param ifMatch For methods that apply server-side changes, and in particular for PUT, If-Match can be used to prevent the lost update problem. It can check if the modification of a resource that the user wants to upload will not override another change that has been done since the original resource was fetched. If the request cannot be fulfilled, the 412 (Precondition Failed) response is returned. When modifying a resource using POST or PUT, the If-Match header must be set to the value of the resource ModTime property after which no lost update problem should occur. For example, a client send a GET request to obtain a resource, which includes the ModTime property. The ModTime indicates the last time the resource was created or modified. The client then sends a POST or PUT request with the If-Match header set to the ModTime property of the resource as obtained in the GET request.
     */
    public async patchSdwanRouterPolicy(moid: string, sdwanRouterPolicy: SdwanRouterPolicy, ifMatch?: string, options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
        // verify required parameter 'moid' is not null or undefined
        if (moid === null || moid === undefined) {
            throw new RequiredError('Required parameter moid was null or undefined when calling patchSdwanRouterPolicy.');
        }

		
        // verify required parameter 'sdwanRouterPolicy' is not null or undefined
        if (sdwanRouterPolicy === null || sdwanRouterPolicy === undefined) {
            throw new RequiredError('Required parameter sdwanRouterPolicy was null or undefined when calling patchSdwanRouterPolicy.');
        }

		
		
		// Path Params
    	const localVarPath = '/sdwan/RouterPolicies/{Moid}'
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
            ObjectSerializer.serialize(sdwanRouterPolicy, "SdwanRouterPolicy", ""),
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
     * Update a 'sdwan.VmanageAccountPolicy' resource.
     * @param moid The unique Moid identifier of a resource instance.
     * @param sdwanVmanageAccountPolicy The &#39;sdwan.VmanageAccountPolicy&#39; resource to update.
     * @param ifMatch For methods that apply server-side changes, and in particular for PUT, If-Match can be used to prevent the lost update problem. It can check if the modification of a resource that the user wants to upload will not override another change that has been done since the original resource was fetched. If the request cannot be fulfilled, the 412 (Precondition Failed) response is returned. When modifying a resource using POST or PUT, the If-Match header must be set to the value of the resource ModTime property after which no lost update problem should occur. For example, a client send a GET request to obtain a resource, which includes the ModTime property. The ModTime indicates the last time the resource was created or modified. The client then sends a POST or PUT request with the If-Match header set to the ModTime property of the resource as obtained in the GET request.
     */
    public async patchSdwanVmanageAccountPolicy(moid: string, sdwanVmanageAccountPolicy: SdwanVmanageAccountPolicy, ifMatch?: string, options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
        // verify required parameter 'moid' is not null or undefined
        if (moid === null || moid === undefined) {
            throw new RequiredError('Required parameter moid was null or undefined when calling patchSdwanVmanageAccountPolicy.');
        }

		
        // verify required parameter 'sdwanVmanageAccountPolicy' is not null or undefined
        if (sdwanVmanageAccountPolicy === null || sdwanVmanageAccountPolicy === undefined) {
            throw new RequiredError('Required parameter sdwanVmanageAccountPolicy was null or undefined when calling patchSdwanVmanageAccountPolicy.');
        }

		
		
		// Path Params
    	const localVarPath = '/sdwan/VmanageAccountPolicies/{Moid}'
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
            ObjectSerializer.serialize(sdwanVmanageAccountPolicy, "SdwanVmanageAccountPolicy", ""),
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
     * Update a 'sdwan.Profile' resource.
     * @param moid The unique Moid identifier of a resource instance.
     * @param sdwanProfile The &#39;sdwan.Profile&#39; resource to update.
     * @param ifMatch For methods that apply server-side changes, and in particular for PUT, If-Match can be used to prevent the lost update problem. It can check if the modification of a resource that the user wants to upload will not override another change that has been done since the original resource was fetched. If the request cannot be fulfilled, the 412 (Precondition Failed) response is returned. When modifying a resource using POST or PUT, the If-Match header must be set to the value of the resource ModTime property after which no lost update problem should occur. For example, a client send a GET request to obtain a resource, which includes the ModTime property. The ModTime indicates the last time the resource was created or modified. The client then sends a POST or PUT request with the If-Match header set to the ModTime property of the resource as obtained in the GET request.
     */
    public async updateSdwanProfile(moid: string, sdwanProfile: SdwanProfile, ifMatch?: string, options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
        // verify required parameter 'moid' is not null or undefined
        if (moid === null || moid === undefined) {
            throw new RequiredError('Required parameter moid was null or undefined when calling updateSdwanProfile.');
        }

		
        // verify required parameter 'sdwanProfile' is not null or undefined
        if (sdwanProfile === null || sdwanProfile === undefined) {
            throw new RequiredError('Required parameter sdwanProfile was null or undefined when calling updateSdwanProfile.');
        }

		
		
		// Path Params
    	const localVarPath = '/sdwan/Profiles/{Moid}'
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
            ObjectSerializer.serialize(sdwanProfile, "SdwanProfile", ""),
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
     * Update a 'sdwan.RouterNode' resource.
     * @param moid The unique Moid identifier of a resource instance.
     * @param sdwanRouterNode The &#39;sdwan.RouterNode&#39; resource to update.
     * @param ifMatch For methods that apply server-side changes, and in particular for PUT, If-Match can be used to prevent the lost update problem. It can check if the modification of a resource that the user wants to upload will not override another change that has been done since the original resource was fetched. If the request cannot be fulfilled, the 412 (Precondition Failed) response is returned. When modifying a resource using POST or PUT, the If-Match header must be set to the value of the resource ModTime property after which no lost update problem should occur. For example, a client send a GET request to obtain a resource, which includes the ModTime property. The ModTime indicates the last time the resource was created or modified. The client then sends a POST or PUT request with the If-Match header set to the ModTime property of the resource as obtained in the GET request.
     */
    public async updateSdwanRouterNode(moid: string, sdwanRouterNode: SdwanRouterNode, ifMatch?: string, options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
        // verify required parameter 'moid' is not null or undefined
        if (moid === null || moid === undefined) {
            throw new RequiredError('Required parameter moid was null or undefined when calling updateSdwanRouterNode.');
        }

		
        // verify required parameter 'sdwanRouterNode' is not null or undefined
        if (sdwanRouterNode === null || sdwanRouterNode === undefined) {
            throw new RequiredError('Required parameter sdwanRouterNode was null or undefined when calling updateSdwanRouterNode.');
        }

		
		
		// Path Params
    	const localVarPath = '/sdwan/RouterNodes/{Moid}'
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
            ObjectSerializer.serialize(sdwanRouterNode, "SdwanRouterNode", ""),
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
     * Update a 'sdwan.RouterPolicy' resource.
     * @param moid The unique Moid identifier of a resource instance.
     * @param sdwanRouterPolicy The &#39;sdwan.RouterPolicy&#39; resource to update.
     * @param ifMatch For methods that apply server-side changes, and in particular for PUT, If-Match can be used to prevent the lost update problem. It can check if the modification of a resource that the user wants to upload will not override another change that has been done since the original resource was fetched. If the request cannot be fulfilled, the 412 (Precondition Failed) response is returned. When modifying a resource using POST or PUT, the If-Match header must be set to the value of the resource ModTime property after which no lost update problem should occur. For example, a client send a GET request to obtain a resource, which includes the ModTime property. The ModTime indicates the last time the resource was created or modified. The client then sends a POST or PUT request with the If-Match header set to the ModTime property of the resource as obtained in the GET request.
     */
    public async updateSdwanRouterPolicy(moid: string, sdwanRouterPolicy: SdwanRouterPolicy, ifMatch?: string, options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
        // verify required parameter 'moid' is not null or undefined
        if (moid === null || moid === undefined) {
            throw new RequiredError('Required parameter moid was null or undefined when calling updateSdwanRouterPolicy.');
        }

		
        // verify required parameter 'sdwanRouterPolicy' is not null or undefined
        if (sdwanRouterPolicy === null || sdwanRouterPolicy === undefined) {
            throw new RequiredError('Required parameter sdwanRouterPolicy was null or undefined when calling updateSdwanRouterPolicy.');
        }

		
		
		// Path Params
    	const localVarPath = '/sdwan/RouterPolicies/{Moid}'
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
            ObjectSerializer.serialize(sdwanRouterPolicy, "SdwanRouterPolicy", ""),
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
     * Update a 'sdwan.VmanageAccountPolicy' resource.
     * @param moid The unique Moid identifier of a resource instance.
     * @param sdwanVmanageAccountPolicy The &#39;sdwan.VmanageAccountPolicy&#39; resource to update.
     * @param ifMatch For methods that apply server-side changes, and in particular for PUT, If-Match can be used to prevent the lost update problem. It can check if the modification of a resource that the user wants to upload will not override another change that has been done since the original resource was fetched. If the request cannot be fulfilled, the 412 (Precondition Failed) response is returned. When modifying a resource using POST or PUT, the If-Match header must be set to the value of the resource ModTime property after which no lost update problem should occur. For example, a client send a GET request to obtain a resource, which includes the ModTime property. The ModTime indicates the last time the resource was created or modified. The client then sends a POST or PUT request with the If-Match header set to the ModTime property of the resource as obtained in the GET request.
     */
    public async updateSdwanVmanageAccountPolicy(moid: string, sdwanVmanageAccountPolicy: SdwanVmanageAccountPolicy, ifMatch?: string, options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
        // verify required parameter 'moid' is not null or undefined
        if (moid === null || moid === undefined) {
            throw new RequiredError('Required parameter moid was null or undefined when calling updateSdwanVmanageAccountPolicy.');
        }

		
        // verify required parameter 'sdwanVmanageAccountPolicy' is not null or undefined
        if (sdwanVmanageAccountPolicy === null || sdwanVmanageAccountPolicy === undefined) {
            throw new RequiredError('Required parameter sdwanVmanageAccountPolicy was null or undefined when calling updateSdwanVmanageAccountPolicy.');
        }

		
		
		// Path Params
    	const localVarPath = '/sdwan/VmanageAccountPolicies/{Moid}'
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
            ObjectSerializer.serialize(sdwanVmanageAccountPolicy, "SdwanVmanageAccountPolicy", ""),
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



export class SdwanApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createSdwanProfile
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createSdwanProfile(response: ResponseContext): Promise<SdwanProfile > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SdwanProfile = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SdwanProfile", ""
            ) as SdwanProfile;
            return body;
        }
        if (isCodeInRange("202", response.httpStatusCode)) {
            const body: SdwanProfile = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SdwanProfile", ""
            ) as SdwanProfile;
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
            const body: SdwanProfile = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SdwanProfile", ""
            ) as SdwanProfile;
            return body;
        }

        let body = response.body || "";
    	throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
			
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createSdwanRouterNode
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createSdwanRouterNode(response: ResponseContext): Promise<SdwanRouterNode > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SdwanRouterNode = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SdwanRouterNode", ""
            ) as SdwanRouterNode;
            return body;
        }
        if (isCodeInRange("202", response.httpStatusCode)) {
            const body: SdwanRouterNode = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SdwanRouterNode", ""
            ) as SdwanRouterNode;
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
            const body: SdwanRouterNode = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SdwanRouterNode", ""
            ) as SdwanRouterNode;
            return body;
        }

        let body = response.body || "";
    	throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
			
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createSdwanRouterPolicy
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createSdwanRouterPolicy(response: ResponseContext): Promise<SdwanRouterPolicy > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SdwanRouterPolicy = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SdwanRouterPolicy", ""
            ) as SdwanRouterPolicy;
            return body;
        }
        if (isCodeInRange("202", response.httpStatusCode)) {
            const body: SdwanRouterPolicy = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SdwanRouterPolicy", ""
            ) as SdwanRouterPolicy;
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
            const body: SdwanRouterPolicy = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SdwanRouterPolicy", ""
            ) as SdwanRouterPolicy;
            return body;
        }

        let body = response.body || "";
    	throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
			
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createSdwanVmanageAccountPolicy
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createSdwanVmanageAccountPolicy(response: ResponseContext): Promise<SdwanVmanageAccountPolicy > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SdwanVmanageAccountPolicy = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SdwanVmanageAccountPolicy", ""
            ) as SdwanVmanageAccountPolicy;
            return body;
        }
        if (isCodeInRange("202", response.httpStatusCode)) {
            const body: SdwanVmanageAccountPolicy = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SdwanVmanageAccountPolicy", ""
            ) as SdwanVmanageAccountPolicy;
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
            const body: SdwanVmanageAccountPolicy = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SdwanVmanageAccountPolicy", ""
            ) as SdwanVmanageAccountPolicy;
            return body;
        }

        let body = response.body || "";
    	throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
			
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteSdwanProfile
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteSdwanProfile(response: ResponseContext): Promise<void > {
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
     * @params response Response returned by the server for a request to deleteSdwanRouterNode
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteSdwanRouterNode(response: ResponseContext): Promise<void > {
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
     * @params response Response returned by the server for a request to deleteSdwanRouterPolicy
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteSdwanRouterPolicy(response: ResponseContext): Promise<void > {
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
     * @params response Response returned by the server for a request to deleteSdwanVmanageAccountPolicy
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteSdwanVmanageAccountPolicy(response: ResponseContext): Promise<void > {
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
     * @params response Response returned by the server for a request to getSdwanProfileByMoid
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getSdwanProfileByMoid(response: ResponseContext): Promise<SdwanProfile > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SdwanProfile = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SdwanProfile", ""
            ) as SdwanProfile;
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
            const body: SdwanProfile = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SdwanProfile", ""
            ) as SdwanProfile;
            return body;
        }

        let body = response.body || "";
    	throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
			
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getSdwanProfileList
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getSdwanProfileList(response: ResponseContext): Promise<SdwanProfileResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SdwanProfileResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SdwanProfileResponse", ""
            ) as SdwanProfileResponse;
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
            const body: SdwanProfileResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SdwanProfileResponse", ""
            ) as SdwanProfileResponse;
            return body;
        }

        let body = response.body || "";
    	throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
			
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getSdwanRouterNodeByMoid
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getSdwanRouterNodeByMoid(response: ResponseContext): Promise<SdwanRouterNode > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SdwanRouterNode = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SdwanRouterNode", ""
            ) as SdwanRouterNode;
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
            const body: SdwanRouterNode = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SdwanRouterNode", ""
            ) as SdwanRouterNode;
            return body;
        }

        let body = response.body || "";
    	throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
			
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getSdwanRouterNodeList
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getSdwanRouterNodeList(response: ResponseContext): Promise<SdwanRouterNodeResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SdwanRouterNodeResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SdwanRouterNodeResponse", ""
            ) as SdwanRouterNodeResponse;
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
            const body: SdwanRouterNodeResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SdwanRouterNodeResponse", ""
            ) as SdwanRouterNodeResponse;
            return body;
        }

        let body = response.body || "";
    	throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
			
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getSdwanRouterPolicyByMoid
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getSdwanRouterPolicyByMoid(response: ResponseContext): Promise<SdwanRouterPolicy > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SdwanRouterPolicy = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SdwanRouterPolicy", ""
            ) as SdwanRouterPolicy;
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
            const body: SdwanRouterPolicy = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SdwanRouterPolicy", ""
            ) as SdwanRouterPolicy;
            return body;
        }

        let body = response.body || "";
    	throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
			
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getSdwanRouterPolicyList
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getSdwanRouterPolicyList(response: ResponseContext): Promise<SdwanRouterPolicyResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SdwanRouterPolicyResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SdwanRouterPolicyResponse", ""
            ) as SdwanRouterPolicyResponse;
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
            const body: SdwanRouterPolicyResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SdwanRouterPolicyResponse", ""
            ) as SdwanRouterPolicyResponse;
            return body;
        }

        let body = response.body || "";
    	throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
			
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getSdwanVmanageAccountPolicyByMoid
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getSdwanVmanageAccountPolicyByMoid(response: ResponseContext): Promise<SdwanVmanageAccountPolicy > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SdwanVmanageAccountPolicy = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SdwanVmanageAccountPolicy", ""
            ) as SdwanVmanageAccountPolicy;
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
            const body: SdwanVmanageAccountPolicy = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SdwanVmanageAccountPolicy", ""
            ) as SdwanVmanageAccountPolicy;
            return body;
        }

        let body = response.body || "";
    	throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
			
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getSdwanVmanageAccountPolicyList
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getSdwanVmanageAccountPolicyList(response: ResponseContext): Promise<SdwanVmanageAccountPolicyResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SdwanVmanageAccountPolicyResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SdwanVmanageAccountPolicyResponse", ""
            ) as SdwanVmanageAccountPolicyResponse;
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
            const body: SdwanVmanageAccountPolicyResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SdwanVmanageAccountPolicyResponse", ""
            ) as SdwanVmanageAccountPolicyResponse;
            return body;
        }

        let body = response.body || "";
    	throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
			
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to patchSdwanProfile
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async patchSdwanProfile(response: ResponseContext): Promise<SdwanProfile > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SdwanProfile = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SdwanProfile", ""
            ) as SdwanProfile;
            return body;
        }
        if (isCodeInRange("202", response.httpStatusCode)) {
            const body: SdwanProfile = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SdwanProfile", ""
            ) as SdwanProfile;
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
            const body: SdwanProfile = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SdwanProfile", ""
            ) as SdwanProfile;
            return body;
        }

        let body = response.body || "";
    	throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
			
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to patchSdwanRouterNode
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async patchSdwanRouterNode(response: ResponseContext): Promise<SdwanRouterNode > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SdwanRouterNode = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SdwanRouterNode", ""
            ) as SdwanRouterNode;
            return body;
        }
        if (isCodeInRange("202", response.httpStatusCode)) {
            const body: SdwanRouterNode = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SdwanRouterNode", ""
            ) as SdwanRouterNode;
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
            const body: SdwanRouterNode = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SdwanRouterNode", ""
            ) as SdwanRouterNode;
            return body;
        }

        let body = response.body || "";
    	throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
			
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to patchSdwanRouterPolicy
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async patchSdwanRouterPolicy(response: ResponseContext): Promise<SdwanRouterPolicy > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SdwanRouterPolicy = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SdwanRouterPolicy", ""
            ) as SdwanRouterPolicy;
            return body;
        }
        if (isCodeInRange("202", response.httpStatusCode)) {
            const body: SdwanRouterPolicy = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SdwanRouterPolicy", ""
            ) as SdwanRouterPolicy;
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
            const body: SdwanRouterPolicy = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SdwanRouterPolicy", ""
            ) as SdwanRouterPolicy;
            return body;
        }

        let body = response.body || "";
    	throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
			
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to patchSdwanVmanageAccountPolicy
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async patchSdwanVmanageAccountPolicy(response: ResponseContext): Promise<SdwanVmanageAccountPolicy > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SdwanVmanageAccountPolicy = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SdwanVmanageAccountPolicy", ""
            ) as SdwanVmanageAccountPolicy;
            return body;
        }
        if (isCodeInRange("202", response.httpStatusCode)) {
            const body: SdwanVmanageAccountPolicy = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SdwanVmanageAccountPolicy", ""
            ) as SdwanVmanageAccountPolicy;
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
            const body: SdwanVmanageAccountPolicy = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SdwanVmanageAccountPolicy", ""
            ) as SdwanVmanageAccountPolicy;
            return body;
        }

        let body = response.body || "";
    	throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
			
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateSdwanProfile
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateSdwanProfile(response: ResponseContext): Promise<SdwanProfile > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SdwanProfile = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SdwanProfile", ""
            ) as SdwanProfile;
            return body;
        }
        if (isCodeInRange("202", response.httpStatusCode)) {
            const body: SdwanProfile = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SdwanProfile", ""
            ) as SdwanProfile;
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
            const body: SdwanProfile = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SdwanProfile", ""
            ) as SdwanProfile;
            return body;
        }

        let body = response.body || "";
    	throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
			
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateSdwanRouterNode
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateSdwanRouterNode(response: ResponseContext): Promise<SdwanRouterNode > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SdwanRouterNode = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SdwanRouterNode", ""
            ) as SdwanRouterNode;
            return body;
        }
        if (isCodeInRange("202", response.httpStatusCode)) {
            const body: SdwanRouterNode = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SdwanRouterNode", ""
            ) as SdwanRouterNode;
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
            const body: SdwanRouterNode = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SdwanRouterNode", ""
            ) as SdwanRouterNode;
            return body;
        }

        let body = response.body || "";
    	throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
			
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateSdwanRouterPolicy
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateSdwanRouterPolicy(response: ResponseContext): Promise<SdwanRouterPolicy > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SdwanRouterPolicy = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SdwanRouterPolicy", ""
            ) as SdwanRouterPolicy;
            return body;
        }
        if (isCodeInRange("202", response.httpStatusCode)) {
            const body: SdwanRouterPolicy = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SdwanRouterPolicy", ""
            ) as SdwanRouterPolicy;
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
            const body: SdwanRouterPolicy = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SdwanRouterPolicy", ""
            ) as SdwanRouterPolicy;
            return body;
        }

        let body = response.body || "";
    	throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
			
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateSdwanVmanageAccountPolicy
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateSdwanVmanageAccountPolicy(response: ResponseContext): Promise<SdwanVmanageAccountPolicy > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SdwanVmanageAccountPolicy = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SdwanVmanageAccountPolicy", ""
            ) as SdwanVmanageAccountPolicy;
            return body;
        }
        if (isCodeInRange("202", response.httpStatusCode)) {
            const body: SdwanVmanageAccountPolicy = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SdwanVmanageAccountPolicy", ""
            ) as SdwanVmanageAccountPolicy;
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
            const body: SdwanVmanageAccountPolicy = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SdwanVmanageAccountPolicy", ""
            ) as SdwanVmanageAccountPolicy;
            return body;
        }

        let body = response.body || "";
    	throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
			
}
