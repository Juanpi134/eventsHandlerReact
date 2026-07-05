import { useState } from "react";

function MiComponente(){
    const [nombre,setNombre] = useState("");
    const [cantidad,setCantidad] = useState(0);
    const [comentario,setComentario] = useState("");
    const [pago,setPago] = useState(0);
    const [envio,setEnvio] = useState();


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


    function manejarCambioDeComentarios(evento){
        setComentario(evento.target.value);
    }

    function manejarCambioDePagos(evento){
        setPago(evento.target.value);
    }


    function manejarCambioDeEnvio(evento){
        setEnvio(evento.target.value);
    }

    return (
        <div>
            <input type="text"  value={nombre} onChange={manejarCambioDeNombre} />
            <p>{nombre}</p>

            {/* si le saco el valor tanto al nombre como la cantidad no me deja escribir */}
            <input type="number" value={cantidad}  onChange={manejarCambioDeCantidad}/>
            {/* mostramos los numeros en tiempo real */}
            <p>{cantidad}</p>

            <textarea value={comentario} onChange={manejarCambioDeComentarios}></textarea>
            <p>{comentario}</p>

            <select value={pago} onChange={manejarCambioDePagos}>
                <option value="">Ingrese una opción</option>
                <option value="mercado-pago">Mercado pago</option>
                <option value="Buepp">Buepp</option>
                <option value="cuenta-dni">Cuenta Dni</option>
            </select>

            <p>{pago}</p>


            <label htmlFor="">
                <input type="radio" value="Pick up" checked={envio === "Pick up"} onChange={manejarCambioDeEnvio}/>
            </label>
            <label htmlFor="">
                <input type="radio" value="Delivery" checked={envio === "Delivery"} onChange={manejarCambioDeEnvio} />
            </label>
            <p>Envio: {envio}</p>
        </div>
    )
}


export default MiComponente;