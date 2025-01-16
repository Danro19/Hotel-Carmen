// Alternar el menú de registro
document.getElementById("login-toggle").addEventListener("click", (event) => {
  const loginContent = document.getElementById("login-content");
  const menuContent = document.getElementById("menu-content");

  // Si el menú de navegación está abierto, cerrarlo
  if (!menuContent.classList.contains("hidden")) {
    menuContent.classList.add("hidden");
  }

  // Alternar el menú de registro
  loginContent.classList.toggle("hidden");
  event.stopPropagation(); // Evitar que el clic cierre el menú inmediatamente
});

// Alternar el menú de navegación
document.getElementById("menu-toggle").addEventListener("click", (event) => {
  const menuContent = document.getElementById("menu-content");
  const loginContent = document.getElementById("login-content");

  // Si el menú de registro está abierto, cerrarlo
  if (!loginContent.classList.contains("hidden")) {
    loginContent.classList.add("hidden");
  }

  // Alternar el menú de navegación
  menuContent.classList.toggle("hidden");
  event.stopPropagation(); // Evitar que el clic cierre el menú inmediatamente
});

// Cerrar el menú de registro y el menú de navegación si se hace clic fuera de ellos
document.addEventListener("click", (event) => {
  const loginContent = document.getElementById("login-content");
  const menuContent = document.getElementById("menu-content");

  // Si clic en fuera de ambos menús, cerrarlos
  if (
    !loginContent.contains(event.target) &&
    !document.getElementById("login-toggle").contains(event.target)
  ) {
    loginContent.classList.add("hidden");
  }
  if (
    !menuContent.contains(event.target) &&
    !document.getElementById("menu-toggle").contains(event.target)
  ) {
    menuContent.classList.add("hidden");
  }
});
