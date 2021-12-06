import { useRouter } from 'next/router';
import { Box, Button, TextField, useTheme } from '@mui/material';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { RegisterInput, useLoginMutation } from '../generated/graphql';

export const LoginForm = (): JSX.Element => {
  const router = useRouter();
  const theme = useTheme();
  const { control, handleSubmit } = useForm({
    defaultValues: {
      username: '',
      password: '',
    },
  });
  const [, login] = useLoginMutation();

  const onSubmit: SubmitHandler<RegisterInput> = async (data) => {
    await login(data);
    router.push('/');
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
      <Controller
        name="username"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
          />
        )}
      />
      <Controller
        name="password"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
        )}
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        sx={{
          margin: theme.spacing(3, 0, 2),
        }}>
        Sign Up
      </Button>
    </Box>
  );
};
