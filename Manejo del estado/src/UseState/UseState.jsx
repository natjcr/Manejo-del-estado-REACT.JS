import React from "react";

const SECURITY_CODE = 'paradigma';

function UseState({ name }) {
    const [value, setValue] = React.useState('');
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    console.log(value)

    React.useEffect(() => {
        console.log('Empezando el efecto')

        if(!!loading) {
            setTimeout(() => {
                console.log('variación')

                if(value === SECURITY_CODE){
                    setLoading(false);
                }else {
                    setError(true)
                    setLoading(false)
                }                
    
                console.log('fin variacion')
            }, 3000)
        }

        console.log('Terminando el efecto')
    }, [loading]);

    return (
        <div>
            <h2>Eliminar {name}</h2>
            
            <p>Por favor, Escribe el código de seguridad</p>
            
            {error && (
                <p>Error: El código es incorrecto</p>
            )}
            {loading && (
                <p>Loading...☀️</p>
            )}


            <input 
                placeholder='Código de Seguridad'
                value={value}
                onChange={(event) => {
                    setValue(event.target.value)
                }}
            />
            <button onClick={() => setLoading(true)}>
                Comprobar
            </button>
        </div>
    )
}

export { UseState }