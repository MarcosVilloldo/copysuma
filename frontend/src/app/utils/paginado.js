export const obtenerPaginado = (pedidos, paginas) => {
    let paginado = new Map();
    let iteraciones = 0;
    while (iteraciones < paginas) {
        paginado.set((iteraciones + 1), pedidos.slice(iteraciones + '0', (iteraciones + 1) + '0'));
        iteraciones++;
    }

    return paginado;
}