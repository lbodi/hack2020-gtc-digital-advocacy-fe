import React from 'react';
import './App.css';
import {ThemeProvider, CSSReset, theme} from "@getgo/instant-join-ui";
import {BrowserRouter} from "react-router-dom";
import {Campaign} from "./views/Campaign";

const App = () => (
    <BrowserRouter>
        <ThemeProvider theme={theme}>
            <CSSReset/>
            <Campaign/>
        </ThemeProvider>
    </BrowserRouter>
);

export default App;
