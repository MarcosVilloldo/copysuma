export const formatearFecha = (fecha) => {
    let date = new Date(fecha);

    return date.toLocaleDateString();
}

export const formatearFechaToISOString = (fecha) => {
    let date = new Date(fecha + 'T00:00:00');

    return date.toISOString();
}

export const obtenerFormatoParaMostrar = (fecha) => {
    let date = new Date(fecha);

    return date.toISOString().split('T')[0];
}