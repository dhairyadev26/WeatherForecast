import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import LanguageSelector from '../components/LanguageSelector';
import { LANGUAGES } from '../constants/localization';

describe('LanguageSelector Component', () => {
  const mockStore = configureStore([]);
  const mockOnLanguageChange = jest.fn();
  
  test('renders the language selector dropdown', () => {
    render(
      <LanguageSelector 
        currentLanguage={LANGUAGES.EN} 
        onLanguageChange={mockOnLanguageChange} 
      />
    );
    
    expect(screen.getByLabelText('Select language')).toBeInTheDocument();
  });
  
  test('calls onLanguageChange when selection changes', () => {
    render(
      <LanguageSelector 
        currentLanguage={LANGUAGES.EN} 
        onLanguageChange={mockOnLanguageChange} 
      />
    );
    
    const select = screen.getByLabelText('Select language');
    fireEvent.change(select, { target: { value: LANGUAGES.ES } });
    
    expect(mockOnLanguageChange).toHaveBeenCalledWith(LANGUAGES.ES);
  });
  
  test('displays the correct selected language', () => {
    render(
      <LanguageSelector 
        currentLanguage={LANGUAGES.FR} 
        onLanguageChange={mockOnLanguageChange} 
      />
    );
    
    const select = screen.getByLabelText('Select language');
    expect(select.value).toBe(LANGUAGES.FR);
  });
  
  test('shows all available languages', () => {
    render(
      <LanguageSelector 
        currentLanguage={LANGUAGES.EN} 
        onLanguageChange={mockOnLanguageChange} 
      />
    );
    
    const select = screen.getByLabelText('Select language');
    
    // Check if all language options are present
    Object.values(LANGUAGES).forEach(lang => {
      expect(select.querySelector(`option[value="${lang}"]`)).toBeInTheDocument();
    });
  });
});
