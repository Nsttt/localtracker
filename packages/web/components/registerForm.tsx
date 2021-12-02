import { Box, Button, TextField, useTheme } from '@mui/material';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { RegisterInput, useRegisterMutation } from '../generated/graphql';

interface RegisterFormContents {
  name: string;
  password: string;
  username: string;
}

export const RegisterForm = (): JSX.Element => {
  const theme = useTheme();
  const { control, handleSubmit } = useForm({
    defaultValues: {
      name: '',
      username: '',
      password: '',
    },
  });
  const [, register] = useRegisterMutation();

  const onSubmit: SubmitHandler<RegisterInput> = async (data) => {
    await register({ data });
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
      <Controller
        name="name"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            name="name"
            autoComplete="name"
            autoFocus
          />
        )}
      />
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
