import React from 'react';
import '@mantine/core/styles.css';
import { Grid, Image, Text, Anchor, Card, Group, GridCol } from '@mantine/core';

import PizzaImage  from '../icons/pizza.png'; 
import UserImage  from '../icons/user.png'; 
import TimerImage  from '../icons/timer.png'; 
import CartImage  from '../icons/shopping-cart.png'; 

const NavbarElement = ({title, image}) => 
    (
      <Group justify="center">
      <Image
          src={image}
          height={25}
          alt="image"
        />
      <Anchor href="#" target="_blank" underline='never'>
        <Text fw={500} className='basic-text'>{title}</Text>
      </Anchor>
      </Group>

    );


const Logo = () => 
    (
      <Group align="center"> 
        <div>
          <Text className='brand'>ШИФТ</Text>
          <Text className='brand'>PIZZA</Text>
        </div>
        <Image
          src={PizzaImage}
          alt="Pizza icon"
          height="100%"  
          style={{ maxHeight: '3rem', marginLeft: '-10px'}} 
        />
      </Group>
    );

const Navbar = () => 
    (
        <Grid spacing="xl" className='navbar'>
            <Grid.Col span={7}>
                <Group justify="center" gap={50}>
                    <Logo></Logo>
                    <NavbarElement title = "Профиль" image={UserImage}></NavbarElement>
                    <NavbarElement title = "Заказы" image={TimerImage}></NavbarElement>
                </Group>
            </Grid.Col>
            <Grid.Col span={5}>
                <Group justify="center" >
                    <NavbarElement title = "Корзина" image={CartImage}></NavbarElement>
                </Group>
            </Grid.Col>
        </Grid>
    );


export default Navbar;