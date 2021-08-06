import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  contactRoot: {
    flexGrow: 1,
    marginTop: "40vh",
    marginBottom: "40vh",
  },
  introTitle: {
    color: "white",
    marginBottom: "5vh",
  },
  formFields: {
    width: "100%",
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "40ch",
    },
  },
  contactText: {
    lineHeight: "3vh",
    color: "#AAAAAA",
    paddingBottom: "5vh",
  },
  contactBorder: {
    borderBottom: "3px solid grey",
    marginBottom: "5vh",
  },
  textFieldRoot: {
    // focused color for input with variant='standard'
    "& .MuiInput-underline:after": {
      borderBottomColor: "white",
    },
  },
  textFieldRoot3: {
    // focused color for input with variant='standard'
    "& .MuiInput-underline:after": {
      borderBottomColor: "white",
    },
  },
  paperForm: {
    textAlign: "left",
    color: "white",
    height: "100%",
    padding: theme.spacing(2),
  },
  paperForm3: {
    textAlign: "left",
    color: "white",
    padding: theme.spacing(2),
    height: "100%",
    backgroundColor: "black",
  },
  gridForm: {
    backgroundColor: "black",
    height: "55vh",
  },
  sendButton: {
    padding: theme.spacing(2),
    color: "white",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "-10vh",
    },
  },
  footer: {
    marginTop: "20vh",
    color: "white",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      marginTop: "50vh",
    },
  },
  footerLine: {
    textDecoration: "line-through",
    color: "#AAAAAA",
  },
}));
