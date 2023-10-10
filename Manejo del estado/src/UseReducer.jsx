import React from "react";

const SECURITY_CODE = 'paradigma';

function UseReducer({ name }) {
    const [state, dispatch] = React.useReducer(reducer, initialState);

    console.log(state)

    /* const onConfirm = () => {
        dispatch({ type: action.Types.confirm });
    }
    const onError = () => {
        dispatch({ type: action.Types.error });
    }
    const onWrite = (newValue) => {
        dispatch({ type: action.Types.write });
        setState({
            ...state,
            value: newValue,
        })
    }
    const onCheck = () => {
        dispatch({ type: action.Types.check });        
    }

    const onDelete = () => {
        dispatch({ type: action.Types.delete });
    }
    const onReset = () => {
        dispatch({ type: action.Types.reset });
    } */

    React.useEffect(() => {
        console.log('Empezando el efecto')

        if(!!state.loading) {
            setTimeout(() => {
                console.log('variación')

                if(state.value === SECURITY_CODE) {
                    dispatch({ type: actionTypes.confirm })
                } else {
                    dispatch({ type: actionTypes.error })
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
                        dispatch({ type: actionTypes.write, payload:event.target.value });
                        /* onWrite(event.target.value) */
                    }}
                />
                <button onClick={() =>{
                    dispatch({ type: actionTypes.check })
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
                    onClick={() =>{
                        dispatch({ type: actionTypes.delete })
                    }}>Sí, eliminar</button>
                <button
                    onClick={() =>{
                        dispatch({ type: actionTypes.reset })
                    }}
                >No, Volver</button>
            </React.Fragment>
        );
    } else {
        return (
            <React.Fragment>
                <p>Eliminado con éxito</p>
                <button
                    onClick={() =>{
                        dispatch({ type: actionTypes.reset })
                    }}
                >Resetear, volver atrás</button>
            </React.Fragment>
        );
    }
}



const initialState = {
    value: '',
    error: false,
    loading: false,
    deleted: false,
    confirmed: false,
};

const actionTypes = {
    confirm: 'CONFIRM',
    error: 'ERROR',
    delete: 'DELETE',
    write: 'WRITE',
    reset: 'RESET',
    check: 'CHECK'
}

const reducerObject = (state, payload) => ({
    [actionTypes.confirm]: {
        ...state,
        error: false,
        loading: false,
        confirmed: true,
    },
    [actionTypes.error]: {
        ...state,
        error: true,
        loading: false,
    },
    [actionTypes.write]:{
        ...state,
        value: payload,
    },
    [actionTypes.check]: {
        ...state,
        loading: true,
    },
    [actionTypes.delete]: {
        ...state,
        deleted: true,
    },
    [actionTypes.reset]:{
        ...state,
        confirmed: false,
        deleted: false,
        value: '',
    }
})

const reducer = (state, action) => {
    if (reducerObject(state)[action.type]) {
        return reducerObject(state, action.payload)[action.type];
    } else {
        return state;
    }
}

export { UseReducer }


/* const reducer = (state, action) => {

} */
/* 
const reducer = (state, action) => {
   if (action.type === 'ERROR') {
    return {
        ...state,
        error: true,
        loading: false,
    };
   } else if (action.type === 'check') {
    return {
        ...state,
        loading: true,
    };
   } else {
    return {
        ...state,
    }
   }
}

const reducerSwitch = (state, action) => {
    switch(action.type) {
        case 'ERROR':
            return {
                ...state,
                error: true,
                loading: false,
            };
        case 'CHECK' :
            return {
                ...state,
                loading: true,
            };
        default:
            return {
                ...state,
            };
    }
} */