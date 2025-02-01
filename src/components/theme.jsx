import React from 'react';
import { Button, createTheme } from '@mantine/core';

const theme = createTheme({
    components: {
      Button: Button.extend({
        defaultProps: {
          color: '#f4511e',
          variant: 'filled',
          size: 'lg',
          fullWidth: true,
          radius: 'md',
          
        },
      }),
    },
  });

export default theme;

// const CustomButton = ({ onClick, title }) => {
//   return (
//     <button onClick={onClick} type='button' className='pizza-button'>
//       {title}
//     </button>
//   );
// };