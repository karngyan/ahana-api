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
import ModelsContest from './ModelsContest';

/**
* The ModelsContestResponse model module.
* @module model/ModelsContestResponse
* @version 1.0.0
*/
export default class ModelsContestResponse {
    /**
    * Constructs a new <code>ModelsContestResponse</code>.
    * @alias module:model/ModelsContestResponse
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>ModelsContestResponse</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ModelsContestResponse} obj Optional instance to populate.
    * @return {module:model/ModelsContestResponse} The populated <code>ModelsContestResponse</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ModelsContestResponse();
                        
            
            if (data.hasOwnProperty('contest')) {
                obj['contest'] = ModelsContest.constructFromObject(data['contest']);
            }
            if (data.hasOwnProperty('userRegistered')) {
                obj['userRegistered'] = ApiClient.convertToType(data['userRegistered'], 'Boolean');
            }
        }
        return obj;
    }

    /**
    * @member {module:model/ModelsContest} contest
    */
    'contest' = undefined;
    /**
    * @member {Boolean} userRegistered
    */
    'userRegistered' = undefined;




}
