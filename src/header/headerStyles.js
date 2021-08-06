import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  headerRoot: {
    backgroundColor: "brown",
    border: "2px solid blue",
    marginTop: "50px",
  },
  mainGrid: {
    margin: "auto",
  },
  paper: {
    margin: "auto",
    color: "white",
  },
  headerText: {
    paddingTop: "1vh",
  },
  pi: {
    width: "100%",
  },
  boxy: {
    width: "100%",
    flexGrow: 1,
  },
  boxyr: {
    marginTop: "20vh",
    [theme.breakpoints.down("sm")]: {
      marginTop: "4vh",
    },
  },
  boxArrow: {
    marginTop: "10vh",
    [theme.breakpoints.down("sm")]: {
      marginTop: "0vh",
    },
  },
  arrowDown: {
    color: "white",
    fontSize: "35px",
  },
}));
