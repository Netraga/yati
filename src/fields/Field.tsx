import React from 'react'
import { useUniqueID } from '../utils/useUniqueID';
import { FieldContext } from './FieldContext';
import Input from './Input';
import Label from './Label';

interface FieldComposition {
    Label: typeof Label;
    Input: typeof Input;
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

export default Field
