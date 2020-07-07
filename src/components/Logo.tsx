import React from 'react';
import {Image, Heading, Stack, Box} from "@getgo/instant-join-ui";
import gtcBanner from "../img/GTC_banner.png";

export const Logo = () => (
    <Stack spacing={10}>
        <Heading as="h1" size="xl">
            Digital advocacy campaign
        </Heading>
        <Box>
            <Image src={gtcBanner} alt="GotoConnect banner" />
        </Box>
    </Stack>
);