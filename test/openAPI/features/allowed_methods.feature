@method=GET @endpoint=/{GovStackInstance}/{memberClass}/{memberCode}/{applicationCode}/allowedMethods
Feature: This endpoint is used to list allowed REST services and endpoints for a service provider.	

  List of allowed REST services and endpoints for a service provider

  @smoke
  Scenario: Successfully retrieved the list of allowed REST services and endpoints for a service provider smoke type test
    
    Given Wants to retrieve the list of allowed REST services and endpoints for a service provider
    When I send a GET request with:
      | Header                     | Value                                       |
      | X-Road-Client              | SANDBOX/GOV/90000009/digitalregistries      |
    And The payload contains:
      | Parameter       | Value        |
      | serviceId       | serviceId1   |
      | GovStackInstance| SANDBOX      |
      | memberClass     | IDENTIFIER   |
      | memberCode      | alp4aNum3r1c |
      | applicationCode | alp4aNum3r1c |    
    Then User receives a response from the allowedMethods endpoint
    And The allowedMethods endpoint response should be returned in a timely manner
    And The allowedMethods endpoint response should have status 200
    And The allowedMethods response should have "content-type": "application/json" header
    And The allowedMethods endpoint response should match json schema


  @unit @positive
  Scenario Outline: Successfully retrieved the list of allowed REST services and endpoints for a service provider
    
    Given Wants to retrieve the list of allowed REST services and endpoints for a service provider
    When I send a GET request with:
      | Header                     | Value                                       |
      | X-Road-Client              | SANDBOX/GOV/90000009/digitalregistries      |
    When The payload contains:
      | Parameter       | Value               |
      | serviceId       | <serviceId>       |
      | GovStackInstance| <GovStackInstance>|
      | memberClass     | <memberClass>     |
      | memberCode      | <memberCode>      |
      | applicationCode | <applicationCode> |
    Then User receives a response from the allowedMethods endpoint
    And The allowedMethods endpoint response should be returned in a timely manner
    And The allowedMethods endpoint response should have status 200
    And The allowedMethods response should have "content-type": "application/json" header
    And The allowedMethods endpoint response should match json schema

    Examples: Valid data
    | serviceId  | GovStackInstance | memberClass | memberCode   | applicationCode |
    | serviceId1 | SANDBOX          | IDENTIFIER  | alp4aNum3r1c | alp4aNum3r1c    |
    | serviceId2 | SANDBOX          | ASD2211A    | 12as12       | m3mb3rc0d3      |
    | serviceId3 | SANDBOX          | ZZZ321A     | m3mb3rc0d3   | aa15            |
    | serviceId4 | SANDBOX          | RAND0MID3NT | str1ng       | azxcv55         |
