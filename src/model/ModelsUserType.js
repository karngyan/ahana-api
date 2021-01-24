/*
 * Ahana API
 * Ahana Web Server API
 *
 * OpenAPI spec version: 1.0.0
 * Contact: mail@karngyan.com
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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.AhanaApi) {
      root.AhanaApi = {};
    }
    root.AhanaApi.ModelsUserType = factory(root.AhanaApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ModelsUserType model module.
   * @module model/ModelsUserType
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ModelsUserType</code>.
   * @alias module:model/ModelsUserType
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ModelsUserType</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModelsUserType} obj Optional instance to populate.
   * @return {module:model/ModelsUserType} The populated <code>ModelsUserType</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    return data;
  }


  return exports;

}));
