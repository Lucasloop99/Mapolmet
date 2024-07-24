let html = ""

products.forEach(product => {

  html += `
    <div class="container">

      <h2>${product.Nombre}</h2>
      
      <img src="${product.Image URL}">
      
      <h3>${product.Description}</h3>  

      <p>Precio: ${product.Precio}</p>

      <table>
        <tr>
          <td>Tamaño</td>  
          <td>${product.Tamaño}</td>
        </tr>

        // add other specs
        
      </table>
      
    </div>
  `

})

document.getElementById("products").innerHTML = html;