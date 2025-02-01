import React, { useState } from 'react';
import { Flex, Anchor, Image, Text, Button, Container, CloseButton } from '@mantine/core';
import { useCounter } from '@mantine/hooks';

import { BASE_URL } from '../../helpers/BaseUrl';
import normalizeToppings from '../../helpers/Toppings';
import { useCart } from '../../context/CartContext';
import ModalAnchor from './ModalAnchor';
import pizzaTranslation from '../../helpers/PizzaTranslation';

const CartPizzaCard = ({pizza}) => {
    const { removeFromCart, changeQuantity } = useCart();
    const toppings = normalizeToppings(pizza.toppings, false);
    const [value, { increment, decrement }] = useCounter(pizza.quantity, { min: 0 });
    return (
    <Flex justify="flex-start" align='center' direction="row" h='63px' gap='sm'>
        <Container w='63.7px'>
            <Image src={`${BASE_URL}${pizza.img}`} w='63.7px' />
        </Container>
        <Container w='10rem' align='center'>
            <Text fw={500} c="#141c24" size='16px' >
            {pizza.name}
            </Text>
        </Container>
        <Container w='20rem'>
            <Text c='#141c24' fw={400} size='14px'>
                {`${pizzaTranslation[pizza.size.name][0]} ${pizzaTranslation[pizza.size.name][1]}, ${pizzaTranslation[pizza.dough.name][1]} тесто`}
            </Text>
            {toppings.length > 0 && (
                <Text c='#141c24' fw={400} size='14px'>
                    {'+ '}
                    {toppings.map(topping => topping.translatedName).join(', ')}
                </Text>
            )}
        </Container>
        <Container >
        <Button.Group>
        <Button variant="filled" c='#141c24' radius="md" bg="#f3f4f6" onClick={() => { decrement(); changeQuantity(pizza.cartId, -1); }} >
            <Text fw={400} size='16px'>-</Text>
        </Button>
        <Button.GroupSection variant="filled" bg="#f3f4f6" c='#141c24' >
        <Text fw={400} size='16px'>{value}</Text>
        </Button.GroupSection>
        <Button variant="filled" c='#141c24' radius="md" bg="#f3f4f6" onClick={() => { increment(); changeQuantity(pizza.cartId, 1); }}>
        <Text fw={400} size='16px'>+</Text>
        </Button>
        </Button.Group>
        </Container>
        <Container >
        <ModalAnchor pizza={pizza} />
        </Container>
        <Container >
            <Text fw={500} size='16px'>
                {`${pizza.fullPrice} р`}
            </Text>
        </Container>
        <Container>
            <CloseButton size="lg" onClick={() => removeFromCart(pizza.cartId)}/>
        </Container>
    </Flex>
);
}

export default CartPizzaCard;