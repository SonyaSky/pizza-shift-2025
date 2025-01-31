import React, { useState } from 'react';
import { useDisclosure } from '@mantine/hooks';
import {
  Modal,
  Text,
  Image,
  Group,
  Grid,
  ScrollArea,
  Flex,
  Button,
  rem,
  Container
} from '@mantine/core';
import '@mantine/core/styles.css';

import CustomButton from './CustomButton';
import ToppingCard from './ToppingCard';
import normalizeToppings from '../helpers/Toppings';
import { BASE_URL } from '../helpers/BaseUrl';

const ModalButton = ({ title, pizza }) => {
  const [opened, { open, close }] = useDisclosure(false);
  const [activeType, setActiveType] = React.useState('THIN');
  const [activeSize, setActiveSize] = React.useState('SMALL');
  const toppings = normalizeToppings(pizza.toppings);
  const pizzaData = {
    THIN: ['Традиционное', 'традиционное'],
    THICK: ['Толстое', 'толстое'],
    SMALL: ['Маленькая', '25 см'],
    MEDIUM: ['Средняя', '30 см'],
    LARGE: ['Большая', '35 см']
  };
  return (
    <>
      <Modal opened={opened} onClose={close} centered size='60rem' radius={20}>
        <Grid>
          <Grid.Col span={5} align='center'>
            <Image src={`${BASE_URL}${pizza.img}`} alt={pizza.name} h='300' w='auto' />
          </Grid.Col>
          <Grid.Col span={7}>
            <div style={{ height: '65vh' }}>
              <ScrollArea
                style={{ height: '100%' }}
                type='scroll'
                offsetScrollbars
                scrollbarSize={6}
              >
                <Flex direction='column' gap='sm'>
                  <Flex direction='column'>
                    <Text className='pizza-title'>{pizza.name}</Text>
                    <Text c='#637083'>
                      {activeSize ? `${pizzaData[activeSize][1]}, ` : ''}{' '}
                      {activeType ? `${pizzaData[activeType][1]} тесто` : 'традиционное тесто'}
                    </Text>
                  </Flex>
                  <Text className='pizza-desc'>{pizza.description}</Text>

                  <div className='pizza-block__selector'>
                    <ul>
                      {pizza.doughs.map((type) => (
                        <li
                          key={type.name}
                          onClick={() => setActiveType(type.name)}
                          className={activeType === type.name ? 'active' : ''}
                        >
                          {pizzaData[type.name][0]}
                        </li>
                      ))}
                    </ul>
                    <ul>
                      {pizza.sizes.map((size) => (
                        <li
                          key={size.name}
                          onClick={() => setActiveSize(size.name)}
                          className={activeSize === size.name ? 'active' : ''}
                        >
                          {pizzaData[size.name][0]}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Text c='#141c24' fw={600} size='xl'>
                    Добавить по вкусу
                  </Text>
                  <Grid>
                    {toppings.map((topping) => (
                      <ToppingCard key={topping.name} topping={topping} />
                    ))}
                  </Grid>
                </Flex>
              </ScrollArea>
            </div>
            <Container px={0} py={10}>
              <CustomButton title='Добавить в корзину' />
            </Container>
          </Grid.Col>
        </Grid>
      </Modal>
      <CustomButton variant='default' title={title} onClick={open}></CustomButton>
    </>
  );
};

export default ModalButton;
