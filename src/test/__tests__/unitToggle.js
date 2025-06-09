import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import UnitToggle from "../../components/UnitToggle";
import { TEMPERATURE_UNITS } from "../../constants/generalConstants";

describe("UnitToggle Component", () => {
  const mockToggle = jest.fn();
  
  beforeEach(() => {
    mockToggle.mockClear();
  });
  
  test("renders unit toggle buttons correctly", () => {
    render(<UnitToggle unit={TEMPERATURE_UNITS.CELSIUS} onToggle={mockToggle} />);
    
    // Check if both buttons are displayed
    expect(screen.getByText("°C")).toBeInTheDocument();
    expect(screen.getByText("°F")).toBeInTheDocument();
    
    // Check if the label is displayed
    expect(screen.getByText("Temperature Unit")).toBeInTheDocument();
  });
  
  test("highlights active unit button correctly (Celsius)", () => {
    render(<UnitToggle unit={TEMPERATURE_UNITS.CELSIUS} onToggle={mockToggle} />);
    
    // Check active state styling for Celsius
    const celsiusButton = screen.getByText("°C");
    const fahrenheitButton = screen.getByText("°F");
    
    expect(celsiusButton).toHaveClass("active");
    expect(fahrenheitButton).not.toHaveClass("active");
  });
  
  test("highlights active unit button correctly (Fahrenheit)", () => {
    render(<UnitToggle unit={TEMPERATURE_UNITS.FAHRENHEIT} onToggle={mockToggle} />);
    
    // Check active state styling for Fahrenheit
    const celsiusButton = screen.getByText("°C");
    const fahrenheitButton = screen.getByText("°F");
    
    expect(celsiusButton).not.toHaveClass("active");
    expect(fahrenheitButton).toHaveClass("active");
  });
  
  test("calls onToggle with correct unit when Celsius button is clicked", () => {
    render(<UnitToggle unit={TEMPERATURE_UNITS.FAHRENHEIT} onToggle={mockToggle} />);
    
    // Click on Celsius button
    fireEvent.click(screen.getByText("°C"));
    
    // Check if onToggle was called with Celsius
    expect(mockToggle).toHaveBeenCalledWith(TEMPERATURE_UNITS.CELSIUS);
  });
  
  test("calls onToggle with correct unit when Fahrenheit button is clicked", () => {
    render(<UnitToggle unit={TEMPERATURE_UNITS.CELSIUS} onToggle={mockToggle} />);
    
    // Click on Fahrenheit button
    fireEvent.click(screen.getByText("°F"));
    
    // Check if onToggle was called with Fahrenheit
    expect(mockToggle).toHaveBeenCalledWith(TEMPERATURE_UNITS.FAHRENHEIT);
  });
  
  test("has correct accessibility attributes", () => {
    render(<UnitToggle unit={TEMPERATURE_UNITS.CELSIUS} onToggle={mockToggle} />);
    
    const celsiusButton = screen.getByLabelText("Switch to Celsius");
    const fahrenheitButton = screen.getByLabelText("Switch to Fahrenheit");
    
    // Check for aria-pressed attributes
    expect(celsiusButton).toHaveAttribute("aria-pressed", "true");
    expect(fahrenheitButton).toHaveAttribute("aria-pressed", "false");
  });
});
