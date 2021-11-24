import React from 'react';
import { StyledButton } from './styles';

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  isFullWidth?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant, size, isFullWidth, ...props }, ref) => {
    return (
      <>
        <StyledButton
          ref={ref}
          variant={variant}
          size={size}
          isFullWidth={isFullWidth}
          type="button"
          {...props}
        >
          {children}
        </StyledButton>
      </>
    );
  }
);

Button.defaultProps = {
  variant: 'secondary',
  size: 'medium',
  disabled: false,
  isFullWidth: false,
};

Button.displayName = 'Button';

export default Button;
