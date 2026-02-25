document.addEventListener("DOMContentLoaded", function () {
  const LIMITE_VISIBLE = 6;
  let expanded = false;

  const productos = [
    {
      nombre: "G-Shock Arcoíris",
      precio: 140000,
      categoria: "deportivo",
      imagen: "img/reloj-22.jpg",
      beneficios: [
        "✔ Diseño exclusivo",
        "✔ Resistente a impactos",
        "✔ Perfecto para regalo",
      ],
    },
    {
      nombre: "G-Shock MT-G",
      precio: 160000,
      categoria: "deportivo",
      imagen: "img/reloj-03.jpg",
      beneficios: [
        "✔ Cronómetro digital",
        "✔ Diseño robusto",
        "✔ Ideal para uso diario",
      ],
    },
    {
      nombre: "Patek Philippe",
      precio: 350000,
      categoria: "premium",
      imagen: "img/reloj-12.jpg",
      beneficios: [
        "✔ Acero inoxidable",
        "✔ Diseño elegante",
        "✔ Ideal para eventos",
      ],
    },
    {
      nombre: "G-Shock Black",
      precio: 90000,
      categoria: "deportivo",
      imagen: "img/reloj-05.jpg",
      beneficios: ["✔ Estilo clásico", "✔ Liviano", "✔ Ideal diario"],
    },
    {
      nombre: "Rolex Submariner",
      precio: 420000,
      categoria: "premium",
      imagen: "img/reloj-07.jpg",
      beneficios: ["✔ Alta gama", "✔ Diseño icónico", "✔ Elegancia total"],
    },
    {
      nombre: "Citizen Sport",
      precio: 130000,
      categoria: "clasico",
      imagen: "img/reloj-08.jpg",
      beneficios: ["✔ Deportivo", "✔ Resistente", "✔ Uso diario"],
    },
    {
      nombre: "Tissot Classic",
      precio: 210000,
      categoria: "retro",
      imagen: "img/reloj-09.jpg",
      beneficios: ["✔ Diseño formal", "✔ Acero inoxidable", "✔ Ideal oficina"],
    },
  ];

  const grid = document.getElementById("productosGrid");
  const verMasBtn = document.getElementById("verMasBtn");
  const botonesFiltro = document.querySelectorAll(".filtros button");

  function crearProductoHTML(producto, index) {
    return `
      <article class="producto ${producto.categoria}" data-index="${index}">
        <img src="${producto.imagen}" alt="${producto.nombre}" loading="lazy">

        <div class="producto-info">
          <h3>${producto.nombre}</h3>
          <p class="precio">$${producto.precio.toLocaleString("es-AR")}</p>

          <ul class="beneficios">
            ${producto.beneficios.map((b) => `<li>${b}</li>`).join("")}
          </ul>

          <a class="btn-whatsapp"
            href="https://wa.me/12368188312?text=Hola%21%20Me%20interesa%20el%20${encodeURIComponent(producto.nombre)}.%20%C2%BFSigue%20disponible%3F">
            Consultar
          </a>
        </div>
      </article>
    `;
  }

  function renderProductos() {
    grid.innerHTML = productos.map((p, i) => crearProductoHTML(p, i)).join("");

    aplicarLimite();
  }

  function aplicarLimite() {
    const cards = document.querySelectorAll("#productosGrid .producto");

    cards.forEach((card, index) => {
      if (!expanded && index >= LIMITE_VISIBLE) {
        card.style.display = "none";
      } else {
        card.style.display = "flex";
      }
    });
  }

  verMasBtn.addEventListener("click", () => {
    expanded = !expanded;
    verMasBtn.textContent = expanded
      ? "Ver menos modelos ↑"
      : "Ver más modelos ↓";

    aplicarLimite();
  });

  botonesFiltro.forEach((btn) => {
    btn.addEventListener("click", () => {
      botonesFiltro.forEach((b) => b.classList.remove("activo"));
      btn.classList.add("activo");

      const filtro = btn.dataset.filter;

      const cards = document.querySelectorAll("#productosGrid .producto");

      cards.forEach((card) => {
        if (filtro === "all" || card.classList.contains(filtro)) {
          card.style.display = "flex";
        } else {
          card.style.display = "none";
        }
      });
    });
  });

  renderProductos();
});
