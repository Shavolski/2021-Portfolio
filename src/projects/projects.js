import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import DescriptionIcon from "@material-ui/icons/Description";
import GitHubIcon from "@material-ui/icons/GitHub";
import LanguageIcon from "@material-ui/icons/Language";
import { useStyles } from "./projectsStyles";
import "./projectsStyles";

const Projects = () => {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Typography variant="h2" gutterBottom className={classes.introTitle}>
        Projects & Articles
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Box className={classes.paper} borderRadius={10}>
            <Grid container spacing={5}>
              <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                item
                xs={9}
              >
                <DescriptionIcon />
              </Grid>
              <Grid item xs={1}>
                <Link
                  href="https://github.com/Shavolski/Kazi"
                  target="_blank"
                  className={classes.iconColor}
                >
                  <GitHubIcon />
                </Link>
              </Grid>
              <Grid item xs={1}>
                <Link
                  href="https://kazi-list.netlify.app/"
                  target="_blank"
                  className={classes.iconColor}
                >
                  <LanguageIcon />
                </Link>
              </Grid>
            </Grid>
            <Typography
              variant="h4"
              gutterBottom
              align="left"
              className={classes.titleBox}
            >
              Kazi
            </Typography>
            <Typography
              variant="h6"
              gutterBottom
              className={classes.headerText}
            >
              A hybrid web application built using React and Django that
              automatically saves and stores your list of activities with the
              option of deleting those tasks.
            </Typography>
            <Typography
              variant="h7"
              gutterBottom
              className={classes.headerSubText}
            >
              React, Django, SCSS, Heroku
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box className={classes.paper} borderRadius={10}>
            <Grid container spacing={5}>
              <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                item
                xs={10}
              >
                <DescriptionIcon />
              </Grid>
              <Grid item xs={1}>
                <Link
                  href="https://github.com/Shavolski/Forex-Bot"
                  target="_blank"
                  className={classes.iconColor}
                >
                  <GitHubIcon />
                </Link>
              </Grid>
            </Grid>
            <Typography
              variant="h4"
              gutterBottom
              align="left"
              className={classes.titleBox}
            >
              Forex Bot
            </Typography>
            <Typography
              variant="h6"
              gutterBottom
              className={classes.headerText}
            >
              A bot that uses simple moving averages to currencies on the
              foreign exchange market. This application was built using the
              OANDA api along with Python.
            </Typography>
            <Typography
              variant="h7"
              gutterBottom
              className={classes.headerSubText}
            >
              Python, OANDA api
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box className={classes.paper} borderRadius={10}>
            <Grid container spacing={5}>
              <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                item
                xs={10}
              >
                <DescriptionIcon />
              </Grid>
              <Grid item xs={1}>
                <Link
                  href="https://github.com/Shavolski/IG-bot"
                  target="_blank"
                  className={classes.iconColor}
                >
                  <GitHubIcon />
                </Link>
              </Grid>
            </Grid>
            <Typography
              variant="h4"
              gutterBottom
              align="left"
              className={classes.titleBox}
            >
              Insta Bot
            </Typography>
            <Typography
              variant="h6"
              gutterBottom
              className={classes.headerText}
            >
              An application that automates likes and follows from your
              instagram to create engagement with other users by the use of tags
              in the discovery page.
            </Typography>
            <Typography
              variant="h7"
              gutterBottom
              className={classes.headerSubText}
            >
              Python, Selenium, GeckoDrivers
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box className={classes.paper} borderRadius={10}>
            <Grid container spacing={5}>
              <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                item
                xs={10}
              >
                <DescriptionIcon />
              </Grid>
              <Grid item xs={1}>
                <Link
                  href="https://github.com/Shavolski/Meraki"
                  target="_blank"
                  className={classes.iconColor}
                >
                  <GitHubIcon />
                </Link>
              </Grid>
            </Grid>
            <Typography
              variant="h4"
              gutterBottom
              align="left"
              className={classes.titleBox}
            >
              Meraki
            </Typography>
            <Typography
              variant="h6"
              gutterBottom
              className={classes.headerText}
            >
              A 2d metroidvania game built using the Unity game engine that
              imposes to solve issues concerning people having low self esteem
              by telling the story of Meraki.
            </Typography>
            <Typography
              variant="h7"
              gutterBottom
              className={classes.headerSubText}
            >
              Unity, C#, Adobe Cloud
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box className={classes.paper} borderRadius={10}>
            <Grid container spacing={5}>
              <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                item
                xs={9}
              >
                <DescriptionIcon />
              </Grid>
              <Grid item xs={1}>
                <Link
                  href="https://github.com/Shavolski/Web-Design-Guidelines"
                  target="_blank"
                  className={classes.iconColor}
                >
                  <GitHubIcon />
                </Link>
              </Grid>
              <Grid item xs={1}>
                <Link
                  href="https://stevemarvins-web-design-guidlines.netlify.app/"
                  target="_blank"
                  className={classes.iconColor}
                >
                  <LanguageIcon />
                </Link>
              </Grid>
            </Grid>
            <Typography
              variant="h4"
              gutterBottom
              align="left"
              className={classes.titleBox}
            >
              Web Design Guidelines
            </Typography>
            <Typography
              variant="h6"
              gutterBottom
              className={classes.headerText}
            >
              This is a minimalistic site that displays the methodologies I
              follow when it comes to developing a project taken from a design
              or prototype.
            </Typography>
            <Typography
              variant="h7"
              gutterBottom
              className={classes.headerSubText}
            >
              Gatsby, BULMA, SCSS, Netlify
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box className={classes.paper} borderRadius={10}>
            <Grid container spacing={5}>
              <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                item
                xs={10}
              >
                <DescriptionIcon />
              </Grid>
              <Grid item xs={1}>
                <Link
                  href="https://github.com/Shavolski/Instagram-Clone"
                  target="_blank"
                  className={classes.iconColor}
                >
                  <GitHubIcon />
                </Link>
              </Grid>
            </Grid>
            <Typography
              variant="h4"
              gutterBottom
              align="left"
              className={classes.titleBox}
            >
              Instagram Clone
            </Typography>
            <Typography
              variant="h6"
              gutterBottom
              className={classes.headerText}
            >
              This is a minimalistic site that displays the methodologies I
              follow when it comes to developing a project taken from a design
              or prototype.
            </Typography>
            <Typography
              variant="h7"
              gutterBottom
              className={classes.headerSubText}
            >
              Django, Bootstrap 4, Github Pages
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box className={classes.paper} borderRadius={10}>
            <Typography
              variant="h4"
              gutterBottom
              align="left"
              className={classes.titleBox}
            >
              Responsive Grommet-UI grids in React.
            </Typography>
            <Typography
              variant="h6"
              gutterBottom
              className={classes.headerText}
            >
              An article that showcases how to create a responsive grid using
              Grommet UI in React.
            </Typography>
            <Link
              href="https://medium.com/@stevemarvins.dev/responsive-grommet-ui-grids-in-react-31892103c207"
              target="_blank"
              className={classes.iconColor}
            >
              <Typography
                variant="h7"
                gutterBottom
                className={classes.headerSubText}
              >
                Read here...
              </Typography>
            </Link>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box className={classes.paper} borderRadius={10}>
            <Typography
              variant="h4"
              gutterBottom
              align="left"
              className={classes.titleBox}
            >
              Object-Oriented Programming…simplified.
            </Typography>
            <Typography
              variant="h6"
              gutterBottom
              className={classes.headerText}
            >
              An article explaining O.O.P as a paradigm and how it functions in
              the tasks applicable to it.
            </Typography>
            <Link
              href="https://medium.com/@stevemarvins.dev/object-oriented-programming-simplified-ddf0e3a628ef"
              target="_blank"
              className={classes.iconColor}
            >
              <Typography
                variant="h7"
                gutterBottom
                className={classes.headerSubText}
              >
                Read here...
              </Typography>
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Projects;
