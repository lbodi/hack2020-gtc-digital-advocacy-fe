import React from 'react';
import {campaigns} from '../data/campaigns'
import {Button, Input, Stack, Heading, Text, Box, Image} from "@getgo/instant-join-ui";
import gtcBanner from "../img/GTC_banner.png";
import {useHistory} from 'react-router-dom';
import {Copyright} from "./Copyright";

const formatText = (text: string) =>
    text.split('\n').map(i => (
        <Text>{i}</Text>
    ));

export const CampaignInfo = () => {
    const history = useHistory();

    const startCall = () => history.push("/calling");

    return (
        <Stack spacing={8}>
            <Heading as="h1" size="xl">
                Digital advocacy campaign
            </Heading>
            <Box>
                <Image src={gtcBanner} alt="GotoConnect banner"/>
            </Box>

            <Heading as="h3" size="lg">
                {campaigns[0].title}
            </Heading>

            <Box w="80%">
                <Stack spacing={4}>
                    {formatText(campaigns[0].text)}
                </Stack>
            </Box>

            <Stack spacing={8}>
                <Box w="300px">
                    <Heading as="h4" size="sm">
                        Phone number
                    </Heading>
                    <Input
                        placeholder="Phone"
                    />
                </Box>
                <Stack isInline spacing={8} align="center">
                    <Button onClick={startCall} w="180px">Start call</Button>
                    <Button variant="outline" w="180px">Sign petition</Button>
                </Stack>
            </Stack>

            <Copyright/>

        </Stack>
    );
};