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

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ModelsCodingProblem', 'model/ModelsContest', 'model/ModelsContestResponse', 'model/ModelsEUser', 'model/ModelsSeries', 'model/ModelsSignUpMode', 'model/ModelsSubmission', 'model/ModelsSubmissionResponse', 'model/ModelsSubmissionType', 'model/ModelsUser', 'model/ModelsUserType', 'model/ModelsVerdictType', 'api/CodingProblemsApi', 'api/ContestsApi', 'api/SeriesApi', 'api/SubmissionsApi', 'api/UsersApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/ModelsCodingProblem'), require('./model/ModelsContest'), require('./model/ModelsContestResponse'), require('./model/ModelsEUser'), require('./model/ModelsSeries'), require('./model/ModelsSignUpMode'), require('./model/ModelsSubmission'), require('./model/ModelsSubmissionResponse'), require('./model/ModelsSubmissionType'), require('./model/ModelsUser'), require('./model/ModelsUserType'), require('./model/ModelsVerdictType'), require('./api/CodingProblemsApi'), require('./api/ContestsApi'), require('./api/SeriesApi'), require('./api/SubmissionsApi'), require('./api/UsersApi'));
  }
}(function(ApiClient, ModelsCodingProblem, ModelsContest, ModelsContestResponse, ModelsEUser, ModelsSeries, ModelsSignUpMode, ModelsSubmission, ModelsSubmissionResponse, ModelsSubmissionType, ModelsUser, ModelsUserType, ModelsVerdictType, CodingProblemsApi, ContestsApi, SeriesApi, SubmissionsApi, UsersApi) {
  'use strict';

  /**
   * Ahana_Web_Server_API.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var AhanaApi = require('index'); // See note below*.
   * var xxxSvc = new AhanaApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new AhanaApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new AhanaApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new AhanaApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 1.0.0
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The ModelsCodingProblem model constructor.
     * @property {module:model/ModelsCodingProblem}
     */
    ModelsCodingProblem: ModelsCodingProblem,
    /**
     * The ModelsContest model constructor.
     * @property {module:model/ModelsContest}
     */
    ModelsContest: ModelsContest,
    /**
     * The ModelsContestResponse model constructor.
     * @property {module:model/ModelsContestResponse}
     */
    ModelsContestResponse: ModelsContestResponse,
    /**
     * The ModelsEUser model constructor.
     * @property {module:model/ModelsEUser}
     */
    ModelsEUser: ModelsEUser,
    /**
     * The ModelsSeries model constructor.
     * @property {module:model/ModelsSeries}
     */
    ModelsSeries: ModelsSeries,
    /**
     * The ModelsSignUpMode model constructor.
     * @property {module:model/ModelsSignUpMode}
     */
    ModelsSignUpMode: ModelsSignUpMode,
    /**
     * The ModelsSubmission model constructor.
     * @property {module:model/ModelsSubmission}
     */
    ModelsSubmission: ModelsSubmission,
    /**
     * The ModelsSubmissionResponse model constructor.
     * @property {module:model/ModelsSubmissionResponse}
     */
    ModelsSubmissionResponse: ModelsSubmissionResponse,
    /**
     * The ModelsSubmissionType model constructor.
     * @property {module:model/ModelsSubmissionType}
     */
    ModelsSubmissionType: ModelsSubmissionType,
    /**
     * The ModelsUser model constructor.
     * @property {module:model/ModelsUser}
     */
    ModelsUser: ModelsUser,
    /**
     * The ModelsUserType model constructor.
     * @property {module:model/ModelsUserType}
     */
    ModelsUserType: ModelsUserType,
    /**
     * The ModelsVerdictType model constructor.
     * @property {module:model/ModelsVerdictType}
     */
    ModelsVerdictType: ModelsVerdictType,
    /**
     * The CodingProblemsApi service constructor.
     * @property {module:api/CodingProblemsApi}
     */
    CodingProblemsApi: CodingProblemsApi,
    /**
     * The ContestsApi service constructor.
     * @property {module:api/ContestsApi}
     */
    ContestsApi: ContestsApi,
    /**
     * The SeriesApi service constructor.
     * @property {module:api/SeriesApi}
     */
    SeriesApi: SeriesApi,
    /**
     * The SubmissionsApi service constructor.
     * @property {module:api/SubmissionsApi}
     */
    SubmissionsApi: SubmissionsApi,
    /**
     * The UsersApi service constructor.
     * @property {module:api/UsersApi}
     */
    UsersApi: UsersApi
  };

  return exports;
}));
