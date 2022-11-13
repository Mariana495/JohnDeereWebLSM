// Hojas de estilos
import '../stylesheets/login.css'
import '../stylesheets/styles.css' // De esta solo se necesita el estilo del botón

import { BsFillPersonFill, BsAsterisk } from 'react-icons/bs'; // Librería para iconos para el formulario 
import BigIcon from '../media/icon-lsm.png'

function Login(){
    return (
        <div Style = "height: 85vh">
            <div Style = "height: 14vh;">
            </div>
            <div class = "div-formulario">
                <img src = {BigIcon} className = "login-icon"/>
                <div Style = "height: 2.5vw;"></div>
                <form Style = "text-align: center; position: relative; left: -4vw">
                    <label className='lbl'>
                        <div className = "icon-forms-div"> <BsFillPersonFill color = "#5bc0de" className='icon'/> </div>
                        <input type = "text" name = "Usuario" className = "item-forms" placeholder='Usuario'/>
                    </label>
                    <br/>
                    <label className='lbl'>
                        <div className = "icon-forms-div"> <BsAsterisk color = "#5bc0de" className='icon'/> </div>
                        <input type = "password" name = "Pasword" className = "item-forms" placeholder='Contraseña' />
                    </label>
                    <br/> <br/>
                    <input type = "submit" name = "Login" className='button' value = "LOGIN"/>
                </form>
            </div>
        </div>
    );
}

export default Login;