import React from 'react';
import {campaigns} from '../data/campaigns'
import {CampaignRoutes} from "./CampaignRoutes";
import {Image, Flex} from "@chakra-ui/core";

export const Campaign = () => (
    <Flex h="100%" direction={{base:"column", md:"row"}}>
        <Flex h={{base: "50%", md: "100%"}} w={{base: "100%", md: "50%"}}>
            <Image src={campaigns[0].cover}
                   alt="Campaign cover"
                   objectFit="cover"
                   h="100%"
            />
        </Flex>
        <Flex h={{base: "50%", md: "100%"}} w={{base: "100%", md: "50%"}}
              padding="48px" boxSizing="border-box">
            <CampaignRoutes/>
        </Flex>
    </Flex>
);
