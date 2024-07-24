async function fetchCSV(url) {
    const response = await fetch(url);
    const text = await response.text();
    return text;
}

function parseCSV(text) {
    const lines = text.split('\n');
    const headers = lines[0].split(';');
    const data = lines.slice(1).map(line => {
        const values = line.split(';');
        return headers.reduce((acc, header, index) => {
            acc[header] = values[index];
            return acc;
        }, {});
    });
    return data;
}

function generateProductHTML(product) {
    return `
        <div class="col-4 mb-4">
            <div class="card">
                <img src="../../Assets/Rossi_(OG)/${product.Nombre}/1.png" class="card-img-top" alt="${product.Nombre} Image" />
                <div class="card-body">
                    <h5 class="card-title">${product.Nombre}</h5>
                    <a href="../categorias/Producto.html?id=${product.id}" class="btn btn-primary">Ver detalles</a>
                </div>
            </div>
        </div>
    `;
}

async function loadProducts() {
    const csvUrl = 'http://localhost/MaPolMet/backend/Productos.csv';
    const csvText = await fetchCSV(csvUrl);
    const products = parseCSV(csvText);
    const productList = document.getElementById('product-list');
    productList.innerHTML = products.map(generateProductHTML).join('');
}

loadProducts();