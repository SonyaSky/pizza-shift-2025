import React, { useState } from 'react';
import { useDisclosure } from '@mantine/hooks';
import {
  Modal,
  Text,
  Image,
  Button,
  Grid,
  ScrollArea,
  Flex,
  Box,
  Container,
  MantineThemeProvider,
  Anchor
} from '@mantine/core';
import '@mantine/core/styles.css';

import theme from '../theme';
import ToppingCard from '../mainPage/ToppingCard';
import normalizeToppings from '../../helpers/Toppings';
import pizzaTranslation from '../../helpers/PizzaTranslation';
import { BASE_URL } from '../../helpers/BaseUrl';
import { useCart } from '../../context/CartContext';

const ModalAnchor = ({ pizza}) => {
  const [opened, { open, close }] = useDisclosure(false);
  const [activeType, setActiveType] = React.useState(pizza.dough.name);
  const [activeSize, setActiveSize] = React.useState(pizza.size.name);
  const [selectedToppings, setSelectedToppings] = useState(pizza.toppings);
  const { editCartItem } = useCart();
  const toggleTopping = (topping) => {
    setSelectedToppings((prev) => {
      const isSelected = prev.some((item) => item.name === topping.name);
      if (isSelected) {
        return prev.filter((item) => item.name !== topping.name); 
      } else {
        return [...prev, topping]; 
      }
    });
  };
  const toppings = normalizeToppings(pizza.pizzaInfo.toppings);

  const onEditCartItem = () => {
    editCartItem(pizza.cartId, activeSize, activeType, selectedToppings);
    close();
  };

  return (
    <>
      <Modal opened={opened} onClose={close} centered size='60rem' radius={20}>
        <Grid>
          <Grid.Col span={5} align='center'>
            <Image src={`${BASE_URL}${pizza.img}`} alt={pizza.name} h='300' w='auto' />
          </Grid.Col>
          <Grid.Col span={7}>
            <Box h='65vh'>
              <ScrollArea
                h='100%'
                type='scroll'
                offsetScrollbars
                scrollbarSize={6}
              >
                <Flex direction='column' gap='sm'>
                  <Flex direction='column'>
                    <Text className='pizza-title'>{pizza.name}</Text>
                    <Text c='#637083'>
                      {activeSize ? `${pizzaTranslation[activeSize][1]}, ` : ''}{' '}
                      {activeType ? `${pizzaTranslation[activeType][1]} тесто` : 'традиционное тесто'}
                    </Text>
                  </Flex>
                  <Text className='pizza-desc'>{pizza.description}</Text>

                  <div className='pizza-block__selector'>
                    <ul>
                      {pizza.pizzaInfo.doughs.map((type) => (
                        <li
                          key={type.name}
                          onClick={() => setActiveType(type.name)}
                          className={activeType === type.name ? 'active' : ''}
                        >
                          {pizzaTranslation[type.name][0]}
                        </li>
                      ))}
                    </ul>
                    <ul>
                      {pizza.pizzaInfo.sizes.map((size) => (
                        <li
                          key={size.name}
                          onClick={() => setActiveSize(size.name)}
                          className={activeSize === size.name ? 'active' : ''}
                        >
                          {pizzaTranslation[size.name][0]}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Text c='#141c24' fw={600} size='xl'>
                    Добавить по вкусу
                  </Text>
                  <Grid>
                  {toppings.map((topping) => (
                    <ToppingCard
                      key={topping.name}
                      topping={topping}
                      onClick={() => toggleTopping(topping)} 
                      isSelected={selectedToppings.some(item => item.name === topping.name)}
                    />
                  ))}
                  </Grid>
                </Flex>
              </ScrollArea>
            </Box>
            <Container px={0} py={10}>
            <MantineThemeProvider theme={theme}>
                <Button onClick={onEditCartItem}>Сохранить изменения</Button>
            </MantineThemeProvider>
            </Container>
          </Grid.Col>
        </Grid>
      </Modal>
      <Anchor underline='always' c='#97A1AF' size='14px' onClick={open}>Изменить</Anchor>
    </>
  );
};

export default ModalAnchor;
