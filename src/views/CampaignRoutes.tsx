import React from "react";
import {Switch, Route} from "react-router-dom";
import {CampaignCall} from "../components/CampaignCall";
import {CampaignInfo} from "../components/CampaignInfo";
import {CampaignStart} from "../components/CampaignStart";

export const CampaignRoutes = () => (
    <Switch>
        <Route path="/" exact>
            <CampaignInfo/>
        </Route>
        <Route path="/start">
            <CampaignStart/>
        </Route>
        <Route path="/calling">
            <CampaignCall/>
        </Route>
    </Switch>
);
