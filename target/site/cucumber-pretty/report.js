$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("SmokeTest/smokeTestPack-UAT/Test16.feature");
formatter.feature({
  "line": 2,
  "name": "SmokeTest",
  "description": "",
  "id": "smoketest",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Test16UAT"
    },
    {
      "line": 1,
      "name": "@SmokeTestdemo"
    }
  ]
});
formatter.scenario({
  "line": 5,
  "name": "Creating an new ServiceRequest",
  "description": "",
  "id": "smoketest;creating-an-new-servicerequest",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "user log in to Maximo System",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user clicks on \u0027GOTO\u0027 button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks on \u0027Service Desk\u0027 link",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user clicks on \u0027Service Requests(SP)\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user navigated to \u0027Service Requests(SP)\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user clicks on plus button to create a new Service Request form",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user fill the new Service Request form",
  "rows": [
    {
      "cells": [
        "Name",
        "Customer",
        "Location",
        "summary",
        "classification",
        "details",
        "reportedByPhone",
        "reportedByEmail",
        "customerReference",
        "customerReference2"
      ],
      "line": 13
    },
    {
      "cells": [
        "SmokeTest-8",
        "C1000011",
        "L1001455",
        "Test SR creation",
        "QUOTEINSP \\ FABRIC \\ QUOTE2",
        "Test8",
        "07776023458",
        "test@email.com",
        "CUST123",
        "CUST456"
      ],
      "line": 14
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user clicks on \u0027Save ServiceRequest\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user verifies the status of the newly created ServiceRequest",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user copy the SR Number",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user clicks on \u0027Work\u0027 tab",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "user verify the \u0027WorkOrder\u0027Number",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_log_in_to_Maximo_System()"
});
formatter.result({
  "duration": 10784769200,
  "status": "passed"
});
formatter.match({
  "location": "ServiceRequestCreationSteps.user_clicks_on_GOTO_button()"
});
formatter.result({
  "duration": 2364900900,
  "status": "passed"
});
formatter.match({
  "location": "ServiceRequestCreationSteps.user_clicks_on_Service_Desk_link()"
});
formatter.result({
  "duration": 2159034900,
  "status": "passed"
});
formatter.match({
  "location": "ServiceRequestCreationSteps.user_clicks_on_Service_Requests_SP_link()"
});
formatter.result({
  "duration": 2087558500,
  "status": "passed"
});
formatter.match({
  "location": "ServiceRequestCreationSteps.user_navigated_to_Service_Requests_SP_page()"
});
formatter.result({
  "duration": 28727600,
  "status": "passed"
});
formatter.match({
  "location": "ServiceRequestCreationSteps.user_clicks_on_plus_button_to_create_a_new_Service_Request_form()"
});
formatter.result({
  "duration": 1912155100,
  "status": "passed"
});
formatter.match({
  "location": "ServiceRequestCreationSteps.userFillTheNewServiceRequestFormForQuote(DataTable)"
});
formatter.result({
  "duration": 32183828400,
  "status": "passed"
});
formatter.match({
  "location": "ServiceRequestCreationSteps.user_clicks_on_Save_ServiceRequest_button()"
});
formatter.result({
  "duration": 1213120600,
  "status": "passed"
});
formatter.match({
  "location": "ServiceRequestCreationSteps.user_verifies_the_status_of_the_newly_created_ServiceRequest()"
});
formatter.result({
  "duration": 2745903100,
  "status": "passed"
});
formatter.match({
  "location": "ServiceRequestCreationSteps.userCopyTheSRNumber()"
});
formatter.result({
  "duration": 2459956700,
  "status": "passed"
});
formatter.match({
  "location": "ServiceRequestCreationSteps.userClicksOnWorkTab()"
});
formatter.result({
  "duration": 2117607000,
  "status": "passed"
});
formatter.match({
  "location": "ServiceRequestCreationSteps.userVerifyTheWorkOrderNumber()"
});
formatter.result({
  "duration": 3457320600,
  "status": "passed"
});
});