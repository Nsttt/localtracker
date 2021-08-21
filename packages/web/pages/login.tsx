import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import type { NextPage } from "next";
import Header from "../components/Header";
import Form from "../components/LoginForm";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

const LogIn: NextPage = () => {
  const classes = useStyles();

  return (
    <>
      <Header />
      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Form />
        </div>
      </Container>
    </>
  );
};

export default LogIn;
