import React from 'react'
import { useUniqueID } from '../utils/useUniqueID';
import { FieldContext } from './FieldContext';
import Input from './Input';
import Label from './Label';
import TextArea from './TextArea';

interface FieldComposition {
    Label: typeof Label;
    Input: typeof Input;
    TextArea: typeof TextArea;
}

const Field: React.FC & FieldComposition = ({children}) => {
    return (
        <>
            <FieldContext.Provider value={useUniqueID()}>
                {children}
            </FieldContext.Provider>
        </>
    )
}

Field.Label = Label;
Field.Input = Input;
Field.TextArea = TextArea;

export default Field
