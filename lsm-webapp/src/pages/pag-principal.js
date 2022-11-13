import '../stylesheets/styles.css'
import Button from '../components/button'
import { Link } from "react-router-dom"

function Principal(){
    return (
        <div class = "div-central">
            <div class = "espacios"></div> 
            <h1> 
                Bienvenido a la página oficial de LSM
            </h1>
            <div class = "espacios"></div>
            <div Style = "width: 42vw; margin: auto;">
                <p> Mediante esta página podrás entrar a tu cuenta de administrador y ver los avances y resultados que los usuarios han obtenido en la aplicación de LSM. <br/> Para acceder a toda esta información favor de ingresar a su cuenta. </p>
            </div>
            <div class = "espacios"></div>
            <Link to = {'/login'}> <Button class = "button" text = "LOGIN"/> </Link> 
        </div>
    );
}

export default Principal;