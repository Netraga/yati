import React, { useContext } from 'react';
import { FieldContext } from './FieldContext';
import { StyledLabel } from './styles';

const Label = React.forwardRef<
  HTMLLabelElement,
  React.ComponentPropsWithRef<'label'>
>((props, ref) => {
  const id = useContext(FieldContext);

  return (
    <>
      <StyledLabel ref={ref} htmlFor={id} {...props} />
    </>
  );
});

Label.displayName = 'Field.Label';

export default Label;
