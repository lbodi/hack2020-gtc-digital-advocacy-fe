import {Callee} from "./callee";

export interface CampaignData {
    text: string;
    title: string;
    instructions: string[];
    talkingPoint: string;
    callees: Callee[];
}