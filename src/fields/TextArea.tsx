import React, { useContext } from 'react';
import { FieldContext } from './FieldContext';
import { StyledTextArea } from './styles';
import PropTypes from 'prop-types';
export interface TextAreaProps extends React.ComponentPropsWithRef<'textarea'>{
  isResizable?: boolean;
}

const TextArea = React.forwardRef<
  HTMLTextAreaElement,
  TextAreaProps  
>(({isResizable, ...props}, ref) => {
  const id = useContext(FieldContext);

  return (
    <>
      <StyledTextArea ref={ref} id={id} isResizable={isResizable} {...props} />
    </>
  );
});

TextArea.displayName = 'Field.TextArea';

TextArea.defaultProps = {
  isResizable: true,
};

TextArea.propTypes = {
  isResizable: PropTypes.bool,
};

export default TextArea;
