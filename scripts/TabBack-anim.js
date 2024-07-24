document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".anim");
  const numParticles = 100; // Aumentar el número de partículas
  const animations = ["float", "spin", "drift"]; // Añadir diferentes animaciones

  for (let i = 0; i < numParticles; i++) {
    let particle = document.createElement("div");
    particle.className = "particle";
    particle.style.width = `${Math.random() * 10 + 5}px`;
    particle.style.height = particle.style.width;
    particle.style.left = `${Math.random() * 100}vw`;
    particle.style.top = `${Math.random() * 100}vh`;
    particle.style.animationDuration = `${Math.random() * 20 + 10}s`;
    particle.style.animationName = animations[Math.floor(Math.random() * animations.length)];
    container.appendChild(particle);
  }
});
