var modal = document.getElementById("myModal");
var btn = document.getElementById("form_Btn");
var span = document.getElementsByClassName("close")[0];

// Cuando el usuario hace clic en el botón, abrir la modal
btn.onclick = function() {
  modal.style.display = "block";
}

// Cuando el usuario hace clic en <span> (x), cerrar la modal
span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
var button = document.getElementById('openModalBtn');

button.addEventListener('click', function() {
  var modal = document.getElementById('myModal');
  modal.style.display = 'block';
});


