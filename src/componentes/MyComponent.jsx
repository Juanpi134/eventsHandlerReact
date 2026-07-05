import { useState } from "react";

function MiComponente(){
    const [nombre,setNombre] = useState("");

    //me muestra undefined
    //console.log(nombre);

    //se muestra cada cambio que el usuario hace
    function manejarCambioDeNombre(evento){
        setNombre(evento.target.value);
    }

    return (
        <div>
            <input type="text"  value={name} onChange={manejarCambioDeNombre} />
        </div>
    )
}


export default MiComponente;