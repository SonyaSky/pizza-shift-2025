import React from "react";
import { Card, Image, Text, Button, Group, Grid } from '@mantine/core';

import '../index.css';
import CustomButton from './CustomButton';

const PizzaComponent = ({imageUrl, title, description, price}) => {
    return (
        <Grid.Col span={4}>
        <Card padding="md" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
       <Card.Section>
        <Image
          src={`https://shift-intensive.ru/api${imageUrl}`}
          h='auto'
          alt="pizza"
          style={{ objectFit: 'cover' }}
        />
       </Card.Section>

      <Group>
        <Text className="pizza-title">{title}</Text>
      </Group>

      <Text className="pizza-desc" style={{ flexGrow: 1 }}>
        {description}
      </Text>
      <div style={{ marginTop: 'auto' }}> 
          <Text className="pizza-price">
            от {price} ₽
          </Text>

          <CustomButton title="Выбрать"></CustomButton>
        </div>
    </Card>
    </Grid.Col>
    )
}

export default PizzaComponent;