const chai = require('chai');
const { spec } = require('pactum');
const { Given, When, Then, Before, After } = require('@cucumber/cucumber');
const {
  header,
  localhost,
  responseSchema,
  listMethodsEndpoint,
  acceptHeader,
  defaultExpectedResponseTime,
} = require('./helpers/helpers');

chai.use(require('chai-json-schema'));

let specListMethods;

const baseUrl = localhost + "r1/" + listMethodsEndpoint;
const endpointTag = { tags: `@endpoint=/${listMethodsEndpoint}` };

Before(endpointTag, () => {
  specListMethods = spec().withHeaders(acceptHeader.key, acceptHeader.value);
});

// Scenario: Successfully retrieved the list of REST services and endpoints for a service provider smoke type test
Given(
  'Wants to retrieve the list of REST services and endpoints for a service provider',
  () => 'Required route params were specified'
);

When(
  'User sends GET request with given {string} as serviceId, {string} as GovStackInstance, {string} as memberClass, {string} as memberCode, {string} as applicationCode and {string} header',
  (serviceId, GovStackInstance, memberClass, memberCode, applicationCode, XGovStackClient) =>
    specListMethods
      .get(baseUrl)
      .withHeaders(header.key, header.value)
      .withQueryParams({
        serviceId: serviceId,
      })
      .withPathParams({
        GovStackInstance: GovStackInstance,
        memberClass: memberClass,
        memberCode: memberCode,
        applicationCode: applicationCode,
      })
);

Then(
  'User receives a response from the listMethods endpoint',
  async () => await specListMethods.toss()
);

Then(
  'The listMethods endpoint response should be returned in a timely manner',
  () =>
    specListMethods
      .response()
      .to.have.responseTimeLessThan(defaultExpectedResponseTime)
);

Then('The listMethods endpoint response should have status 200', () =>
  specListMethods.response().to.have.status(200)
);

Then(
  'The listMethods response should have {string}: {string} header',
  (key, value) =>
    specListMethods
      .response()
      .should.have.headerContains(key, value)
);

Then('The listMethods endpoint response should match json schema', () =>
  chai.expect(specListMethods._response.json).to.be.jsonSchema(responseSchema.properties.member.items.properties)  // The schema is different for endpoints. Overall schema is given but current endpoint only responds with a subset of the given example schema. https://www.x-tee.ee/docs/live/xroad/pr-mrest_x-road_service_metadata_protocol_for_rest.html#b1-listmethods-response
);

// Scenario Outline: Successfully retrieved the list of REST services and endpoints for a service provider

// "When", "Then" already written above

After(endpointTag, () => {
  specListMethods.end();
});
