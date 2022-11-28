// Hojas de estilos
import '../stylesheets/login.css'
import '../stylesheets/styles.css' // De esta solo se necesita el estilo del botón

import {useNavigate} from 'react-router-dom'; // Redireccionamient hacia "Reporte"
import { useForm } from "react-hook-form"; // Libreria para obtener valores del formulario
import { useState } from 'react';

import { BsFillPersonFill, BsAsterisk } from 'react-icons/bs'; // Librería para iconos para el formulario 
import BigIcon from '../media/icon-lsm.png'

// Librerias para el manejo de la base de datos
import {database} from '../utils/firebase'
import {ref, onValue} from 'firebase/database'

function Login(){
    const navigate = useNavigate();
    const {register, getValues} = useForm();
    let usuarios = []; // array auxiliar para guardar los datos de los usuarios
    let values = {user: "", password: ""}; 

    // Referencia a la carpeta de la que se van a extraer los datos
    const dbRef = ref(database, 'Usuarios');

    // Una vez que se envía el formulario se hace la validación del usuario
    const handleSubmit = event => {
        event.preventDefault();

        values = getValues();

        onValue(dbRef, (snapshot) => {
            snapshot.forEach(childSnapshot => {
                // Llave del objeto, en este caso el usuario
                let keyName = childSnapshot.key;
                // Password del usuario
                let data = childSnapshot.child("password").val();
                // PErmiso de administrador (si lo tiene)
                let pass = childSnapshot.child("admin").val();
                // objeto temporal que almacena los datos 
                usuarios.push({"username": keyName, "password": data, "admin": pass});
            });
        });

        usuarios.forEach(user => {
            // si el usuario y contraseña son correctos y el usuario tiene permisos de administrador, puede acceder a los datos
            if ((user.username === values.user && user.password === values.password) && user.admin === true){
                navigate('/reporte');
            }
        });
        
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
                        <input type = "text" name = "Usuario" className = "item-forms" placeholder='Usuario'
                                {...register("user")} />
                    </label>
                    <br/>
                    <label className='lbl'>
                        <div className = "icon-forms-div"> <BsAsterisk color = "#5bc0de" className='icon'/> </div>
                        <input type = "password" name = "Pasword" className = "item-forms" placeholder='Contraseña'
                                {...register("password")} />
                    </label>
                    <br/> <br/>
                    <input type = "submit" name = "Login" className='button' value = "LOGIN" />
                </form>
            </div>
        </div>
    );
}

export default Login;