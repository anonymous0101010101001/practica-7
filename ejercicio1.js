const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese la cantidad de departamentos: ", (entradaDepartamentos) => {

    let departamentos = parseInt(entradaDepartamentos);

    rl.question("Ingrese la cantidad de empleados por departamento: ", (entradaEmpleados) => {

        let empleados = parseInt(entradaEmpleados);

        if (isNaN(departamentos) || isNaN(empleados) ||
            departamentos <= 0 || empleados <= 0) {

            console.log("Error: los valores deben ser numeros mayores a cero.");
            rl.close();
            return;
        }

        console.log("\nMATRIZ DE ASISTENCIA");

        for (let departamento = 1; departamento <= departamentos; departamento++) {

            for (let empleado = 1; empleado <= empleados; empleado++) {

                if (departamento % 2 !== 0) {
                    console.log("Departamento " + departamento +
                        " - Empleado " + empleado +
                        " - Turno: Mañana");
                } else {
                    console.log("Departamento " + departamento +
                        " - Empleado " + empleado +
                        " - Turno: Tarde");
                }
            }
        }

        rl.close();
    });
});
