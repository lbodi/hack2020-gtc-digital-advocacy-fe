import React from 'react';
import { campaigns } from '../data/campaigns'
import gtcBanner from "../img/GTC_banner.png";

export const CampaignInfo = () => (
    <div>
        <h1>Digital advocacy campaign</h1>
        <img src={gtcBanner} alt="GotoConnect banner" />

        <h2>{campaigns[0].title}</h2>

        <div>{campaigns[0].text}</div>
    </div>
);