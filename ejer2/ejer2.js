function sueldo(){
    var tablaSueldo = [
        [120, 240, 210],
        [240, 280, 300],
        [400, 600, 3000]
        ]
        var nivel = prompt("Escribe tu nivel; 1 = newbw, 2 = jr, 3 = senior")
        var puesto = prompt("Escribe tu puesto; 1 = diseñador, 2 = programador, 3 = lider")
        var horas = parseInt(prompt("Escribe las horas trabajadas"))
        var sueldoTotal = tablaSueldo[nivel-1][puesto-1] * horas
        var mensaje = '<p class="fs-5 mb-0">Tu sueldo es ' + sueldoTotal + '</p>'
        document.getElementById("contenedor-resultado").innerHTML = mensaje
    }