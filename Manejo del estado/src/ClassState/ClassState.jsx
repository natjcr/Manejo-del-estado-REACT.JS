import React from "react";
import { Loading } from "../Loading";

class ClassState extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            error: true,
            loading: false,
        };
    }

    //componentWillMount
 /*    UNSAFE_componentWillMount() {
        console.log('componentWillMount')
    } */

   /*  componentDidMount() {
        console.log('componentDidMount')
    }
 */

    componentDidUpdate() {
        console.log('actualización')

        if(!!this.state.loading) {
            setTimeout(() => {
                console.log('variación')
    
                this.setState({ loading: false });
    
                console.log('fin variacion')
            }, 3000)
        }
    }

    render() {
        return (
            <div>
                <h2>Eliminar {this.props.name}</h2>
                
                <p>Por favor, Escribe el código de seguridad</p>
                
                {this.state.error && (
                    <p>Error: El código es incorrecto</p>
                )}

                {this.state.loading && (
                    <Loading />
                )}


                <input placeholder='Código de Seguridad' />
                <button onClick={() => this.setState({ loading: true })}>
                    Comprobar
                </button>
            </div>
        )
    }
}

export { ClassState }