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
    define(['ApiClient', 'model/ModelsCodingProblem', 'model/ModelsContest', 'model/ModelsUser'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ModelsCodingProblem'), require('./ModelsContest'), require('./ModelsUser'));
  } else {
    // Browser globals (root is window)
    if (!root.AhanaApi) {
      root.AhanaApi = {};
    }
    root.AhanaApi.ModelsSubmissionDeadline = factory(root.AhanaApi.ApiClient, root.AhanaApi.ModelsCodingProblem, root.AhanaApi.ModelsContest, root.AhanaApi.ModelsUser);
  }
}(this, function(ApiClient, ModelsCodingProblem, ModelsContest, ModelsUser) {
  'use strict';

  /**
   * The ModelsSubmissionDeadline model module.
   * @module model/ModelsSubmissionDeadline
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ModelsSubmissionDeadline</code>.
   * @alias module:model/ModelsSubmissionDeadline
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ModelsSubmissionDeadline</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModelsSubmissionDeadline} obj Optional instance to populate.
   * @return {module:model/ModelsSubmissionDeadline} The populated <code>ModelsSubmissionDeadline</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('contest'))
        obj.contest = ModelsContest.constructFromObject(data['contest']);
      if (data.hasOwnProperty('created'))
        obj.created = ApiClient.convertToType(data['created'], 'Number');
      if (data.hasOwnProperty('deadline'))
        obj.deadline = ApiClient.convertToType(data['deadline'], 'Number');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('problem'))
        obj.problem = ModelsCodingProblem.constructFromObject(data['problem']);
      if (data.hasOwnProperty('updated'))
        obj.updated = ApiClient.convertToType(data['updated'], 'Number');
      if (data.hasOwnProperty('user'))
        obj.user = ModelsUser.constructFromObject(data['user']);
    }
    return obj;
  }

  /**
   * @member {module:model/ModelsContest} contest
   */
  exports.prototype.contest = undefined;

  /**
   * @member {Number} created
   */
  exports.prototype.created = undefined;

  /**
   * @member {Number} deadline
   */
  exports.prototype.deadline = undefined;

  /**
   * @member {Number} id
   */
  exports.prototype.id = undefined;

  /**
   * @member {module:model/ModelsCodingProblem} problem
   */
  exports.prototype.problem = undefined;

  /**
   * @member {Number} updated
   */
  exports.prototype.updated = undefined;

  /**
   * @member {module:model/ModelsUser} user
   */
  exports.prototype.user = undefined;


  return exports;

}));
