import {createTheme, ThemeProvider} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import {MenuAppBar} from "./MenuAppBar";
import * as React from "react";

export const Home = () => {
    const mdTheme = createTheme();
    return (
        <ThemeProvider theme={mdTheme}>
            <CssBaseline/>
            <div className="app">
                <main className="content">
                    <MenuAppBar/>
                </main>
            </div>
        </ThemeProvider>
    );
}