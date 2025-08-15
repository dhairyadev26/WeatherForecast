import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ViewToggle from '../../components/ViewToggle';
import { LAYOUT_TYPES } from '../../constants/generalConstants';

describe('ViewToggle Component', () => {
  it('renders correctly with grid layout selected by default', () => {
    const mockOnChange = jest.fn();
    const { getByTestId, getByText } = render(
      <ViewToggle currentLayout={LAYOUT_TYPES.GRID} onLayoutChange={mockOnChange} />
    );
    
    // Check both buttons are rendered
    const gridButton = getByText('Grid');
    const stackedButton = getByText('Stacked');
    
    // Check the grid button has active class
    expect(gridButton.parentElement).toHaveClass('active');
    expect(stackedButton.parentElement).not.toHaveClass('active');
  });
  
  it('renders correctly with stacked layout selected', () => {
    const mockOnChange = jest.fn();
    const { getByTestId, getByText } = render(
      <ViewToggle currentLayout={LAYOUT_TYPES.STACKED} onLayoutChange={mockOnChange} />
    );
    
    // Check both buttons are rendered
    const gridButton = getByText('Grid');
    const stackedButton = getByText('Stacked');
    
    // Check the stacked button has active class
    expect(gridButton.parentElement).not.toHaveClass('active');
    expect(stackedButton.parentElement).toHaveClass('active');
  });
  
  it('calls onLayoutChange when clicking on a layout button', () => {
    const mockOnChange = jest.fn();
    const { getByText } = render(
      <ViewToggle currentLayout={LAYOUT_TYPES.GRID} onLayoutChange={mockOnChange} />
    );
    
    // Click on the stacked button
    fireEvent.click(getByText('Stacked'));
    
    // Check the onLayoutChange callback was called with the correct layout type
    expect(mockOnChange).toHaveBeenCalledWith(LAYOUT_TYPES.STACKED);
  });
  
  it('does not call onLayoutChange when clicking on the already active layout', () => {
    const mockOnChange = jest.fn();
    const { getByText } = render(
      <ViewToggle currentLayout={LAYOUT_TYPES.GRID} onLayoutChange={mockOnChange} />
    );
    
    // Click on the already selected grid button
    fireEvent.click(getByText('Grid'));
    
    // Check the onLayoutChange callback was not called
    expect(mockOnChange).not.toHaveBeenCalled();
  });
});
