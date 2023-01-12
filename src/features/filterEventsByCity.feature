Feature: Filter events by city

Scenario: When user has not searched for a city, show upcoming events from all cities. 
    Given user has not searched for any city 
    When the user opens the app 
    Then the user should see a list of all upcoming events

Scenario: User should see a list of suggestions when they search for a city.
     Given main page is open 
     When user starts typing in the city textbox 
     Then the user should see a list of cities (suggestions) that match what they have typed       

Scenario: User can select a city from the suggested list.    
    Given user was typing “Berlin” in the city textbox 
    And the list of suggested cities is showing
    When the user selects a city (e.g., “Berlin, Germany”) from the list 
    Then their city should be changed to that city (i.e., “Berlin, Germany”) 
    And the user should receive a list of upcoming events in that city






