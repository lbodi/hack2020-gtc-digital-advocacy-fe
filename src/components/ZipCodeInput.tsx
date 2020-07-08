import {Button, Input, Stack, Text} from "@getgo/instant-join-ui";
import {FormControl, FormHelperText, FormLabel} from "@chakra-ui/core";
import React, {useState} from "react";
import {useHistory, useParams} from "react-router-dom";

const ZipCodeLength = 5;

export const ZipCodeInput = () => {
    const {campaignId} = useParams();
    const history = useHistory();
    const onClick = () => history.push(`/${campaignId}/start`);

    const [zipCode, setZipCode] = useState("");
    const [validZipCode, setValidZipCode] = useState(true);
    const handleChange = (event: any) => {
        setZipCode(event.target.value);
        setValidZipCode(event.target.value.toString().length === ZipCodeLength);
    };

    return (
        <Stack spacing={4}>
            <Text>Enter your zip code below to get started.</Text>s
            <FormControl>
                <FormLabel htmlFor="zipCode">Zip code</FormLabel>
                <Input
                    w="300px"
                    type="number"
                    placeholder="11111"
                    id="zipCode"
                    errorBorderColor="red.300"
                    value={zipCode}
                    isInvalid={!validZipCode}
                    onChange={handleChange}
                />
                {!validZipCode && (
                    <FormHelperText color="red.300">
                        Please type a valid zip code number.
                    </FormHelperText>
                )}
            </FormControl>
            <Button
                isDisabled={!zipCode || !validZipCode}
                onClick={onClick}
                w="180px"
            >
                Next
            </Button>
        </Stack>
    );
};