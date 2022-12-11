import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children, isGoogleSignIn,inverted,onclick, ...otherProps }) => (
  <button
    className={`${inverted ? 'inverted' : ''} custom-button`}
    {...otherProps} onClick={onclick}
  >
    {children}
    
  </button>
);

export default CustomButton;

