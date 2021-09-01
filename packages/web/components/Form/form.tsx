import type { FunctionComponent } from 'react';
import { Button, Checkbox, FormControlLabel, Grid, Link, TextField } from '@material-ui/core';
import { useFormStyles } from './form.styles';

interface props {
  formType: string;
}

const Form: FunctionComponent<props> = ({ formType }) => {
  const classes = useFormStyles();

  return formType === 'login' ? (
    <form className={classes.form} noValidate>
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
        className={classes.submit}>
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
    <form className={classes.form} noValidate>
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
        className={classes.submit}>
        Sign Up
      </Button>
    </form>
  );
};

export default Form;
