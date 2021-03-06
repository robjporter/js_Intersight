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

import { ApplianceUpgradePolicyAllOf } from './ApplianceUpgradePolicyAllOf';
import { IamAccountRelationship } from './IamAccountRelationship';
import { MoBaseMo } from './MoBaseMo';
import { MoBaseMoRelationship } from './MoBaseMoRelationship';
import { MoTag } from './MoTag';
import { MoVersionContext } from './MoVersionContext';
import { OnpremSchedule } from './OnpremSchedule';
import { HttpFile } from '../http/http';

/**
* UpgradePolicy stores the Intersight Appliance's software upgrade policy. UpgradePolicy is a sinlgeton managed object. A default upgrade policy is created during the Intersight Appliance setup, and it is configured with an automatic upgrade policy. Automatic upgrade policy lets the system start software upgrade after a pre-defined number of seconds set in the software manifest. Scheduled upgrade pilicy lets the user start software upgrade at a specified schedule. However, scheduled time cannot be beyond the time limit enforced by the upgrade grace period set in the software manifest.
*/
export class ApplianceUpgradePolicy extends MoBaseMo {
    /**
    * Indicates if the upgrade service is set to automatically start the software upgrade or not. If autoUpgrade is true, then the value of the schedule field is ignored.
    */
    'autoUpgrade'?: boolean;
    /**
    * If enabled, allows the user to define a blackout period during which the appliance will not be upgraded.
    */
    'blackoutDatesEnabled'?: boolean;
    /**
    * End date of the black out period.
    */
    'blackoutEndDate'?: Date;
    /**
    * Start date of the black out period. The appliance will not be upgraded during this period.
    */
    'blackoutStartDate'?: Date;
    'schedule'?: OnpremSchedule;
    'account'?: IamAccountRelationship;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "autoUpgrade",
            "baseName": "AutoUpgrade",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "blackoutDatesEnabled",
            "baseName": "BlackoutDatesEnabled",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "blackoutEndDate",
            "baseName": "BlackoutEndDate",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "blackoutStartDate",
            "baseName": "BlackoutStartDate",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "schedule",
            "baseName": "Schedule",
            "type": "OnpremSchedule",
            "format": ""
        },
        {
            "name": "account",
            "baseName": "Account",
            "type": "IamAccountRelationship",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ApplianceUpgradePolicy.attributeTypeMap);
    }
    
    public constructor() {
        super();
    }
}

