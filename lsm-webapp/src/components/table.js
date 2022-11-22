import {database} from '../utils/firebase'
import {ref, onValue, child} from 'firebase/database'
import React, { useEffect, useState } from 'react';
import '../stylesheets/reporte.css'

const db = database;

export class Table extends React.Component{
    constructor(){
        super();
        this.state = {
            tableData: []
        }
    }

    componentDidMount(){
        const dbRef = ref(db, 'Usuarios');

        onValue(dbRef, (snapshot) => {
            let records = [];
            let r = "";
            snapshot.forEach(childSnapshot => {
                let keyName = childSnapshot.key;
                let cant = childSnapshot.child("listaCompletadas").exists() && Object.keys(childSnapshot.child("listaCompletadas").val()).length || 0;
                let data = childSnapshot.val();
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