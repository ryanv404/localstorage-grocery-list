import React from 'react';

const Footer = ({items}) => {
  return (
    <div className='footer'>
      <p>Your list contains {items.length} {items.length === 1 ? "item" : "items"}</p>
    </div>
  );
}

export default Footer;