import { StyledButton } from './Button.styled';

export const Button = ({ type = 'button', children, ...otherProps }) => {
  return (
    <StyledButton type={type} {...otherProps}>
      {children}
    </StyledButton>
  );
};
