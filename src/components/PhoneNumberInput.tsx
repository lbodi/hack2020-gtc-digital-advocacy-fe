import React, {useState} from "react";
import {FormControl, Input, Stack} from "@chakra-ui/core";
import FormLabel from "@chakra-ui/core/dist/FormLabel";
import {Button} from "@getgo/instant-join-ui";
import {useHistory, useParams} from "react-router-dom";
import Axios from "axios";

const baseUrl = "https://zsonagy-8080.ngrok.io/call/"

export const PhoneNumberInput = () => {
    const {campaignId} = useParams();
    const history = useHistory();
    const onClick = () => {
        Axios.post(baseUrl + phoneNumber);
        history.push(`/${campaignId}/calling`);
    };

    const [phoneNumber, setPhoneNumber] = useState("");
    const handleChange = (event: any) => setPhoneNumber(event.target.value);
    return (
        <Stack spacing={4}>
            <FormControl>
                <FormLabel htmlFor="phoneNumber">
                    Enter your phone number
                </FormLabel>
                <Input
                    w="300px"
                    placeholder="+00 00 000 00 00"
                    type="phone"
                    id="phoneNumber"
                    value={phoneNumber}
                    onChange={handleChange}
                />
            </FormControl>
            <Button
                onClick={onClick}
                w="180px"
                isDisabled={!phoneNumber}
            >
                Start call
            </Button>
        </Stack>
    );
};
