@method=GET @endpoint=/{GovStackInstance}/{memberClass}/{memberCode}/{applicationCode}/listMethods
Feature: This endpoint is used to list REST services and endpoints for a service provider.

  @smoke
  Scenario: Successfully retrieved the list of REST services and endpoints for a service provider smoke type test

    Given Wants to retrieve the list of REST services and endpoints for a service provider
    When User sends GET request with given "serviceId1" as serviceId, "SANDBOX" as GovStackInstance, "IDENTIFIER" as memberClass, "alp4aNum3r1c" as memberCode, "alp4aNum3r1c" as applicationCode and "X-Road-Client" header
    Then User receives a response from the listMethods endpoint
    And The listMethods endpoint response should be returned in a timely manner
    And The listMethods endpoint response should have status 200
    And The listMethods response should have "content-type": "application/json" header
    And The listMethods endpoint response should match json schema

  @unit @positive
  Scenario Outline: Successfully retrieved the list of REST services and endpoints for a service provider

    Given Wants to retrieve the list of REST services and endpoints for a service provider
    When User sends GET request with given "<serviceId>" as serviceId, "<GovStackInstance>" as GovStackInstance, "<memberClass>" as memberClass, "<memberCode>" as memberCode, "<applicationCode>" as applicationCode and "X-Road-Client" header
    Then User receives a response from the listMethods endpoint
    And The listMethods endpoint response should be returned in a timely manner
    And The listMethods endpoint response should have status 200
    And The listMethods response should have "content-type": "application/json" header
    And The listMethods endpoint response should match json schema

    Examples: Valid data
    | serviceId  | GovStackInstance | memberClass | memberCode   | applicationCode |
    | serviceId1 | SANDBOX          | IDENTIFIER  | alp4aNum3r1c | alp4aNum3r1c    |
    | serviceId2 | SANDBOX          | ASD2211A    | 12as12       | m3mb3rc0d3      |
    | serviceId3 | SANDBOX          | ZZZ321A     | m3mb3rc0d3   | aa15            |
    | serviceId4 | SANDBOX          | RAND0MID3NT | str1ng       | azxcv55         |
