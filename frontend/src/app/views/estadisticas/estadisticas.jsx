import React, { useEffect, useState } from "react";
import axios from "axios";
import { Spinner, Col } from 'react-bootstrap';
import Dashboard from "../../components/dashboard/Dashboard";

const Estadisticas = () => {
    const [pedidos, setPedidos] = useState([]);
    const [actualizo, setActualizo] = useState(false);

    useEffect(() => {
        obtenerPedidosPreparados(setActualizo, setPedidos);
    }, []);

    return (
        actualizo ? <Col className="spinner"><Spinner animation="border" role="status" /></Col> : <Dashboard pedidos={pedidos} />
    );
};

const obtenerPedidosPreparados = async (setActualizo, setPedidos) => {
    setActualizo(true);
    const pedidosObtenidos = await axios.get('http://localhost:9000/preparados');
    setPedidos(pedidosObtenidos.data);
    setActualizo(false);
}

export default Estadisticas;