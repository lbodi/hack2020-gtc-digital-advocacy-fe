import React from 'react';
import { CampaignCall } from "../components/CampaignCall";
import { CampaignInfo } from "../components/CampaignInfo";
import campaignCover from "../img/campaign-cover.jpg"
import './Campaign.css';

const CampaignBody = (props: any) => (
    props.isCallInProgress
        ? <CampaignCall/>
        : <CampaignInfo/>
        );

export const Campaign = () => (
    <div>

        <div className="split left">
            <div className="full">
                <img src={campaignCover} alt="Campaign cover" />
            </div>
        </div>

        <div className="split right">
            <CampaignBody isCallInProgress={false} />
            <div>
                Ⓒ 2020. All rights reserved. Subject to Privacy Policy.
            </div>
        </div>

    </div>
);
