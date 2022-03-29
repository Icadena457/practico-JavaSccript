function encontrarModa (lista1) {

    const objetoLista1 = {};

    lista1.map(
        function (elemento) {
            if (objetoLista1[elemento]) {
                objetoLista1[elemento] += 1;
            } else {
                objetoLista1[elemento] = 1;
            }
        }
    );

    const lista1Array = Object.entries(objetoLista1).sort (
        function (elementoA, elementoB) {
            return elementoA[1] - elementoB[1]
        }
    )
    
    const moda = lista1Array[lista1Array.length - 1];
    return moda; 
}

//consola =>
encontrarModa([lista1]);
