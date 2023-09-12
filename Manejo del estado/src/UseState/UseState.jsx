import React from "react";

function UseState({ name }) {
    const [error, setError] = React.useState(true);
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        console.log('Empezando el efecto')

        if(!!loading) {
            setTimeout(() => {
                console.log('variación')
    
                setLoading(false);
    
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


            <input placeholder='Código de Seguridad' />
            <button onClick={() => setLoading(true)}>
                Comprobar
            </button>
        </div>
    )
}

export { UseState }