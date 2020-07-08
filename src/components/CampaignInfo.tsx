import React from 'react';
import {campaigns} from '../data/campaigns'
import {Stack, Heading, Text, Box, Image} from "@getgo/instant-join-ui";
import gtcBanner from "../img/LMI_GotoConnect_banner.svg";
import {Copyright} from "./Copyright";
import {ZipCodeInput} from "./ZipCodeInput";

const formatText = (text: string) =>
    text.split('\n').map((text, index) => (
        <Text key={index}>{text}</Text>
    ));

export const CampaignInfo = () => {
    return (
        <Stack spacing={8}>
            <Stack spacing={4}>
                <Heading as="h1" size="xl">
                    Digital advocacy campaign
                </Heading>
                <Box>
                    <Image src={gtcBanner} alt="GotoConnect banner"/>
                </Box>
            </Stack>

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

            <ZipCodeInput/>

            <Copyright/>

        </Stack>
    );
};