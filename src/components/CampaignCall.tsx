import React from 'react';
import { campaigns } from '../data/campaigns'
import {Heading, List, ListItem, Stack, Text} from "@getgo/instant-join-ui";
import { Callee } from "../data/callee";
import { CalleeCard } from "./CalleeCard";

const instructions = campaigns[0].instructions.map((instruction: string) =>
    <ListItem>{instruction}</ListItem>
);

const callees = campaigns[0].callees.map((callee: Callee) =>
    <ListItem><CalleeCard callee={callee}/></ListItem>
);

export const CampaignCall = () => (
    <Stack spacing={8}>

        <Heading as="h1" size="xl">
            Call in progress
        </Heading>

        <List as="ol" styleType="decimal">
            {instructions}
        </List>

        <Heading as="h4" size="sm">
            Main talking point
        </Heading>

        <Text>{campaigns[0].talkingPoint}</Text>

        <Heading as="h4" size="sm">
            You are on call with:
        </Heading>

        <List>
            {callees}
        </List>
    </Stack>
);