import React from 'react';
import {campaigns} from '../data/campaigns'
import {CampaignRoutes} from "./CampaignRoutes";
import {Image, Flex} from "@chakra-ui/core";

export const Campaign = () => (
    <Flex h="100%">
        <Flex w="50%" h="100%">
            <Image src={campaigns[0].cover}
                   alt="Campaign cover"
                   objectFit="cover"
                   h="100%"
            />
        </Flex>
        <Flex w="50%" h="100%" padding="48px" boxSizing="border-box">
            <CampaignRoutes/>
        </Flex>
    </Flex>
);
