import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const LoginScreen = ({history}) => {
    // Saca el dispatch que envío en HeroesApp.js linea 12
    // <AuthContext.Provider value={{user, dispatch}} >
    const { dispatch } = useContext(AuthContext);
    const handleLogin = () =>{
        //history.push('/');
        // Si voy para atrás nunca estuve atrás, no tendria acceso al login de nuevo, abajo
        //history.replace('/');
        const lastPath= localStorage.getItem('lastPath') || '/';
        // El lastpath se define en privateroute.js linea 12
        dispatch({
            type: types.login,
            payload: {
                name: 'Aicos'
            }
        });
        history.replace(lastPath);

    }
    return (
        <div className="container mt-5">
            <h1>Login Screen</h1>
            <hr/>
            <button className="btn btn-primary" onClick={handleLogin}>
                Ingresar
            </button>
        </div>
    )
}
