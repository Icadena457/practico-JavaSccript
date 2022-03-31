function valoresPorcentajes (porcentajes) {

    const valorInicial = 1;
    const multValores = porcentajes.reduce((previousValue, currentValue) => previousValue * currentValue, valorInicial);

    const geometrica = Math.pow(multValores, 1/porcentajes.length)

    return "Tu media geometrica es " + geometrica;
};
