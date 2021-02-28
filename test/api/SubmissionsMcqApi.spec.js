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
    instance = new AhanaApi.SubmissionsMcqApi();
  });

  describe('(package)', function() {
    describe('SubmissionsMcqApi', function() {
      describe('mcqSubmissionControllerGetAllUserMcqSubmissionByContest', function() {
        it('should call mcqSubmissionControllerGetAllUserMcqSubmissionByContest successfully', function(done) {
          // TODO: uncomment, update parameter values for mcqSubmissionControllerGetAllUserMcqSubmissionByContest call and complete the assertions
          /*
          var xUserApiKey = "xUserApiKey_example";
          var cid = 789;

          instance.mcqSubmissionControllerGetAllUserMcqSubmissionByContest(xUserApiKey, cid, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(AhanaApi.ModelsASubmissionMcq);
            {
              let dataCtr = data.submissions;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(AhanaApi.ModelsSubmissionMcq);
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
                expect(data.created).to.be.a('number');
                expect(data.created).to.be("0");
                expect(data.id).to.be.a('number');
                expect(data.id).to.be("0");
                expect(data.problem).to.be.a(AhanaApi.ModelsMcqProblem);
                      expect(data.problem.contest).to.be.a(AhanaApi.ModelsContest);
                        expect(data.problem.contest.created).to.be.a('number');
                    expect(data.problem.contest.created).to.be("0");
                    expect(data.problem.contest.description).to.be.a('string');
                    expect(data.problem.contest.description).to.be("");
                    expect(data.problem.contest.duration).to.be.a('number');
                    expect(data.problem.contest.duration).to.be("0");
                    expect(data.problem.contest.id).to.be.a('number');
                    expect(data.problem.contest.id).to.be("0");
                    expect(data.problem.contest.name).to.be.a('string');
                    expect(data.problem.contest.name).to.be("");
                    expect(data.problem.contest.organizer).to.be.a(AhanaApi.ModelsUser);
                          expect(data.problem.contest.organizer.apiKey).to.be.a('string');
                      expect(data.problem.contest.organizer.apiKey).to.be("");
                      expect(data.problem.contest.organizer.created).to.be.a('number');
                      expect(data.problem.contest.organizer.created).to.be("0");
                      expect(data.problem.contest.organizer.email).to.be.a('string');
                      expect(data.problem.contest.organizer.email).to.be("");
                      expect(data.problem.contest.organizer.emailNotificationEnabled).to.be.a('boolean');
                      expect(data.problem.contest.organizer.emailNotificationEnabled).to.be(false);
                      expect(data.problem.contest.organizer.firebaseUID).to.be.a('string');
                      expect(data.problem.contest.organizer.firebaseUID).to.be("");
                      expect(data.problem.contest.organizer.handle).to.be.a('string');
                      expect(data.problem.contest.organizer.handle).to.be("");
                      expect(data.problem.contest.organizer.id).to.be.a('number');
                      expect(data.problem.contest.organizer.id).to.be("0");
                      expect(data.problem.contest.organizer.isLocked).to.be.a('boolean');
                      expect(data.problem.contest.organizer.isLocked).to.be(false);
                      expect(data.problem.contest.organizer.name).to.be.a('string');
                      expect(data.problem.contest.organizer.name).to.be("");
                      expect(data.problem.contest.organizer.phoneNumber).to.be.a('string');
                      expect(data.problem.contest.organizer.phoneNumber).to.be("");
                      expect(data.problem.contest.organizer.rating).to.be.a('number');
                      expect(data.problem.contest.organizer.rating).to.be("0");
                      expect(data.problem.contest.organizer.signUpMode).to.be.a(AhanaApi.ModelsSignUpMode);
                          expect(data.problem.contest.organizer.tSize).to.be.a('string');
                      expect(data.problem.contest.organizer.tSize).to.be("");
                      expect(data.problem.contest.organizer.type).to.be.a(AhanaApi.ModelsUserType);
                          expect(data.problem.contest.organizer.updated).to.be.a('number');
                      expect(data.problem.contest.organizer.updated).to.be("0");
                    expect(data.problem.contest.series).to.be.a(AhanaApi.ModelsSeries);
                          expect(data.problem.contest.series.created).to.be.a('number');
                      expect(data.problem.contest.series.created).to.be("0");
                      expect(data.problem.contest.series.description).to.be.a('string');
                      expect(data.problem.contest.series.description).to.be("");
                      expect(data.problem.contest.series.id).to.be.a('number');
                      expect(data.problem.contest.series.id).to.be("0");
                      expect(data.problem.contest.series.logoUrl).to.be.a('string');
                      expect(data.problem.contest.series.logoUrl).to.be("");
                      expect(data.problem.contest.series.name).to.be.a('string');
                      expect(data.problem.contest.series.name).to.be("");
                      expect(data.problem.contest.series.updated).to.be.a('number');
                      expect(data.problem.contest.series.updated).to.be("0");
                    expect(data.problem.contest.start).to.be.a('number');
                    expect(data.problem.contest.start).to.be("0");
                    expect(data.problem.contest.updated).to.be.a('number');
                    expect(data.problem.contest.updated).to.be("0");
                  expect(data.problem.created).to.be.a('number');
                  expect(data.problem.created).to.be("0");
                  expect(data.problem.id).to.be.a('number');
                  expect(data.problem.id).to.be("0");
                  expect(data.problem.optionFour).to.be.a('string');
                  expect(data.problem.optionFour).to.be("");
                  expect(data.problem.optionOne).to.be.a('string');
                  expect(data.problem.optionOne).to.be("");
                  expect(data.problem.optionThree).to.be.a('string');
                  expect(data.problem.optionThree).to.be("");
                  expect(data.problem.optionTwo).to.be.a('string');
                  expect(data.problem.optionTwo).to.be("");
                  expect(data.problem.statement).to.be.a('string');
                  expect(data.problem.statement).to.be("");
                  expect(data.problem.type).to.be.a(AhanaApi.ModelsMcqType);
                      expect(data.problem.updated).to.be.a('number');
                  expect(data.problem.updated).to.be("0");
                expect(data.type).to.be.a(AhanaApi.ModelsSubmissionType);
                    expect(data.updated).to.be.a('number');
                expect(data.updated).to.be("0");
                expect(data.userAnswerFour).to.be.a('boolean');
                expect(data.userAnswerFour).to.be(false);
                expect(data.userAnswerOne).to.be.a('boolean');
                expect(data.userAnswerOne).to.be(false);
                expect(data.userAnswerThree).to.be.a('boolean');
                expect(data.userAnswerThree).to.be(false);
                expect(data.userAnswerTwo).to.be.a('boolean');
                expect(data.userAnswerTwo).to.be(false);
                expect(data.verdict).to.be.a(AhanaApi.ModelsVerdictType);
        

                      }
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('mcqSubmissionControllerSubmitMcqProblems', function() {
        it('should call mcqSubmissionControllerSubmitMcqProblems successfully', function(done) {
          // TODO: uncomment, update parameter values for mcqSubmissionControllerSubmitMcqProblems call and complete the assertions
          /*
          var xUserApiKey = "xUserApiKey_example";
          var contestId = 789;
          var opts = {};
          opts.body = new AhanaApi.ModelsASubmissionMcq();
          opts.body.submissions = [new AhanaApi.ModelsSubmissionMcq()];
          opts.body.submissions[0].contest = new AhanaApi.ModelsContest();
          opts.body.submissions[0].contest.created = "0";
          opts.body.submissions[0].contest.description = "";
          opts.body.submissions[0].contest.duration = "0";
          opts.body.submissions[0].contest.id = "0";
          opts.body.submissions[0].contest.name = "";
          opts.body.submissions[0].contest.organizer = new AhanaApi.ModelsUser();
          opts.body.submissions[0].contest.organizer.apiKey = "";
          opts.body.submissions[0].contest.organizer.created = "0";
          opts.body.submissions[0].contest.organizer.email = "";
          opts.body.submissions[0].contest.organizer.emailNotificationEnabled = false;
          opts.body.submissions[0].contest.organizer.firebaseUID = "";
          opts.body.submissions[0].contest.organizer.handle = "";
          opts.body.submissions[0].contest.organizer.id = "0";
          opts.body.submissions[0].contest.organizer.isLocked = false;
          opts.body.submissions[0].contest.organizer.name = "";
          opts.body.submissions[0].contest.organizer.phoneNumber = "";
          opts.body.submissions[0].contest.organizer.rating = "0";
          opts.body.submissions[0].contest.organizer.signUpMode = new AhanaApi.ModelsSignUpMode();
          opts.body.submissions[0].contest.organizer.tSize = "";
          opts.body.submissions[0].contest.organizer.type = new AhanaApi.ModelsUserType();
          opts.body.submissions[0].contest.organizer.updated = "0";
          opts.body.submissions[0].contest.series = new AhanaApi.ModelsSeries();
          opts.body.submissions[0].contest.series.created = "0";
          opts.body.submissions[0].contest.series.description = "";
          opts.body.submissions[0].contest.series.id = "0";
          opts.body.submissions[0].contest.series.logoUrl = "";
          opts.body.submissions[0].contest.series.name = "";
          opts.body.submissions[0].contest.series.updated = "0";
          opts.body.submissions[0].contest.start = "0";
          opts.body.submissions[0].contest.updated = "0";
          opts.body.submissions[0].created = "0";
          opts.body.submissions[0].id = "0";
          opts.body.submissions[0].problem = new AhanaApi.ModelsMcqProblem();
          opts.body.submissions[0].problem.contest = new AhanaApi.ModelsContest();
          opts.body.submissions[0].problem.contest.created = "0";
          opts.body.submissions[0].problem.contest.description = "";
          opts.body.submissions[0].problem.contest.duration = "0";
          opts.body.submissions[0].problem.contest.id = "0";
          opts.body.submissions[0].problem.contest.name = "";
          opts.body.submissions[0].problem.contest.organizer = new AhanaApi.ModelsUser();
          opts.body.submissions[0].problem.contest.organizer.apiKey = "";
          opts.body.submissions[0].problem.contest.organizer.created = "0";
          opts.body.submissions[0].problem.contest.organizer.email = "";
          opts.body.submissions[0].problem.contest.organizer.emailNotificationEnabled = false;
          opts.body.submissions[0].problem.contest.organizer.firebaseUID = "";
          opts.body.submissions[0].problem.contest.organizer.handle = "";
          opts.body.submissions[0].problem.contest.organizer.id = "0";
          opts.body.submissions[0].problem.contest.organizer.isLocked = false;
          opts.body.submissions[0].problem.contest.organizer.name = "";
          opts.body.submissions[0].problem.contest.organizer.phoneNumber = "";
          opts.body.submissions[0].problem.contest.organizer.rating = "0";
          opts.body.submissions[0].problem.contest.organizer.signUpMode = new AhanaApi.ModelsSignUpMode();
          opts.body.submissions[0].problem.contest.organizer.tSize = "";
          opts.body.submissions[0].problem.contest.organizer.type = new AhanaApi.ModelsUserType();
          opts.body.submissions[0].problem.contest.organizer.updated = "0";
          opts.body.submissions[0].problem.contest.series = new AhanaApi.ModelsSeries();
          opts.body.submissions[0].problem.contest.series.created = "0";
          opts.body.submissions[0].problem.contest.series.description = "";
          opts.body.submissions[0].problem.contest.series.id = "0";
          opts.body.submissions[0].problem.contest.series.logoUrl = "";
          opts.body.submissions[0].problem.contest.series.name = "";
          opts.body.submissions[0].problem.contest.series.updated = "0";
          opts.body.submissions[0].problem.contest.start = "0";
          opts.body.submissions[0].problem.contest.updated = "0";
          opts.body.submissions[0].problem.created = "0";
          opts.body.submissions[0].problem.id = "0";
          opts.body.submissions[0].problem.optionFour = "";
          opts.body.submissions[0].problem.optionOne = "";
          opts.body.submissions[0].problem.optionThree = "";
          opts.body.submissions[0].problem.optionTwo = "";
          opts.body.submissions[0].problem.statement = "";
          opts.body.submissions[0].problem.type = new AhanaApi.ModelsMcqType();
          opts.body.submissions[0].problem.updated = "0";
          opts.body.submissions[0].type = new AhanaApi.ModelsSubmissionType();
          opts.body.submissions[0].updated = "0";
          opts.body.submissions[0].userAnswerFour = false;
          opts.body.submissions[0].userAnswerOne = false;
          opts.body.submissions[0].userAnswerThree = false;
          opts.body.submissions[0].userAnswerTwo = false;
          opts.body.submissions[0].verdict = new AhanaApi.ModelsVerdictType();

          instance.mcqSubmissionControllerSubmitMcqProblems(xUserApiKey, contestId, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(AhanaApi.ModelsASubmissionMcq);
            {
              let dataCtr = data.submissions;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(AhanaApi.ModelsSubmissionMcq);
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
                expect(data.created).to.be.a('number');
                expect(data.created).to.be("0");
                expect(data.id).to.be.a('number');
                expect(data.id).to.be("0");
                expect(data.problem).to.be.a(AhanaApi.ModelsMcqProblem);
                      expect(data.problem.contest).to.be.a(AhanaApi.ModelsContest);
                        expect(data.problem.contest.created).to.be.a('number');
                    expect(data.problem.contest.created).to.be("0");
                    expect(data.problem.contest.description).to.be.a('string');
                    expect(data.problem.contest.description).to.be("");
                    expect(data.problem.contest.duration).to.be.a('number');
                    expect(data.problem.contest.duration).to.be("0");
                    expect(data.problem.contest.id).to.be.a('number');
                    expect(data.problem.contest.id).to.be("0");
                    expect(data.problem.contest.name).to.be.a('string');
                    expect(data.problem.contest.name).to.be("");
                    expect(data.problem.contest.organizer).to.be.a(AhanaApi.ModelsUser);
                          expect(data.problem.contest.organizer.apiKey).to.be.a('string');
                      expect(data.problem.contest.organizer.apiKey).to.be("");
                      expect(data.problem.contest.organizer.created).to.be.a('number');
                      expect(data.problem.contest.organizer.created).to.be("0");
                      expect(data.problem.contest.organizer.email).to.be.a('string');
                      expect(data.problem.contest.organizer.email).to.be("");
                      expect(data.problem.contest.organizer.emailNotificationEnabled).to.be.a('boolean');
                      expect(data.problem.contest.organizer.emailNotificationEnabled).to.be(false);
                      expect(data.problem.contest.organizer.firebaseUID).to.be.a('string');
                      expect(data.problem.contest.organizer.firebaseUID).to.be("");
                      expect(data.problem.contest.organizer.handle).to.be.a('string');
                      expect(data.problem.contest.organizer.handle).to.be("");
                      expect(data.problem.contest.organizer.id).to.be.a('number');
                      expect(data.problem.contest.organizer.id).to.be("0");
                      expect(data.problem.contest.organizer.isLocked).to.be.a('boolean');
                      expect(data.problem.contest.organizer.isLocked).to.be(false);
                      expect(data.problem.contest.organizer.name).to.be.a('string');
                      expect(data.problem.contest.organizer.name).to.be("");
                      expect(data.problem.contest.organizer.phoneNumber).to.be.a('string');
                      expect(data.problem.contest.organizer.phoneNumber).to.be("");
                      expect(data.problem.contest.organizer.rating).to.be.a('number');
                      expect(data.problem.contest.organizer.rating).to.be("0");
                      expect(data.problem.contest.organizer.signUpMode).to.be.a(AhanaApi.ModelsSignUpMode);
                          expect(data.problem.contest.organizer.tSize).to.be.a('string');
                      expect(data.problem.contest.organizer.tSize).to.be("");
                      expect(data.problem.contest.organizer.type).to.be.a(AhanaApi.ModelsUserType);
                          expect(data.problem.contest.organizer.updated).to.be.a('number');
                      expect(data.problem.contest.organizer.updated).to.be("0");
                    expect(data.problem.contest.series).to.be.a(AhanaApi.ModelsSeries);
                          expect(data.problem.contest.series.created).to.be.a('number');
                      expect(data.problem.contest.series.created).to.be("0");
                      expect(data.problem.contest.series.description).to.be.a('string');
                      expect(data.problem.contest.series.description).to.be("");
                      expect(data.problem.contest.series.id).to.be.a('number');
                      expect(data.problem.contest.series.id).to.be("0");
                      expect(data.problem.contest.series.logoUrl).to.be.a('string');
                      expect(data.problem.contest.series.logoUrl).to.be("");
                      expect(data.problem.contest.series.name).to.be.a('string');
                      expect(data.problem.contest.series.name).to.be("");
                      expect(data.problem.contest.series.updated).to.be.a('number');
                      expect(data.problem.contest.series.updated).to.be("0");
                    expect(data.problem.contest.start).to.be.a('number');
                    expect(data.problem.contest.start).to.be("0");
                    expect(data.problem.contest.updated).to.be.a('number');
                    expect(data.problem.contest.updated).to.be("0");
                  expect(data.problem.created).to.be.a('number');
                  expect(data.problem.created).to.be("0");
                  expect(data.problem.id).to.be.a('number');
                  expect(data.problem.id).to.be("0");
                  expect(data.problem.optionFour).to.be.a('string');
                  expect(data.problem.optionFour).to.be("");
                  expect(data.problem.optionOne).to.be.a('string');
                  expect(data.problem.optionOne).to.be("");
                  expect(data.problem.optionThree).to.be.a('string');
                  expect(data.problem.optionThree).to.be("");
                  expect(data.problem.optionTwo).to.be.a('string');
                  expect(data.problem.optionTwo).to.be("");
                  expect(data.problem.statement).to.be.a('string');
                  expect(data.problem.statement).to.be("");
                  expect(data.problem.type).to.be.a(AhanaApi.ModelsMcqType);
                      expect(data.problem.updated).to.be.a('number');
                  expect(data.problem.updated).to.be("0");
                expect(data.type).to.be.a(AhanaApi.ModelsSubmissionType);
                    expect(data.updated).to.be.a('number');
                expect(data.updated).to.be("0");
                expect(data.userAnswerFour).to.be.a('boolean');
                expect(data.userAnswerFour).to.be(false);
                expect(data.userAnswerOne).to.be.a('boolean');
                expect(data.userAnswerOne).to.be(false);
                expect(data.userAnswerThree).to.be.a('boolean');
                expect(data.userAnswerThree).to.be(false);
                expect(data.userAnswerTwo).to.be.a('boolean');
                expect(data.userAnswerTwo).to.be(false);
                expect(data.verdict).to.be.a(AhanaApi.ModelsVerdictType);
        

                      }
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
