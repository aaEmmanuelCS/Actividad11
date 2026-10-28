const alumnos = [];

function rAlumnos(){
    document.getElementById("contenedor-boton-eliminar").innerHTML = '<button class="btn btn-danger btn-sm w-100" onclick="eAlumnos()">Eliminar Alumnos</button>';
    let impAlumnos = '';
    for (let i = 0; i < 10; i++) {
        let nombre = prompt("Escribe el nombre del alumno " + (i+1));
        if (!nombre) break;
        alumnos.push(nombre);
        impAlumnos += '<div class="p-2 mb-1 bg-dark rounded border border-secondary">' + (i+1) + '. ' + nombre + '</div>';
    }
    document.getElementById("contenedor-alumnos").innerHTML = impAlumnos;
}

function eAlumnos(){
    var cortInic = parseInt(prompt("Escribe desde cual alumno cortar por su numero")) - 1;
    var cortFin = parseInt(prompt("Escribe hasta cual alumno cortar por su numero")) - 1;
    alumnos.splice(cortInic, cortFin);
    
    let impAlumnos = '';
    for (let i in alumnos) {
        impAlumnos += '<div class="p-2 mb-1 bg-dark rounded border border-secondary">' + (parseInt(i)+1) + '. ' + alumnos[i] + '</div>';
    }
    document.getElementById("contenedor-alumnos").innerHTML = impAlumnos;
}