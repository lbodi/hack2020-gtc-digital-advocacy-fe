import React, {useState} from 'react';
import {campaigns} from '../data/campaigns'
import {Callee} from "../data/callee";
import {CalleeCard} from "./CalleeCard";
import {Box, Heading, Stack, Text, Input, FormControl} from "@chakra-ui/core";
import {Copyright} from "./Copyright";
import {useHistory, useParams} from "react-router-dom";
import {Button} from "@getgo/instant-join-ui";
import Axios from "axios";
import FormLabel from "@chakra-ui/core/dist/FormLabel";

const callees = campaigns[0].callees.map((callee: Callee) =>
    <Box key={callee.name}>
        <CalleeCard callee={callee}/>
    </Box>
);

const baseUrl = "https://zsonagy-8080.ngrok.io/call/"

export const CampaignStart = () => {
    const {campaignId} = useParams();
    const history = useHistory();
    const onClick = () => {
        Axios.post(baseUrl + value);
        history.push(`/${campaignId}/calling`);
    };

    const [value, setValue] = useState("");
    const handleChange = (event: any) => setValue(event.target.value);

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

            <Stack spacing={4}>
                <FormControl>
                    <FormLabel htmlFor="phoneNumber">
                        Enter your phone number
                    </FormLabel>
                    <Input
                        w="300px"
                        placeholder="+00 00 000 00 00"
                        type="phone"
                        id="phoneNumber"
                        value={value}
                        onChange={handleChange}
                    />
                </FormControl>
                <Stack isInline spacing={8} align="center">
                    <Button onClick={onClick} w="180px">Start call</Button>
                </Stack>
            </Stack>
            <Copyright/>

        </Stack>
    );
};