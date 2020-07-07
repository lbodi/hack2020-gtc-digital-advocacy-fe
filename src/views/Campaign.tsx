import React from 'react';
import {CampaignCall} from "../components/CampaignCall";
import {CampaignInfo} from "../components/CampaignInfo";

const GreetingBody = (props: any) => (
    props.isCallInProgress
        ? <CampaignCall/>
        : <CampaignInfo/>
        );

export const Campaign = () => (
    <div>
        <GreetingBody isCallInProgress={false} />
    </div>
);
