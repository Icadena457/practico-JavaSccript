
function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;    

    return precioConDescuento;
}

function priceDiscount() {
    const inputPrice = document.getElementById("input-price");
    const pricevalue = Number(inputPrice.value);

    const inputDiscount = document.getElementById("input-discount");
    const discountvalue = Number(inputDiscount.value);

    const precioConDescuento = calcularPrecioConDescuento(pricevalue, discountvalue);

    const resultP= document.getElementById("ResultPrice");
    resultP.innerText = "El precio total de tu producto es: $" + precioConDescuento;
}
