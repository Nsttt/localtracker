import type { NextPage } from 'next';
import { Grid } from '@mui/material';

import Header from '../components/header';
import { Card } from '../components/card';

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
            <Grid item>
              <Card cardType="anime" />
            </Grid>
            <Grid item>
              <Card cardType="anime" />
            </Grid>
            <Grid item>
              <Card cardType="anime" />
            </Grid>
            <Grid item>
              <Card cardType="anime" />
            </Grid>
            <Grid item>
              <Card cardType="anime" />
            </Grid>
            <Grid item>
              <Card cardType="anime" />
            </Grid>
            <Grid item>
              <Card cardType="anime" />
            </Grid>
            <Grid item>
              <Card cardType="anime" />
            </Grid>
            <Grid item>
              <Card cardType="anime" />
            </Grid>
            <Grid item>
              <Card cardType="anime" />
            </Grid>
            <Grid item>
              <Card cardType="anime" />
            </Grid>
            <Grid item>
              <Card cardType="anime" />
            </Grid>
            <Grid item>
              <Card cardType="anime" />
            </Grid>
            <Grid item>
              <Card cardType="anime" />
            </Grid>
            <Grid item>
              <Card cardType="anime" />
            </Grid>
            <Grid item>
              <Card cardType="anime" />
            </Grid>
            <Grid item>
              <Card cardType="anime" />
            </Grid>
            <Grid item>
              <Card cardType="anime" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default AnimeList;
