import type { NextPage } from 'next';
import { Grid } from '@mui/material';

import Header from '../components/header';
import { Card } from '../components/card';
import { ItemGrid } from '../components/itemGrid';
import { useGetAllAnimesQuery } from '../generated/graphql';

const AnimeList: NextPage = () => {
  return (
    <>
      <Header />
      <Grid
        container
        sx={{
          paddingRight: '7.5%',
          paddingLeft: '3.3%',
          flexGrow: 1,
        }}>
        <Grid item xs={12}>
          <Grid container justifyContent="center" spacing={2}>
            <ItemGrid cardType="anime" />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default AnimeList;

export async function getServerSideProps() {
  const [, getAllAnimes] = useGetAllAnimesQuery();

  const data = await getAllAnimes();

  return { props: { data } };
}
