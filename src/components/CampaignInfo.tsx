import React from 'react';
import {campaigns} from '../data/campaigns'
import {Button, Input, Stack, Heading, Text, Box, Image} from "@getgo/instant-join-ui";
import gtcBanner from "../img/GTC_banner.png";
import {useHistory, useParams} from 'react-router-dom';
import {Copyright} from "./Copyright";

const formatText = (text: string) =>
    text.split('\n').map(i => (
        <Text>{i}</Text>
    ));

export const CampaignInfo = () => {
    const { campaignId } = useParams();
    const history = useHistory();
    const onClick = () => history.push(`/${campaignId}/start`);

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

            <Heading as="h3" size="lg" maxWidth={600}>
                We’ll help you connect with your representatives directly so you can ask them to support this bill.
            </Heading>

            <Text>Enter your zip code below to get started.</Text>

            <Stack spacing={4}>
                <Box w="300px">
                    <Heading as="h5" size="xs">
                        Zip code
                    </Heading>
                    <Input placeholder="11111"/>
                </Box>
                <Stack isInline spacing={8} align="center">
                    <Button onClick={onClick} w="180px">Next</Button>
                </Stack>
            </Stack>

            <Copyright/>

        </Stack>
    );
};