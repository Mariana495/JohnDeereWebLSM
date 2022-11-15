import {React} from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, Tooltip, DataLabel, ColumnSeries } from '@syncfusion/ej2-react-charts';
import {CategoryData} from '../media/DataCategoria';


function AdminVista(){
    const xAxis = {valueType: 'Category', title: 'Categoría'}
    const yAxis = {minimum: 0, maximum: 120, interval: 20, title: 'Usuarios'}
    const data = CategoryData

    return(
        <div className="div-central">
            <h1> Bienvenido, administrador </h1>
            <ChartComponent id = 'charts' primaryXAxis={xAxis} primaryYAxis={yAxis} title='Resumen' palettes={['#F25032']} width = '80%' height = '90%'> 
                <Inject services = {[ColumnSeries, Legend, Tooltip, DataLabel, Category]}/>
                <SeriesCollectionDirective>
                    <SeriesDirective dataSource={data} xName = 'categoria' yName = 'usuarios' name = 'categoria' type= 'Column'>
                    </SeriesDirective>
                </SeriesCollectionDirective>
            </ChartComponent>
        </div>
    );
}

export default AdminVista;