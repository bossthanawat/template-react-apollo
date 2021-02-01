import React from "react";

import { ApolloProvider } from '@apollo/client';
import client from "./apollo/client";

import { BrowserRouter } from 'react-router-dom';
import Router from "./router/index.js";


import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme} >
        <ApolloProvider client={client} >
          <Router />
        </ApolloProvider>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App;