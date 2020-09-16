import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import { BrowserRouter as Router } from "react-router-dom";
import { MuiThemeProvider, CssBaseline } from "@material-ui/core";
import theme from "./theme";
import App from "./App";
import client from "./graphql/client";
import AuthProvider from "./auth";

if (module.hot) {
  module.hot.accept("./App", () => {
    const NextApp = require("./App").default;
    ReactDOM.render(
      <ApolloProvider client={client}>
        <AuthProvider>
          <MuiThemeProvider theme={theme}>
            <CssBaseline />
            <Router>
              <NextApp />
            </Router>
          </MuiThemeProvider>
        </AuthProvider>
      </ApolloProvider>,
      document.getElementById("root")
    );
  });
}

ReactDOM.render(
  <ApolloProvider client={client}>
    <AuthProvider>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <App />
        </Router>
      </MuiThemeProvider>
    </AuthProvider>
  </ApolloProvider>,
  document.getElementById("root")
);
