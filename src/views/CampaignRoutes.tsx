import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import {CampaignCall} from "../components/CampaignCall";
import {CampaignInfo} from "../components/CampaignInfo";
import {CampaignStart} from "../components/CampaignStart";
import {campaigns} from "../data/campaigns";

export const CampaignRoutes = () => (
    <Switch>
        <Route path="/" exact>
            <Redirect to={`/${campaigns[0].id}/`} />
        </Route>
        <Route path="/:campaignId" exact>
            <CampaignInfo/>
        </Route>
        <Route path="/:campaignId/start">
            <CampaignStart/>
        </Route>
        <Route path="/:campaignId/calling">
            <CampaignCall/>
        </Route>
    </Switch>
);
