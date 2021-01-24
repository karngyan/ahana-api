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
    root.AhanaApi.ProblemsApi = factory(root.AhanaApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * Problems service.
   * @module api/ProblemsApi
   * @version 1.0.0
   */

  /**
   * Constructs a new ProblemsApi. 
   * @alias module:api/ProblemsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the problemControllerGetInputFileAndInitSubmissionDeadline operation.
     * @callback module:api/ProblemsApi~problemControllerGetInputFileAndInitSubmissionDeadlineCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Input File and create a submission deadline for the user
     * @param {String} xUserApiKey User API Key
     * @param {Number} pid the problem id you want to get
     * @param {module:api/ProblemsApi~problemControllerGetInputFileAndInitSubmissionDeadlineCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.problemControllerGetInputFileAndInitSubmissionDeadline = function(xUserApiKey, pid, callback) {
      var postBody = null;

      // verify the required parameter 'xUserApiKey' is set
      if (xUserApiKey === undefined || xUserApiKey === null) {
        throw new Error("Missing the required parameter 'xUserApiKey' when calling problemControllerGetInputFileAndInitSubmissionDeadline");
      }

      // verify the required parameter 'pid' is set
      if (pid === undefined || pid === null) {
        throw new Error("Missing the required parameter 'pid' when calling problemControllerGetInputFileAndInitSubmissionDeadline");
      }


      var pathParams = {
        'pid': pid
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'X-User-ApiKey': xUserApiKey
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/problems/{pid}/input', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
