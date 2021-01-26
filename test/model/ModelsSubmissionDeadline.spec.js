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
    describe('ModelsSubmissionDeadline', function() {
      beforeEach(function() {
        instance = new AhanaApi.ModelsSubmissionDeadline();
      });

      it('should create an instance of ModelsSubmissionDeadline', function() {
        // TODO: update the code to test ModelsSubmissionDeadline
        expect(instance).to.be.a(AhanaApi.ModelsSubmissionDeadline);
      });

      it('should have the property contest (base name: "contest")', function() {
        // TODO: update the code to test the property contest
        expect(instance).to.have.property('contest');
        // expect(instance.contest).to.be(expectedValueLiteral);
      });

      it('should have the property created (base name: "created")', function() {
        // TODO: update the code to test the property created
        expect(instance).to.have.property('created');
        // expect(instance.created).to.be(expectedValueLiteral);
      });

      it('should have the property deadline (base name: "deadline")', function() {
        // TODO: update the code to test the property deadline
        expect(instance).to.have.property('deadline');
        // expect(instance.deadline).to.be(expectedValueLiteral);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property problem (base name: "problem")', function() {
        // TODO: update the code to test the property problem
        expect(instance).to.have.property('problem');
        // expect(instance.problem).to.be(expectedValueLiteral);
      });

      it('should have the property updated (base name: "updated")', function() {
        // TODO: update the code to test the property updated
        expect(instance).to.have.property('updated');
        // expect(instance.updated).to.be(expectedValueLiteral);
      });

      it('should have the property user (base name: "user")', function() {
        // TODO: update the code to test the property user
        expect(instance).to.have.property('user');
        // expect(instance.user).to.be(expectedValueLiteral);
      });

    });
  });

}));