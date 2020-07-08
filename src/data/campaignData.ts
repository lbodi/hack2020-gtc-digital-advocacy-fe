import {Callee} from "./callee";

export interface CampaignData {
    id: string;
    text: string;
    title: string;
    cover: any;
    instructions: string[];
    talkingPoint: string;
    callees: Callee[];
}