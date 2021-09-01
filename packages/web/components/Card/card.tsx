import type { FunctionComponent } from 'react';
import { Button, Card as BaseCard, CardActions, CardContent, Typography } from '@material-ui/core';

import { useCardStyles } from './card.styles';

interface props {
  cardType: string;
}

export const Card: FunctionComponent<props> = () => {
  const classes = useCardStyles();
  return (
    <BaseCard className={classes.root}>
      <CardContent>

      </CardContent>
    </BaseCard>
  );
};
