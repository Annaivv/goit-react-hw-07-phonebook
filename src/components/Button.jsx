import { Button } from '@mui/material';

export const ButtonTemplate = ({
  type = 'button',
  children,
  ...otherProps
}) => {
  return (
    <Button
      type={type}
      variant="contained"
      sx={{ mt: 3, mb: 2 }}
      {...otherProps}
    >
      {children}
    </Button>
  );
};
