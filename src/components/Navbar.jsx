import React from 'react';
import { useNavigate } from 'react-router-dom';
import '@mantine/core/styles.css';
import { Grid, Image, Text, Anchor, Flex, Group, Box } from '@mantine/core';

import PizzaImage from '../icons/pizza.png';
import UserImage from '../icons/user.png';
import TimerImage from '../icons/timer.png';
import CartImage from '../icons/shopping-cart.png';


const NavbarElement = ({ title, image, onClick }) => (
  <Group justify='center'>
    <Image src={image} height={20} alt='image' />
    <Anchor target='_blank' underline='never' onClick={onClick}>
      <Text fw={500} className='basic-text'>
        {title}
      </Text>
    </Anchor>
  </Group>
);

const Logo = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/'); 
  };
  return (
  <Group align='center' onClick={handleButtonClick} >
    <Box>
      <Text className='brand'>ШИФТ</Text>
      <Text className='brand'>PIZZA</Text>
    </Box>
    <Image
      src={PizzaImage}
      alt='Pizza icon'
      height='100%'
      h='2.6rem'
      ml='-10px'
    />
  </Group>
);
};

const Navbar = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/ShoppingCart'); 
  };
  return (
  <Grid spacing='xl' className='navbar' justify='center' align='center' p='2rem 0rem 1rem 0rem'>
    <Grid.Col span={7}>
      <Group justify='center' gap={50}>
        <Logo/>
        <NavbarElement title='Профиль' image={UserImage}></NavbarElement>
        <NavbarElement title='Заказы' image={TimerImage}></NavbarElement>
      </Group>
    </Grid.Col>
    <Grid.Col span={5}>
      <Flex justify='center'>
        <NavbarElement title='Корзина' image={CartImage} onClick={handleButtonClick}></NavbarElement>
      </Flex>
    </Grid.Col>
  </Grid>
);
};

export default Navbar;
