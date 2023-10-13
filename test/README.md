Changed the individual(and varied) instance names to SANDBOX in all tests and test data, because one central server can 
manage only members with the same instance code and multi-instance setup requires trust federation between multiple 
central servers.

Current setup has one Central server (CS) and multiple Security servers (SS2 and SS3)

Other changes needed:
* added `process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0` to js file to skip certificate checks since the current sandbox setup is using self-signed
* added `/r1` in the paths of some requests since it's required by spec (https://docs.x-road.global/Protocols/pr-rest_x-road_message_protocol_for_rest.html#41-rest-interface)
* changed Accept header key in test files and added that header to other requests as well (missing currently from some requests)
* added response status 500 check, since invalid responses are sent with 500 instead of 400 as it was in tests currently
* changed json schema validation based on actual response schema (see in relevant .js files)

1. Add and register members and services described in test-data.json to sandbox x-road (SS3), giving proper access rights to member `SANDBOX/GOV/90000009/digitalregistries` from SS2
2. Install test setup dependencies with npm `npm install`
3. Run the tests with `npm run test` or `npm run test-export-html` 
