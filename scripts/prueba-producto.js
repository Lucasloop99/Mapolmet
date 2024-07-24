document.addEventListener("DOMContentLoaded", function () {
  // Variables globales
  let images = [];
  let currentImageIndex = 0;

  // Función para obtener el parámetro ID de la URL
  function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  }

  // Función para cargar y procesar el archivo CSV
  function loadCSV() {
    const productId = getQueryParam("id"); // Obtener el ID del producto de la URL
    if (!productId) {
      document.getElementById("product-details").innerText =
        "No se proporcionó ID del producto en la URL";
      return;
    }

    const csvUrl = "http://localhost/MaPolMet/backend/Productos.csv"; // Ruta al archivo .csv

    Papa.parse(csvUrl, {
      download: true,
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        const products = results.data;
        const product = products.find((p) => p.id === productId);
        if (product) {
          displayProductDetails(product);
        } else {
          document.getElementById("product-details").innerText =
            "Producto no encontrado";
        }
      },
      error: function (err) {
        document.getElementById("product-details").innerText =
          "Error al cargar el archivo CSV";
        console.error("Error al cargar el archivo CSV:", err);
      },
    });
  }

  // Función para mostrar los detalles del producto
  function displayProductDetails(product) {
    const productDetailsDiv = document.getElementById("product-details");
    productDetailsDiv.innerHTML = `
        <table>
            <tbody>
                <tr>
                    <td>Nombre del producto</td>
                    <td>${product.Nombre}</td>
                </tr>
                <tr>
                    <td>Categoria</td>
                    <td>${product.Categoria}</td>
                </tr>
                <tr>
                    <td>Dimensiones</td>
                    <td>${product.Dimensiones}</td>
                </tr>
                <tr>
                    <td>Materiales</td>
                    <td>${product.materiales}</td>
                </tr>
                <tr>
                    <td>Stock</td>
                    <td>${product.Stock}</td>
                </tr>
            </tbody>
        </table>
        `;

    // Asignar el nombre del producto a una nueva variable
    let productNombre = product.Nombre;

    // Llamar a la función loadImages con la nueva variable
    loadImages(productNombre);
  }

  function loadImages(productNombre) {
    const imageCarousel = document.querySelector(".image-carousel");
    imageCarousel.innerHTML = ""; // Limpiar cualquier imagen existente
    images = []; // Resetear el array de imágenes

    const imagePath = `../../Assets/Rossi_(OG)/${productNombre}/`;
    const numberOfImages = 5; // Cambia esto al número de imágenes que tienes por producto

    for (let i = 1; i <= numberOfImages; i++) {
      const img = document.createElement("img");
      img.src = `${imagePath}${i}.png`; // Asume que las imágenes están numeradas secuencialmente y son .png
      img.alt = `${productNombre} Image ${i}`;
      img.style.display = i === 1 ? "block" : "none"; // Solo muestra la primera imagen inicialmente
      img.style.width = "530px";
      img.style.height = "530px";
      img.style.objectFit = "cover"; // Asegura que la imagen se ajuste al tamaño sin deformarse

      img.onload = () => {
        console.log(`Imagen ${i} cargada correctamente.`);
      };
      img.onerror = () => {
        console.error(`Error al cargar la imagen ${i}.`);
      };

      imageCarousel.appendChild(img);
      images.push(img);
    }
}

function showImage(index) {
    images.forEach((img, i) => {
      img.style.display = i === index ? "block" : "none";
    });
}

  function prevImage() {
    currentImageIndex =
      currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1;
    showImage(currentImageIndex);
  }

  function nextImage() {
    currentImageIndex =
      currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1;
    showImage(currentImageIndex);
  }

  // Añadir los listeners para los botones de navegación
  document.querySelector(".prev").addEventListener("click", prevImage);
  document.querySelector(".next").addEventListener("click", nextImage);

  // Cargar los datos del producto al cargar la página
  loadCSV();
});

let currentIndex = 0;
const colors = document.querySelectorAll(".color-item");

function showColor(index) {
  // Asegurarse de que el índice esté dentro de los límites
  if (index >= 0 && index < colors.length) {
    colors.forEach((color, i) => {
      color.style.opacity = i === index ? "1" : "0";
      color.style.display = i === index ? "block" : "none";
    });
    // Cambiar el color de fondo del cuerpo
    const selectedColor = colors[index].getAttribute("data-color");
    document.body.style.backgroundColor = selectedColor;

    const macroContainer = document.querySelector(".macro-container");
    const productContainer = document.querySelector(".product-container");
    const extraContainer = document.querySelector(".extra-container");

    switch (selectedColor) {
      case "#FFFFFF":
        macroContainer.style.backgroundColor = "#D0EBFF"; // Light blue
        productContainer.style.backgroundColor = "#A0D1F5"; // Medium blue
        extraContainer.style.backgroundColor = "#80B8E5"; // Blue
        break;
      case "#9C9C9C":
        macroContainer.style.backgroundColor = "#B3CDE0"; // Light blue
        productContainer.style.backgroundColor = "#9CB3CC"; // Medium blue
        extraContainer.style.backgroundColor = "#8AA2BA"; // Blue
        break;
      case "#515151":
        macroContainer.style.backgroundColor = "#889AB4"; // Light blue
        productContainer.style.backgroundColor = "#72829A"; // Medium blue
        extraContainer.style.backgroundColor = "#627289"; // Blue
        break;
      case "#111111":
        macroContainer.style.backgroundColor = "#55677A"; // Light blue
        productContainer.style.backgroundColor = "#4A5C6E"; // Medium blue
        extraContainer.style.backgroundColor = "#3E4F5C"; // Blue
        break;
      case "#f80000":
        macroContainer.style.backgroundColor = "#FFC4C4"; // Pastel red
        productContainer.style.backgroundColor = "#FFA6A6"; // Medium pastel red
        extraContainer.style.backgroundColor = "#FF8A8A"; // Red
        break;
      case "#a12312":
        macroContainer.style.backgroundColor = "#E8B4B4"; // Pastel red
        productContainer.style.backgroundColor = "#D48A8A"; // Medium pastel red
        extraContainer.style.backgroundColor = "#BF7070"; // Red
        break;
      case "#E30052":
        macroContainer.style.backgroundColor = "#FFB3CC"; // Pastel pink
        productContainer.style.backgroundColor = "#FF99BB"; // Medium pastel pink
        extraContainer.style.backgroundColor = "#FF80AA"; // Pink
        break;
      case "#4c2882":
        macroContainer.style.backgroundColor = "#D1C4E9"; // Pastel purple
        productContainer.style.backgroundColor = "#B39DDB"; // Medium pastel purple
        extraContainer.style.backgroundColor = "#9575CD"; // Purple
        break;
      case "#3b83bd":
        macroContainer.style.backgroundColor = "#BBDEFB"; // Light blue
        productContainer.style.backgroundColor = "#90CAF9"; // Medium blue
        extraContainer.style.backgroundColor = "#64B5F6"; // Blue
        break;
      case "#5DC1B9":
        macroContainer.style.backgroundColor = "#B2EBF2"; // Light cyan
        productContainer.style.backgroundColor = "#80DEEA"; // Medium cyan
        extraContainer.style.backgroundColor = "#4DD0E1"; // Cyan
        break;
      case "#00FFFF":
        macroContainer.style.backgroundColor = "#B3FFFF"; // Light cyan
        productContainer.style.backgroundColor = "#80FFFF"; // Medium cyan
        extraContainer.style.backgroundColor = "#4DFFFF"; // Cyan
        break;
      case "#004225":
        macroContainer.style.backgroundColor = "#A8D5BA"; // Light green
        productContainer.style.backgroundColor = "#85C4A3"; // Medium green
        extraContainer.style.backgroundColor = "#60B391"; // Green
        break;
      case "#F9F0E0":
        macroContainer.style.backgroundColor = "#FFEBCC"; // Light yellow
        productContainer.style.backgroundColor = "#FFDD99"; // Medium yellow
        extraContainer.style.backgroundColor = "#FFCC66"; // Yellow
        break;
      case "#E1C699":
        macroContainer.style.backgroundColor = "#FFEBCD"; // Light yellow
        productContainer.style.backgroundColor = "#FFDAB9"; // Medium yellow
        extraContainer.style.backgroundColor = "#FFCBA4"; // Yellow
        break;
      case "#e4a010":
        macroContainer.style.backgroundColor = "#FFD280"; // Light orange
        productContainer.style.backgroundColor = "#FFB74D"; // Medium orange
        extraContainer.style.backgroundColor = "#FFA726"; // Orange
        break;
      case "#C19A6B":
        macroContainer.style.backgroundColor = "#FFDAB9"; // Light peach
        productContainer.style.backgroundColor = "#FFC4A3"; // Medium peach
        extraContainer.style.backgroundColor = "#FFAB91"; // Peach
        break;
      case "#FF8000":
        macroContainer.style.backgroundColor = "#FFCC80"; // Light orange
        productContainer.style.backgroundColor = "#FFB74D"; // Medium orange
        extraContainer.style.backgroundColor = "#FFA726"; // Orange
        break;
      case "#0000ff":
        macroContainer.style.backgroundColor = "#9999FF"; // Light blue
        productContainer.style.backgroundColor = "#6666FF"; // Medium blue
        extraContainer.style.backgroundColor = "#3333FF"; // Blue
        break;
      case "#96CFBE":
        macroContainer.style.backgroundColor = "#CCFFEB"; // Light mint
        productContainer.style.backgroundColor = "#99FFDD"; // Medium mint
        extraContainer.style.backgroundColor = "#66FFCC"; // Mint
        break;
      case "#FFF6D5":
        macroContainer.style.backgroundColor = "#FFFFE0"; // Light yellow
        productContainer.style.backgroundColor = "#FFFACD"; // Medium yellow
        extraContainer.style.backgroundColor = "#FFF9C4"; // Yellow
        break;
      case "#32cd32":
        macroContainer.style.backgroundColor = "#B3FFB3"; // Light green
        productContainer.style.backgroundColor = "#99FF99"; // Medium green
        extraContainer.style.backgroundColor = "#80FF80"; // Green
        break;
      case "#FFFF00":
        macroContainer.style.backgroundColor = "#FFFF99"; // Light yellow
        productContainer.style.backgroundColor = "#FFFF66"; // Medium yellow
        extraContainer.style.backgroundColor = "#FFFF33"; // Yellow
        break;
      default:
        macroContainer.style.backgroundColor = "";
        productContainer.style.backgroundColor = "";
        extraContainer.style.backgroundColor = "";
        break;
    }
  }
}

function prevColor() {
  currentIndex = currentIndex === 0 ? colors.length - 1 : currentIndex - 1;
  showColor(currentIndex);
}

function nextColor() {
  currentIndex = currentIndex === colors.length - 1 ? 0 : currentIndex + 1;
  showColor(currentIndex);
}

// Mostrar el primer color al cargar la página
showColor(currentIndex);

// Añadir funcionalidad al hacer clic en los colores
colors.forEach((color, index) => {
  color.addEventListener("click", () => {
    showColor(index);
    currentIndex = index;
  });
});

//Back-anim
$(document).ready(function () {
    var canvas = document.createElement("canvas");
    var ctx = canvas.getContext("2d");
    var particleCount = 100;
    var particles = [];
    var particleColor = "#000000"; // Default particle color

    document.querySelector(".animation-layer").appendChild(canvas);

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    function createParticles(partcolor) {
        particles = [];
        for (var i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 5 + 1,
                speedX: Math.random() * 3 - 1.5,
                speedY: Math.random() * 3 - 1.5,
                color: partcolor,
            });
        }
    }

    function drawParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach(function (particle) {
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fillStyle = particle.color;
            ctx.fill();
            ctx.strokeStyle = particle.color;
            ctx.stroke();

            particle.x += particle.speedX;
            particle.y += particle.speedY;

            if (particle.x > canvas.width || particle.x < 0) particle.speedX *= -1;
            if (particle.y > canvas.height || particle.y < 0) particle.speedY *= -1;
        });
    }

    function animateParticles() {
        drawParticles();
        requestAnimationFrame(animateParticles);
    }

    function getParticleColorFromBackground() {
        var bgColor = window.getComputedStyle(document.body).backgroundColor;
        return hexToRgb(oppositeColor(rgbToHex(bgColor)));
    }

    function rgbToHex(rgb) {
        var rgbArr = rgb.match(/\d+/g);
        return "#" + rgbArr.map(function (x) {
            return ("0" + parseInt(x, 10).toString(16)).slice(-2);
        }).join('');
    }

    function hexToRgb(hex) {
        var r = parseInt(hex.substring(1, 3), 16);
        var g = parseInt(hex.substring(3, 5), 16);
        var b = parseInt(hex.substring(5, 7), 16);
        return `rgb(${r}, ${g}, ${b})`;
    }

    function oppositeColor(hex) {
        var r = 255 - parseInt(hex.substring(1, 3), 16);
        var g = 255 - parseInt(hex.substring(3, 5), 16);
        var b = 255 - parseInt(hex.substring(5, 7), 16);
        return `#${("0" + r.toString(16)).slice(-2)}${("0" + g.toString(16)).slice(-2)}${("0" + b.toString(16)).slice(-2)}`;
    }

    function updateParticleColors() {
        var newParticleColor = getParticleColorFromBackground();
        createParticles(newParticleColor);
    }

    function updateBackgroundColor() {
        // Detectar el color de fondo actual
        updateParticleColors();
    }

    // Monitorea los cambios en el color de fondo y actualiza las partículas
    var observer = new MutationObserver(updateBackgroundColor);
    observer.observe(document.body, { attributes: true, attributeFilter: ['style'] });

    // Configura las partículas inicialmente
    updateBackgroundColor();
    animateParticles();
});

