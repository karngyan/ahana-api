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

/**
* The ModelsEUser model module.
* @module model/ModelsEUser
* @version 1.0.0
*/
export default class ModelsEUser {
    /**
    * Constructs a new <code>ModelsEUser</code>.
    * @alias module:model/ModelsEUser
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>ModelsEUser</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ModelsEUser} obj Optional instance to populate.
    * @return {module:model/ModelsEUser} The populated <code>ModelsEUser</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ModelsEUser();
                        
            
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('signUpMode')) {
                obj['signUpMode'] = ApiClient.convertToType(data['signUpMode'], 'String');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('uid')) {
                obj['uid'] = ApiClient.convertToType(data['uid'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {String} email
    */
    'email' = undefined;
    /**
    * @member {String} signUpMode
    */
    'signUpMode' = undefined;
    /**
    * @member {String} token
    */
    'token' = undefined;
    /**
    * @member {String} uid
    */
    'uid' = undefined;




}
