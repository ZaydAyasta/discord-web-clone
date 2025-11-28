// Selecciona el botón de hamburguesa
const btn = document.querySelector(".menu-toggle");

// Selecciona el menú horizontal
const menu = document.querySelector(".Menu-Horizontal");
const submenuToggles = document.querySelectorAll(".has-submenu > .submenu-toggle");

// Al hacer clic en el botón de hamburguesa
btn.addEventListener("click", () => {
  // Alterna (agrega o quita) la clase "active" en el menú
  // Esto hace que se muestre o se oculte
  menu.classList.toggle("active");

  // (opcional) También puedes alternar una clase en el botón si quieres cambiar su apariencia
  // btn.classList.toggle("open");
});

submenuToggles.forEach(t => {
  t.addEventListener("click", e => {
    e.preventDefault();
    
    const parent = t.parentElement;
    parent.classList.toggle("open");

    const sub = parent.querySelector(".Menu-vertical");
    sub.style.display = parent.classList.contains("open") ? "flex" : "none";
  });
});
