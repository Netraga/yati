import React from 'react';

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  isFullWidth?: boolean;
}

const Button = React.forwardRef<
  HTMLButtonElement,
  ButtonProps
>(({ children, variant, size, isFullWidth, ...props }, ref) => {
  return (
    <>
      <button ref={ref} type="button" {...props}>
        {children}
      </button>
    </>
  );
});

Button.defaultProps = {
  variant: 'secondary',
  size: 'medium',
  disabled: false,
  isFullWidth: false,
};

Button.displayName = 'Button';

export default Button;
