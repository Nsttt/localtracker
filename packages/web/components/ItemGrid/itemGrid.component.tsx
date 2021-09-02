import { Grid } from '@material-ui/core';

import { Card } from '../Card/card';

import { useItemGridStyles } from './itemGrid.styles';

export default function ItemGrid() {
  const classes = useItemGridStyles();

  return (
    <Grid container className={classes.container}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={2}></Grid>
      </Grid>
    </Grid>
  );
}
