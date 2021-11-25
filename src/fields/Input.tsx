import React, { useContext } from 'react';
import { FieldContext } from './FieldContext';

const Input = React.forwardRef<
  HTMLInputElement,
  React.ComponentPropsWithoutRef<'input'>
>((props, ref) => {
  const id = useContext(FieldContext);

  return (
    <>
      <input ref={ref} id={id} {...props} />
    </>
  );
});

Input.displayName = 'Field.Input';

export default Input;
