import type { FunctionComponent } from 'react';
import { Grid } from '@material-ui/core';

import { Card } from '../Card/card';
import { useItemGridStyles } from './itemGrid.styles';

interface props {
  cardType: 'anime' | 'show' | 'movie' | 'book';
  animeList: [{}];
}

export const ItemGrid: FunctionComponent<props> = ({ cardType, animeList }) => {
  const classes = useItemGridStyles();

  return (
    <Grid container className={classes.container}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={2}>
          {animeList.map((anime) => {
            <Grid item key={anime.id}>
              <Card cardType={cardType} />
            </Grid>;
          })}
        </Grid>
      </Grid>
    </Grid>
  );
};
