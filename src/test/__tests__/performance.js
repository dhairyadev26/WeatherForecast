import { debounce, throttle, memoize, shallowEqual } from '../../utils/performance';

describe('Performance Utilities', () => {
  jest.useFakeTimers();

  describe('debounce', () => {
    test('should only execute the function after the specified wait time', () => {
      const mockFn = jest.fn();
      const debouncedFn = debounce(mockFn, 500);
      
      // Call the debounced function multiple times
      debouncedFn();
      debouncedFn();
      debouncedFn();
      
      // Fast-forward time
      jest.advanceTimersByTime(250);
      
      // Function should not have been called yet
      expect(mockFn).not.toHaveBeenCalled();
      
      // Fast-forward time again to trigger the call
      jest.advanceTimersByTime(250);
      
      // Function should have been called exactly once
      expect(mockFn).toHaveBeenCalledTimes(1);
    });
    
    test('should execute immediately when immediate=true', () => {
      const mockFn = jest.fn();
      const debouncedFn = debounce(mockFn, 500, true);
      
      // Call the debounced function
      debouncedFn();
      
      // Function should have been called immediately
      expect(mockFn).toHaveBeenCalledTimes(1);
      
      // Fast-forward time
      jest.advanceTimersByTime(500);
      
      // Function should still have been called just once
      expect(mockFn).toHaveBeenCalledTimes(1);
    });
  });
  
  describe('throttle', () => {
    test('should limit the number of function calls', () => {
      const mockFn = jest.fn();
      const throttledFn = throttle(mockFn, 1000);
      
      // Call the throttled function multiple times
      throttledFn();
      expect(mockFn).toHaveBeenCalledTimes(1);
      
      // Call it again immediately
      throttledFn();
      throttledFn();
      
      // Function should not have been called again yet
      expect(mockFn).toHaveBeenCalledTimes(1);
      
      // Fast-forward time
      jest.advanceTimersByTime(1000);
      
      // Function should have been called again
      expect(mockFn).toHaveBeenCalledTimes(2);
    });
  });
  
  describe('memoize', () => {
    test('should cache function results based on arguments', () => {
      const mockFn = jest.fn((a, b) => a + b);
      const memoizedFn = memoize(mockFn);
      
      // Call with arguments
      expect(memoizedFn(2, 3)).toBe(5);
      expect(mockFn).toHaveBeenCalledTimes(1);
      
      // Call with same arguments
      expect(memoizedFn(2, 3)).toBe(5);
      expect(mockFn).toHaveBeenCalledTimes(1); // Should use cached result
      
      // Call with different arguments
      expect(memoizedFn(3, 4)).toBe(7);
      expect(mockFn).toHaveBeenCalledTimes(2); // Should call function again
    });
    
    test('should work with object arguments', () => {
      const mockFn = jest.fn((obj) => obj.x + obj.y);
      const memoizedFn = memoize(mockFn);
      
      // Call with object argument
      expect(memoizedFn({ x: 2, y: 3 })).toBe(5);
      expect(mockFn).toHaveBeenCalledTimes(1);
      
      // Call with equivalent object
      expect(memoizedFn({ x: 2, y: 3 })).toBe(5);
      expect(mockFn).toHaveBeenCalledTimes(1); // Should use cached result
    });
  });
  
  describe('shallowEqual', () => {
    test('should return true for identical objects', () => {
      const obj = { a: 1, b: 2 };
      expect(shallowEqual(obj, obj)).toBe(true);
    });
    
    test('should return true for equivalent objects', () => {
      const obj1 = { a: 1, b: 2 };
      const obj2 = { a: 1, b: 2 };
      expect(shallowEqual(obj1, obj2)).toBe(true);
    });
    
    test('should return false for different objects', () => {
      const obj1 = { a: 1, b: 2 };
      const obj2 = { a: 1, b: 3 };
      expect(shallowEqual(obj1, obj2)).toBe(false);
    });
    
    test('should return false for objects with different properties', () => {
      const obj1 = { a: 1, b: 2 };
      const obj2 = { a: 1, c: 2 };
      expect(shallowEqual(obj1, obj2)).toBe(false);
    });
    
    test('should return false for objects with different number of properties', () => {
      const obj1 = { a: 1, b: 2 };
      const obj2 = { a: 1 };
      expect(shallowEqual(obj1, obj2)).toBe(false);
    });
    
    test('should handle non-object inputs', () => {
      expect(shallowEqual(1, 1)).toBe(true);
      expect(shallowEqual('a', 'a')).toBe(true);
      expect(shallowEqual(null, null)).toBe(true);
      expect(shallowEqual(undefined, undefined)).toBe(true);
      expect(shallowEqual(1, '1')).toBe(false);
      expect(shallowEqual(null, undefined)).toBe(false);
    });
  });
});
