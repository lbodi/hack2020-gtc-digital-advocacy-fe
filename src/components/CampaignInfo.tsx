import React from 'react';
import { campaigns } from '../data/campaigns'
import { Button, Input, Stack, Heading, Text, Box, Image } from "@getgo/instant-join-ui";
import gtcBanner from "../img/GTC_banner.png";

export const CampaignInfo = () => (
    <Stack spacing={8}>
        <Heading as="h1" size="xl">
            Digital advocacy campaign
        </Heading>
        <Box>
            <Image src={gtcBanner} alt="GotoConnect banner" />
        </Box>

        <Heading as="h3" size="lg">
            {campaigns[0].title}
        </Heading>

        <Text>{campaigns[0].text}</Text>

        <Stack spacing={8}>

            <Input placeholder="Phone" />

            <Stack isInline spacing={8} align="center">
                <Button>Start call</Button>
                <Button variant="outline">Sign petition</Button>
            </Stack>

        </Stack>

    </Stack>
);