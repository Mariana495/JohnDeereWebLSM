import '../stylesheets/styles.css'
import '../stylesheets/reporte.css'

import TableRow from '../components/table-rows'

function ReporteUsuarios(){
    return(
        <div className="div-central">
            <h1> Reporte </h1>
            <table Style = 'margin: auto; '>
                <tr className = 't-header'>
                    <th Style = "width: 35vw"> Nombre </th>
                    <th Style = "width: 35vw"> Categoría </th>
                    <th Style = "width: 10vw"> Completado </th>
                </tr>
                <TableRow nombre = "Mariana" categoria = "colores" completado = "2"/>
            </table>
        </div>
    );
}

export default ReporteUsuarios;