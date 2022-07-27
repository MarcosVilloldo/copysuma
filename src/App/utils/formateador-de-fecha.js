export const formatearFecha = (fecha) => {
    let date = new Date(fecha);

    return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
}

export const formatearFechaToISOString = (fecha) => {
    let date = new Date(fecha);
    let dia = date.getDate() + 1;
    date.setDate(dia)

    return date.toISOString();
}

export const obtenerFormatoParaMostrar = (fecha) => {
    let date = new Date(fecha);
    let fechaLimpia = date.toISOString().split('T')[0];

    return  fechaLimpia;
}