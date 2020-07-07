import React from 'react';
import { CampaignCall } from "../components/CampaignCall";
import { CampaignInfo } from "../components/CampaignInfo";
import campaignCover from "../img/campaign-cover.jpg"
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
                <Image src={campaignCover} alt="Campaign cover" />
            </div>
        </div>

        <div className="split right">
            <CampaignBody isCallInProgress={true} />
            <Text fontSize="8px" color="gray.500">
                Ⓒ 2020. All rights reserved. Subject to Privacy Policy.
            </Text>
        </div>

    </div>
);
