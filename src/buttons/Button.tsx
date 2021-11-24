import React from 'react';

const Button = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<'button'>
>(({ children, ...props }, ref) => {
  return (
    <>
      <button ref={ref} type="button" {...props}>{children}</button>
    </>
  );
});

Button.displayName = 'Button';

export default Button;
