function procesarNumero() {
    var cadenaNumero = ''
     var ocho = [
        [1,1,1,1,1],
        [1,0,0,0,1],
        [1,1,1,1,1],
        [1,0,0,0,1],
        [1,1,1,1,1]
        ];
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 5; j++) {
                if (ocho[i][j] == 1) {
                    cadenaNumero += '<div class="d-inline-block text-transparent bg-primary" style="width: 30px; height: 30px; user-select: none;"></div>';
                } else {
                    cadenaNumero += '<div class="d-inline-block text-transparent bg-dark" style="width: 30px; height: 30px; user-select: none;"></div>';
                }
            }
            cadenaNumero += '<br>'
        }
        document.getElementById("contenedor-numero").innerHTML = cadenaNumero
    }