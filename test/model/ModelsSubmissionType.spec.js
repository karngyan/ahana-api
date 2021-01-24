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

  describe('(package)', function() {
    describe('ModelsSubmissionType', function() {
      beforeEach(function() {
        instance = new AhanaApi.ModelsSubmissionType();
      });

      it('should create an instance of ModelsSubmissionType', function() {
        // TODO: update the code to test ModelsSubmissionType
        expect(instance).to.be.a(AhanaApi.ModelsSubmissionType);
      });

    });
  });

}));
