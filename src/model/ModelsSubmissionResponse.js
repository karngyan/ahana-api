/**
 * Ahana API
 * Ahana Web Server API
 *
 * OpenAPI spec version: 1.0.0
 * Contact: mail@karngyan.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.AhanaApi) {
      root.AhanaApi = {};
    }
    root.AhanaApi.ModelsSubmissionResponse = factory(root.AhanaApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ModelsSubmissionResponse model module.
   * @module model/ModelsSubmissionResponse
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ModelsSubmissionResponse</code>.
   * @alias module:model/ModelsSubmissionResponse
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>ModelsSubmissionResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModelsSubmissionResponse} obj Optional instance to populate.
   * @return {module:model/ModelsSubmissionResponse} The populated <code>ModelsSubmissionResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
      if (data.hasOwnProperty('verdict')) {
        obj['verdict'] = ApiClient.convertToType(data['verdict'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} message
   */
  exports.prototype['message'] = undefined;
  /**
   * @member {String} verdict
   */
  exports.prototype['verdict'] = undefined;



  return exports;
}));

