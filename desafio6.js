var carroCompras = 0;

function Sumar(prod1, prod2, prod3) {
  var resultado = prod1 + prod2 + prod3;
  carroCompras = carroCompras + resultado;
  console.log(carroCompras);
}

class Producto {
  constructor(nombreMarca, precioArticulo, cantidadProducto) {
    this.nombre = nombreMarca;
    this.precio = precioArticulo;
    this.stock = cantidadProducto;
  }
}

let productoUno = new Producto("Pendrive 64 Gb.", 1500, 15);
let productoDos = new Producto("reparacion MAC", 2000, 1000);
let productoTres = new Producto("Radeon RX 580", 18000, 12);

let arrayProductos = [];
arrayProductos.push(productoUno);
arrayProductos.push(productoDos);
arrayProductos.push(productoTres);

console.log(arrayProductos);
// console.log(productoDos,productoDos,productoTres);
