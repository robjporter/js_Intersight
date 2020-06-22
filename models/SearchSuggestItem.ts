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

import { MoBaseMo } from './MoBaseMo';
import { MoBaseMoRelationship } from './MoBaseMoRelationship';
import { MoTag } from './MoTag';
import { MoVersionContext } from './MoVersionContext';
import { SearchSuggestItemAllOf } from './SearchSuggestItemAllOf';
import { HttpFile } from '../http/http';

/**
* The Suggester service entry point to suggest Intersight REST resources using Elastic Search suggester API syntax. The suggest feature suggests similar looking terms based on a provided text by using a suggester.  See [Search API query syntax](/apidocs/introduction/query/#global-search-api) for details about the suggester query syntax.
*/
export class SearchSuggestItem extends MoBaseMo {
    /**
    * Flag for returning complete objects that matched the global search criteria.
    */
    'completeMo'?: boolean;
    /**
    * Additional filter parameters for global search. You can also specify OData select fields here. Maximum Query Length is limited to 10000.
    */
    'rawquery'?: string;
    /**
    * Starting offset for the results to be returned from external search engine.
    */
    'skip'?: number;
    /**
    * Main search term used for global search across all Managed Objects that has search enabled. Search Term can be up to 200 characters long.
    */
    'suggestTerm'?: string;
    /**
    * Maximum number of results to be returned from external search engine.
    */
    'top'?: number;
    /**
    * Object type filter of a Managed Object. Search will be restricted only on the specified object types.  Do not provide IndexMoTypes filter in the rawquery, if you specify values in this field.
    */
    'type'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "completeMo",
            "baseName": "CompleteMo",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "rawquery",
            "baseName": "Rawquery",
            "type": "string",
            "format": ""
        },
        {
            "name": "skip",
            "baseName": "Skip",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "suggestTerm",
            "baseName": "SuggestTerm",
            "type": "string",
            "format": ""
        },
        {
            "name": "top",
            "baseName": "Top",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "type",
            "baseName": "Type",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(SearchSuggestItem.attributeTypeMap);
    }
    
    public constructor() {
        super();
    }
}

