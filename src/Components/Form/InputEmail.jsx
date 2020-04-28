import React from 'react';

const InputEmail = ({...props}) => (
    <label>
            {props.label && <div>{props.label}</div>}
            <input
                type="email"
                {...props}    
            />
    </label>
)

export default InputEmail;