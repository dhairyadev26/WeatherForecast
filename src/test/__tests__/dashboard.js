import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { fetchData, setTemperatureUnit } from "../../actions/weatherStation";
import Dashboard from "../../components/Dashboard";
import { TEMPERATURE_UNITS } from "../../constants/generalConstants";

// Mock redux store
const mockStore = configureStore([]);

// Mock the fetchData action
jest.mock("../../actions/weatherStation", () => ({
  fetchData: jest.fn(),
  setTemperatureUnit: jest.fn()
}));

describe("Dashboard Component", () => {
  let store;
  
  beforeEach(() => {
    // Create a fresh store for each test
    store = mockStore({
      weatherStation: {
        status: "success",
        data: null,
        error: null,
        temperatureUnit: TEMPERATURE_UNITS.CELSIUS
      }
    });
    
    // Clear mock calls between tests
    fetchData.mockClear();
    setTemperatureUnit.mockClear();
  });

  test("renders the dashboard with correct heading", () => {
    render(
      <Provider store={store}>
        <Dashboard city="London" />
      </Provider>
    );
    
    expect(screen.getByText("5-Day Weather Forecast")).toBeInTheDocument();
  });

  test("renders the search input with city placeholder", () => {
    render(
      <Provider store={store}>
        <Dashboard city="London" />
      </Provider>
    );
    
    const input = screen.getByPlaceholderText("London");
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("type", "text");
  });

  test("renders the search button", () => {
    render(
      <Provider store={store}>
        <Dashboard city="London" />
      </Provider>
    );
    
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  test("dispatches fetchData action when search button is clicked", () => {
    render(
      <Provider store={store}>
        <Dashboard city="London" />
      </Provider>
    );
    
    const input = screen.getByPlaceholderText("London");
    const button = screen.getByRole("button");
    
    // Type in a city name
    fireEvent.change(input, { target: { value: "Paris" } });
    
    // Click search button
    fireEvent.click(button);
    
    // Check if the action was dispatched with correct city
    expect(fetchData).toHaveBeenCalledWith("Paris");
  });

  test("dispatches fetchData action when Enter key is pressed", () => {
    render(
      <Provider store={store}>
        <Dashboard city="London" />
      </Provider>
    );
    
    const input = screen.getByPlaceholderText("London");
    
    // Type in a city name
    fireEvent.change(input, { target: { value: "Berlin" } });
    
    // Press Enter key
    fireEvent.keyPress(input, { key: "Enter", code: 13, charCode: 13 });
    
    // Check if the action was dispatched with correct city
    expect(fetchData).toHaveBeenCalledWith("Berlin");
  });

  test("does not dispatch action when input is empty", () => {
    render(
      <Provider store={store}>
        <Dashboard city="London" />
      </Provider>
    );
    
    const button = screen.getByRole("button");
    
    // Click search button without entering text
    fireEvent.click(button);
    
    // Action should not be dispatched
    expect(fetchData).not.toHaveBeenCalled();
  });

  test("shows error message when status is error", () => {
    // Create store with error status
    const errorStore = mockStore({
      weatherStation: {
        status: "error",
        data: null,
        error: "Location not found",
        temperatureUnit: TEMPERATURE_UNITS.CELSIUS
      }
    });
    
    render(
      <Provider store={errorStore}>
        <Dashboard city="InvalidCity" />
      </Provider>
    );
    
    const errorMsg = screen.getByText("Location not found");
    expect(errorMsg).toBeInTheDocument();
    expect(errorMsg).toBeVisible();
  });

  test("shows default error message when error is null but status is error", () => {
    // Create store with error status but no message
    const errorStore = mockStore({
      weatherStation: {
        status: "error",
        data: null,
        error: null,
        temperatureUnit: TEMPERATURE_UNITS.CELSIUS
      }
    });
    
    render(
      <Provider store={errorStore}>
        <Dashboard city="InvalidCity" />
      </Provider>
    );
    
    const errorMsg = screen.getByText("Please enter valid city name!");
    expect(errorMsg).toBeInTheDocument();
    expect(errorMsg).toBeVisible();
  });

  test("hides error message when status is not error", () => {
    render(
      <Provider store={store}>
        <Dashboard city="London" />
      </Provider>
    );
    
    const errorElements = screen.queryAllByText(
      content => content.includes("enter valid city") || content.includes("not found")
    );
    
    // No visible error message should be found
    errorElements.forEach(element => {
      expect(element).not.toBeVisible();
    });
  });
  
  test("renders the unit toggle component", () => {
    render(
      <Provider store={store}>
        <Dashboard city="London" />
      </Provider>
    );
    
    // Check for toggle buttons
    expect(screen.getByText("°C")).toBeInTheDocument();
    expect(screen.getByText("°F")).toBeInTheDocument();
  });
  
  test("calls setTemperatureUnit when unit toggle is clicked", () => {
    render(
      <Provider store={store}>
        <Dashboard city="London" />
      </Provider>
    );
    
    // Click on Fahrenheit button
    fireEvent.click(screen.getByText("°F"));
    
    // Check if action was dispatched with correct values
    expect(setTemperatureUnit).toHaveBeenCalledWith(TEMPERATURE_UNITS.FAHRENHEIT, "London");
  });
  
  test("unit toggle button reflects current unit", () => {
    // Create store with Fahrenheit unit
    const fahrenheitStore = mockStore({
      weatherStation: {
        status: "success",
        data: null,
        error: null,
        temperatureUnit: TEMPERATURE_UNITS.FAHRENHEIT
      }
    });
    
    render(
      <Provider store={fahrenheitStore}>
        <Dashboard city="London" />
      </Provider>
    );
    
    // Fahrenheit button should be active
    const fahrenheitButton = screen.getByText("°F").closest("button");
    expect(fahrenheitButton).toHaveClass("active");
    
    // Celsius button should not be active
    const celsiusButton = screen.getByText("°C").closest("button");
    expect(celsiusButton).not.toHaveClass("active");
  });
});




