import type { FunctionComponent } from 'react';
import { useTheme, Button, Checkbox, FormControlLabel, Grid, Link, TextField } from '@mui/material';
// {
//   width: '100%', // Fix IE 11 issue.
//   marginTop: theme.spacing(1),
// }

interface props {
  formType: string;
}

const Form: FunctionComponent<props> = ({ formType }) => {
  const theme = useTheme();

  return formType === 'login' ? (
    <form noValidate>
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="username"
        label="Username"
        name="username"
        autoComplete="username"
        autoFocus
      />
      <TextField
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
      <FormControlLabel
        control={<Checkbox value="remember" color="primary" />}
        label="Remember me"
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        sx={{
          margin: theme.spacing(3, 0, 2),
        }}>
        Log In
      </Button>
      <Grid container>
        <Grid item xs>
          <Link href="#" variant="body2">
            Forgot password?
          </Link>
        </Grid>
      </Grid>
    </form>
  ) : (
    <form noValidate>
      <TextField
        variant="outlined"
        margin="normal"
        fullWidth
        id="name"
        label="Name"
        name="name"
        autoComplete="name"
        autoFocus
      />
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="username"
        label="Username"
        name="username"
        autoComplete="username"
      />
      <TextField
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
    </form>
  );
};

export default Form;
