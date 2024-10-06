import React from 'react';
// THIS FILE CONTAINS ALL THE ELEMENTS 
/*
 -- CARD this is just a card element that can be used to wrap any content
 -- BlogCard this is a card element that is used to display blog posts
 -- 
*/

// ----------------------- STANDARD CARD ----------------------------------------- //

export const CardN = ({ shadow = 'nul', fontSize = 'md', borderRadius = 0, border = false, children }) => {
  const shadowClasses = {
    sm: 'rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px',
    md: '0 4px 6px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px rgba(0, 0, 0, 0.15)',
    xl: '0 20px 25px rgba(0, 0, 0, 0.2)',
  };

  const fontSizeClasses = {
    sm: '12px',
    md: '16px',
    lg: '20px',
    xl: '24px',
  };

  const style = {
    borderRadius: borderRadius,
    boxShadow: shadowClasses[shadow],
    padding: '20px',
    backgroundColor: '#fff',
    fontSize: fontSizeClasses[fontSize],
    border: border ? '1px solid #ccc' : 'none',
  };

  return <div style={style}>{children}</div>;
};

