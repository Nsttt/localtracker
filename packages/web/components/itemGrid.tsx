import { FunctionComponent, Key } from 'react';
import { Grid } from '@mui/material';

interface props {
  children: React.ReactNode;
}

export const ItemGrid: FunctionComponent<props> = ({ children }: props) => {
  return (
    <Grid
      container
      sx={{
        marginTop: '50px',
        paddingRight: '7.5%',
        paddingLeft: '3.3%',
        flexGrow: 1,
      }}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={2}>
          {children}
        </Grid>
      </Grid>
    </Grid>
  );
};
