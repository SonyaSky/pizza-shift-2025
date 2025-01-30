import React, { useState } from 'react';
import { Button } from '@mantine/core';
import '@mantine/core/styles.css';



const PizzaSizeSelector = () => {
    const [selectedSize, setSelectedSize] = useState('Small');
  
    const handleSizeChange = (size) => {
      setSelectedSize(size);
    };
  
    return (
      <Button.Group>
        <Button
          onClick={() => handleSizeChange('Small')}
          radius="md"
          style={{
            backgroundColor: selectedSize === 'Small' ? 'white' : '#f0f0f0',
            color: selectedSize === 'Small' ? '#000' : '#888',
            borderColor: selectedSize === 'Small' ? '#f0f0f0' : 'none',
            fontWeight: '400'
          }}
        >
          Маленькая
        </Button>
  
        <Button
          onClick={() => handleSizeChange('Medium')}
          radius="md"
          style={{
            backgroundColor: selectedSize === 'Medium' ? 'white' : '#f0f0f0',
            color: selectedSize === 'Medium' ? '#000' : '#888',
            borderColor: selectedSize === 'Medium' ? '#f0f0f0' : 'none',
            fontWeight: '400'
          }}
        >
          Средняя
        </Button>
  
        <Button
          onClick={() => handleSizeChange('Large')}
          radius="md"
          style={{
            backgroundColor: selectedSize === 'Large' ? 'white' : '#f0f0f0',
            color: selectedSize === 'Large' ? '#000' : '#888',
            borderColor: selectedSize === 'Large' ? '#f0f0f0' : 'none',
            fontWeight: '400'
          }}
        >
          Большая
        </Button>
      </Button.Group>
    );
  };

export default PizzaSizeSelector;