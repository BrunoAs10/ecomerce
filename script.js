
let carrito = []

const contenedorProductos = document.getElementById('contenedor')

fetch('api.json')
.then((response) => response.json())
.then((data) => render(data))
stockProductos(data)

function render(stockProductos) {

    stockProductos.forEach((prod) => {
        const {id, nombre, precio, stock, imagen} = prod
        contenedorProductos.innerHTML += `
        <div class="card" style="width: 18rem;">
        <img class="card-img-top mt-2" src="${imagen}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${nombre}</h5>
          <p class="card-text">Precio: ${precio}</p>
          <p class="card-text">Cantidad: ${stock}</p>
          <button class="btn btn-primary" onclick="agregarProducto(${id})">Agregar Producto</button>
        </div>
      </div>
        `;

    })




}

function agregarProducto(id){
    const item = stockProductos.find((prod) => prod.id === id)
    carrito.push(item)
    console.log(item)
}

/*const mostrarCarrito = () => {
    const modalBody = document.querySelector('.modal .modal-body')
    console.log(moda)
}
*/





