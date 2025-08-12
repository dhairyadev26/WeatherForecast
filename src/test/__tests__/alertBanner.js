import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import AlertBanner from '../components/AlertBanner';

describe('AlertBanner Component', () => {
  const mockAlerts = [
    { id: '1', title: 'Weather Warning', message: 'Strong winds expected', severity: 'warning' },
    { id: '2', title: 'Severe Alert', message: 'Heavy rainfall warning', severity: 'severe' },
    { id: '3', title: 'Extreme Alert', message: 'Flash flood warning', severity: 'extreme' }
  ];
  
  const mockDismiss = jest.fn();

  test('renders nothing when no alerts are present', () => {
    const { container } = render(<AlertBanner alerts={[]} onDismiss={mockDismiss} />);
    expect(container.firstChild).toBeNull();
  });

  test('renders alerts with correct content and severity classes', () => {
    render(<AlertBanner alerts={mockAlerts} onDismiss={mockDismiss} />);
    
    // Check if all alert titles are displayed
    expect(screen.getByText('Weather Warning')).toBeInTheDocument();
    expect(screen.getByText('Severe Alert')).toBeInTheDocument();
    expect(screen.getByText('Extreme Alert')).toBeInTheDocument();
    
    // Check if all alert messages are displayed
    expect(screen.getByText('Strong winds expected')).toBeInTheDocument();
    expect(screen.getByText('Heavy rainfall warning')).toBeInTheDocument();
    expect(screen.getByText('Flash flood warning')).toBeInTheDocument();
    
    // Check if severity classes are applied correctly
    const alerts = document.querySelectorAll('.alert');
    expect(alerts[0]).toHaveClass('severity-warning');
    expect(alerts[1]).toHaveClass('severity-severe');
    expect(alerts[2]).toHaveClass('severity-extreme');
  });

  test('calls onDismiss with correct ID when dismiss button is clicked', () => {
    render(<AlertBanner alerts={mockAlerts} onDismiss={mockDismiss} />);
    
    // Get all dismiss buttons and click the first one
    const dismissButtons = screen.getAllByLabelText(/dismiss alert/i);
    fireEvent.click(dismissButtons[0]);
    
    // Check if onDismiss was called with correct ID
    expect(mockDismiss).toHaveBeenCalledWith('1');
    
    // Click another dismiss button
    fireEvent.click(dismissButtons[2]);
    expect(mockDismiss).toHaveBeenCalledWith('3');
  });

  test('renders alerts in descending order of severity', () => {
    // Create alerts in non-severity order
    const unsortedAlerts = [
      { id: '1', title: 'Weather Warning', message: 'Strong winds expected', severity: 'warning' },
      { id: '2', title: 'Extreme Alert', message: 'Flash flood warning', severity: 'extreme' },
      { id: '3', title: 'Severe Alert', message: 'Heavy rainfall warning', severity: 'severe' },
    ];
    
    render(<AlertBanner alerts={unsortedAlerts} onDismiss={mockDismiss} />);
    
    // Get all alerts
    const alerts = document.querySelectorAll('.alert');
    
    // Verify the sorting order (extreme, severe, warning)
    expect(alerts[0]).toHaveClass('severity-extreme');
    expect(alerts[1]).toHaveClass('severity-severe');
    expect(alerts[2]).toHaveClass('severity-warning');
  });
});
