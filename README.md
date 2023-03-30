<h1 align="center">Welcome to "meetUp"</h1>

> A serverless, progressive web application (PWA) with React using a test-driven development (TDD) technique. The application uses the Google Calendar API to fetch upcoming events.

Watch the live demo [here](https://lts-hmms.github.io/meetup/).

## Built With

- [React](https://reactjs.org/)
- [Google Calendar API](https://developers.google.com/calendar)
- [Jest](https://jestjs.io/)
- [AWS Lambda](https://aws.amazon.com/lambda/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Puppeteer](https://pptr.dev/)

## Features

### 1. Filter Events by City

> **User Story:** As a user I should be able to “filter events by city”
> So that I can see the list of events that take place in that city
> <br/>

**Scenario 1:** When user hasn’t searched for a city, show upcoming events from all cities.

- **Given** user hasn’t searched for any city
- **When** the user opens the app
- **Then** the user should see a list of all upcoming events

**Scenario 2:** User should see a list of suggestions when they search for a city.

- **Given** main page is open
- **When** user starts typing in the city textbox
- **Then** the user should see a list of cities (suggestions) that match what they’ve typed

**Scenario 3:** User can select a city from the suggested list.

- **Given** user was typing “Berlin” in the city textbox
  And the list of suggested cities is showing
- **When** the user selects a city (e.g., “Berlin, Germany”) from the list
- **Then** their city should be changed to that city (i.e., “Berlin, Germany”)
  And the user should receive a list of upcoming events in that city
  <br/>

### 2. Show/Hide an Event's Details

> **User Story:** As a user I should be able to expand and collapse an event
> So that i can see and hide its details.
> <br/>

**Scenario 1:** An event element is collapsed by default

- **Given** a list of all upcoming events in a certain city
- **When** the user does nothing after receiving the list
- **Then** the event container are collapsed and show the core info of each event

**Scenario 2:** User can expand an event to see its details

- **Given** a list of all upcoming events in a certain city has been loaded
- **When** the user click on "Show details" button in an event container
- **Then** the container expanded and shows the details of the event

**Scenario 3:** User can collapse an event to hide its details

- **Given** an event container which is extended
- **When** a user clicks "hide details"
- **Then** the container collapse and only shows the core info of that event
  <br/>

### 3. Specify Number of Events

> **User Story:** As a user I should be able to change the number of events I can see
> So that I can see more or fewer than the default number of 32.
> <br/>

**Scenario 1:** When user hasn’t specified a number, 32 is the default number

- **Given** a user selected a city from the list
- **When** the user leaves the field of 'Number of events' empty
- **Then** the list contains a maximum of 32 events

**Scenario 2:** User can change the number of events they want to see

- **Given** a user selcted a city from the list
- **When** the user types in a number of events
- **Then** the list of events has a maximum of that number
  <br/>

### 4. Use the App When Offline

> **User Story:** As a user I should be able to use the app when offline
> So that I can see the events from the last time when i was online.
> <br/>

**Scenario 1:** Show cached data when there’s no internet connection

- **Given** a user with no internet connection
- **When** the user opens the app
- **Then** the user gets the event list from the last time she was online

**Scenario 2:** Show error when user changes the settings (city, time range)

- **Given** a user with no internet connection
- **When** the user changes the settings (city or time range)
- **Then** the app shows an error
  <br/>

### 5. Data Visualization

> **User Story:** As a user I should be a able to see a chart with the upcoming events in each city
> So that i know how many and what kind of events are take place in which city.
> <br/>

> **Scenario 1:** Show a chart with the number of upcoming events in each city

- **Given** a main-view which is open
- **When** the user han't choose a city yet
- **Then** the app shows a chart with the number of upcoming events in each city
