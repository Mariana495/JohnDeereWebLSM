function tableRow(props){
    return(
        <tr>
            <td Style = "width: 35vw"> {props.nombre} </td>
            <td Style = "width: 35vw"> {props.categoria} </td>
            <td Style = "width: 10vw"> {props.completado} </td>
        </tr>
    );
}

export default tableRow;