import React from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import ProfileImage from "../images/vectorMe.png";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { AnimateSharedLayout, motion } from "framer-motion";
import { useStyles } from "./headerStyles";
import "./headerStyles";

const Header = () => {
  const classes = useStyles();
  const currentHour = new Date().getHours();

  const [greeting] =
    currentHour < 12
      ? ["Good Morning!"]
      : currentHour > 12 && currentHour < 18
      ? ["Good Afternoon!"]
      : ["Good Evening!"];

  return (
    <Container className={classes.boxyr}>
      <Box className={classes.boxy}>
        <Grid
          container
          spacing={3}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12} sm={8}>
            <Grid className={classes.paper}>
              <Typography variant="h2" gutterBottom>
                {greeting}
              </Typography>
              <Typography
                variant="h5"
                gutterBottom
                className={classes.headerText}
              >
                I'm Steve Marvins, a dedicated and reliable developer with 3
                years of awesome experience building digital products with a
                soul.
              </Typography>
              <Typography
                variant="h5"
                gutterBottom
                className={classes.headerText}
              >
                Currently working at Big Nerd Ranch as a web intern.
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box className={classes.piBox}>
              <img src={ProfileImage} className={classes.pi} />
            </Box>
          </Grid>
        </Grid>
        <Grid
          className={classes.boxArrow}
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <KeyboardArrowDownIcon className={classes.arrowDown} />
        </Grid>
      </Box>
    </Container>
  );
};

export default Header;
