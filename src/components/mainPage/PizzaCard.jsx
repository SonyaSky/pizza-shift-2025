import React from 'react';
import { Card, Image, Text, Group, Grid } from '@mantine/core';

import '../../index.css';
import ModalButton from '../ModalButton';
import { BASE_URL } from '../../helpers/BaseUrl';

const PizzaCard = ({ pizza }) => (
  <Grid.Col span={4}>
    <Card padding='md' style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <Card.Section>
        <Image
          src={`${BASE_URL}${pizza.img}`}
          h='auto'
          alt='pizza'
          style={{ objectFit: 'cover' }}
        />
      </Card.Section>

      <Group>
        <Text className='pizza-title'>{pizza.name}</Text>
      </Group>

      <Text className='pizza-desc' style={{ flexGrow: 1 }}>
        {pizza.description}
      </Text>
      <div style={{ marginTop: 'auto' }}>
        <Text className='pizza-price'>от {pizza.sizes[0].price} ₽</Text>

        <ModalButton title='Выбрать' pizza={pizza}></ModalButton>
      </div>
    </Card>
  </Grid.Col>
);

export default PizzaCard;
