import { UserData } from '../media/DataUsuarios'
import { useEfect } from 'react'
import '../stylesheets/reporte.css'

function table(){
    const column = Object.keys(UserData[0]);

    const ThData = () => {
        return column.map((data) => {
            return <th key = {data} className = 't-header'> {data} </th>
        })
    }

    const TdData =() =>{
        return UserData.map((data)=>{
          return(
              <tr>
                   {
                      column.map((v)=>{
                          return <td>{data[v]}</td>
                      })
                   }
              </tr>
          )
        })
   }

    return(
        <table Style = 'margin: auto; '>
            <thead>
                <tr> {ThData()} </tr>
            </thead>
            <tbody>
                {TdData()}
            </tbody>
        </table>
    );
}

export default table;