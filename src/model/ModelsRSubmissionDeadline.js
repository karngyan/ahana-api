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
    define(['ApiClient', 'model/ModelsSubmissionDeadline'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ModelsSubmissionDeadline'));
  } else {
    // Browser globals (root is window)
    if (!root.AhanaApi) {
      root.AhanaApi = {};
    }
    root.AhanaApi.ModelsRSubmissionDeadline = factory(root.AhanaApi.ApiClient, root.AhanaApi.ModelsSubmissionDeadline);
  }
}(this, function(ApiClient, ModelsSubmissionDeadline) {
  'use strict';

  /**
   * The ModelsRSubmissionDeadline model module.
   * @module model/ModelsRSubmissionDeadline
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ModelsRSubmissionDeadline</code>.
   * @alias module:model/ModelsRSubmissionDeadline
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ModelsRSubmissionDeadline</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModelsRSubmissionDeadline} obj Optional instance to populate.
   * @return {module:model/ModelsRSubmissionDeadline} The populated <code>ModelsRSubmissionDeadline</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('inputFileDownloaded'))
        obj.inputFileDownloaded = ApiClient.convertToType(data['inputFileDownloaded'], 'Boolean');
      if (data.hasOwnProperty('inputFileUrl'))
        obj.inputFileUrl = ApiClient.convertToType(data['inputFileUrl'], 'String');
      if (data.hasOwnProperty('submissionDeadline'))
        obj.submissionDeadline = ModelsSubmissionDeadline.constructFromObject(data['submissionDeadline']);
    }
    return obj;
  }

  /**
   * @member {Boolean} inputFileDownloaded
   */
  exports.prototype.inputFileDownloaded = undefined;

  /**
   * @member {String} inputFileUrl
   */
  exports.prototype.inputFileUrl = undefined;

  /**
   * @member {module:model/ModelsSubmissionDeadline} submissionDeadline
   */
  exports.prototype.submissionDeadline = undefined;


  return exports;

}));
