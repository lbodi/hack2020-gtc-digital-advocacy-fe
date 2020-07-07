import React from 'react';
import { Image, Stack, Text } from "@chakra-ui/core";
import { Callee } from "../data/callee";

export const CalleeCard = (props: any) => {
    const callee: Callee = props.callee;
    return (
        <Stack spacing={10} isInline>
            <Image src={callee.imgSrc} alt={callee.name} rounded="full" size="20"/>
            <Stack spacing={2}>
                <Text as="b">{callee.name}</Text>
                <Text>{callee.title}</Text>
            </Stack>
        </Stack>
    );
};