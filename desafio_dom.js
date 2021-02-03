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

//console.log(arrayProductos);
// console.log(productoDos,productoDos,productoTres);

let acumulador = ``
for (let i = 0; i<arrayProductos.length; i++) {
  acumulador += `
      <div class="tarjetas row row-cols-1 row-cols-md-3 mt-5"> 
        <div class="col mb-4">
          <div class="tarjetas__contenido card h-100">
             <a href="#"><img class="card-img-top" src=""> </a>
            <div class="card-body">
              <h5 class="card-title">${arrayProductos[i].nombre}</h5>
              <!-- <p class="card-text">${arrayProductos[i].stock}</p> -->
              <button id="boton-precio" class="btn btn-danger">
                ${arrayProductos[i].precio}
              </button>
            </div>
          </div>
        </div>
      </div>
  
  `

}

document.getElementById("prod").innerHTML = acumulador;
console.log(acumulador);