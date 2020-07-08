import React from 'react';
import {ThemeProvider, CSSReset, theme} from "@getgo/instant-join-ui";
import {HashRouter} from "react-router-dom";
import {Campaign} from "./views/Campaign";

const App = () => (
    <HashRouter hashType="noslash">
        <ThemeProvider theme={theme}>
            <CSSReset/>
            <Campaign/>
        </ThemeProvider>
    </HashRouter>
);

export default App;
