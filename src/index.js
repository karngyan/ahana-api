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

import ApiClient from './ApiClient';
import Body from './model/Body';
import ModelsCodingProblem from './model/ModelsCodingProblem';
import ModelsContest from './model/ModelsContest';
import ModelsContestResponse from './model/ModelsContestResponse';
import ModelsEUser from './model/ModelsEUser';
import ModelsRSubmissionDeadline from './model/ModelsRSubmissionDeadline';
import ModelsSeries from './model/ModelsSeries';
import ModelsSignUpMode from './model/ModelsSignUpMode';
import ModelsSubmission from './model/ModelsSubmission';
import ModelsSubmissionDeadline from './model/ModelsSubmissionDeadline';
import ModelsSubmissionResponse from './model/ModelsSubmissionResponse';
import ModelsSubmissionType from './model/ModelsSubmissionType';
import ModelsUser from './model/ModelsUser';
import ModelsUserType from './model/ModelsUserType';
import ModelsVerdictType from './model/ModelsVerdictType';
import CodingProblemsApi from './api/CodingProblemsApi';
import ContestsApi from './api/ContestsApi';
import SeriesApi from './api/SeriesApi';
import SubmissionsApi from './api/SubmissionsApi';
import UsersApi from './api/UsersApi';

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
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The Body model constructor.
     * @property {module:model/Body}
     */
    Body,

    /**
     * The ModelsCodingProblem model constructor.
     * @property {module:model/ModelsCodingProblem}
     */
    ModelsCodingProblem,

    /**
     * The ModelsContest model constructor.
     * @property {module:model/ModelsContest}
     */
    ModelsContest,

    /**
     * The ModelsContestResponse model constructor.
     * @property {module:model/ModelsContestResponse}
     */
    ModelsContestResponse,

    /**
     * The ModelsEUser model constructor.
     * @property {module:model/ModelsEUser}
     */
    ModelsEUser,

    /**
     * The ModelsRSubmissionDeadline model constructor.
     * @property {module:model/ModelsRSubmissionDeadline}
     */
    ModelsRSubmissionDeadline,

    /**
     * The ModelsSeries model constructor.
     * @property {module:model/ModelsSeries}
     */
    ModelsSeries,

    /**
     * The ModelsSignUpMode model constructor.
     * @property {module:model/ModelsSignUpMode}
     */
    ModelsSignUpMode,

    /**
     * The ModelsSubmission model constructor.
     * @property {module:model/ModelsSubmission}
     */
    ModelsSubmission,

    /**
     * The ModelsSubmissionDeadline model constructor.
     * @property {module:model/ModelsSubmissionDeadline}
     */
    ModelsSubmissionDeadline,

    /**
     * The ModelsSubmissionResponse model constructor.
     * @property {module:model/ModelsSubmissionResponse}
     */
    ModelsSubmissionResponse,

    /**
     * The ModelsSubmissionType model constructor.
     * @property {module:model/ModelsSubmissionType}
     */
    ModelsSubmissionType,

    /**
     * The ModelsUser model constructor.
     * @property {module:model/ModelsUser}
     */
    ModelsUser,

    /**
     * The ModelsUserType model constructor.
     * @property {module:model/ModelsUserType}
     */
    ModelsUserType,

    /**
     * The ModelsVerdictType model constructor.
     * @property {module:model/ModelsVerdictType}
     */
    ModelsVerdictType,

    /**
    * The CodingProblemsApi service constructor.
    * @property {module:api/CodingProblemsApi}
    */
    CodingProblemsApi,

    /**
    * The ContestsApi service constructor.
    * @property {module:api/ContestsApi}
    */
    ContestsApi,

    /**
    * The SeriesApi service constructor.
    * @property {module:api/SeriesApi}
    */
    SeriesApi,

    /**
    * The SubmissionsApi service constructor.
    * @property {module:api/SubmissionsApi}
    */
    SubmissionsApi,

    /**
    * The UsersApi service constructor.
    * @property {module:api/UsersApi}
    */
    UsersApi
};
