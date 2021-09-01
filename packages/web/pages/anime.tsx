import type { NextPage } from 'next';
import { Container } from '@material-ui/core';

import Header from '../components/Header/header';
import { Card } from '../components/Card/card';

const AnimeList: NextPage = () => {
  return (
    <>
      <Header />
      <Container component="main" maxWidth="xs">
        <Card cardType="anime" />
        <Card cardType="anime" />
        <Card cardType="anime" />
        <Card cardType="anime" />
        <Card cardType="anime" />
      </Container>
    </>
  );
};

export default AnimeList;
