import { useState } from "react";

function MiComponente(){
    const [nombre,setNombre] = useState("");
    const [cantidad,setCantidad] = useState(0);

    //me muestra undefined
    //console.log(nombre);

    //se muestra cada cambio que el usuario hace
    function manejarCambioDeNombre(evento){
        setNombre(evento.target.value);
    }

    function manejarCambioDeCantidad(evento){
        //cada vez que invoco esto se puede ir aumentando de 1 en 1 
       setCantidad(evento.target.value)
    }

    return (
        <div>
            <input type="text"  value={nombre} onChange={manejarCambioDeNombre} />
            <p>{nombre}</p>

            {/* si le saco el valor tanto al nombre como la cantidad no me deja escribir */}
            <input type="number" value={cantidad}  onChange={manejarCambioDeCantidad}/>
        </div>
    )
}


export default MiComponente;