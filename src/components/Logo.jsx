import React from 'react';

const Logo = ({ size = 40, className = '' }) => {
  return (
    <img
      src="/haodiezhi.png"
      alt="好貸智 Logo"
      width={size}
      height={size}
      className={className}
      style={{
        objectFit: 'contain',
        display: 'block'
      }}
    />
  );
};

export default Logo;

