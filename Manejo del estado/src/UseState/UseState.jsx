import React from "react";

const SECURITY_CODE = 'paradigma';

function UseState({ name }) {
    const [state, setState] = React.useState({
        value: '',
        error: false,
        loading: false,
        deleted: false,
        confirmed: false,
    });

    const onConfirm = () => {
        setState({
            ...state,
            error: false,
            loading: false,
            confirmed: true,
        });
    }
    const onError = () => {
        setState({
            ...state,
            error: true,
            loading: false,
        })
    }
    const onWrite = (newValue) => {
        setState({
            ...state,
            value: newValue,
        })
    }
    const onCheck = () => {
        setState({
            ...state,
            error: false,
            loading: true,
        })
    }
    const onDelete = () => {
        setState({
            ...state,
            deleted: true,
        })
    }
    const onReset = () => {
        setState({
            ...state,
            confirmed: false,
            deleted: false,
            value: '',
        })
    }


    console.log(state)

    React.useEffect(() => {
        console.log('Empezando el efecto')

        if(!!state.loading) {
            setTimeout(() => {
                console.log('variación')

                if(state.value === SECURITY_CODE) {
                    onConfirm();
                } else {
                    onError();
                }                
    
                console.log('fin variacion')
            }, 3000)
        }

        console.log('Terminando el efecto')
    }, [state.loading]);

    if (!state.deleted && !state.confirmed) {
        return (
            <div>
                <h2>Eliminar {name}</h2>
                
                <p>Por favor, Escribe el código de seguridad</p>
                
                {(state.error && !state.loading) && (
                    <p>Error: El código es incorrecto</p>
                )}
    
                {state.loading && (
                    <p>Loading...☀️</p>
                )}
    
    
                <input 
                    placeholder='Código de Seguridad'
                    value={state.value}
                    onChange={(event) => {
                        onWrite(event.target.value)
                    }}
                />
                <button onClick={() => {
                        onCheck()
                    }}>
                    Comprobar
                </button>
            </div>
        )
    } else if (!!state.confirmed && !state.deleted) {
        return (
            <React.Fragment>
                <p>Pedimos Confirmación</p>
                <button
                    onClick={() => {
                        onDelete();
                    }}
                >Sí, eliminar</button>
                <button
                    onClick={() => {
                        setState({
                            ...state,
                            confirmed: false,
                            value: ''
                        })
                    }}
                >No, Volver</button>
            </React.Fragment>
        );
    } else {
        return (
            <React.Fragment>
                <p>Eliminado con éxito</p>
                <button
                    onClick={() => {
                       onReset();
                    }}
                >Resetear, volver atrás</button>
            </React.Fragment>
        );
    }
}

export { UseState }