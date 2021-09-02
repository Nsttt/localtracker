import type { FunctionComponent } from 'react';
import { Button, Paper, CardActions, CardContent, Typography } from '@material-ui/core';

import { useCardStyles } from './card.styles';

interface props {
  cardType: string;
}

export const Card: FunctionComponent<props> = () => {
  const classes = useCardStyles();
  return <Paper className={classes.root}></Paper>;
};
