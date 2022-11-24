import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Head from './components/header'
import Principal from './pages/pag-principal';
import Login from './pages/login-vista'
import  AdminVista  from './pages/admin-vista'
import Reporte from './pages/reporte'
import CambiosUsuarios from './pages/cambios-usuarios'

function App() {
	const isLoggedIn = true;
  	return (
    	<html>
			<head> </head>
			<body className="App">
				<BrowserRouter>
					<header className="App-header">
						<Head log = {isLoggedIn}/>
					</header>
					<Routes>
						<Route path = '' element={<Navigate to="/inicio" replace={true} />}/>
						<Route path='/inicio' element={<Principal/>}/>
						<Route path='/login' element={<Login/>}/>
						<Route path='/resumen' element={<AdminVista/>}/>
						<Route path='/reporte' element={<Reporte/>}/>
						<Route path='/usuarios' element={<CambiosUsuarios/>}/>
					</Routes>
				</BrowserRouter>
    		</body>
		</html>
  	);
}

export default App;
