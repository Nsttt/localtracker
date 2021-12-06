import type { NextPage } from 'next';
import { useTheme, Container, Typography, Box } from '@mui/material';

import Header from '../components/header';
import { RegisterForm } from '../components/registerForm';

const RegisterPage: NextPage = () => {
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
          <RegisterForm />
        </Box>
      </Container>
    </>
  );
};

export default RegisterPage;
