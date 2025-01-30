import React, { useState } from 'react';
import { useDisclosure } from '@mantine/hooks';
import { Modal, Text, Image, Group, Grid, ScrollArea, Flex, Button } from '@mantine/core';
import '@mantine/core/styles.css';

import CustomButton from './CustomButton';
import ToppingCard from './ToppingCard';
import normalizeToppings from '../helpers/Toppings';
import { BASE_URL } from '../helpers/BaseUrl';
import PizzaSizeSelector from './PizzaSizeSelector';


const ModalButton = ({ title, pizza }) => {
    const [opened, { open, close }] = useDisclosure(false);
    const toppings = normalizeToppings(pizza.toppings);
    return (
        <>
            <Modal opened={opened} onClose={close} centered size='60rem' radius={20}>
                <Grid>
                    <Grid.Col span={5} align="center">
                    <Image
                        src={`${BASE_URL}${pizza.img}`}
                        alt={pizza.name}
                        h='300'
                        w='auto'
                    />
                    </Grid.Col>
                    <Grid.Col span={7}>
                            <ScrollArea h={450} type="scroll" offsetScrollbars scrollbarSize={6}>
                                <Flex direction="column" gap="sm">
                                    <Flex direction="column">
                                        <Text className='pizza-title'>
                                            {pizza.name}
                                        </Text>
                                        <Text>
                                            30 см, традиционное тесто
                                        </Text>
                                    </Flex>
                                    <Text className='pizza-desc'>
                                        {pizza.description}
                                    </Text>
                                    <PizzaSizeSelector />
                                    <Grid >
                                    {toppings.map((topping) => (
                                        <ToppingCard  
                                        key={topping.name}
                                        topping={topping} 
                                        />
                                    ))}
                                    </Grid>
                                </Flex>
                            </ScrollArea>
                        <CustomButton title="Положить в корзину" sx={{ marginTop: '16px' }}/>
                    </Grid.Col>
                </Grid>
            </Modal>
            <CustomButton variant="default" title={title} onClick={open}></CustomButton>
        </>
    );
};

export default ModalButton;