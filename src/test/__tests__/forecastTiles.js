import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import ForecastTiles from "../../components/ForecastTiles";
import { TEMPERATURE_UNITS } from "../../constants/generalConstants";

// Import mock forecast data
import mockData from "./data/forecast.json";
const { list } = mockData.weatherStation.data;

// Mock the DetailedInfo component to simplify testing
jest.mock("../../components/DetailedInfo", () => {
  return function MockDetailedInfo({ data, unit }) {
    return <div data-testid="detailed-info">Detailed weather info mock</div>;
  };
});

describe("ForecastTiles Component", () => {
  test("renders five forecast tiles", () => {
    render(<ForecastTiles forecasts={list} />);
    
    // There should be 5 forecast tiles
    const tiles = screen.getAllByTestId(/forecast-tile-\d/);
    expect(tiles).toHaveLength(5);
  });
  
  test("each tile displays the day of the week", () => {
    render(<ForecastTiles forecasts={list} />);
    
    // Check if days of week are displayed
    const dayElements = screen.getAllByText(/(Sunday|Monday|Tuesday|Wednesday|Thursday|Friday|Saturday)/i);
    expect(dayElements.length).toBeGreaterThan(0);
  });
  
  test("displays temperature and humidity information", () => {
    render(<ForecastTiles forecasts={list} />);
    
    // Check if temperature info is displayed
    const tempRegex = /\d+°C/;
    const tempElements = screen.getAllByText(tempRegex);
    expect(tempElements.length).toBeGreaterThan(0);
    
    // Check if humidity info is displayed
    const humidityRegex = /Avg\. Humidity: \d+%/;
    const humidityElements = screen.getAllByText(humidityRegex);
    expect(humidityElements.length).toBeGreaterThan(0);
  });
  
  test("shows detailed info when a tile is clicked", () => {
    render(<ForecastTiles forecasts={list} />);
    
    // Get the first tile
    const firstTile = screen.getByTestId("forecast-tile-0");
    
    // Initially, detailed info should not be visible
    expect(screen.queryByTestId("detailed-info")).not.toBeInTheDocument();
    
    // Click on the tile
    fireEvent.click(firstTile);
    
    // After clicking, detailed info should be visible
    expect(screen.getByTestId("detailed-info")).toBeInTheDocument();
  });
  
  test("hides detailed info when the same tile is clicked again", () => {
    render(<ForecastTiles forecasts={list} />);
    
    // Get the first tile
    const firstTile = screen.getByTestId("forecast-tile-0");
    
    // Click on the tile to show detailed info
    fireEvent.click(firstTile);
    expect(screen.getByTestId("detailed-info")).toBeInTheDocument();
    
    // Click on the same tile again
    fireEvent.click(firstTile);
    
    // Detailed info should be hidden
    expect(screen.queryByTestId("detailed-info")).not.toBeInTheDocument();
  });
  
  test("changes temperature unit display based on props", () => {
    // First render with Celsius (default)
    const { rerender } = render(<ForecastTiles forecasts={list} />);
    
    // Check if temperatures are displayed in Celsius
    expect(screen.getAllByText(/\d+°C/).length).toBeGreaterThan(0);
    
    // Rerender with Fahrenheit
    rerender(<ForecastTiles forecasts={list} unit={TEMPERATURE_UNITS.FAHRENHEIT} />);
    
    // Check if temperatures are displayed in Fahrenheit
    expect(screen.getAllByText(/\d+°F/).length).toBeGreaterThan(0);
  });
});