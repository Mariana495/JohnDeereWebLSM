import {React, useState} from 'react';
import BarChart from '../components/barChart';
import {UserData} from '../media/DataUsuarios'

function AdminVista(){
    const [userData, setUserData] = useState({
        labels: UserData.map((data) => data.year),
        datsets: [{
            label: "Usuarios activos",
            data: UserData.map((data) => data.usuarios)
        }]
    })

    return(
        <div className="div-central">
            <h1> Bienvenido, administrador </h1>
            <BarChart chartData = {userData} />
        </div>
    );
}

export default AdminVista;