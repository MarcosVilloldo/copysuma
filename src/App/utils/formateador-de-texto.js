export const formatearTexto = (texto) => {
    let arrayTexto = texto.split(" ", 19);

    if (arrayTexto.length === 19) {
        arrayTexto.push('...');
    }

    return arrayTexto.join(' ');
}