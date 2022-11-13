import '../stylesheets/login.css' // Estilo del div del formulario
import '../stylesheets/styles.css' // Estilo del botón y texto

function CambiosUsers(){
    return(
        <div className="div-central">
            <h1> Altas, bajas y cambios </h1>
            <div Style = 'display: flex; align-items: center;'>
                <div Style = "width: 40vw; height: auto; display: inline-block; margin: auto;">
                    <p> En esta parte podrás subir un archivo CSV, XLS o XLSX con todos los datos de los usuarios que se van a agregar, editar o eliminar. <br/> <br/> Selecciona la acción a realizar y después arrastra el archivo al espacio indicado o búscalo manualmente. </p>
                </div>
                <div className = 'div-formulario' Style = 'display: inline-block; margin: auto;'>
                    <div Style = "height: 6vw;"></div>
                    <form>
                        <label for = 'agregar' Style = "font-size: 3vh"> 
                            <input type = 'radio' name = 'accion' id = 'agregar' value = 'agregar'/>
                            Agregar
                        </label> <br/> <br/>

                        <label for = 'editar' Style = "font-size: 3vh"> 
                            <input type = 'radio' name = 'accion' id = 'editar' value = 'editar'/>
                            Editar
                        </label> <br/> <br/>

                        <label for = 'eliminar' Style = "font-size: 3vh"> 
                            <input type = 'radio' name = 'accion' id = 'eliminar' value = 'eliminar'/>
                            Eliminar
                        </label> <br/> <br/>

                        <input type = 'file' name = 'accion' id = 'archivo' className='upld-file'
                                accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" /> <br/> <br/>

                        <input type = "submit" name = "Subir" className='button' value = "SUBIR"/>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CambiosUsers;