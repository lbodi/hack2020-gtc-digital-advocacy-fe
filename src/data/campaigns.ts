import { CampaignData } from "./campaignData";
import jennifer from "../img/jennifer_doe.jpg"
import deepak from "../img/deepak_doe.jpg"
import campaignCover from "../img/campaign-cover.jpg"

export const campaigns: CampaignData[] = [
    {
        id: "IV2NJ6W0QgGVagAAoFgrIw",
        title: "Fight to end Qualified Immunity Act",
        cover: campaignCover,
        text: "This week, U.S. Congressman Justin Amash, an independent from Michigan, is introducing the \"Ending Qualified Immunity Act.\" This Act will eliminate qualified immunity and restore Americans’ ability to obtain relief when police officers violate their constitutionally secured rights." +
            "\n" +
            "Government actors should not be held to less of a standard than the general public, they should be held to an even higher standard because of the power they hold.",
        instructions: [
            "You will get a call from XXX-XXX-XXXX",
            "Listen to the message with the information about the officials and the main talking points",
            "You will be connected to the first official",
            "When you're done speaking with the first official, press * to be connected to the next one"
        ],
        talkingPoint: "Ask each official to support the “Ending Qualified Immunity Act” bill.",
        callees: [
            {
                name: "Jennifer Doe",
                title: "Member of Congress",
                imgSrc: jennifer
            },
            {
                name: "Deepak Doe",
                title: "Member of Congress",
                imgSrc: deepak
            }
        ]
    }
]