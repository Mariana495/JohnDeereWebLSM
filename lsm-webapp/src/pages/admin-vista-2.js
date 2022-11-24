import {React} from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, Tooltip, DataLabel, ColumnSeries } from '@syncfusion/ej2-react-charts';
import {database} from '../utils/firebase'
import {ref, onValue} from 'firebase/database'

const db = database;

export class AdminVista extends React.Component{
    constructor(){
        super();
        this.state = {
            tableData: [{
                key: "",
                users: 0
            }] // Objeto auxiliar para realizar el mapeo de los datos
        }
    }

    componentDidMount(){
        // Referencia a la carpeta de la que se van a extraer los datos
        const dbRef = ref(db, 'Categorias');

        onValue(dbRef, (snapshot) => {
            let records = [{
                key: "",
                users: 0
            }];
            snapshot.forEach(childSnapshot => {
                // Llave del objeto, en este caso el usuario
                let keyName = childSnapshot.key;
                // Cantidad de categorias completadas por el usuario
                let cant = childSnapshot.child("usuarios").exists() && (Object.keys(childSnapshot.child("usuarios").val()).length || 0);
                // objeto temporal que almacena los datos 
                records.push({"key": keyName, "users": cant});
            });
            this.setState({tableData: records});
        });
    }

    render(){
        const xAxis = {valueType: 'Category', title: 'Categoría'};
        const yAxis = {minimum: 0, maximum: 120, interval: 20, title: 'Usuarios'};
        const data = this.state.tableData;

        return(
            <div className="div-central">
                <h1> Bienvenido, administrador </h1>
                <ChartComponent id = 'charts' primaryXAxis={xAxis} primaryYAxis={yAxis} title='Resumen' palettes={['#F25032']} width = '80%' height = '90%'> 
                    <Inject services = {[ColumnSeries, Legend, Tooltip, DataLabel, Category]}/>
                    <SeriesCollectionDirective>
                        <SeriesDirective dataSource={data} xName = 'key' yName = 'users' name = 'key' type= 'Column'>
                        </SeriesDirective>
                    </SeriesCollectionDirective>
                </ChartComponent>
            </div>
        );
    };
}