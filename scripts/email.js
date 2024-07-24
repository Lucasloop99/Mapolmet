const form = document.querySelector("pedidoForm");
const email = document.getElementById("email").value;
const phone = document.getElementById("phone").value;
const provincia = document.getElementById("provinceSelect").value;
const region = document.getElementById("regionSelect").value;
const departamento = document.getElementById("Departamento").value;
const descripcion = document.getElementById("descripcion").value;

var script = document.createElement("script");
script.src = "https://smtpjs.com/v3/smtp.js";

function sendEmails(email, phone, departamento, descripcion) {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "Mapolmet",
    Password: "your_password",
    To: email,
    From: "Mapolmet@gmail.com",
    Subject: "Tu pedido ha sido realizado con éxito",
    Body: `Correo: ${email} <br> Teléfono: ${phone} <br> Departamento: ${departamento} <br> Descripción: ${descripcion}`,
  })
    .then((message) => {
      console.log("Correo al cliente enviado: " + message);
      alert("Correo al cliente enviado con éxito.");
    })
    .catch((error) => {
      console.error("Error al enviar el correo al cliente: ", error);
    });
  // Enviar correo al local con la información del pedido
  Email.send({
    Host: "smtp.gmail.com",
    Username: "Mapolmet",
    Password: "your_password",
    To: "Mapolmet@gmail.com",
    From: "Mapolmet@gmail.com",
    Subject: "Nuevo pedido provincial realizado",
    Body: `Correo del cliente: ${email} <br> Teléfono: ${phone} <br> Departamento: ${departamento} <br> Descripción: ${descripcion}`,
  })
    .then((message) => {
      console.log("Correo al local enviado: " + message);
      alert("Correo al local enviado con éxito.");
    })
    .catch((error) => {
      console.error("Error al enviar el correo al local: ", error);
    });
}

function sendEmail_2(email, phone, region, provincia, descripcion) {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "your_username",
    Password: "your_password",
    To: "recipient@example.com",
    From: document.getElementById(email).value,
    Subject: document.getElementById(descripcion).value,
    Body: `Correo: ${email} <br> Teléfono: ${phone} <br> Provincia: ${provincia} Region: ${region} <br> Descripción: ${descripcion}`,
  }).then((message) => alert(message));

  Email.send({
    Host: "smtp.gmail.com",
    Username: "Mapolmet",
    Password: "your_password",
    To: "Mapolmet@gmail.com",
    From: "Mapolmet@gmail.com",
    Subject: "Nuevo pedido provincial realizado",
    Body: `Correo: ${email} <br> Teléfono: ${phone} <br> Provincia: ${provincia} Region: ${region} <br> Descripción: ${descripcion}`,
  })
    .then((message) => {
      console.log("Correo al local enviado: " + message);
      alert("Correo al local enviado con éxito.");
    })
    .catch((error) => {
      console.error("Error al enviar el correo al local: ", error);
    });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Capturar los valores del formulario
  const form = document.querySelector("pedidoForm");
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const provincia = document.getElementById("provinceSelect").value;
  const region = document.getElementById("regionSelect").value;
  const departamento = document.getElementById("Departamento").value;
  const descripcion = document.getElementById("descripcion").value;
  // Validar los datos
  let message = "";
  if (!email) {
    message += "El correo electrónico es obligatorio.<br>";
  } else if (!validateEmail(email)) {
    message += "El correo electrónico no es válido.<br>";
  }
  if (!phone) {
    message += "El número de teléfono es obligatorio.<br>";
  } else if (!validatePhone(phone)) {
    message += "El número de teléfono no es válido.<br>";
  }
  if (!provincia) {
    message +=
      "La provincia desde donde se realiza el pedido es obligatoria.<br>";
  }
  if (!region) {
    message +=
      "La provincia desde donde se realiza el pedido es obligatoria.<br>";
  }
  if (!descripcion) {
    message += "La descripción del pedido es obligatoria.<br>";
  }
  // Mostrar mensajes de error o éxito
  const messageDiv = document.getElementById("message");
  if (message) {
    messageDiv.innerHTML =
      '<div class="alert alert-danger">' + message + "</div>";
  } else {
    messageDiv.innerHTML =
      '<div class="alert alert-success">Pedido realizado con éxito.</div>';
    sendEmail(email, phone, departamento, descripcion);
  }
});
