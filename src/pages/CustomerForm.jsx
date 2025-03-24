import theme from '../components/theme';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {Flex, Text, Progress, Group, TextInput, Button} from '@mantine/core';

import { useCart } from '../context/CartContext';

const CustomerData = () => {
    const { setCustomerInfo } = useCart();
    const navigate = useNavigate();

    const [showNextComponent, setShowNextComponent] = useState(false);
    const [lastName, setLastName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('г. Новосибирск, ул. Кирова, д. 86');

    const handleBackButtonClick = () => {
        navigate('/ShoppingCart'); 
    };

    const handleContinueClick = () => {
        const customerData = {
            lastName,
            firstName,
            phoneNumber,
            email,
            address,
        };

        console.log(customerData);
        //setCustomerInfo(customerData);
        
    };

    return (
        <>
            <Flex
            w="430px"
            mt="2rem"
            ml="14.5rem"
            pl={'xs'}
            gap="xs"
            justify="flex-start"
            align="flex-start"
            direction="column"
            wrap="wrap">
                <Text c="#141C24" size='24px' fw={700} >
                Введите ваши данные
                </Text>
                <Text size="xs">Шаг 1 из 2</Text>
                <Progress color="lime" size="sm" value={50}></Progress>
                <TextInput label="Фамилия*" placeholder="Фамилия" w="368px" fw={400} onChange={(e) => setLastName(e.currentTarget.value)}/>
                <TextInput label="Имя*" placeholder="Имя" w="368px" fw={400} onChange={(e) => setFirstName(e.currentTarget.value)}/>
                <TextInput label="Номер телефона*" placeholder="Номер телефона" w="368px" fw={400} onChange={(e) => setPhoneNumber(e.currentTarget.value)}/>
                <TextInput label="Email" placeholder="Email" w="368px" fw={400} onChange={(e) => setEmail(e.currentTarget.value)}/>
                <TextInput label="Адрес" placeholder="Адрес" w="368px" fw={400} defaultValue={'г. Новосибирск, ул. Кирова, д. 86'} onChange={(e) => setAddress(e.currentTarget.value)}/>
                <Group justify="center" pt="0.5rem">
                <Button variant="default" onClick={handleBackButtonClick} fw={600} style={{color: "#344051"}} w="172px" size="lg" radius="16px">Назад</Button>
                <Button variant="filled" onClick={handleContinueClick} fw={600} w="172px" color="#F4511E" size="lg" radius="16px" >Продолжить</Button>
                </Group>
                
            </Flex>
        </>
    )
}

export default CustomerData;