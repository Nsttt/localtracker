import type { NextPage } from 'next';
import { Container, Typography } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import Header from '../components/Header/header';
import Form from '../components/Form/form';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  }),
);

const SignupPage: NextPage = () => {
  const classes = useStyles();

  return (
    <>
      <Header />
      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          <Typography component="h1" variant="h4">
            Sign Up
          </Typography>
          <Form formType="sign-up" />
        </div>
      </Container>
    </>
  );
};

export default SignupPage;
