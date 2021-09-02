import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const useItemGridStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      paddingRight: '7.5%',
      paddingLeft: '3.3%',
      flexGrow: 1,
    },
  }),
);
