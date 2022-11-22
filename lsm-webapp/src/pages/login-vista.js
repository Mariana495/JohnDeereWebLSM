// Hojas de estilos
import '../stylesheets/login.css'
import '../stylesheets/styles.css' // De esta solo se necesita el estilo del botón

import {Link, Routes, Route, useNavigate} from 'react-router-dom'; // Redireccionamient hacia "Reporte"
import {db} from '../utils/firebase'
import {set, ref, onValue} from 'firebase/database'

import { BsFillPersonFill, BsAsterisk } from 'react-icons/bs'; // Librería para iconos para el formulario 
import BigIcon from '../media/icon-lsm.png'
import { useEffect, useState } from 'react';

function Login(){
    const navigate = useNavigate();
    const [usuario, setUsuario] = useState("");
    const [usuarios, setUsuarios] = useState([]);

    /*
    const handleUserChange = event => {
        this.setState({email: event.target.value});
    };

    const handlePasswordChange = event =>{
        this.setState({password: event.target.value});
    }; */

    const handleSubmit = event => {
        event.preventDefault();

        /*
        useEffect(() => {
            onValue(ref(db), (snapshot) => {
                setUsuarios([]);
                const data = snapshot.val();
                if (data !== null){
                    Object.values(data).map((usuario) => {
                        setUsuarios((oldArray) => [...oldArray, usuario]);
                    })
                }
            })
        }, []);*/

        navigate('/resumen');
    };

    

    return (
        <div Style = "height: 85vh">
            <div Style = "height: 14vh;">
            </div>
            <div class = "div-formulario">
                <img src = {BigIcon} className = "login-icon"/>
                <div Style = "height: 2.5vw;"></div>
                <form Style = "text-align: center; position: relative; left: -4vw" onSubmit={handleSubmit}>
                    <label className='lbl'>
                        <div className = "icon-forms-div"> <BsFillPersonFill color = "#5bc0de" className='icon'/> </div>
                        <input type = "text" name = "Usuario" className = "item-forms" placeholder='Usuario'/>
                                {/*value={this.state.usuario} onChange={this.handleUserChange}*/} 
                    </label>
                    <br/>
                    <label className='lbl'>
                        <div className = "icon-forms-div"> <BsAsterisk color = "#5bc0de" className='icon'/> </div>
                        <input type = "password" name = "Pasword" className = "item-forms" placeholder='Contraseña' />
                                {/*value={this.state.password} onChange={this.handlePasswordChange}*/} 
                    </label>
                    <br/> <br/>
                    <input type = "submit" name = "Login" className='button' value = "LOGIN"/>
                </form>
            </div>
        </div>
    );
}

export default Login;