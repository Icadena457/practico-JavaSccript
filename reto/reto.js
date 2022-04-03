// Capacidad de endudamiento
function endeudamiento(sueldoMensual, gastosFijos) {
    return ((sueldoMensual - gastosFijos) * 40) / 100;
}

// Capacidad de ahorro

function ahorro(sueldoMensual, gastosFijos) {
    const primera = sueldoMensual - gastosFijos - (((sueldoMensual - gastosFijos) * 40) / 100);
    return (primera * 20) / 100;
}

// Html
 function calcularCapacidadEndeudamiento() {
    const salario = document.getElementById("input-sueldo");
   const value = Number(salario.value);

    const gastos = document.getElementById("input-gastos");
    const value1 = Number(gastos.value);

    const deuda = endeudamiento(value, value1);

    const resultD = document.getElementById("resultDA");
    resultD.innerText = deuda;
}

function calcularCapacidadAhorro() {
    const salario = document.getElementById("input-sueldo");
    const value = Number(salario.value);

   const gastos = document.getElementById("input-gastos");
   const value1 = Number(gastos.value);

   const ahorros = ahorro(value, value1);

   const resultA = document.getElementById("resultA");
   resultA.innerText = ahorros;
}



