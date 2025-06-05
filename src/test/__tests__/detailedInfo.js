import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import DetailedInfo from "../../components/DetailedInfo";
import { TEMPERATURE_UNITS } from "../../constants/generalConstants";

describe("DetailedInfo Component", () => {
  // Sample mock data for hourly forecast
  const mockHourlyData = [
    {
      dt: Math.floor(new Date("2025-06-05T12:00:00Z").getTime() / 1000),
      main: {
        temp: 22.5,
        feels_like: 23.1,
        humidity: 65
      },
      weather: [
        {
          description: "broken clouds",
          icon: "04d"
        }
      ],
      clouds: {
        all: 75
      },
      wind: {
        speed: 5.1,
        deg: 220
      }
    },
    {
      dt: Math.floor(new Date("2025-06-05T15:00:00Z").getTime() / 1000),
      main: {
        temp: 24.8,
        feels_like: 25.2,
        humidity: 60
      },
      weather: [
        {
          description: "clear sky",
          icon: "01d"
        }
      ],
      clouds: {
        all: 10
      },
      wind: {
        speed: 4.2,
        deg: 180
      }
    },
    {
      dt: Math.floor(new Date("2025-06-05T18:00:00Z").getTime() / 1000),
      main: {
        temp: 23.1,
        feels_like: 23.5,
        humidity: 70
      },
      weather: [
        {
          description: "light rain",
          icon: "10d"
        }
      ],
      clouds: {
        all: 60
      },
      wind: {
        speed: 3.5,
        deg: 200
      }
    }
  ];

  test("renders hourly forecast information", () => {
    render(<DetailedInfo data={mockHourlyData} />);
    
    // Check if hourly title is displayed
    expect(screen.getByText("Hourly Forecast")).toBeInTheDocument();
    
    // Check if hourly data is displayed with correct temperatures
    expect(screen.getByText("23°C")).toBeInTheDocument();
    expect(screen.getByText("25°C")).toBeInTheDocument();
    
    // Check if weather descriptions are displayed
    expect(screen.getByText("broken clouds")).toBeInTheDocument();
    expect(screen.getByText("clear sky")).toBeInTheDocument();
    expect(screen.getByText("light rain")).toBeInTheDocument();
    
    // Check if humidity information is displayed
    expect(screen.getByText("Humidity: 65%")).toBeInTheDocument();
    expect(screen.getByText("Humidity: 60%")).toBeInTheDocument();
    expect(screen.getByText("Humidity: 70%")).toBeInTheDocument();
  });

  test("displays temperatures in Fahrenheit when unit is imperial", () => {
    render(<DetailedInfo data={mockHourlyData} unit={TEMPERATURE_UNITS.FAHRENHEIT} />);
    
    // Check for Fahrenheit temperatures
    expect(screen.getByText("23°F")).toBeInTheDocument();
    expect(screen.getByText("25°F")).toBeInTheDocument();
  });

  test("shows wind direction correctly", () => {
    render(<DetailedInfo data={mockHourlyData} />);
    
    // Check if wind information is displayed with direction
    expect(screen.getByText("Wind: 5 m/s SW")).toBeInTheDocument(); // 220 degrees = SW
    expect(screen.getByText("Wind: 4 m/s S")).toBeInTheDocument();  // 180 degrees = S
  });

  test("displays 'no data' message when data array is empty", () => {
    render(<DetailedInfo data={[]} />);
    
    expect(screen.getByText("No hourly data available for this period")).toBeInTheDocument();
  });

  test("displays feels like temperature", () => {
    render(<DetailedInfo data={mockHourlyData} />);
    
    expect(screen.getByText("Feels like: 23°C")).toBeInTheDocument();
    expect(screen.getByText("Feels like: 25°C")).toBeInTheDocument();
    expect(screen.getByText("Feels like: 24°C")).toBeInTheDocument();
  });

  test("displays cloud coverage information", () => {
    render(<DetailedInfo data={mockHourlyData} />);
    
    expect(screen.getByText("Clouds: 75%")).toBeInTheDocument();
    expect(screen.getByText("Clouds: 10%")).toBeInTheDocument();
    expect(screen.getByText("Clouds: 60%")).toBeInTheDocument();
  });
});
