import Header from '../components/header';
import { Card } from '../components/card';
import { ItemGrid } from '../components/itemGrid';
import { useGetAllAnimesQuery } from '../generated/graphql';

export default function AnimePage() {
  const data = useGetAllAnimesQuery();

  return (
    <>
      <Header />
      <ItemGrid>
        <Card cardType="ANIME" />
        <Card cardType="ANIME" />
        <Card cardType="ANIME" />
        <Card cardType="ANIME" />
        <Card cardType="ANIME" />
        <Card cardType="ANIME" />
        <Card cardType="ANIME" />
        <Card cardType="ANIME" />
        <Card cardType="ANIME" />
        <Card cardType="ANIME" />
        <Card cardType="ANIME" />
        <Card cardType="ANIME" />
        <Card cardType="ANIME" />
        <Card cardType="ANIME" />
        <Card cardType="ANIME" />
        <Card cardType="ANIME" />
      </ItemGrid>
    </>
  );
}
