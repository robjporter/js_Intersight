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
* Definition of the list of properties defined in 'content.BaseParameter', excluding properties defined in parent classes.
*/
export class ContentBaseParameterAllOf {
    /**
    * The flag that allows single values in content to be extracted as a single element collection in case the parameter is of Collection type. This flag is applicable for parameters of type Collection only.
    */
    'acceptSingleValue'?: boolean;
    /**
    * The name of the complex type definition in case this is a complex parameter. The content.Grammar object must have a complex type, content.ComplexType, defined with the specified name in types collection property.
    */
    'complexType'?: string;
    /**
    * The type of the collection item in case this is a collection parameter.
    */
    'itemType'?: ContentBaseParameterAllOfItemTypeEnum;
    /**
    * The name of the parameter.
    */
    'name'?: string;
    /**
    * The content specific path information that identifies the parameter value within the content. The value is usually a XPath or JSONPath or a regular expression in case of text content.
    */
    'path'?: string;
    /**
    * The type of the parameter. Accepted values are simple, complex, collection.
    */
    'type'?: ContentBaseParameterAllOfTypeEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "acceptSingleValue",
            "baseName": "AcceptSingleValue",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "complexType",
            "baseName": "ComplexType",
            "type": "string",
            "format": ""
        },
        {
            "name": "itemType",
            "baseName": "ItemType",
            "type": "ContentBaseParameterAllOfItemTypeEnum",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "Name",
            "type": "string",
            "format": ""
        },
        {
            "name": "path",
            "baseName": "Path",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "Type",
            "type": "ContentBaseParameterAllOfTypeEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ContentBaseParameterAllOf.attributeTypeMap;
    }
    
    public constructor() {
    }
}


export type ContentBaseParameterAllOfItemTypeEnum = "simple" | "complex" | "collection" ;
export type ContentBaseParameterAllOfTypeEnum = "simple" | "complex" | "collection" ;

