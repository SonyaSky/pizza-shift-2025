import React, { useState } from 'react';
import { Card, Grid, Image, Text, Container } from '@mantine/core';

import { BASE_URL } from '../helpers/BaseUrl';

const ToppingCard = ({ topping }) => {
  const [isSelected, setIsSelected] = useState(false);

  const toggleSelect = () => {
    setIsSelected((prev) => !prev);
  };

  return (
    <Grid.Col span={4}>
      <Card
        onClick={toggleSelect}
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          border: isSelected ? '2px solid #f4511e' : 'none'
        }}
        padding='md'
        component='a'
        target='_blank'
        radius='md'
      >
        <Container px={5}>
          <Image src={`${BASE_URL}${topping.img}`} h='auto' alt={topping.name} padding='5' />
        </Container>

        <Text fw={500} size='sm' align='center'>
          {topping.name}
        </Text>
        <div style={{ marginTop: 'auto' }}>
          <Text fw={600} mt='xs' size='md' align='center'>
            {topping.cost} ₽
          </Text>
        </div>
      </Card>
    </Grid.Col>
  );
};

export default ToppingCard;
