function renderizarProductos(productos) {
  const contenedor = document.getElementById('productos'); // Asegúrate de tener un contenedor con este id en tu HTML
  
  contenedor.innerHTML = ''; // Limpiar el contenedor antes de agregar los nuevos productos

  productos.forEach(producto => {
    const cardHTML = `
      <div class="card">
        <img src="${producto.img}" class="card-img-top" alt="${producto.nombre} Image" />
        <div class="card-body">
          <h5 class="card-title">${producto.nombre}</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="../categorias/Producto.html?id=${producto.id}" class="btn btn-primary">Read More</a>
        </div>
      </div>
    `;
    contenedor.innerHTML += cardHTML;
  });
}

// Ordenar los productos y renderizarlos
productos.sort((a, b) => a.nombre.localeCompare(b.nombre));
renderizarProductos(productos);