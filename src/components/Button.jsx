import { Button } from '@mui/material';

export const ButtonTemplate = ({
  type = 'button',
  variant,
  children,
  ...otherProps
}) => {
  return (
    <Button type={type} variant={variant} {...otherProps}>
      {children}
    </Button>
  );
};
