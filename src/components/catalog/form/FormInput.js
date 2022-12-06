import React from 'react';

function FormInput({children, ...props}) {
    return (
        <div className="form-group col-md-6">
            <label {...props}>
                {children}
            </label>
            <div className="valid-feedback">
                Looks good!
            </div>
            <div className="invalid-feedback">
                Please choose a field.
            </div>
        </div>
    );
}

export default FormInput;