import React from 'react';
import { Flex, Text } from '@mantine/core';

const CreditCardInfo = () => {
    return (
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
            <Text c="#141C24" size='24px' fw={700}>
                Thank you for your information!
            </Text>
            <Text size="xs">You can proceed with your order.</Text>
        </Flex>
    );
};

export default CreditCardInfo;