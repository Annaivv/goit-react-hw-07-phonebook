import { Typography } from '@mui/material';

export const Title = ({ component, variant, children }) => {
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
