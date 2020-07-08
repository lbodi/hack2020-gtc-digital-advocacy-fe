import React from 'react';
import {campaigns} from '../data/campaigns'
import {Callee} from "../data/callee";
import {CalleeCard} from "./CalleeCard";
import {Box, Heading, Stack, Text, Input} from "@chakra-ui/core";
import {Copyright} from "./Copyright";
import {useHistory, useParams} from "react-router-dom";
import {Button} from "@getgo/instant-join-ui";

const callees = campaigns[0].callees.map((callee: Callee) =>
    <Box key={callee.name}>
        <CalleeCard callee={callee} />
    </Box>
);

export const CampaignStart = () => {
    const { campaignId } = useParams();
    const history = useHistory();
    const onClick = () => history.push(`/${campaignId}/calling`);

    return (
        <Stack spacing={8}>
            <Stack spacing={4}>
                <Heading as="h3" size="lg">
                    Who you'll call
                </Heading>

                <Text>These are your local representatives.</Text>
            </Stack>

            {callees}

            <Stack spacing={4}>
                <Heading as="h3" size="lg">
                    What’s going to happen
                </Heading>

                <Text maxWidth={550}>
                    We’ll connect you to your first local representative.
                    At the end of the each call stay on the line and press * to connect with the next representative.
                </Text>
            </Stack>

            <Stack spacing={0}>
                <Heading as="h4" size="sm">
                    Main talking point
                </Heading>

                <Text>{campaigns[0].talkingPoint}</Text>
            </Stack>

            <Stack spacing={4}>
                <Stack w="300px" spacing={1}>
                    <Heading as="h5" size="xs">
                        Enter your phone number
                    </Heading>
                    <Input placeholder="Number"/>
                </Stack>
                <Stack isInline spacing={8} align="center">
                    <Button onClick={onClick} w="180px">Start call</Button>
                </Stack>
            </Stack>

            <Copyright/>

        </Stack>
    );
};