Feature: Specify number of events

Scenario: When user hasn’t specified a number, 32 is the default number 
    Given user has not specified the number of events
    When the eventlist is shown
    Then the list contains a maximum of 32 events

Scenario: User can change the number of events they want to see 
    Given a list of upcoming events has been loaded
    When the user changes the number of events 
    Then the list of events is updated to a maximum of that number

