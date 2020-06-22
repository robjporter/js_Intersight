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

import { AssetDeviceRegistrationRelationship } from './AssetDeviceRegistrationRelationship';
import { PciSwitchRelationship } from './PciSwitchRelationship';
import { HttpFile } from '../http/http';

/**
* Definition of the list of properties defined in 'pci.Link', excluding properties defined in parent classes.
*/
export class PciLinkAllOf {
    /**
    * It shows the name of the pci device.
    */
    'adapter'?: string;
    /**
    * It shows the upstream link speed for device.
    */
    'linkSpeed'?: string;
    /**
    * It shows the upstream link status for device.
    */
    'linkStatus'?: string;
    /**
    * It shows the upstream link width for device.
    */
    'linkWidth'?: string;
    /**
    * It shows pci slot name for the pci device.
    */
    'pciSlot'?: string;
    /**
    * It shows the health information for pci device.
    */
    'slotStatus'?: string;
    'pciSwitch'?: PciSwitchRelationship;
    'registeredDevice'?: AssetDeviceRegistrationRelationship;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "adapter",
            "baseName": "Adapter",
            "type": "string",
            "format": ""
        },
        {
            "name": "linkSpeed",
            "baseName": "LinkSpeed",
            "type": "string",
            "format": ""
        },
        {
            "name": "linkStatus",
            "baseName": "LinkStatus",
            "type": "string",
            "format": ""
        },
        {
            "name": "linkWidth",
            "baseName": "LinkWidth",
            "type": "string",
            "format": ""
        },
        {
            "name": "pciSlot",
            "baseName": "PciSlot",
            "type": "string",
            "format": ""
        },
        {
            "name": "slotStatus",
            "baseName": "SlotStatus",
            "type": "string",
            "format": ""
        },
        {
            "name": "pciSwitch",
            "baseName": "PciSwitch",
            "type": "PciSwitchRelationship",
            "format": ""
        },
        {
            "name": "registeredDevice",
            "baseName": "RegisteredDevice",
            "type": "AssetDeviceRegistrationRelationship",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PciLinkAllOf.attributeTypeMap;
    }
    
    public constructor() {
    }
}

