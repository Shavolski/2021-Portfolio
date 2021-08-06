import React from "react";
import QRCode from "qrcode.react";
import emailjs from "emailjs-com";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import { useStyles } from "./contactStyles";
import "./contactStyles";

const Contact = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "contact_service_2",
        "template_service_2",
        e.target,
        "user_kfof21m5Ry8f1KhhBfY5J"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
  return (
    <Container className={classes.contactRoot}>
      <form
        className={classes.formFields}
        noValidate
        autoComplete="off"
        onSubmit={sendEmail}
      >
        <Grid container className={classes.gridForm} spacing={3}>
          <Grid
            item
            xs={12}
            sm={4}
            container
            direction="column"
            justify="flex-start"
            alignItems="flex-start"
          >
            <Box className={classes.paperForm} borderRadius={10}>
              <Typography
                variant="h2"
                gutterBottom
                className={classes.introTitle}
              >
                Get in touch
              </Typography>
              <TextField
                id="standard-basic"
                label="Name"
                type="text"
                name="user_name"
                className={classes.textFieldRoot}
                InputLabelProps={{
                  style: {
                    color: "white",
                    fontSize: "20px",
                  },
                }}
                InputProps={{
                  style: {
                    borderBottom: "1px solid grey",
                    borderColor: "grey",
                    color: "white",
                    fontSize: "19px",
                    marginBottom: "1vh",
                  },
                }}
              />
              <TextField
                id="standard-basic"
                label="Email"
                type="email"
                name="user_email"
                className={classes.textFieldRoot}
                InputLabelProps={{
                  style: {
                    color: "white",
                    fontSize: "20px",
                  },
                }}
                InputProps={{
                  style: {
                    color: "white",
                    marginBottom: "1vh",
                    fontSize: "19px",
                    borderBottom: "1px solid grey",
                  },
                }}
              />
              <Box mt={4} ml={1}>
                <QRCode value="http://facebook.github.io/react/" />
                <Typography variant="button" gutterBottom display="block">
                  LinkedIn
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={8}
            container
            direction="column"
            justifyContent="flex-start"
            alignItems="stretch"
          >
            <Box
              className={classes.paperForm3}
              borderLeft={1}
              width="auto"
              position="relative"
            >
              <TextField
                style={{ width: "100%" }}
                inputStyle={{ width: "100%" }}
                className={classes.textFieldRoot3}
                InputLabelProps={{
                  style: {
                    color: "white",
                    fontSize: "20px",
                  },
                }}
                InputProps={{
                  style: {
                    color: "white",
                    borderBottom: "1px solid grey",
                    fontSize: "19px",
                  },
                }}
                name="message"
                id="standard-multiline-flexible"
                label="Your message (~^.^)~"
                multiline
                maxRows={13}
                value={value}
                onChange={handleChange}
              />
              <Box position="absolute" bottom="0px" width="auto">
                <Button
                  className={classes.sendButton}
                  type="submit"
                  value="Send"
                >
                  SEND MESSAGE
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </form>
      <Box className={classes.footer}>
        <Typography variant="caption" gutterBottom display="block">
          Designed and developed by Steve Marvins.
        </Typography>
        <Typography variant="caption" gutterBottom display="block">
          All rights reserved © 2021
        </Typography>
      </Box>
    </Container>
  );
};

export default Contact;
