import { CampaignData } from "./campaignData";

export const campaigns: CampaignData[] = [
    {
        title: "Fight to end Qualified Immunity Act",
        text: "This week, U.S. Congressman Justin Amash, an independent from Michigan, is introducing the \"Ending Qualified Immunity Act.\" This Act will eliminate qualified immunity and restore Americans’ ability to obtain relief when police officers violate their constitutionally secured rights. \n" +
            "\n" +
            "Government actors should not be held to less of a standard than the general public, they should be held to an even higher standard because of the power they hold.  Please consider signing this petition to tell Congress they need to pass the \"Ending Qualified Immunity Act.\" George Floyd's murder is part of a much greater pattern of egregious police misconduct, and until police officers are no longer \"legally, politically, and culturally insulated from consequences for violating the rights of the people they are sworn to protect,\" there can be no end to this pattern. Qualified Immunity is obviously only part of the problem, but it is an important one. Please also reach out to your representatives directly and tell them to support this bill. ",
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
                imgSrc: "../img/jennifer_doe.jpg"
            },
            {
                name: "Deepak Doe",
                title: "Member of Congress",
                imgSrc: "../img/deepak_doe.jpg"
            }
        ]
    }
]