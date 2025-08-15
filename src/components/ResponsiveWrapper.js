import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getViewportSize, addResizeListener } from '../utils/responsiveUtils';

/**
 * ResponsiveWrapper component to handle responsive behavior
 * Provides viewport size information to its children
 * @param {Object} props - Component props
 * @param {Function} props.children - Render function that receives viewport info
 */
const ResponsiveWrapper = ({ children }) => {
  const [viewportSize, setViewportSize] = useState(getViewportSize());
  
  useEffect(() => {
    // Update viewport size when window resizes
    const handleResize = () => {
      setViewportSize(getViewportSize());
    };
    
    // Add resize listener and return cleanup function
    const removeListener = addResizeListener(handleResize);
    return removeListener;
  }, []);
  
  // Derived values
  const isMobile = viewportSize === 'mobile';
  const isTablet = viewportSize === 'tablet';
  const isDesktop = viewportSize === 'desktop';
  
  // Create responsive props to pass to children
  const responsiveProps = {
    viewportSize,
    isMobile,
    isTablet,
    isDesktop
  };
  
  // Render children with responsive props
  return children(responsiveProps);
};

ResponsiveWrapper.propTypes = {
  children: PropTypes.func.isRequired
};

export default ResponsiveWrapper;
