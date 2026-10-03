const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese la cantidad de lotes: ", (entradaLotes) => {

    let lotes = parseInt(entradaLotes);

    rl.question("Ingrese la cantidad de cajas por lote: ", (entradaCajas) => {

        let cajas = parseInt(entradaCajas);

        if (isNaN(lotes) || isNaN(cajas) ||
            lotes <= 0 || cajas <= 0) {

            console.log("Error: los valores deben ser numeros mayores a cero.");
            rl.close();
            return;
        }

        console.log("\nCONTROL DE INVENTARIO");

        for (let lote = 1; lote <= lotes; lote++) {

            for (let caja = 1; caja <= cajas; caja++) {

                let codigo = lote * caja * 2;

                if (codigo % 4 === 0) {
                    console.log("Lote: " + lote +
                        " - Caja: " + caja +
                        " - Codigo: " + codigo +
                        " - Revisión Prioritaria ⚠️");
                } else {
                    console.log("Lote: " + lote +
                        " - Caja: " + caja +
                        " - Codigo: " + codigo +
                        " - Aprobado 🟢");
                }
            }
        }

        rl.close();
    });
});
