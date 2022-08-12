import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import {
  CssBaseline,
  ThemeProvider,
  createTheme,
  StyledEngineProvider,
} from "@mui/material";

const theme = createTheme({
  palette: {
    primary: { main: "rgba(25,118,210,1)" },
    background: {
      paper: "rgba(255,255,255,0.99)",
      default: "rgba(255,255,255,0.99)",
    },
    mode: "light",
    info: { main: "rgba(5,115,174,1)" },
    secondary: { dark: "rgba(109,26,145,1)", main: "rgba(103,54,112,1)" },
  },
});

ReactDOM.render(
  <BrowserRouter>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </StyledEngineProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
