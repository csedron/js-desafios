let topping = window.prompt("qué Tops querés elegir");
let precio = 0.00;
let helado = 100.00;
let precioFinal = 0.00;

if (topping == "oreo") {
    precio = 17.00;
} else if (topping == "rocklets") {
    precio = 10.00;
} else if (topping == "chocolate") {
    precio = 15.00;
} else if (topping == "cookie") {
    precio = 12.50;
} else {
    document.write("no existe ese Tops!. ");
    precio = 0;
}

precioFinal = helado + precio;
document.write("el helado cuesta " + precioFinal + " $ Pesos");