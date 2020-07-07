import React from 'react';
import { CampaignCall } from "../components/CampaignCall";
import { CampaignInfo } from "../components/CampaignInfo";
import { campaigns } from '../data/campaigns'
import './Campaign.css';
import { Text, Image } from "@getgo/instant-join-ui";

const CampaignBody = (props: any) => (
    props.isCallInProgress
        ? <CampaignCall/>
        : <CampaignInfo/>
        );

export const Campaign = () => (
    <div>

        <div className="split left">
            <div className="full">
                <Image src={campaigns[0].cover} alt="Campaign cover" />
            </div>
        </div>

        <div className="split right">
            <CampaignBody isCallInProgress={true} />
            <Text fontSize="12px" color="gray.500" position="fixed" bottom="10">
                Ⓒ 2020. All rights reserved. Subject to Privacy Policy.
            </Text>
        </div>

    </div>
);
