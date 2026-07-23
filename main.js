const nombreSistema = "Sistema de Turnos Médicos";

let opcion1= "";

while (opcion1 !== "4" && opcion1 !=="ESC") {

    opcion1 = prompt(
    "Sacar Turno Médico\n" +
    "1. Sacar Turno\n" +
    "2. Consultar especialidad\n" +
    "3. Elegir horario\n" +
    "4. Salir o colocar ESC para salir"
);

if (opcion1 === "1") {

    let nombre = prompt ("Ingrese su nombre");
    let edad = Number(prompt ("Ingrese su edad"));
    let especialidad = prompt ("Ingrese la especialidad que desea");

    if (edad < 18) {
        alert("No puede sacar turno, debe ser mayor de edad");

    } else {
 
 if (especialidad === "Oftalmología") {

    alert("Su turno para el oftalmólogo fue asignado para el día Miércoles a las 9:00 am con exito");

 } else if (especialidad === "Cardiología") {

    alert("Su turno para el cardiologo fue asignado para el día Lunes a las 10:00 am con exito");

 } else if (especialidad === "Dermatología") {

    alert("Su turno para el dermatologo fue asignado para el día Martes a las 11:00 am con exito");
 } else {

    alert("La especialidad no tiene  turnos disponibles.");

 }

 let opcion2 = prompt( "¿Desea cancelar su turno?\n" +
    "1. Si\n" +
    "2. No\n" +
    "3. Cambiar turno"
);
 
 switch (opcion2) {

    case "1" :
        alert ("Su turno fue cancelado con exito");
        break ;

    case "2":
        alert("Lo esperamos en su turno");
        break;

    case"3":
        alert("Su turno fue cambiado con exito para el día Jueves a las 12:00 pm");
        break;

    default:
        alert("Opción inválida");
  }
    }
} else if (opcion1 === "2") {
    alert("Consultar especialidad");

} else if (opcion1 === "3") {
    alert("Elegir horario");

} else if (opcion1 === "4" || opcion1 === "ESC") {

    alert("Gracias por utilizar nuestro sistema de turnos médicos");

 } else {

    alert("Opción inválida, por favor intente nuevamente.");
  }
}



