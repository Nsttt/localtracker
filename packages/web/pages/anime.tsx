import type { NextPage } from 'next';
import { Container, Grid } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import Header from '../components/Header/header';
import { Card } from '../components/Card/card';

const useAnimeStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      paddingRight: '7.5%',
      paddingLeft: '3.3%',
      flexGrow: 1,
    },
  }),
);

const AnimeList: NextPage = () => {
  const classes = useAnimeStyles();

  return (
    <>
      <Header />
      <Grid container className={classes.container}>
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
