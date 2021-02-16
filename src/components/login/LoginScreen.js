import React from 'react'

export const LoginScreen = ({history}) => {
    const handleLogin = () =>{
        //history.push('/');
        // Si voy para atrás nunca estuve atrás, no tendria acceso al login de nuevo
        history.replace('/');
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
