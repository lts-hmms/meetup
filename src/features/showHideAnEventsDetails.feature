Feature: show/hide an Events Details

Scenario: An event element is collapsed by default 
    Given a list of all upcoming events
    When the user does nothing after receiving the list 
    Then the event container are collapsed and show the core info of each event

Scenario: User can expand an event to see its details 
    Given a list of upcoming events has been loaded 
    When the user click on “Show details“ button in an event container 
    Then the container expanded and shows the details of the event

Scenario: User can collapse an event to hide its details 
    Given an event container which is extended 
    When a user clicks “Hide details“ 
    Then the container collapse and only shows the core info of that event