import React from 'react';
import {campaigns} from '../data/campaigns'
import {Callee} from "../data/callee";
import {CalleeCard} from "./CalleeCard";
import {Box, Heading, Stack, Text} from "@chakra-ui/core";
import {Copyright} from "./Copyright";
import {PhoneNumberInput} from "./PhoneNumberInput";

const callees = campaigns[0].callees.map((callee: Callee) =>
    <Box key={callee.name}>
        <CalleeCard callee={callee}/>
    </Box>
);

export const CampaignStart = () => {

    return (
        <Stack spacing={8}>

            <Stack spacing={4}>
                <Heading as="h3" size="lg">
                    Who you'll call
                </Heading>

                <Text>These are your local representatives.</Text>

                {callees}
            </Stack>

            <Stack spacing={4}>
                <Heading as="h3" size="lg">
                    What’s going to happen
                </Heading>

                <Text maxWidth={550}>
                    We’ll connect you to your first local representative.
                    At the end of the each call stay on the line and press * to connect with the next representative.
                </Text>
            </Stack>

            <Stack spacing={1}>
                <Heading as="h4" size="sm">
                    Main talking point
                </Heading>
                <Text>{campaigns[0].talkingPoint}</Text>
            </Stack>

            <PhoneNumberInput/>

            <Copyright/>

        </Stack>
    );
};