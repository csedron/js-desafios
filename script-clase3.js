var dias = ["Lunes", "Martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];

for (var i = 0; i < 7; i++) {
    if (i == 6) { console.log("es día domingo") }

    if (i % 2 == 0) {
        document.write(dias[i] + " par - ");
    }
}