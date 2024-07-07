import { Typography } from '@mui/material';

export const Title = ({ component = 'h4', variant = 'h4', children }) => {
  return (
    <Typography
      component={component}
      variant={variant}
      align="center"
      sx={{ color: '#1976d2' }}
    >
      {children}
    </Typography>
  );
};
