import React from "react";
import { useStyles } from "./AppbarStyles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

const Appbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        className={classes.appBarBc}
        color="transparent"
      >
        <Toolbar display="flex">
          <Box className={classes.menuButton}></Box>
          <Button className={classes.rightButtonLink}>
            stevemarvins.dev@gmail.com
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Appbar;
