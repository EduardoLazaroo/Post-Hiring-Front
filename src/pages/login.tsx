import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
// import api from "../services/api.js"
// import api from "../services/auth.js"


import loginImg from '../assets/login.png';
import '../stylesInterface/login.css'

export function Login() {
    // const navigate = useNavigate();

    // const [usuario, setUsuario] = React.useState("");
    // const [senha, setSenha] = React.useState("");
    

    // async function authenticateUser(email, password) {
        
    //     const user = {
    //         "email": email,
    //         "senha": password
    //     }
        
    //     return api.post('usuarios/login', user)
    //     .then((res)=>{
    //         if(!res.data.erro) {
    //             localStorage.setItem('token', res.data.token)
    //             return res.data;  
    //         } else {
    //             console.log('err', res);
    //         }});
    //     }
    // }
    // const res = await userAPI.authenticateUser(email, password);
    
    return (
        <>
            <section className="container">
                <div className="area-login">
                    <div className="login">
                        <div>
                            <img className='login-img' src={loginImg}
                            />
                        </div>
                        <form method='POST'>
                            <input 
                                type="text" 
                                placeholder='Insira seu usuario' 
                                // onChange={(event) => setUsuario(event.target.value)}
                            />
                            <input 
                                type="password" 
                                name="password" 
                                placeholder="Insira sua senha" 
                                // onChange={(event) => setSenha(event.target.value)}
                            />
                            <input 
                                type="submit" 
                                className='button' 
                                value="Entrar" 
                                // onClick={loginRequest}
                            />
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login;