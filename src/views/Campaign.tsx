import React from 'react';
import {campaigns} from '../data/campaigns'
import './Campaign.css';
import {Text, Image} from "@getgo/instant-join-ui";
import {CampaignRoutes} from "./CampaignRoutes";

export const Campaign = (props: any) => {
    const isCallInProgress: boolean = props.isCallInProgress;
    return (
        <div>

            <div className="split left">
                <div className="full">
                    <Image src={campaigns[0].cover} alt="Campaign cover"/>
                </div>
            </div>

            <div className="split right">
                <CampaignRoutes/>
                <Text fontSize="12px" color="gray.500" position="fixed" bottom="10">
                    Ⓒ 2020. All rights reserved. Subject to Privacy Policy.
                    {isCallInProgress}
                </Text>
            </div>

        </div>
    );
};
