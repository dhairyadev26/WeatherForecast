import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import NotificationCenter from '../components/NotificationCenter';

describe('NotificationCenter Component', () => {
  const mockNotifications = [
    { id: '1', title: 'Location Updated', message: 'Weather data for London', type: 'info' },
    { id: '2', title: 'Data Refreshed', message: 'Latest forecast loaded', type: 'success' },
    { id: '3', title: 'Connection Issue', message: 'Check your internet connection', type: 'error' }
  ];
  
  const mockDismiss = jest.fn();
  
  beforeEach(() => {
    jest.useFakeTimers();
  });
  
  afterEach(() => {
    jest.useRealTimers();
    jest.clearAllMocks();
  });

  test('renders nothing when no notifications are present', () => {
    render(<NotificationCenter notifications={[]} onDismiss={mockDismiss} />);
    
    const notificationCenter = screen.queryByTestId('notification-center');
    expect(notificationCenter).toBeNull();
  });

  test('renders notifications with correct content and type classes', () => {
    render(<NotificationCenter notifications={mockNotifications} onDismiss={mockDismiss} />);
    
    // Check if notification center is rendered
    const notificationCenter = screen.getByTestId('notification-center');
    expect(notificationCenter).toBeInTheDocument();
    
    // Check if all notification titles are displayed
    expect(screen.getByText('Location Updated')).toBeInTheDocument();
    expect(screen.getByText('Data Refreshed')).toBeInTheDocument();
    expect(screen.getByText('Connection Issue')).toBeInTheDocument();
    
    // Check if all notification messages are displayed
    expect(screen.getByText('Weather data for London')).toBeInTheDocument();
    expect(screen.getByText('Latest forecast loaded')).toBeInTheDocument();
    expect(screen.getByText('Check your internet connection')).toBeInTheDocument();
    
    // Check if type classes are applied correctly
    const notifications = document.querySelectorAll('.notification');
    expect(notifications[0]).toHaveClass('type-info');
    expect(notifications[1]).toHaveClass('type-success');
    expect(notifications[2]).toHaveClass('type-error');
  });

  test('calls onDismiss with correct ID when dismiss button is clicked', () => {
    render(<NotificationCenter notifications={mockNotifications} onDismiss={mockDismiss} />);
    
    // Get all dismiss buttons and click the first one
    const dismissButtons = screen.getAllByLabelText(/dismiss notification/i);
    fireEvent.click(dismissButtons[0]);
    
    // Check if onDismiss was called with correct ID
    expect(mockDismiss).toHaveBeenCalledWith('1');
    
    // Click another dismiss button
    fireEvent.click(dismissButtons[2]);
    expect(mockDismiss).toHaveBeenCalledWith('3');
  });

  test('auto-dismisses notifications after timeout', () => {
    render(<NotificationCenter 
      notifications={mockNotifications} 
      onDismiss={mockDismiss}
      autoDismissTimeout={5000} // 5 seconds
    />);
    
    // Fast-forward time
    act(() => {
      jest.advanceTimersByTime(5000);
    });
    
    // Check if onDismiss was called for all notifications
    expect(mockDismiss).toHaveBeenCalledTimes(3);
    expect(mockDismiss).toHaveBeenCalledWith('1');
    expect(mockDismiss).toHaveBeenCalledWith('2');
    expect(mockDismiss).toHaveBeenCalledWith('3');
  });

  test('adds exit animation class before dismissing', () => {
    // Using a longer timeout to test animation
    render(<NotificationCenter 
      notifications={mockNotifications} 
      onDismiss={mockDismiss}
      autoDismissTimeout={5300} // 5.3 seconds (5s timeout + 300ms animation)
      animationDuration={300} // 300ms animation
    />);
    
    // Fast-forward to just before animation starts
    act(() => {
      jest.advanceTimersByTime(5000);
    });
    
    // Check that animation class is added
    const notifications = document.querySelectorAll('.notification');
    expect(notifications[0]).toHaveClass('exiting');
    
    // Complete the animation time
    act(() => {
      jest.advanceTimersByTime(300);
    });
    
    // Check that onDismiss was called
    expect(mockDismiss).toHaveBeenCalledWith('1');
  });
});
