import React from 'react';
import { VscArrowRight } from "react-icons/vsc";
import { useNavigate } from 'react-router-dom';
import { Container, Text, Flex, Grid, MantineThemeProvider, Button, Anchor} from '@mantine/core';

import CartPizzaCard from '../components/shoppingCart/CartPizzaCard';
import { useCart } from '../context/CartContext';
import theme from '../components/theme';

const ShoppingCart = () => {
  const { cartItems, getCartTotal } = useCart();
  const navigate = useNavigate();
  
    const handleButtonClick = () => {
        navigate('/'); 
    };

    const ToCustomerInfo = () => {
        navigate('/CustomerInfo'); 
    };
  return (
    <>
        <Container size="lg" pt='2rem'>
            <Text fw={700} c='#141c24' size='24px' >
                Корзина
            </Text>
            <Flex
            gap="sm"
            justify="center"
            align="flex-start"
            direction="column"
            wrap="wrap"
            py={20}
            className='pizza-cart'
            >
                {cartItems.length == 0 ? (
                    <Text fw={500} size='20px' mt='2rem' mb='2rem'>
                        Добавьте сюда какую-нибудь вкусную пиццу <VscArrowRight /> 
                        <Anchor onClick={handleButtonClick} ml='1rem' c='#f4511e'>тут их много</Anchor>
                    </Text>
                ):
                (
                    cartItems.map((pizza) => (
                        <CartPizzaCard key={pizza.cartId} pizza={pizza} />
                    ))
                )}
            </Flex>
            <Grid justify="flex-start" align='center' mt='2rem'>
                <Grid.Col span={5}>
                    <Text fw={700} size='24px'>
                        {`Стоимость заказа: ${getCartTotal()} р`}
                    </Text>
                </Grid.Col>
                <Grid.Col span={4} offset={3}>
                    <MantineThemeProvider theme={theme}>
                        <Button radius='lg' onClick={ToCustomerInfo}>Оформить заказ</Button>
                    </MantineThemeProvider>
                </Grid.Col>
            </Grid>
        </Container>
    </>
  );
};

export default ShoppingCart;