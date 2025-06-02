import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { fetchData } from "../../actions/weatherStation";
import Dashboard from "../../components/Dashboard";

// Mock redux store
const mockStore = configureStore([]);

// Mock the fetchData action
jest.mock("../../actions/weatherStation", () => ({
  fetchData: jest.fn()
}));

describe("Dashboard Component", () => {
  let store;
  
  beforeEach(() => {
    // Create a fresh store for each test
    store = mockStore({
      weatherStation: {
        status: "success",
        data: null,
        error: null
      }
    });
    
    // Clear mock calls between tests
    fetchData.mockClear();
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
        error: "Location not found"
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
        error: null
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
});




