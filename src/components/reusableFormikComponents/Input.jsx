import React from 'react';
import { Field, ErrorMessage } from 'formik';
import TextError from '../TextError';

function Input(props) {

    const { label,name, ...rest} = props;
    return (
        <div className='form-control'>
            {/* name and id same value here. else pass id as prop */}
            <label htmlFor={name}>{label}</label>
            <Field id={name} name={name} {...rest} />
            <ErrorMessage name={name} component={TextError} /> 
        </div>
    )
}

export default Input
