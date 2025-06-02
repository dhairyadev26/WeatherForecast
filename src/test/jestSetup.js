import '@testing-library/jest-dom';
import 'jest-fetch-mock';

// Configure fetch mock
global.fetchMock = require('jest-fetch-mock');
fetchMock.enableMocks();

// Mock date for consistent testing
const mockDate = new Date('2025-06-02T12:00:00Z');
global.Date = jest.fn(() => mockDate);
global.Date.now = jest.fn(() => mockDate.getTime());