import React from 'react';

/* Se puede utilizar con todo lo que proviene de props, realiza el spiring y automaticamente toma todas las variables
sueltas y la guarda en input */
/* on change = cambio de valor 
                    value = nuestro valor 
                    className = Clases de Estilo 
                    style= nuestros style
                */
const InputText = ({...props}) => (
    <label>
            {props.label && <div>{props.label}</div>}
            <input
                type="text"
                {...props}    
            />
    </label>
)

export default InputText;