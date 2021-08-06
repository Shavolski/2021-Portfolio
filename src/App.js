import React from "react";
import AppBar from "./appbar/Appbar";
import Header from "./header/header";
import Work from "./work/work";
import Projects from "./projects/projects";
import Contact from "./contact/contact";
import { useStyles } from "./AppStyles";
import "./AppStyles";
import "./App.css";

import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Abel", "sans-serif"].join(","),
  },
});

const App = (props) => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <AppBar />
        <Header />
        <Work />
        <Projects />
        <Contact />
      </div>
    </ThemeProvider>
  );
};

export default App;
