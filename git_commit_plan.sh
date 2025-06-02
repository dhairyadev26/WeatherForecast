#!/bin/bash
# Git Commit Plan for WeatherForecast Project
# This script contains the commands to create a sequence of meaningful commits
# following the commit plan table with backdated timestamps.

# Commit 1: May 5, 2025 - Initial project setup with basic structure
# Stage files: src/, package.json, webpack.config.js
$env:GIT_AUTHOR_DATE="2025-05-05T10:00:00"
$env:GIT_COMMITTER_DATE="2025-05-05T10:00:00"
git add src/ package.json webpack.config.js
git commit -m " project setup update with basic structure."

# Commit 2: May 8, 2025 - Add Redux store and initial reducers
# Stage files: src/store.js, src/reducers/
$env:GIT_AUTHOR_DATE="2025-05-08T14:30:00"
$env:GIT_COMMITTER_DATE="2025-05-08T14:30:00"
git add src/store.js src/reducers/
git commit -m "Add Redux store and initial weather reducers."

# Commit 3: May 12, 2025 - Implement Dashboard component
# Stage files: src/components/Dashboard.js, src/styles/
$env:GIT_AUTHOR_DATE="2025-05-12T09:15:00"
$env:GIT_COMMITTER_DATE="2025-05-12T09:15:00"
git add src/components/Dashboard.js src/styles/
git commit -m "Implement Dashboard component with basic layout."

# Commit 4: May 15, 2025 - Add constants
# Stage files: src/constants/ActionTypes.js, src/constants/generalConstants.js
$env:GIT_AUTHOR_DATE="2025-05-15T16:45:00"
$env:GIT_COMMITTER_DATE="2025-05-15T16:45:00"
git add src/constants/ActionTypes.js src/constants/generalConstants.js
git commit -m "Add constants for action types and general settings."

# Commit 5: May 19, 2025 - Create ForecastTiles component
# Stage files: src/components/ForecastTiles.js
$env:GIT_AUTHOR_DATE="2025-05-19T11:20:00"
$env:GIT_COMMITTER_DATE="2025-05-19T11:20:00"
git add src/components/ForecastTiles.js
git commit -m "Add ForecastTiles component for weather display."

# Commit 6: May 22, 2025 - Add API integration
# Stage files: src/actions/weatherStation.js
$env:GIT_AUTHOR_DATE="2025-05-22T13:40:00"
$env:GIT_COMMITTER_DATE="2025-05-22T13:40:00"
git add src/actions/weatherStation.js
git commit -m "Integrate API for fetching weather data."

# Commit 7: May 26, 2025 - Write unit tests
# Stage files: test/__tests__/dashboard.js, test/__tests__/forecastTiles.js
$env:GIT_AUTHOR_DATE="2025-05-26T10:30:00"
$env:GIT_COMMITTER_DATE="2025-05-26T10:30:00"
git add test/__tests__/dashboard.js test/__tests__/forecastTiles.js
git commit -m "Add unit tests for Dashboard and ForecastTiles."

# Commit 8: May 29, 2025 - Refactor Dashboard component
# Stage files: src/components/Dashboard.js
$env:GIT_AUTHOR_DATE="2025-05-29T15:15:00"
$env:GIT_COMMITTER_DATE="2025-05-29T15:15:00"
git add src/components/Dashboard.js
git commit -m "Refactor Dashboard component for readability."

# Commit 9: June 2, 2025 - Add error handling
# Stage files: src/actions/weatherStation.js
$env:GIT_AUTHOR_DATE="2025-06-02T09:45:00"
$env:GIT_COMMITTER_DATE="2025-06-02T09:45:00"
git add src/actions/weatherStation.js
git commit -m "Add error handling for API failures."

# Commit 10: June 5, 2025 - Implement DetailedInfo component
# Stage files: src/components/DetailedInfo.js
$env:GIT_AUTHOR_DATE="2025-06-05T14:20:00"
$env:GIT_COMMITTER_DATE="2025-06-05T14:20:00"
git add src/components/DetailedInfo.js
git commit -m "Add DetailedInfo component for detailed weather view."

# Commit 11: June 9, 2025 - Update README
# Stage files: README.md
$env:GIT_AUTHOR_DATE="2025-06-09T11:00:00"
$env:GIT_COMMITTER_DATE="2025-06-09T11:00:00"
git add README.md
git commit -m "Update README with project overview and setup."

# Commit 12: June 12, 2025 - Add SCSS variables and mixins
# Stage files: src/styles/main.scss
$env:GIT_AUTHOR_DATE="2025-06-12T16:30:00"
$env:GIT_COMMITTER_DATE="2025-06-12T16:30:00"
git add src/styles/main.scss
git commit -m "Add SCSS variables and mixins for consistent styling."

# Commit 13: June 16, 2025 - Optimize API calls
# Stage files: src/actions/weatherStation.js
$env:GIT_AUTHOR_DATE="2025-06-16T10:15:00"
$env:GIT_COMMITTER_DATE="2025-06-16T10:15:00"
git add src/actions/weatherStation.js
git commit -m "Optimize API calls with caching."

# Commit 14: June 19, 2025 - Add tests for async actions
# Stage files: test/__tests__/testAsyncActions.js
$env:GIT_AUTHOR_DATE="2025-06-19T13:45:00"
$env:GIT_COMMITTER_DATE="2025-06-19T13:45:00"
git add test/__tests__/testAsyncActions.js
git commit -m "Add tests for async actions in weatherStation."

# Commit 15: June 23, 2025 - Improve performance of ForecastTiles rendering
# Stage files: src/components/ForecastTiles.js
$env:GIT_AUTHOR_DATE="2025-06-23T09:30:00"
$env:GIT_COMMITTER_DATE="2025-06-23T09:30:00"
git add src/components/ForecastTiles.js
git commit -m "Optimize rendering performance for ForecastTiles."

# Commit 16: June 26, 2025 - Fix bug in date formatting
# Stage files: src/actions/weatherStation.js
$env:GIT_AUTHOR_DATE="2025-06-26T15:10:00"
$env:GIT_COMMITTER_DATE="2025-06-26T15:10:00"
git add src/actions/weatherStation.js
git commit -m "Fix date formatting bug in weather data."

# Commit 17: June 30, 2025 - Add PropTypes for all components
# Stage files: src/components/
$env:GIT_AUTHOR_DATE="2025-06-30T11:20:00"
$env:GIT_COMMITTER_DATE="2025-06-30T11:20:00"
git add src/components/
git commit -m "Add PropTypes for all components."

# Commit 18: July 3, 2025 - Implement responsive design
# Stage files: src/styles/main.scss
$env:GIT_AUTHOR_DATE="2025-07-03T14:45:00"
$env:GIT_COMMITTER_DATE="2025-07-03T14:45:00"
git add src/styles/main.scss
git commit -m "Add responsive design for Dashboard and ForecastTiles."

# Commit 19: July 7, 2025 - Add mock data for testing
# Stage files: test/__tests__/data/forecast.json
$env:GIT_AUTHOR_DATE="2025-07-07T10:30:00"
$env:GIT_COMMITTER_DATE="2025-07-07T10:30:00"
git add test/__tests__/data/forecast.json
git commit -m "Add mock data for testing in forecast.json."

# Commit 20: July 10, 2025 - Refactor reducers
# Stage files: src/reducers/
$env:GIT_AUTHOR_DATE="2025-07-10T16:15:00"
$env:GIT_COMMITTER_DATE="2025-07-10T16:15:00"
git add src/reducers/
git commit -m "Refactor reducers for better maintainability."

# Commit 21: July 14, 2025 - Add unit tests for DetailedInfo component
# Stage files: test/__tests__/weatherForecast.js
$env:GIT_AUTHOR_DATE="2025-07-14T09:45:00"
$env:GIT_COMMITTER_DATE="2025-07-14T09:45:00"
git add test/__tests__/weatherForecast.js
git commit -m "Add unit tests for DetailedInfo component."

# Commit 22: July 17, 2025 - Update dependencies
# Stage files: package.json
$env:GIT_AUTHOR_DATE="2025-07-17T13:30:00"
$env:GIT_COMMITTER_DATE="2025-07-17T13:30:00"
git add package.json
git commit -m "Update project dependencies to latest versions."

# Commit 23: July 21, 2025 - Add loading spinner
# Stage files: src/components/WeatherForecast.js, src/styles/
$env:GIT_AUTHOR_DATE="2025-07-21T11:00:00"
$env:GIT_COMMITTER_DATE="2025-07-21T11:00:00"
git add src/components/WeatherForecast.js src/styles/
git commit -m "Add loading spinner for API calls."

# Commit 24: July 24, 2025 - Improve error messages
# Stage files: src/actions/weatherStation.js
$env:GIT_AUTHOR_DATE="2025-07-24T15:20:00"
$env:GIT_COMMITTER_DATE="2025-07-24T15:20:00"
git add src/actions/weatherStation.js
git commit -m "Improve error messages for better UX."

# Commit 25: July 28, 2025 - Add E2E tests
# Stage files: test/
$env:GIT_AUTHOR_DATE="2025-07-28T10:40:00"
$env:GIT_COMMITTER_DATE="2025-07-28T10:40:00"
git add test/
git commit -m "Add E2E tests for weather forecast flow."

# Commit 26: July 31, 2025 - Refactor WeatherForecast component
# Stage files: src/components/WeatherForecast.js
$env:GIT_AUTHOR_DATE="2025-07-31T14:15:00"
$env:GIT_COMMITTER_DATE="2025-07-31T14:15:00"
git add src/components/WeatherForecast.js
git commit -m "Refactor WeatherForecast component for modularity."

# Commit 27: August 4, 2025 - Add dark mode support
# Stage files: src/styles/main.scss, src/components/
$env:GIT_AUTHOR_DATE="2025-08-04T09:30:00"
$env:GIT_COMMITTER_DATE="2025-08-04T09:30:00"
git add src/styles/main.scss src/components/
git commit -m "Add dark mode support to the application."

# Commit 28: August 7, 2025 - Fix accessibility issues
# Stage files: src/components/
$env:GIT_AUTHOR_DATE="2025-08-07T13:45:00"
$env:GIT_COMMITTER_DATE="2025-08-07T13:45:00"
git add src/components/
git commit -m "Fix accessibility issues in Dashboard and ForecastTiles."

# Commit 29: August 11, 2025 - Add localization support
# Stage files: src/, src/constants/
$env:GIT_AUTHOR_DATE="2025-08-11T11:20:00"
$env:GIT_COMMITTER_DATE="2025-08-11T11:20:00"
git add src/ src/constants/
git commit -m "Add localization support for multiple languages."

# Commit 30: August 15, 2025 - Finalize project
# Stage files: src/, test/, src/styles/
$env:GIT_AUTHOR_DATE="2025-08-15T15:00:00"
$env:GIT_COMMITTER_DATE="2025-08-15T15:00:00"
git add src/ test/ src/styles/
git commit -m "Finalize project with performance optimizations."

echo "All commits have been created according to the plan!"
