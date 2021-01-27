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

  beforeEach(function() {
    instance = new AhanaApi.ContestsApi();
  });

  describe('(package)', function() {
    describe('ContestsApi', function() {
      describe('contestControllerGetContest', function() {
        it('should call contestControllerGetContest successfully', function(done) {
          // TODO: uncomment, update parameter values for contestControllerGetContest call and complete the assertions
          /*
          var xUserApiKey = "xUserApiKey_example";
          var contestId = 789;

          instance.contestControllerGetContest(xUserApiKey, contestId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(AhanaApi.ModelsContestResponse);
            expect(data.contest).to.be.a(AhanaApi.ModelsContest);
                  expect(data.contest.created).to.be.a('number');
              expect(data.contest.created).to.be("0");
              expect(data.contest.description).to.be.a('string');
              expect(data.contest.description).to.be("");
              expect(data.contest.duration).to.be.a('number');
              expect(data.contest.duration).to.be("0");
              expect(data.contest.id).to.be.a('number');
              expect(data.contest.id).to.be("0");
              expect(data.contest.name).to.be.a('string');
              expect(data.contest.name).to.be("");
              expect(data.contest.organizer).to.be.a(AhanaApi.ModelsUser);
                    expect(data.contest.organizer.apiKey).to.be.a('string');
                expect(data.contest.organizer.apiKey).to.be("");
                expect(data.contest.organizer.created).to.be.a('number');
                expect(data.contest.organizer.created).to.be("0");
                expect(data.contest.organizer.email).to.be.a('string');
                expect(data.contest.organizer.email).to.be("");
                expect(data.contest.organizer.emailNotificationEnabled).to.be.a('boolean');
                expect(data.contest.organizer.emailNotificationEnabled).to.be(false);
                expect(data.contest.organizer.firebaseUID).to.be.a('string');
                expect(data.contest.organizer.firebaseUID).to.be("");
                expect(data.contest.organizer.handle).to.be.a('string');
                expect(data.contest.organizer.handle).to.be("");
                expect(data.contest.organizer.id).to.be.a('number');
                expect(data.contest.organizer.id).to.be("0");
                expect(data.contest.organizer.isLocked).to.be.a('boolean');
                expect(data.contest.organizer.isLocked).to.be(false);
                expect(data.contest.organizer.name).to.be.a('string');
                expect(data.contest.organizer.name).to.be("");
                expect(data.contest.organizer.phoneNumber).to.be.a('string');
                expect(data.contest.organizer.phoneNumber).to.be("");
                expect(data.contest.organizer.rating).to.be.a('number');
                expect(data.contest.organizer.rating).to.be("0");
                expect(data.contest.organizer.signUpMode).to.be.a(AhanaApi.ModelsSignUpMode);
                    expect(data.contest.organizer.tSize).to.be.a('string');
                expect(data.contest.organizer.tSize).to.be("");
                expect(data.contest.organizer.type).to.be.a(AhanaApi.ModelsUserType);
                    expect(data.contest.organizer.updated).to.be.a('number');
                expect(data.contest.organizer.updated).to.be("0");
              expect(data.contest.series).to.be.a(AhanaApi.ModelsSeries);
                    expect(data.contest.series.created).to.be.a('number');
                expect(data.contest.series.created).to.be("0");
                expect(data.contest.series.description).to.be.a('string');
                expect(data.contest.series.description).to.be("");
                expect(data.contest.series.id).to.be.a('number');
                expect(data.contest.series.id).to.be("0");
                expect(data.contest.series.logoUrl).to.be.a('string');
                expect(data.contest.series.logoUrl).to.be("");
                expect(data.contest.series.name).to.be.a('string');
                expect(data.contest.series.name).to.be("");
                expect(data.contest.series.updated).to.be.a('number');
                expect(data.contest.series.updated).to.be("0");
              expect(data.contest.start).to.be.a('number');
              expect(data.contest.start).to.be("0");
              expect(data.contest.updated).to.be.a('number');
              expect(data.contest.updated).to.be("0");
            expect(data.userRegistered).to.be.a('boolean');
            expect(data.userRegistered).to.be(false);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('contestControllerGetContestsBySeries', function() {
        it('should call contestControllerGetContestsBySeries successfully', function(done) {
          // TODO: uncomment, update parameter values for contestControllerGetContestsBySeries call and complete the assertions
          /*
          var sid = 789;

          instance.contestControllerGetContestsBySeries(sid, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(AhanaApi.ModelsContest);
              expect(data.created).to.be.a('number');
              expect(data.created).to.be("0");
              expect(data.description).to.be.a('string');
              expect(data.description).to.be("");
              expect(data.duration).to.be.a('number');
              expect(data.duration).to.be("0");
              expect(data.id).to.be.a('number');
              expect(data.id).to.be("0");
              expect(data.name).to.be.a('string');
              expect(data.name).to.be("");
              expect(data.organizer).to.be.a(AhanaApi.ModelsUser);
                    expect(data.organizer.apiKey).to.be.a('string');
                expect(data.organizer.apiKey).to.be("");
                expect(data.organizer.created).to.be.a('number');
                expect(data.organizer.created).to.be("0");
                expect(data.organizer.email).to.be.a('string');
                expect(data.organizer.email).to.be("");
                expect(data.organizer.emailNotificationEnabled).to.be.a('boolean');
                expect(data.organizer.emailNotificationEnabled).to.be(false);
                expect(data.organizer.firebaseUID).to.be.a('string');
                expect(data.organizer.firebaseUID).to.be("");
                expect(data.organizer.handle).to.be.a('string');
                expect(data.organizer.handle).to.be("");
                expect(data.organizer.id).to.be.a('number');
                expect(data.organizer.id).to.be("0");
                expect(data.organizer.isLocked).to.be.a('boolean');
                expect(data.organizer.isLocked).to.be(false);
                expect(data.organizer.name).to.be.a('string');
                expect(data.organizer.name).to.be("");
                expect(data.organizer.phoneNumber).to.be.a('string');
                expect(data.organizer.phoneNumber).to.be("");
                expect(data.organizer.rating).to.be.a('number');
                expect(data.organizer.rating).to.be("0");
                expect(data.organizer.signUpMode).to.be.a(AhanaApi.ModelsSignUpMode);
                    expect(data.organizer.tSize).to.be.a('string');
                expect(data.organizer.tSize).to.be("");
                expect(data.organizer.type).to.be.a(AhanaApi.ModelsUserType);
                    expect(data.organizer.updated).to.be.a('number');
                expect(data.organizer.updated).to.be("0");
              expect(data.series).to.be.a(AhanaApi.ModelsSeries);
                    expect(data.series.created).to.be.a('number');
                expect(data.series.created).to.be("0");
                expect(data.series.description).to.be.a('string');
                expect(data.series.description).to.be("");
                expect(data.series.id).to.be.a('number');
                expect(data.series.id).to.be("0");
                expect(data.series.logoUrl).to.be.a('string');
                expect(data.series.logoUrl).to.be("");
                expect(data.series.name).to.be.a('string');
                expect(data.series.name).to.be("");
                expect(data.series.updated).to.be.a('number');
                expect(data.series.updated).to.be("0");
              expect(data.start).to.be.a('number');
              expect(data.start).to.be("0");
              expect(data.updated).to.be.a('number');
              expect(data.updated).to.be("0");
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('contestControllerRegisterForContest', function() {
        it('should call contestControllerRegisterForContest successfully', function(done) {
          // TODO: uncomment, update parameter values for contestControllerRegisterForContest call
          /*
          var xUserApiKey = "xUserApiKey_example";
          var contestId = 789;

          instance.contestControllerRegisterForContest(xUserApiKey, contestId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

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
