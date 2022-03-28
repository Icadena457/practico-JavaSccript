
function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;    

    return precioConDescuento;
}

const cupones = [
    "Para_estudiantes",
    "Para_empresas",
    "Para_programadores",
];

function priceDiscount() {
    const inputPrice = document.getElementById("input-price");
    const pricevalue = Number(inputPrice.value);

    const inputCupon = document.getElementById("input-cupons");
    const cuponvalue = Number(inputCupon.value);
    
    let descuento;

    switch(cuponvalue) {
        case cupones[0]:
            descuento = 45;
            break;
        case cupones[1]:
            descuento = 30;
            break;
        case cupones[2]:
            descuento = 35;
            break;
    }

    const precioConDescuento = calcularPrecioConDescuento(pricevalue, cuponvalue);

    const resultP= document.getElementById("ResultPrice");
    resultP.innerText = "El precio total de tu producto es: $" + precioConDescuento;

}
