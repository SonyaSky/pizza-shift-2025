import React from "react";
import { Card, Grid, Image, Text } from '@mantine/core';

import { BASE_URL } from "../helpers/BaseUrl";


const ToppingCard = ({topping}) => 
  (
    <Grid.Col span={4}>
      <Card  style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
        shadow="sm"
        padding="xl"
        component="a"
        target="_blank"
        radius="md"
      >
        <Card.Section padding='md'>
          <Image
            src={`${BASE_URL}${topping.img}`}
            h='auto'
            alt={topping.name}
          />
        </Card.Section>

        <Text fw={500} size="sm" >
          {topping.name}
        </Text>
        <div style={{ marginTop: 'auto' }}> 
          <Text fw={600} mt="xs" size="md">
            {topping.cost} ₽
          </Text>
        </div>
      </Card>
    </Grid.Col>
  );


export default ToppingCard;