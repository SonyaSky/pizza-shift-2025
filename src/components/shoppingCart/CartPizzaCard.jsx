import React, { useState } from 'react';
import { Flex, Anchor, Image, Text, Button, Container, CloseButton } from '@mantine/core';
import { useCounter } from '@mantine/hooks';

import { BASE_URL } from '../../helpers/BaseUrl';
import normalizeToppings from '../../helpers/Toppings';

const CartPizzaCard = ({pizza}) => {
    const pizzaData = {
        THIN: ['Традиционное', 'традиционное'],
        THICK: ['Толстое', 'толстое'],
        SMALL: ['Маленькая', '25 см'],
        MEDIUM: ['Средняя', '30 см'],
        LARGE: ['Большая', '35 см']
      };
    const toppings = normalizeToppings(pizza.toppings, false);
    const [value, { increment, decrement }] = useCounter(1, { min: 0 });
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
                {`${pizzaData[pizza.size.name][0]} ${pizzaData[pizza.size.name][1]}, ${pizzaData[pizza.dough.name][1]} тесто`}
            </Text>
            <Text c='#141c24' fw={400} size='14px'>
                {'+ '}
                {toppings.map(topping => topping.translatedName).join(', ')}
            </Text>
        </Container>
        <Container >
        <Button.Group>
        <Button variant="filled" c='#141c24' radius="md" bg="#f3f4f6" onClick={decrement}>
            <Text fw={400} size='16px'>-</Text>
        </Button>
        <Button.GroupSection variant="filled" bg="#f3f4f6" c='#141c24' >
        <Text fw={400} size='16px'>{value}</Text>
        </Button.GroupSection>
        <Button variant="filled" c='#141c24' radius="md" bg="#f3f4f6" onClick={increment}>
        <Text fw={400} size='16px'>+</Text>
        </Button>
        </Button.Group>
        </Container>
        <Container >
            <Anchor underline='always' c='#97A1AF' size='14px'>Изменить</Anchor>
        </Container>
        <Container >
            <Text fw={500} size='16px'>
                {`${pizza.fullPrice} р`}
            </Text>
        </Container>
        <Container align='flex-end'>
            <CloseButton size="lg" />
        </Container>
    </Flex>
);
}

export default CartPizzaCard;


{/* <Grid justify="flex-start" align='center' columns={24}>
        <Grid.Col span={3}>
            <Image src={`${BASE_URL}${pizza.img}`} h='5rem' w='auto' />
        </Grid.Col>
        <Grid.Col span={4}>
            <Text fw={500} c="#141c24" size='16px'>
            {pizza.name}
            </Text>
        </Grid.Col>
        <Grid.Col span={8}>
            <Text c='#141c24'>
                {`${pizzaData[pizza.size.name][0]} ${pizzaData[pizza.size.name][1]}, ${pizzaData[pizza.dough.name][1]} тесто`}
            </Text>
            <Text c='#141c24'>
                {'+ '}
                {toppings.map(topping => topping.translatedName).join(', ')}
            </Text>
        </Grid.Col>
        <Grid.Col span={4}>
        <Button.Group>
        <Button variant="filled" c='#141c24' fs='xl' radius="md" bg="#f3f4f6" onClick={decrement}>
            -
        </Button>
        <Button.GroupSection variant="filled" bg="#f3f4f6" c='#141c24' >
            {value}
        </Button.GroupSection>
        <Button variant="filled" c='#141c24' radius="md" bg="#f3f4f6" onClick={increment}>
            +
        </Button>
        </Button.Group>
        </Grid.Col>
        <Grid.Col span={2}>
            <Anchor underline='always'>Изменить</Anchor>
        </Grid.Col>
        <Grid.Col span={3}>
            <Text fw={600}>
                {`${pizza.fullPrice} р`}
            </Text>
        </Grid.Col>
    </Grid> */}