import React, {useState} from "react";
import "./ListaDePedidos.css"

var paginaActiva;

const ListaDePedidos = (props) => {
    usarConstructor(() => {
        paginaActiva = props.paginaActiva;
    });
    
    const listaDePedidos = obtenerListaDePedidos();
    const [pedidos, setPedidos] = useState(listaDePedidos.get(paginaActiva));

    return (
        <ul className="list-group lista-de-pedidos">
            <li className="titulo-lista-pedidos">Lista de pedidos</li>
            {generarListaDePedidos(pedidos)}
            <li className="pedido">
                <div className="row">
                    <div className="col box-boton-anterior">
                        {boton("anterior", pedidos, setPedidos, listaDePedidos.size)}
                    </div>
                    <div className="col box-numero-pagina">
                        <p id="paginado" className="paginado">{paginaActiva} / {listaDePedidos.size}</p>
                    </div>
                    <div className="col box-boton-siguiente">
                        {boton("siguiente", pedidos, setPedidos, listaDePedidos.size)}
                    </div>
                </div>
            </li>
        </ul>
    );
};

const usarConstructor = (callBack = () => {}) => {
    const [hasBeenCalled, setHasBeenCalled] = useState(false);
    if (hasBeenCalled) return;
    callBack();
    setHasBeenCalled(true);
}

const obtenerListaDePedidos = () => {
    let listaDePedidos = ["pedido-1","pedido-2","pedido-3","pedido-4","pedido-5","pedido-6","pedido-7","pedido-8",
    "pedido-9","pedido-10","pedido-11","pedido-12","pedido-13","pedido-14","pedido-15","pedido-16","pedido-17","pedido-18",
    "pedido-19","pedido-20","pedido-21","pedido-22","pedido-23","pedido-24","pedido-25"]
 
    let cantidadDePaginas = Math.ceil(listaDePedidos.length / 10);
    let iteraciones = 0;
    let paginado = new Map();
    while(iteraciones < cantidadDePaginas){
        paginado.set((iteraciones + 1), listaDePedidos.slice(iteraciones + '0', (iteraciones + 1) + '0'));
        iteraciones++;
    }
    return paginado;
}

const generarListaDePedidos = (pedidos) => {
    return pedidos.map((valor, cantidad) => 
        cantidad < 10 ? <li className="pedido" key={cantidad.toString()}> {valor} </li> : <></>
    );
}

const boton = (orientacion, pedidos, setPedidos, cantidadDePaginas) => {
    if(orientacion == "anterior"){
        return <button style={{visibility: "hidden"}} id="boton-anterior" type="button" className="btn boton-lista-pedidos" onClick={() => pagina(orientacion, pedidos, setPedidos, cantidadDePaginas)}><i className="bi bi-arrow-left-short"></i></button>
    }
    if(orientacion == "siguiente" && cantidadDePaginas > paginaActiva) {
        return <button style={{visibility: "visible"}} id="boton-siguiente" type="button" className="btn boton-lista-pedidos" onClick={() => pagina(orientacion, pedidos, setPedidos, cantidadDePaginas)}><i className="bi bi-arrow-right-short"></i></button>
    }
}

const pagina = (orientacion, pedidos, setPedidos, cantidadDePaginas) => {
    orientacion == "anterior" ? paginaActiva = paginaActiva - 1 : null
    orientacion == "siguiente" ? paginaActiva = paginaActiva + 1 : null
    pedidos = obtenerListaDePedidos().get(paginaActiva);
    setPedidos(pedidos);
    visibilidadDePaginado(cantidadDePaginas);
}; 

const visibilidadDePaginado = (cantidadDePaginas) => {
    document.getElementById("paginado").innerText = paginaActiva + " / " + cantidadDePaginas;
    mostrarBoton(cantidadDePaginas);
};

const mostrarBoton = (cantidadDePaginas) => {
    cantidadDePaginas <= paginaActiva ? document.getElementById("boton-siguiente").style.visibility = 'hidden': null
    cantidadDePaginas > paginaActiva ? document.getElementById("boton-siguiente").style.visibility = 'visible': null
    paginaActiva == 1 ? document.getElementById("boton-anterior").style.visibility = 'hidden' : null
    paginaActiva != 1 ? document.getElementById("boton-anterior").style.visibility = 'visible' : null
};

export default ListaDePedidos;