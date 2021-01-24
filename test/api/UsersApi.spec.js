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

  beforeEach(function() {
    instance = new AhanaApi.UsersApi();
  });

  describe('(package)', function() {
    describe('UsersApi', function() {
      describe('userControllerCreateUser', function() {
        it('should call userControllerCreateUser successfully', function(done) {
          // TODO: uncomment, update parameter values for userControllerCreateUser call and complete the assertions
          /*
          var body = new AhanaApi.ModelsEUser();
          body.email = "";
          body.signUpMode = "";
          body.token = "";
          body.uid = "";
          var xToken = "xToken_example";

          instance.userControllerCreateUser(body, xToken, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(AhanaApi.ModelsUser);
            expect(data.apiKey).to.be.a('string');
            expect(data.apiKey).to.be("");
            expect(data.created).to.be.a('number');
            expect(data.created).to.be("0");
            expect(data.email).to.be.a('string');
            expect(data.email).to.be("");
            expect(data.emailNotificationEnabled).to.be.a('boolean');
            expect(data.emailNotificationEnabled).to.be(false);
            expect(data.firebaseUID).to.be.a('string');
            expect(data.firebaseUID).to.be("");
            expect(data.handle).to.be.a('string');
            expect(data.handle).to.be("");
            expect(data.id).to.be.a('number');
            expect(data.id).to.be("0");
            expect(data.isLocked).to.be.a('boolean');
            expect(data.isLocked).to.be(false);
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("");
            expect(data.phoneNumber).to.be.a('string');
            expect(data.phoneNumber).to.be("");
            expect(data.rating).to.be.a('number');
            expect(data.rating).to.be("0");
            expect(data.signUpMode).to.be.a(AhanaApi.ModelsSignUpMode);
                expect(data.tSize).to.be.a('string');
            expect(data.tSize).to.be("");
            expect(data.type).to.be.a(AhanaApi.ModelsUserType);
                expect(data.updated).to.be.a('number');
            expect(data.updated).to.be("0");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('userControllerGetUser', function() {
        it('should call userControllerGetUser successfully', function(done) {
          // TODO: uncomment, update parameter values for userControllerGetUser call and complete the assertions
          /*
          var xToken = "xToken_example";
          var firebaseUid = "firebaseUid_example";

          instance.userControllerGetUser(xToken, firebaseUid, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(AhanaApi.ModelsUser);
            expect(data.apiKey).to.be.a('string');
            expect(data.apiKey).to.be("");
            expect(data.created).to.be.a('number');
            expect(data.created).to.be("0");
            expect(data.email).to.be.a('string');
            expect(data.email).to.be("");
            expect(data.emailNotificationEnabled).to.be.a('boolean');
            expect(data.emailNotificationEnabled).to.be(false);
            expect(data.firebaseUID).to.be.a('string');
            expect(data.firebaseUID).to.be("");
            expect(data.handle).to.be.a('string');
            expect(data.handle).to.be("");
            expect(data.id).to.be.a('number');
            expect(data.id).to.be("0");
            expect(data.isLocked).to.be.a('boolean');
            expect(data.isLocked).to.be(false);
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("");
            expect(data.phoneNumber).to.be.a('string');
            expect(data.phoneNumber).to.be("");
            expect(data.rating).to.be.a('number');
            expect(data.rating).to.be("0");
            expect(data.signUpMode).to.be.a(AhanaApi.ModelsSignUpMode);
                expect(data.tSize).to.be.a('string');
            expect(data.tSize).to.be("");
            expect(data.type).to.be.a(AhanaApi.ModelsUserType);
                expect(data.updated).to.be.a('number');
            expect(data.updated).to.be("0");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
