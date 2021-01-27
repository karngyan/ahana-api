/**
 * Ahana API
 * Ahana Web Server API
 *
 * OpenAPI spec version: 1.0.0
 * Contact: ahana@karngyan.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import ModelsCodingProblem from './ModelsCodingProblem';
import ModelsContest from './ModelsContest';
import ModelsSubmissionType from './ModelsSubmissionType';
import ModelsVerdictType from './ModelsVerdictType';

/**
* The ModelsSubmission model module.
* @module model/ModelsSubmission
* @version 1.0.0
*/
export default class ModelsSubmission {
    /**
    * Constructs a new <code>ModelsSubmission</code>.
    * @alias module:model/ModelsSubmission
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>ModelsSubmission</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ModelsSubmission} obj Optional instance to populate.
    * @return {module:model/ModelsSubmission} The populated <code>ModelsSubmission</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ModelsSubmission();
                        
            
            if (data.hasOwnProperty('contest')) {
                obj['contest'] = ModelsContest.constructFromObject(data['contest']);
            }
            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'Number');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('problem')) {
                obj['problem'] = ModelsCodingProblem.constructFromObject(data['problem']);
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ModelsSubmissionType.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('updated')) {
                obj['updated'] = ApiClient.convertToType(data['updated'], 'Number');
            }
            if (data.hasOwnProperty('verdict')) {
                obj['verdict'] = ModelsVerdictType.constructFromObject(data['verdict']);
            }
        }
        return obj;
    }

    /**
    * @member {module:model/ModelsContest} contest
    */
    'contest' = undefined;
    /**
    * @member {Number} created
    */
    'created' = undefined;
    /**
    * @member {Number} id
    */
    'id' = undefined;
    /**
    * @member {module:model/ModelsCodingProblem} problem
    */
    'problem' = undefined;
    /**
    * @member {module:model/ModelsSubmissionType} type
    */
    'type' = undefined;
    /**
    * @member {Number} updated
    */
    'updated' = undefined;
    /**
    * @member {module:model/ModelsVerdictType} verdict
    */
    'verdict' = undefined;




}
