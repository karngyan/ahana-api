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
    define(['ApiClient', 'model/ModelsRSubmissionDeadline', 'model/ModelsSubmission', 'model/ModelsSubmissionResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ModelsRSubmissionDeadline'), require('../model/ModelsSubmission'), require('../model/ModelsSubmissionResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.AhanaApi) {
      root.AhanaApi = {};
    }
    root.AhanaApi.SubmissionsApi = factory(root.AhanaApi.ApiClient, root.AhanaApi.ModelsRSubmissionDeadline, root.AhanaApi.ModelsSubmission, root.AhanaApi.ModelsSubmissionResponse);
  }
}(this, function(ApiClient, ModelsRSubmissionDeadline, ModelsSubmission, ModelsSubmissionResponse) {
  'use strict';

  /**
   * Submissions service.
   * @module api/SubmissionsApi
   * @version 1.0.0
   */

  /**
   * Constructs a new SubmissionsApi. 
   * @alias module:api/SubmissionsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the submissionControllerGetAllUserSubmissionsByContest operation.
     * @callback module:api/SubmissionsApi~submissionControllerGetAllUserSubmissionsByContestCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ModelsSubmission>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All User Submissions By Contest Id
     * @param {String} xUserApiKey the User API Key
     * @param {Number} cid contest id
     * @param {module:api/SubmissionsApi~submissionControllerGetAllUserSubmissionsByContestCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ModelsSubmission>}
     */
    this.submissionControllerGetAllUserSubmissionsByContest = function(xUserApiKey, cid, callback) {
      var postBody = null;

      // verify the required parameter 'xUserApiKey' is set
      if (xUserApiKey === undefined || xUserApiKey === null) {
        throw new Error("Missing the required parameter 'xUserApiKey' when calling submissionControllerGetAllUserSubmissionsByContest");
      }

      // verify the required parameter 'cid' is set
      if (cid === undefined || cid === null) {
        throw new Error("Missing the required parameter 'cid' when calling submissionControllerGetAllUserSubmissionsByContest");
      }


      var pathParams = {
      };
      var queryParams = {
        'cid': cid,
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
      var returnType = [ModelsSubmission];

      return this.apiClient.callApi(
        '/submissions/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the submissionControllerGetSubmission operation.
     * @callback module:api/SubmissionsApi~submissionControllerGetSubmissionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsSubmission} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Submission by id
     * @param {String} xUserApiKey User API Key
     * @param {Number} submissionId the submission you want to get
     * @param {module:api/SubmissionsApi~submissionControllerGetSubmissionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsSubmission}
     */
    this.submissionControllerGetSubmission = function(xUserApiKey, submissionId, callback) {
      var postBody = null;

      // verify the required parameter 'xUserApiKey' is set
      if (xUserApiKey === undefined || xUserApiKey === null) {
        throw new Error("Missing the required parameter 'xUserApiKey' when calling submissionControllerGetSubmission");
      }

      // verify the required parameter 'submissionId' is set
      if (submissionId === undefined || submissionId === null) {
        throw new Error("Missing the required parameter 'submissionId' when calling submissionControllerGetSubmission");
      }


      var pathParams = {
        'submissionId': submissionId
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
      var returnType = ModelsSubmission;

      return this.apiClient.callApi(
        '/submissions/{submissionId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the submissionControllerGetSubmissionDeadlineByProblem operation.
     * @callback module:api/SubmissionsApi~submissionControllerGetSubmissionDeadlineByProblemCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsRSubmissionDeadline} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * GetSubmissionDeadline for given problem Id for given User
     * @param {String} xUserApiKey User API Key
     * @param {Number} pid problem id
     * @param {module:api/SubmissionsApi~submissionControllerGetSubmissionDeadlineByProblemCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsRSubmissionDeadline}
     */
    this.submissionControllerGetSubmissionDeadlineByProblem = function(xUserApiKey, pid, callback) {
      var postBody = null;

      // verify the required parameter 'xUserApiKey' is set
      if (xUserApiKey === undefined || xUserApiKey === null) {
        throw new Error("Missing the required parameter 'xUserApiKey' when calling submissionControllerGetSubmissionDeadlineByProblem");
      }

      // verify the required parameter 'pid' is set
      if (pid === undefined || pid === null) {
        throw new Error("Missing the required parameter 'pid' when calling submissionControllerGetSubmissionDeadlineByProblem");
      }


      var pathParams = {
      };
      var queryParams = {
        'pid': pid,
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
      var returnType = ModelsRSubmissionDeadline;

      return this.apiClient.callApi(
        '/submissions/deadline', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the submissionControllerSubmitCodeSolution operation.
     * @callback module:api/SubmissionsApi~submissionControllerSubmitCodeSolutionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsSubmissionResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Output Submission - Checks if output file matches output
     * @param {String} xUserApiKey User API Key
     * @param {Number} contestId contest id
     * @param {Number} problemId problem id
     * @param {File} sfile form data output file
     * @param {File} cfile form data source code file
     * @param {module:api/SubmissionsApi~submissionControllerSubmitCodeSolutionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsSubmissionResponse}
     */
    this.submissionControllerSubmitCodeSolution = function(xUserApiKey, contestId, problemId, sfile, cfile, callback) {
      var postBody = null;

      // verify the required parameter 'xUserApiKey' is set
      if (xUserApiKey === undefined || xUserApiKey === null) {
        throw new Error("Missing the required parameter 'xUserApiKey' when calling submissionControllerSubmitCodeSolution");
      }

      // verify the required parameter 'contestId' is set
      if (contestId === undefined || contestId === null) {
        throw new Error("Missing the required parameter 'contestId' when calling submissionControllerSubmitCodeSolution");
      }

      // verify the required parameter 'problemId' is set
      if (problemId === undefined || problemId === null) {
        throw new Error("Missing the required parameter 'problemId' when calling submissionControllerSubmitCodeSolution");
      }

      // verify the required parameter 'sfile' is set
      if (sfile === undefined || sfile === null) {
        throw new Error("Missing the required parameter 'sfile' when calling submissionControllerSubmitCodeSolution");
      }

      // verify the required parameter 'cfile' is set
      if (cfile === undefined || cfile === null) {
        throw new Error("Missing the required parameter 'cfile' when calling submissionControllerSubmitCodeSolution");
      }


      var pathParams = {
      };
      var queryParams = {
        'contestId': contestId,
        'problemId': problemId,
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'X-User-ApiKey': xUserApiKey
      };
      var formParams = {
        'sfile': sfile,
        'cfile': cfile
      };

      var authNames = [];
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/json'];
      var returnType = ModelsSubmissionResponse;

      return this.apiClient.callApi(
        '/submissions/code', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
