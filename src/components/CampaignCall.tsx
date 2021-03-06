import React from 'react';
import {campaigns} from '../data/campaigns'
import {Callee} from "../data/callee";
import {CalleeCard} from "./CalleeCard";
import {Box, Heading, List, ListItem, Stack, Text} from "@chakra-ui/core";
import {Copyright} from "./Copyright";

const instructions = campaigns[0].instructions.map((instruction: string) =>
    <ListItem key={instruction}>{instruction}</ListItem>
);

const callees = campaigns[0].callees.map((callee: Callee) =>
    <Box key={callee.name}>
        <CalleeCard callee={callee}/>
    </Box>
);

export const CampaignCall = () => (
    <Stack spacing={8}>

        <Heading as="h1" size="xl">
            Call in progress
        </Heading>

        <List as="ol" styleType="decimal">
            {instructions}
        </List>

        <Stack spacing={1}>
            <Heading as="h4" size="sm">
                Main talking point
            </Heading>
            <Text>{campaigns[0].talkingPoint}</Text>
        </Stack>

        <Stack spacing={4}>
            <Heading as="h4" size="sm">
                You are on call with:
            </Heading>
            {callees}
        </Stack>

        <Copyright/>

    </Stack>
);