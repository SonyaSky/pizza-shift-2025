import React from 'react';
import { Container, Text, Flex } from '@mantine/core';

import CartPizzaCard from '../components/shoppingCart/CartPizzaCard';


const ShoppingCart = () => {
    const pizzas = [
        {
            id: '1', 
            name: 'Пепперони', 
            img: "/static/images/pizza/1.webp",
            dough: {name: 'THIN', price: 0}, 
            size: {name: 'SMALL', price: 499}, 
            fullPrice: 620,
            toppings: [
                {name: 'GREEN_PEPPER', cost: 60, img: '/static/images/ingredient/green_pepper.png'},
                {name: 'GREEN_PEPPER', cost: 60, img: '/static/images/ingredient/green_pepper.png'},
                {name: 'GREEN_PEPPER', cost: 60, img: '/static/images/ingredient/green_pepper.png'},
                {name: 'GREEN_PEPPER', cost: 60, img: '/static/images/ingredient/green_pepper.png'}]
            },
    ]
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
                {pizzas.map((pizza) => (
                    <CartPizzaCard key={pizza.id} pizza={pizza} />
                ))}
            </Flex>
        </Container>
    </>
  );
};

export default ShoppingCart;