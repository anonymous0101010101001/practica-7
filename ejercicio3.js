const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese la cantidad de lineas de ensamblaje: ", (entradaLineas) => {

    let lineas = parseInt(entradaLineas);

    rl.question("Ingrese la cantidad de sensores por linea: ", (entradaSensores) => {

        let sensores = parseInt(entradaSensores);

        if (isNaN(lineas) || isNaN(sensores) ||
            lineas <= 0 || sensores <= 0) {

            console.log("Error: los valores deben ser numeros mayores a cero.");
            rl.close();
            return;
        }

        console.log("\nTABLERO DE SENSORES");

        for (let linea = 1; linea <= lineas; linea++) {

            for (let sensor = 1; sensor <= sensores; sensor++) {

                let rendimiento = linea * sensor * 5;

                if (rendimiento >= 50) {

                    console.log("Linea: " + linea +
                        " - Sensor: " + sensor +
                        " - Rendimiento: " + rendimiento +
                        " - Estado: Óptimo 🚀");

                } else if (rendimiento >= 25) {

                    console.log("Linea: " + linea +
                        " - Sensor: " + sensor +
                        " - Rendimiento: " + rendimiento +
                        " - Estado: Mantenimiento Preventivo 🛠️");

                } else {

                    console.log("Linea: " + linea +
                        " - Sensor: " + sensor +
                        " - Rendimiento: " + rendimiento +
                        " - Estado: Falla de Lectura ❌");
                }
            }
        }

        rl.close();
    });
});
