import React, { useContext } from 'react';
import { FieldContext } from './FieldContext';
import { StyledTextArea } from './styles';

const TextArea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentPropsWithRef<'textarea'>
>((props, ref) => {
  const id = useContext(FieldContext);

  return (
    <>
      <StyledTextArea ref={ref} id={id} {...props} />
    </>
  );
});

TextArea.displayName = 'Field.TextArea';

export default TextArea;
