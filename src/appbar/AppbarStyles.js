import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    color: "red",
  },
  appBarBc: {},
  rightButtonLink: {
    color: "blue",
    fontSize: "20px",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    flexGrow: 1,
  },
}));
