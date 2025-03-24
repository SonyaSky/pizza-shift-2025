import React from 'react';
import { Flex, Text, TextInput, Progress } from '@mantine/core';

const CustomerInfo = ({ lastName, firstName, phoneNumber, email, address, onChange }) => {
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
                <TextInput label="Фамилия*" placeholder="Фамилия" w="368px" fw={400} value={lastName} onChange={(e) => setLastName(e.currentTarget.value)}/>
                <TextInput label="Имя*" placeholder="Имя" w="368px" fw={400} value={firstName} onChange={(e) => setFirstName(e.currentTarget.value)}/>
                <TextInput label="Номер телефона*" placeholder="Номер телефона" w="368px" fw={400} value={phoneNumber} onChange={(e) => setPhoneNumber(e.currentTarget.value)}/>
                <TextInput label="Email" placeholder="Email" w="368px" fw={400} value={email} onChange={(e) => setEmail(e.currentTarget.value)}/>
                <TextInput label="Адрес" placeholder="Адрес" w="368px" fw={400} value={address} onChange={(e) => setAddress(e.currentTarget.value)}/>
                
            </Flex>
        </>
    )
}
export default CustomerInfo;