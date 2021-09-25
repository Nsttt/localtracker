import { FunctionComponent, Key } from 'react';
import { Grid } from '@mui/material';

import { Card } from './card';
import useStore from '../store/store';

interface props {
  cardType: 'anime';
}

export const ItemGrid: FunctionComponent<props> = ({ cardType }: props) => {
  const list = useStore((state) => state.animeList);

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
          {list.map((anime: { Media: { id: Key | null | undefined } }) => {
            <Card cardType="ANIME" key={anime.Media.id} />;
          })}
        </Grid>
      </Grid>
    </Grid>
  );
};
