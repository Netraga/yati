import React, { useContext } from 'react';
import { FieldContext } from './FieldContext';

const Label = React.forwardRef<
  HTMLLabelElement,
  React.ComponentPropsWithRef<'label'>
>((props, ref) => {
  const id = useContext(FieldContext);

  return (
    <>
      <label ref={ref} htmlFor={id} {...props} />
    </>
  );
});

Label.displayName = 'Field.Label';

export default Label;
