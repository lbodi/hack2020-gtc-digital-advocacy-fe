import React from "react";
import {Switch, Route} from "react-router-dom";
import {CampaignCall} from "../components/CampaignCall";
import {CampaignInfo} from "../components/CampaignInfo";

export const CampaignRoutes = () => (
    <Switch>
        <Route path="/" exact>
            <CampaignInfo/>
        </Route>
        <Route path="/calling">
            <CampaignCall/>
        </Route>
    </Switch>
);
