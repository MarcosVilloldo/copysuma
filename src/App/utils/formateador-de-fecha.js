export const formatearFecha = (fecha) => {
    let date = new Date(fecha);

    return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
}