import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  introTitle: {
    color: "white",
    marginBottom: "5vh",
  },
  paper: {
    padding: theme.spacing(2),
    color: "white",
    backgroundColor: "#171717",
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(3),
    },
  },
  iconColor: {
    color: "#AAAAAA",
  },
  titleBox: {
    marginTop: "3vh",
  },
  headerText: {
    lineHeight: "3vh",
    color: "#AAAAAA",
    paddingBottom: "5vh",
  },
  headerSubText: {
    lineHeight: "3vh",
    color: "#AAAAAA",
  },
}));
