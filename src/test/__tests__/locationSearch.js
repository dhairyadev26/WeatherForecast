import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import LocationSearch from '../../components/LocationSearch';

describe('LocationSearch Component', () => {
  const mockOnSearch = jest.fn();
  const defaultLocation = 'London';
  const recentLocations = ['Paris', 'New York', 'Tokyo'];
  
  beforeEach(() => {
    mockOnSearch.mockClear();
  });
  
  it('renders correctly with default props', () => {
    render(<LocationSearch onSearch={mockOnSearch} defaultLocation={defaultLocation} />);
    
    const input = screen.getByTestId('search-input');
    expect(input).toBeInTheDocument();
    expect(input.value).toBe(defaultLocation);
    
    const button = screen.getByTestId('search-button');
    expect(button).toBeInTheDocument();
  });
  
  it('calls onSearch when form is submitted', () => {
    render(<LocationSearch onSearch={mockOnSearch} defaultLocation={defaultLocation} />);
    
    const form = screen.getByTestId('search-input').closest('form');
    fireEvent.submit(form);
    
    expect(mockOnSearch).toHaveBeenCalledWith(defaultLocation);
  });
  
  it('updates input value when user types', () => {
    render(<LocationSearch onSearch={mockOnSearch} />);
    
    const input = screen.getByTestId('search-input');
    fireEvent.change(input, { target: { value: 'Berlin' } });
    
    expect(input.value).toBe('Berlin');
  });
  
  it('calls onSearch with new value when form is submitted', () => {
    render(<LocationSearch onSearch={mockOnSearch} />);
    
    const input = screen.getByTestId('search-input');
    fireEvent.change(input, { target: { value: 'Berlin' } });
    
    const button = screen.getByTestId('search-button');
    fireEvent.click(button);
    
    expect(mockOnSearch).toHaveBeenCalledWith('Berlin');
  });
  
  it('shows recent locations when input is focused', () => {
    render(<LocationSearch 
      onSearch={mockOnSearch} 
      defaultLocation={defaultLocation} 
      recentLocations={recentLocations} 
    />);
    
    const input = screen.getByTestId('search-input');
    fireEvent.focus(input);
    
    const recentLocationsContainer = screen.getByTestId('recent-locations');
    expect(recentLocationsContainer).toBeInTheDocument();
    
    recentLocations.forEach((location, index) => {
      const locationElement = screen.getByTestId(`recent-location-${index}`);
      expect(locationElement).toBeInTheDocument();
      expect(locationElement.textContent).toBe(location);
    });
  });
  
  it('selects a recent location when clicked', () => {
    render(<LocationSearch 
      onSearch={mockOnSearch} 
      defaultLocation={defaultLocation} 
      recentLocations={recentLocations} 
    />);
    
    const input = screen.getByTestId('search-input');
    fireEvent.focus(input);
    
    const parisLocation = screen.getByTestId('recent-location-0');
    fireEvent.click(parisLocation);
    
    expect(mockOnSearch).toHaveBeenCalledWith('Paris');
    expect(input.value).toBe('Paris');
  });
  
  it('does not show recent locations if array is empty', () => {
    render(<LocationSearch 
      onSearch={mockOnSearch} 
      defaultLocation={defaultLocation} 
      recentLocations={[]} 
    />);
    
    const input = screen.getByTestId('search-input');
    fireEvent.focus(input);
    
    expect(screen.queryByTestId('recent-locations')).not.toBeInTheDocument();
  });
});
