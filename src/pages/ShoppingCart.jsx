import React from 'react';
import { Container, Text, Flex } from '@mantine/core';

import CartPizzaCard from '../components/shoppingCart/CartPizzaCard';
import { useCart } from '../context/CartContext';

const ShoppingCart = () => {
  const { cartItems } = useCart();
  return (
    <>
        <Container size="lg" pt='2rem'>
            <Text fw={700} c='#141c24' size='24px' >
                Корзина
            </Text>
            <Flex
            mih={50}
            gap="sm"
            justify="center"
            align="flex-start"
            direction="column"
            wrap="wrap"
            py={20}
            >
                {cartItems.map((pizza) => (
                    <CartPizzaCard key={pizza.cartId} pizza={pizza} />
                ))}
            </Flex>
        </Container>
    </>
  );
};

export default ShoppingCart;