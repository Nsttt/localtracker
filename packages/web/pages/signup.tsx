import type { NextPage } from 'next';
import { useTheme, Container, Typography, Box } from '@mui/material';

import Header from '../components/header';
import Form from '../components/form';

const SignupPage: NextPage = () => {
  const theme = useTheme();

  return (
    <>
      <Header />
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: theme.spacing(8),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <Typography component="h1" variant="h4">
            Sign Up
          </Typography>
          <Form formType="sign-up" />
        </Box>
      </Container>
    </>
  );
};

export default SignupPage;
