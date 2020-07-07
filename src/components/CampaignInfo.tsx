import React from 'react';
import { campaigns } from '../data/campaigns'
import { Button, Input, Stack, Heading, Text } from "@getgo/instant-join-ui";
import { Logo } from "./Logo";

export const CampaignInfo = () => (
    <Stack spacing={8}>
        <Logo/>

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