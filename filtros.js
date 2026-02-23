document.addEventListener("DOMContentLoaded", function () {
  // 🔹 Filtros
  const botones = document.querySelectorAll(".filtros button");
  const productos = document.querySelectorAll(".producto");

  botones.forEach((boton) => {
    boton.addEventListener("click", () => {
      const filtro = boton.dataset.filter;

      botones.forEach((b) => b.classList.remove("activo"));
      boton.classList.add("activo");

      productos.forEach((producto) => {
        if (filtro === "all" || producto.classList.contains(filtro)) {
          producto.style.display = "block";
        } else {
          producto.style.display = "none";
        }
      });
    });
  });
});
