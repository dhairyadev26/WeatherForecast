import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import ThemeToggle from '../../components/ThemeToggle';
import { THEMES } from '../../constants/generalConstants';

describe('ThemeToggle Component', () => {
  const mockOnToggle = jest.fn();
  
  beforeEach(() => {
    mockOnToggle.mockClear();
  });
  
  it('renders correctly with light theme', () => {
    render(<ThemeToggle theme={THEMES.LIGHT} onToggle={mockOnToggle} />);
    
    const checkbox = screen.getByTestId('theme-toggle-input');
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).not.toBeChecked();
  });
  
  it('renders correctly with dark theme', () => {
    render(<ThemeToggle theme={THEMES.DARK} onToggle={mockOnToggle} />);
    
    const checkbox = screen.getByTestId('theme-toggle-input');
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).toBeChecked();
  });
  
  it('calls onToggle with dark theme when toggled from light', () => {
    render(<ThemeToggle theme={THEMES.LIGHT} onToggle={mockOnToggle} />);
    
    const checkbox = screen.getByTestId('theme-toggle-input');
    fireEvent.click(checkbox);
    
    expect(mockOnToggle).toHaveBeenCalledWith(THEMES.DARK);
  });
  
  it('calls onToggle with light theme when toggled from dark', () => {
    render(<ThemeToggle theme={THEMES.DARK} onToggle={mockOnToggle} />);
    
    const checkbox = screen.getByTestId('theme-toggle-input');
    fireEvent.click(checkbox);
    
    expect(mockOnToggle).toHaveBeenCalledWith(THEMES.LIGHT);
  });
  
  it('has appropriate aria-label for accessibility', () => {
    render(<ThemeToggle theme={THEMES.LIGHT} onToggle={mockOnToggle} />);
    
    const checkbox = screen.getByTestId('theme-toggle-input');
    expect(checkbox).toHaveAttribute('aria-label', 'Switch to dark mode');
    
    // After toggle it should change
    render(<ThemeToggle theme={THEMES.DARK} onToggle={mockOnToggle} />);
    const darkCheckbox = screen.getByTestId('theme-toggle-input');
    expect(darkCheckbox).toHaveAttribute('aria-label', 'Switch to light mode');
  });
});
