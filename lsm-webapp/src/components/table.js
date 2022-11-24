import {database} from '../utils/firebase'
import {ref, onValue} from 'firebase/database'
import React from 'react';
import '../stylesheets/reporte.css'

const db = database;

export class Table extends React.Component{
    constructor(){
        super();
        this.state = {
            tableData: [] // Objeto auxiliar para realizar el mapeo de los datos
        }
    }

    componentDidMount(){
        // Referencia a la carpeta de la que se van a extraer los datos
        const dbRef = ref(db, 'Usuarios');

        onValue(dbRef, (snapshot) => {
            let records = [];
            snapshot.forEach(childSnapshot => {
                // Llave del objeto, en este caso el usuario
                let keyName = childSnapshot.key;
                // Cantidad de categorias completadas por el usuario
                let cant = childSnapshot.child("listaCompletadas").exists() && Object.keys(childSnapshot.child("listaCompletadas").val()).length || 0;
                // val() jala todos los datos dentro del objeto
                let data = childSnapshot.val();
                // objeto temporal que almacena los datos 
                records.push({"key": keyName, "cant": cant, "data": data});
            });
            this.setState({tableData: records});
        });
    }

    render(){
        return(
            <table className='table'>
                <thead className='t-header'>
                    <tr>
                        <th>Index</th>
                        <th>Username</th>
                        <th>No. completadas</th>
                        <th>Categorías completadas</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.tableData.map((row, index) => {
                        return(
                            <tr>
                                <td> {index} </td>
                                <td> {row.key} </td>
                                <td> {row.cant} </td>
                                <td> {row.data.listaCompletadas} </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        )
    }
}