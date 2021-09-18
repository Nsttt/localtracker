import type { NextPage } from 'next';
import { useTheme, Box, Container, Typography } from '@mui/material';

import Header from '../components/header';
import Form from '../components/form';

const LoginPage: NextPage = () => {
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
            Log in
          </Typography>
          <Form formType="login" />
        </Box>
      </Container>
    </>
  );
};

export default LoginPage;
