import { useState } from "react";

function MiComponente(){
    const [nombre,setNombre] = useState("");
    const [cantidad,setCantidad] = useState(0);
    const [comentario,setComentario] = useState("");
    const [pago,setPago] = useState(0);
    const [envio,setEnvio] = useState();
    const [valor,setValor] = useState("");
    const [lista,setLista] = useState([]);
    const [datos, setDatos] = useState({ nombre: "", apellido: "" });
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

    function manejearTecla(evento){
        /*
        if(evento.key === "Enter"){
            console.log(true);
        }
            */
           if(evento.key === "Enter" && valor.trim() !== ""){
                setLista([...lista,valor]);
                //me devuelve el valor que presiono cuando agrego
                //'a'
                console.log(valor);

                //['a', 'a', 'a']
                console.log(lista);

                //(2) ['a', 'a']
                console.log([...lista,valor])
                setValor("");
           }
    }

    function manejarCambio(evento){
        const {name,value} = evento.target;
        setDatos({...datos, [name]:value});

        //nombre, apellido
        console.log(name);

        //juan,tapia
        console.log(value);

        //{nombre:'alan', apellido:'camino'}
        console.log(datos);

        console.log({...datos})
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

            {/* cuando doy enter me devuelve true */}
            <input type="text" value={valor} onKeyDown={manejearTecla} onChange={(e) => setValor(e.target.value)} />
            <ul>
                {lista.map((elemento,i) => {
                    return <li key={i}>{elemento}</li>
                })}
            </ul>


            <input name="nombre" value={datos.nombre} onChange={manejarCambio} placeholder="Nombre" />
            <input name="apellido" value={datos.apellido} onChange={manejarCambio} placeholder="Apellido" />
            <p>{datos.nombre} {datos.apellido}</p>


        </div>

        
        
    )
}


export default MiComponente;