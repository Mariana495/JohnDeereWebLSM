import '../stylesheets/login.css' // Estilo del div del formulario
import '../stylesheets/styles.css' // Estilo del botón y texto

import { useState } from 'react';
import {database} from '../utils/firebase'
import {set, ref, update, onValue, remove} from 'firebase/database'

function CambiosUsers(){
    const [csvFile, setCsvFile] = useState();
    const [csvArray, setCsvArray] = useState([]);
    const [accion, setAccion] = useState();

    // Separa el CSV en un array que después puede ser enviado a la base de datos
    const processCSV = (str, delim = ',') => {
        const headers = str.slice(0, str.indexOf('\n')).split(delim);
        const rows = str.slice(str.indexOf('\n')+1).split('\n');

        const newArray = rows.map(row => {
            const values = row.split(delim);
            const eachObject = headers.reduce((obj, header, i) => {
                obj[header] = values[i];
                return obj;
            }, {})
            return eachObject;
        })
        
        setCsvArray(newArray);
    }

    function agregarUsuario(user){
        let usuario = "";
        let password = "";

        if (user.usuario.length > 0){
            usuario = user.usuario;
            password = user.password;

            if (user.admin == 1){
                set(ref(database, `/Usuarios/${usuario}`), {
                    password,
                    usuario,
                    admin: true
                });
            }
            else{
                set(ref(database, `/Usuarios/${usuario}`), {
                    password,
                    usuario
                });
            }
        }        
    }

    function handleCompletadas(usuario){
        let records = [];

        onValue(ref(database, `/Usuarios/${usuario}`), (snapshot) => {    
            snapshot.forEach(childSnapshot => {
                // Llave del objeto, en este caso el usuario
                let keyName = childSnapshot.key;
                // val() jala todos los datos dentro del objeto
                let data = childSnapshot.val();
                // objeto temporal que almacena los datos 
                records.push({"key": keyName, "data": data});
            });
            console.log(records);
        });

        return records;
    }

    function editarUsuario(user){
        const usuario = user.usuario;
        const password = user.password;

        if (user.admin == 1){
            update(ref(database, `/Usuarios/${usuario}`), {
                password,
                usuario: usuario,
                admin: true
            });
        }
        else{
            if (!user.listaCompletadas.length > 0){
                const list = handleCompletadas(user);

                update(ref(database, `/Usuarios/${usuario}`), {
                    password,
                    usuario: usuario,
                    listaCompletadas: list
                });
            }
            else{
                update(ref(database, `/Usuarios/${usuario}`), {
                    password,
                    usuario: usuario
                });
            }
        }
    }

    function eliminarUsuario(user){
        const usuario = user.usuario;
        if (usuario.length > 0){
            remove(ref(database, `/Usuarios/${usuario}`));
            console.log("u: " + usuario);
        }
    }
    
    // De acuerdo con lo seleccionado en los radiobuttons se escoge la accion a realizar
    function decideAccion() {
        const act = accion;
        const arr = csvArray;
    
        if(act === 'agregar'){
            arr.forEach(agregarUsuario);
        }
        else if(act === 'editar'){
            //arr.forEach(editarUsuario);
        }
        else if(act === 'eliminar'){
            arr.forEach(eliminarUsuario);
        }
    }

    // Maneja el CSV una vez se envía el formulario
    const submit = () => {
        const file = csvFile;
        const reader = new FileReader();
        
        reader.onload = function(e) {
            const text = e.target.result;
            processCSV(text);
        }

        reader.readAsText(file);
        decideAccion();
    }

    return(
        <div className="div-central">
            <h1> Usuarios </h1>
            <div Style = 'display: flex; align-items: center;'>
                <div Style = "width: 40vw; height: auto; display: inline-block; margin: auto;">
                    <p> En esta parte podrás subir un archivo CSV, XLS o XLSX con todos los datos de los usuarios que se van a agregar, editar o eliminar. <br/> <br/> 
                        Selecciona la acción a realizar y después arrastra el archivo al espacio indicado o búscalo manualmente. <br/> <br/>
                        Favor de hacer doble click en el botón "Subir" para enviar los datos. </p>
                </div>
                <div className = 'div-formulario' Style = 'display: inline-block; margin: auto;'>
                    <div Style = "height: 6vw;"></div>
                    <form>
                        <label for = 'agregar' Style = "font-size: 3vh"> 
                            <input type = 'radio' name = 'accion' id = 'agregar' value = 'agregar'
                                onChange={e => setAccion(e.target.value)}/>
                            Agregar
                        </label> <br/> <br/>

                        <label for = 'editar' Style = "font-size: 3vh"> 
                            <input type = 'radio' name = 'accion' id = 'editar' value = 'editar'
                                onChange={e => setAccion(e.target.value)}/>
                            Editar
                        </label> <br/> <br/>

                        <label for = 'eliminar' Style = "font-size: 3vh"> 
                            <input type = 'radio' name = 'accion' id = 'eliminar' value = 'eliminar'
                                onChange={e => setAccion(e.target.value)}/>
                            Eliminar
                        </label> <br/> <br/>

                        <input type = 'file' name = 'accion' id = 'archivo' className='upld-file'
                            accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" 
                            onChange = {e => setCsvFile(e.target.files[0])} /> <br/> <br/>

                        <input type = "submit" name = "Subir" className='button' value = "SUBIR"
                            onClick={(e) => {
                                e.preventDefault()
                                if(csvFile)submit()
                            }}/>
                        {csvArray.length > 0 ? 
                            <> <br/><br/> Tu archivo ha sido subido a la base de datos </> : 
                            null}
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CambiosUsers;