import type { FunctionComponent } from 'react';
import { useTheme, Paper } from '@mui/material';

interface props {
  cardType: string;
}

export const Card: FunctionComponent<props> = ({ cardType }) => {
  const theme = useTheme();

  return (
    <Paper
      sx={{
        margin: theme.spacing(1),
        width: 210,
        height: 315,
      }}></Paper>
  );
};
