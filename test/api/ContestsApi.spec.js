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
    instance = new AhanaApi.ContestsApi();
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

  describe('ContestsApi', function() {
    describe('contestControllerGetContest', function() {
      it('should call contestControllerGetContest successfully', function(done) {
        //uncomment below and update the code to test contestControllerGetContest
        //instance.contestControllerGetContest(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('contestControllerGetContestsBySeries', function() {
      it('should call contestControllerGetContestsBySeries successfully', function(done) {
        //uncomment below and update the code to test contestControllerGetContestsBySeries
        //instance.contestControllerGetContestsBySeries(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('contestControllerRegisterForContest', function() {
      it('should call contestControllerRegisterForContest successfully', function(done) {
        //uncomment below and update the code to test contestControllerRegisterForContest
        //instance.contestControllerRegisterForContest(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));