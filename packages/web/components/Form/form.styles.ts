import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useFormStyles = makeStyles((theme) =>
  createStyles({
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }),
);
