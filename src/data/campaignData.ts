import {Callee} from "./callee";

export interface CampaignData {
    text: string;
    title: string;
    cover: any;
    instructions: string[];
    talkingPoint: string;
    callees: Callee[];
}