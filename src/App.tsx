import React from 'react';
import {ThemeProvider, CSSReset, theme} from "@getgo/instant-join-ui";
import {BrowserRouter} from "react-router-dom";
import {Campaign} from "./views/Campaign";

const App = () => (
    <BrowserRouter basename="/hack2020-gtc-digital-advocacy-fe">
        <ThemeProvider theme={theme}>
            <CSSReset/>
            <Campaign/>
        </ThemeProvider>
    </BrowserRouter>
);

export default App;
