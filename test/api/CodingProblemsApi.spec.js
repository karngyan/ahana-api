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
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.AhanaApi);
  }
}(this, function(expect, AhanaApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new AhanaApi.CodingProblemsApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('CodingProblemsApi', function() {
    describe('codingProblemControllerDownloadInputFile', function() {
      it('should call codingProblemControllerDownloadInputFile successfully', function(done) {
        //uncomment below and update the code to test codingProblemControllerDownloadInputFile
        //instance.codingProblemControllerDownloadInputFile(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('codingProblemControllerGetCodingProblemById', function() {
      it('should call codingProblemControllerGetCodingProblemById successfully', function(done) {
        //uncomment below and update the code to test codingProblemControllerGetCodingProblemById
        //instance.codingProblemControllerGetCodingProblemById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('codingProblemControllerGetCodingProblemsByContest', function() {
      it('should call codingProblemControllerGetCodingProblemsByContest successfully', function(done) {
        //uncomment below and update the code to test codingProblemControllerGetCodingProblemsByContest
        //instance.codingProblemControllerGetCodingProblemsByContest(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('codingProblemControllerInitSubmissionDeadline', function() {
      it('should call codingProblemControllerInitSubmissionDeadline successfully', function(done) {
        //uncomment below and update the code to test codingProblemControllerInitSubmissionDeadline
        //instance.codingProblemControllerInitSubmissionDeadline(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
