import type { FunctionComponent } from 'react';
import { Grid } from '@mui/material';

import { Card } from './card';

interface props {
  cardType: 'anime' | 'show' | 'movie' | 'book';
  animeList: [{}];
}

export const ItemGrid: FunctionComponent<props> = ({ cardType, animeList }) => {
  return (
    <Grid
      container
      sx={{
        paddingRight: '7.5%',
        paddingLeft: '3.3%',
        flexGrow: 1,
      }}>
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
