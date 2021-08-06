import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  workRoot: {
    marginTop: "20vh",
    marginBottom: "40vh",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "60vh",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "90vh",
    },
  },
  introTitle: {
    color: "white",
    marginBottom: "5vh",
  },
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: 224,
  },
  titleText: {
    color: "white",
  },
  titleAt: {
    color: "#363636",
  },
  titleCompany: {
    color: "#AAAAAA",
  },
  periodText: {
    color: "#A6A6A6",
    marginBottom: "2vh",
  },
  tabBox: {
    paddingLeft: "5vh",
  },
  tabs: {
    borderRight: "1px solid grey",
    backgroundColor: "black",
  },
  individualTab: {
    marginTop: "1vh",
    color: "white",
    fontSize: "17px",
    marginRight: "auto",
    backgroundColor: "black",
  },
  individualTabPanel: {
    backgroundColor: "black",
    color: "white",
    height: "100%",
    [theme.breakpoints.down("sm")]: {
      marginTop: "10vh",
    },
  },
  headerText: {
    lineHeight: "3vh",
    color: "#D2D2D2",
  },
}));
