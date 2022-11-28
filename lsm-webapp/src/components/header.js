import Button from '../components/button'
import { Link } from "react-router-dom"
import { useState } from 'react'

function Header(props){
    if (!props.log){ // si el usuario no ha ingresado a su sesión no se muestra el menú
        return (
            <div>
                <p className = "text v-center"> 
                    <b> LSM </b>
                </p>
            </div>
        );
    }
    else{
        return (
            <div>
                <p className= "text v-center"> 
                    <b> LSM </b>
                </p>
                <Navbar> 
				    <NavItem txt = "Menu"> 
                        <DropdownMenu/>
                    </NavItem>
			    </Navbar>
            </div>
        );
    }
}

function Navbar(props){
	return(
		<nav className='navbar'>
			<ul className='navbar-nav'> {props.children} </ul>
		</nav>
	);
}

function NavItem(props){
    const [open, setOpen] = useState(false);

	return(
		<div className='nav-item'>
            <Button class="button-menu" text = {props.txt} onClick = {() => setOpen(!open)}/>
            
            {open && (props.children)}
		</div>
	);
}

function DropdownMenu(){
    function DdownItem(props){
        return(
            <Link to = {props.r} className='menu-item'> 
                {props.text}
            </Link>
        );
    }

    return (
        <div className = "dropdown">
            <DdownItem r = '/reporte' text = 'Reporte' />
            <DdownItem r = '/usuarios' text = 'Usuarios' />
        </div>
    );
}

export default Header;