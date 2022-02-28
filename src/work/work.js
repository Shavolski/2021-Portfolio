import React from "react";
import PropTypes from "prop-types";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Container from "@material-ui/core/Container";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./workStyles";
import "./workStyles";

function TabPanel(props) {
  const classes = useStyles();
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box className={classes.tabBox}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any,
  value: PropTypes.any,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const Work = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Container className={classes.workRoot}>
      <Typography variant="h2" gutterBottom className={classes.introTitle}>
        Work Experience
      </Typography>
      <div className={classes.root}>
        <Grid container>
          <Grid item xs={12} md={2}>
            <Tabs
              orientation="vertical"
              variant="scrollable"
              TabIndicatorProps={{
                style: {
                  backgroundColor: "white",
                  color: "white",
                },
              }}
              value={value}
              onChange={handleChange}
              aria-label="Vertical tabs example"
              className={classes.tabs}
            >
              <Tab
                label="DIYSE"
                {...a11yProps(0)}
                className={classes.individualTab}
              />
              <Tab
                label="BIG NERD RANCH"
                {...a11yProps(1)}
                className={classes.individualTab}
              />
              <Tab
                label="NYOTA PR"
                {...a11yProps(2)}
                className={classes.individualTab}
              />
              <Tab
                label="MERCY SAFE HAVEN"
                {...a11yProps(3)}
                className={classes.individualTab}
              />
              <Tab
                label="PROTOVO SOLUTIONS"
                {...a11yProps(4)}
                className={classes.individualTab}
              />
            </Tabs>
          </Grid>
          <Grid item xs={12} md={10}>

          <TabPanel
            value={value}
            index={0}
            className={classes.individualTabPanel}
          >
            <Typography variant="h4" gutterBottom>
              <span className={classes.titleText}>React Developer </span>
              <span className={classes.titleAt}>@</span>
              <span className={classes.titleCompany}> DIYSE</span>
            </Typography>
            <Typography
              variant="h6"
              gutterBottom
              className={classes.periodText}
            >
              OCTOBER 2021 - FEBRUARY 2022
            </Typography>
            <Grid container spacing={1}>
              <Grid item>
                <NavigateNextIcon />
              </Grid>
              <Grid item xs={10}>
                <Typography
                  variant="h6"
                  gutterBottom
                  className={classes.headerText}
                >
                  Built and tested the app's frontend infrastructure that received positive and affirmative responses from beta testers and the founders.
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={1}>
              <Grid item>
                <NavigateNextIcon />
              </Grid>
              <Grid item xs={10}>
                <Typography
                  variant="h6"
                  gutterBottom
                  className={classes.headerText}
                >
                Collaborated with the designer and CTO in peer review sessions regarding the app's progress and improved the overall quality of the codebase.
                </Typography>
              </Grid>
            </Grid>
          </TabPanel>

            <TabPanel
              value={value}
              index={1}
              className={classes.individualTabPanel}
            >
              <Typography variant="h4" gutterBottom>
                <span className={classes.titleText}>Web Developer Intern </span>
                <span className={classes.titleAt}>@</span>
                <span className={classes.titleCompany}> Big Nerd Ranch</span>
              </Typography>
              <Typography
                variant="h6"
                gutterBottom
                className={classes.periodText}
              >
                APRIL 2021 - AUGUST 2021
              </Typography>
              <Grid container spacing={1}>
                <Grid item>
                  <NavigateNextIcon />
                </Grid>
                <Grid item xs={10}>
                  <Typography
                    variant="h6"
                    gutterBottom
                    className={classes.headerText}
                  >
                    Developed a responsive, robust, test-driven React web
                    application that renders data from the client's API server.
                  </Typography>
                </Grid>
              </Grid>
              <Grid container spacing={1}>
                <Grid item>
                  <NavigateNextIcon />
                </Grid>
                <Grid item xs={10}>
                  <Typography
                    variant="h6"
                    gutterBottom
                    className={classes.headerText}
                  >
                    Identified continuous improvements in data quality, design
                    reports and coding activities, presenting results and
                    findings to stakeholders, fellow team members and the
                    client.
                  </Typography>
                </Grid>
              </Grid>
              <Grid container spacing={1}>
                <Grid item>
                  <NavigateNextIcon />
                </Grid>
                <Grid item xs={10}>
                  <Typography
                    variant="h6"
                    gutterBottom
                    className={classes.headerText}
                  >
                    Participated in peer review sessions and collaborated with
                    senior engineers, architects and product management teams.
                  </Typography>
                </Grid>
              </Grid>
            </TabPanel>
            <TabPanel
              value={value}
              index={2}
              className={classes.individualTabPanel}
            >
              <Typography variant="h4" gutterBottom>
                <span className={classes.titleText}>
                  Research and Web Developer
                </span>
                <span className={classes.titleAt}> @ </span>
                <span className={classes.titleCompany}> Nyota PR</span>
              </Typography>
              <Typography
                variant="h6"
                gutterBottom
                className={classes.periodText}
              >
                FEBRUARY 2021 - APRIL 2021
              </Typography>
              <Grid container spacing={1}>
                <Grid item>
                  <NavigateNextIcon />
                </Grid>
                <Grid item xs={10}>
                  <Typography
                    variant="h6"
                    gutterBottom
                    className={classes.headerText}
                  >
                    Designed & developed the company's main website from design
                    till deployment based in Atlanta, Georgia. It is also
                    connected with a live email servicing system for potential
                    clients to connect.
                  </Typography>
                </Grid>
              </Grid>
              <Grid container spacing={1}>
                <Grid item>
                  <NavigateNextIcon />
                </Grid>
                <Grid item xs={10}>
                  <Typography
                    variant="h6"
                    gutterBottom
                    className={classes.headerText}
                  >
                    Conducted research on usability and user behavior when
                    engaging with the company's website and made development
                    decisions based on those findings with the client.
                  </Typography>
                </Grid>
              </Grid>
            </TabPanel>
            <TabPanel
              value={value}
              index={3}
              className={classes.individualTabPanel}
            >
              <Typography variant="h4" gutterBottom>
                <span className={classes.titleText}>Web Developer</span>
                <span className={classes.titleAt}> @ </span>
                <span className={classes.titleCompany}> Mercy Safe Haven</span>
              </Typography>
              <Typography
                variant="h6"
                gutterBottom
                className={classes.periodText}
              >
                NOVEMBER 2020 - FEBRUARY 2021
              </Typography>
              <Grid container spacing={1}>
                <Grid item>
                  <NavigateNextIcon />
                </Grid>
                <Grid item xs={10}>
                  <Typography
                    variant="h6"
                    gutterBottom
                    className={classes.headerText}
                  >
                    Developed the school's main website, using a tech stack of
                    React, EmaiJS, Jest and Heroku to build this project. Worked
                    closely with the client to ensure the site works across
                    multi-browsers and have redundency tests conducated
                    regulary.
                  </Typography>
                </Grid>
              </Grid>
              <Grid container spacing={1}>
                <Grid item>
                  <NavigateNextIcon />
                </Grid>
                <Grid item xs={10}>
                  <Typography
                    variant="h6"
                    gutterBottom
                    className={classes.headerText}
                  >
                    Embedded images with geographic tagging for brand
                    recognition in the area and enabled google analytics to keep
                    track of site visits for easier marketing.
                  </Typography>
                </Grid>
              </Grid>
            </TabPanel>
            <TabPanel
              value={value}
              index={4}
              className={classes.individualTabPanel}
            >
              <Typography variant="h4" gutterBottom>
                <span className={classes.titleText}>Python Developer</span>
                <span className={classes.titleAt}> @ </span>
                <span className={classes.titleCompany}> Protovo Solutions</span>
              </Typography>
              <Typography
                variant="h6"
                gutterBottom
                className={classes.periodText}
              >
                SEPTEMBER 2018 - NOVEMBER 2018
              </Typography>
              <Grid container spacing={1}>
                <Grid item>
                  <NavigateNextIcon />
                </Grid>
                <Grid item xs={10}>
                  <Typography
                    variant="h6"
                    gutterBottom
                    className={classes.headerText}
                  >
                    Migrated the company's main website from PHP to Python using
                    the Oscar framework. Ensured the site is responsive and runs
                    smoothly across different browsers.
                  </Typography>
                </Grid>
              </Grid>
              <Grid container spacing={1}>
                <Grid item>
                  <NavigateNextIcon />
                </Grid>
                <Grid item xs={10}>
                  <Typography
                    variant="h6"
                    gutterBottom
                    className={classes.headerText}
                  >
                    Built an Instagram bot that automates likes and follows from
                    your account with the purpose of building your social brand
                    as an influencer.
                  </Typography>
                </Grid>
              </Grid>
            </TabPanel>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default Work;
