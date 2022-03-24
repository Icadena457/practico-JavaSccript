// Código correspondiente al cuadrado

console.group("Cuadrado");

function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado) {
    return lado * lado;
}

console.groupEnd();

//Código correspondiente al triangulo

console.group("Triángulos");

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

console.groupEnd();

// Código correspondiente a la circunferencia

console.group("Circunferencia");
//Diametro
function diametroCirculo(radio) {
    return radio * 2;
}

//PI
const pi = Math.PI;
console.log("Pi es igual a: " + pi);

// Circunferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * pi;
}

// Area
function areaCirculo(radio) {
    return (radio * radio) * pi;
}

console.groupEnd();

// Triangulo isocele
console.group("Triangulo iscocele");
function alturaTrianguloIso(lados, base) {
    if (lados > base) {
        return (Math.sqrt((lados * lados) - ((base * base) / 4)));
    }
}
console.groupEnd();

// Interacción con HTML
//Cuadrado
function calcularPerimetroCuadrado() {
    const input = document.getElementById("input-cuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("input-cuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

//Triangulo
function calcularPerimetroTriangulo() {
    const input1 = document.getElementById("input-trianguloLado1");
    const value1 = Number(input1.value);

    const input2 = document.getElementById("input-trianguloLado2");
    const value2 = Number(input2.value);

    const input3 = document.getElementById("input-trianguloBase");
    const value3 = Number(input3.value);

    const perimetro = perimetroTriangulo(value1, value2, value3);
    alert(perimetro);
}

function calcularAreaTriangulo() {
    const base = document.getElementById("input-trianguloBase");
    const value = Number(base.value);

    const altura = document.getElementById("input-trianguloAltura");
    const value4 = Number(altura.value)

    const area = areaTriangulo(value, value4);
    alert(area);
}

//Circulo
function calcularPerimetroCirculo() {
    const radio = document.getElementById("input-circuloRadio");
    const value5 = Number(radio.value);

    const perimetro = perimetroCirculo(value5);
    alert(perimetro);
}

function calcularAreaCirculo() {
    const radio = document.getElementById("input-circuloRadio");
    const value6 = Number(radio.value);

    const area = areaCirculo(value6);
    alert(area);
}

//Triangulo isocele
function calcularAltura() {
    const lados = document.getElementById("input-isocelesLados");
    const value = Number(lados.value);

    const base = document.getElementById("input-isocelesBase");
    const value2 = Number(base.value);

    const altura = alturaTrianguloIso(value, value2);
    alert(altura);
}