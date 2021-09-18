import type { FunctionComponent } from 'react';
import { useTheme, Paper } from '@mui/material';

interface props {
  cardType: string;
}

export const Card: FunctionComponent<props> = () => {
  const theme = useTheme();

  return (
    <Paper
      sx={{
        marginTop: theme.spacing(1),
        width: 210,
        height: 315,
      }}></Paper>
  );
};
