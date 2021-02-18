/* var carroCompras = 0;

function Sumar(prod1, prod2, prod3) {
  var resultado = prod1 + prod2 + prod3;
  carroCompras = carroCompras + resultado;
  console.log(carroCompras);
} */

let total = 0;
let carrito = [];

class Producto {
  constructor(nombreMarca, precioArticulo, cantidadProducto, enCarro) {
    this.nombre = nombreMarca;
    this.precio = precioArticulo;
    this.stock = cantidadProducto;
    this.enCarro = enCarro; 
  }
}
let productoUno = new Producto("Pendrive 64 Gb.", 1500, 150,0);
let productoDos = new Producto("reparacion MAC", 2000, 1000,0);
let productoTres = new Producto("Radeon RX 580", 18000, 120,0);
let prod4 = new Producto("Reparacion AIO", 1500, 1000,0);
let arrayProductos = [];
arrayProductos.push(productoUno);
arrayProductos.push(productoDos);
arrayProductos.push(productoTres);
arrayProductos.push(prod4);

// console.log(arrayProductos);
// console.log(productoDos,productoDos,productoTres);

let generadorProductos = ``;
for (let i = 0; i < arrayProductos.length; i++) {
  generadorProductos += `
      <div class="tarjetas row row-cols-1 row-cols-md-3 mt-5"> 
        <div class="col mb-4">
          <div class="tarjetas__contenido card h-100">
             <a href="#"><img class="card-img-top" src=""> </a>
            <div class="card-body">
              <h5 class="card-title">${arrayProductos[i].nombre}</h5>
              <!-- <p class="card-text">${arrayProductos[i].stock}</p> -->
              <button class="aniado btn btn-danger">
                ${arrayProductos[i].precio}
              </button>
            </div>
          </div>
        </div>
      </div>
  
  `;
}
document.getElementById("prod").innerHTML = generadorProductos;
/* console.log(acumulador);  */

//añadir productos
// a partir de aca para desafio de eventos 

//let articulos = document.querySelectorAll('.aniado');
let articulos = $('.aniado');
for (let i = 0; i < articulos.length; i++) {
  articulos[i].addEventListener('click', () => {
    //console.log("lo pude añadir!!!");
    cantidadEnCarro(arrayProductos[i]);
  });
}
//items que añado al carrito

 function  cantidadEnCarro(arrayProductos) {
   //console.log ("el prodcuto seleccionado es ", arrayProductos);
   let otroNum = localStorage.getItem('cantidadEnCarro');
   otroNum = parseInt(otroNum);
   //console.log(otroNum);

   // al tener NAN al comienzo con el IF puedo definir si la cantidad en el carro
   //existe se cumplira lo true, caso contrario (NAN) me ejecuta el else sumando uno :)
      if (otroNum) {
     localStorage.setItem('cantidadEnCarro', otroNum + 1);
     document.querySelector('.total span').textContent = otroNum + 1;

    } else {
      localStorage.setItem('cantidadEnCarro', 1);
      document.querySelector('.total span').textContent = 1;
    }

    setProductos(arrayProductos);
   }
   
  //para que no me quede la cantidad de productos en 0 cuando regreso de otra pagina
   function cantidadEnCarroSpan () {
    let otroNum = localStorage.getItem('cantidadEnCarro');
      if (otroNum) {
        document.querySelector('.total span').textContent = otroNum;
  
    }
  }
cantidadEnCarroSpan ();

function setProductos (arrayProductos) {
  console.log("Dentro de la funcion setProductos");
  console.log("Mi prodcuto es ", arrayProductos);
}

$('.aniado').css('color', 'black');
$('.aniado').css('font-size', '20px');
$('.aniado').css('background', 'pink');
