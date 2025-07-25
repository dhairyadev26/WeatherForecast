import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import GeolocationButton from '../../components/GeolocationButton';

describe('GeolocationButton Component', () => {
  const mockOnGetLocation = jest.fn();
  
  beforeEach(() => {
    mockOnGetLocation.mockClear();
  });
  
  it('renders correctly in idle state', () => {
    render(<GeolocationButton onGetLocation={mockOnGetLocation} status="idle" />);
    
    const button = screen.getByTestId('geolocation-button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Use My Location');
    expect(button).not.toBeDisabled();
  });
  
  it('renders correctly in loading state', () => {
    render(<GeolocationButton onGetLocation={mockOnGetLocation} status="loading" />);
    
    const button = screen.getByTestId('geolocation-button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Getting Location...');
    expect(button).toBeDisabled();
  });
  
  it('renders correctly in success state', () => {
    render(<GeolocationButton onGetLocation={mockOnGetLocation} status="success" />);
    
    const button = screen.getByTestId('geolocation-button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Location Found');
    expect(button).not.toBeDisabled();
  });
  
  it('renders correctly in error state', () => {
    render(<GeolocationButton onGetLocation={mockOnGetLocation} status="error" />);
    
    const button = screen.getByTestId('geolocation-button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Location Error');
    expect(button).not.toBeDisabled();
  });
  
  it('calls onGetLocation when clicked', () => {
    render(<GeolocationButton onGetLocation={mockOnGetLocation} status="idle" />);
    
    const button = screen.getByTestId('geolocation-button');
    fireEvent.click(button);
    
    expect(mockOnGetLocation).toHaveBeenCalledTimes(1);
  });
  
  it('does not call onGetLocation when clicked in loading state', () => {
    render(<GeolocationButton onGetLocation={mockOnGetLocation} status="loading" />);
    
    const button = screen.getByTestId('geolocation-button');
    fireEvent.click(button);
    
    expect(mockOnGetLocation).not.toHaveBeenCalled();
  });
  
  it('calls onGetLocation when clicked in success state', () => {
    render(<GeolocationButton onGetLocation={mockOnGetLocation} status="success" />);
    
    const button = screen.getByTestId('geolocation-button');
    fireEvent.click(button);
    
    expect(mockOnGetLocation).toHaveBeenCalledTimes(1);
  });
  
  it('calls onGetLocation when clicked in error state', () => {
    render(<GeolocationButton onGetLocation={mockOnGetLocation} status="error" />);
    
    const button = screen.getByTestId('geolocation-button');
    fireEvent.click(button);
    
    expect(mockOnGetLocation).toHaveBeenCalledTimes(1);
  });
});
