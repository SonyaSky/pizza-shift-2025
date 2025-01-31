import React from 'react';

const CustomButton = ({ onClick, title }) => {
  return (
    <button onClick={onClick} type='button' className='pizza-button'>
      {title}
    </button>
  );
};

export default CustomButton;
