/*
 * Ahana API
 * Ahana Web Server API
 *
 * OpenAPI spec version: 1.0.0
 * Contact: ahana@karngyan.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.18
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ModelsContest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ModelsContest'));
  } else {
    // Browser globals (root is window)
    if (!root.AhanaApi) {
      root.AhanaApi = {};
    }
    root.AhanaApi.ModelsContestResponse = factory(root.AhanaApi.ApiClient, root.AhanaApi.ModelsContest);
  }
}(this, function(ApiClient, ModelsContest) {
  'use strict';

  /**
   * The ModelsContestResponse model module.
   * @module model/ModelsContestResponse
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ModelsContestResponse</code>.
   * @alias module:model/ModelsContestResponse
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ModelsContestResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModelsContestResponse} obj Optional instance to populate.
   * @return {module:model/ModelsContestResponse} The populated <code>ModelsContestResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('contest'))
        obj.contest = ModelsContest.constructFromObject(data['contest']);
      if (data.hasOwnProperty('userRegistered'))
        obj.userRegistered = ApiClient.convertToType(data['userRegistered'], 'Boolean');
    }
    return obj;
  }

  /**
   * @member {module:model/ModelsContest} contest
   */
  exports.prototype.contest = undefined;

  /**
   * @member {Boolean} userRegistered
   */
  exports.prototype.userRegistered = undefined;


  return exports;

}));