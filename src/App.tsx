import React from 'react';
import { ThemeProvider, CSSReset, theme } from "@getgo/instant-join-ui";
import './App.css';
import {Campaign} from "./views/Campaign";

function App() {
  return (
      <ThemeProvider theme={theme}>
        <CSSReset />
        <Campaign/>
      </ThemeProvider>
  );
}

export default App;
