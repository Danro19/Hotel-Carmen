//carrucel uno
const carouselContainerUno = document.getElementById("carousel-container");
const leftButtonUno = document.getElementById("left");
const rightButtonUno = document.getElementById("right");
const itemsUno = document.querySelectorAll(".uno");
const itemWidthUno = carouselContainerUno.offsetWidth;
let currentIndexUno = 0;

function updateCarouselUno() {
  carouselContainerUno.scrollTo({
    left: currentIndexUno * itemWidthUno,
    behavior: "smooth",
  });
}

leftButtonUno.addEventListener("click", () => {
  currentIndexUno = (currentIndexUno - 1 + itemsUno.length) % itemsUno.length;
  updateCarouselUno();
});

rightButtonUno.addEventListener("click", () => {
  currentIndexUno = (currentIndexUno + 1) % itemsUno.length;
  updateCarouselUno();
});

setInterval(() => {
  currentIndexUno = (currentIndexUno + 1) % itemsUno.length;
  updateCarouselUno();
}, 3000);

//carrusel dos
const carouselContainerDos = document.getElementById("carousel-containerDos");
const leftButtonDos = document.getElementById("leftDos");
const rightButtonDos = document.getElementById("rightDos");
const itemsDos = document.querySelectorAll(".Dos");
const itemWidthDos = carouselContainerDos.offsetWidth;
let currentIndexDos = 0;

function updateCarouselDos() {
  carouselContainerDos.scrollTo({
    left: currentIndexDos * itemWidthDos,
    behavior: "smooth",
  });
}

leftButtonDos.addEventListener("click", () => {
  currentIndexDos = (currentIndexDos - 1 + itemsDos.length) % itemsDos.length;
  updateCarouselDos();
});

rightButtonDos.addEventListener("click", () => {
  currentIndexDos = (currentIndexDos + 1) % itemsDos.length;
  updateCarouselDos();
});

setInterval(() => {
  currentIndexDos = (currentIndexDos + 1) % itemsDos.length;
  updateCarouselDos();
}, 3000);

// Carrusel principal
const carouselContainer = document.querySelector(".carousel-container");
const leftButton = document.getElementById("zeroLeft");
const rightButton = document.getElementById("zeroRight");
const items = document.querySelectorAll(".carousel-item");

// Variables globales
let itemWidth = carouselContainer.offsetWidth;
let currentIndex = 0;
let isScrolling = false; // Bandera para evitar conflictos entre el intervalo y los clics

// Función para actualizar el carrusel
function updateCarousel() {
  // Evitar que se actualice si el carrusel está en movimiento
  if (isScrolling) return;
  isScrolling = true;

  // Mover el carrusel
  carouselContainer.scrollTo({
    left: currentIndex * itemWidth,
    behavior: "smooth",
  });

  // Habilitar de nuevo el desplazamiento después de un pequeño retraso (durante la animación)
  setTimeout(() => {
    isScrolling = false;
  }, 500); // Este valor debe coincidir con la duración de la transición
}

// Función para manejar el clic en el botón izquierdo
leftButton.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  updateCarousel();
});

// Función para manejar el clic en el botón derecho
rightButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % items.length;
  updateCarousel();
});

// Intervalo para mover el carrusel automáticamente cada 4 segundos
setInterval(() => {
  if (!isScrolling) {
    currentIndex = (currentIndex + 1) % items.length;
    updateCarousel();
  }
}, 4000);

// Event listener para recalcular el ancho del carrusel cuando la ventana cambie de tamaño
window.addEventListener("resize", () => {
  itemWidth = carouselContainer.offsetWidth;
  updateCarousel();
});


// Alternar el menú de registro
  document.getElementById('login-toggle').addEventListener('click', (event) => {
    const loginContent = document.getElementById('login-content');
    const menuContent = document.getElementById('menu-content');
    
    // Si el menú de navegación está abierto, cerrarlo
    if (!menuContent.classList.contains('hidden')) {
      menuContent.classList.add('hidden');
    }
    
    // Alternar el menú de registro
    loginContent.classList.toggle('hidden');
    event.stopPropagation(); // Evitar que el clic cierre el menú inmediatamente
  });

  // Alternar el menú de navegación
  document.getElementById('menu-toggle').addEventListener('click', (event) => {
    const menuContent = document.getElementById('menu-content');
    const loginContent = document.getElementById('login-content');
    
    // Si el menú de registro está abierto, cerrarlo
    if (!loginContent.classList.contains('hidden')) {
      loginContent.classList.add('hidden');
    }
    
    // Alternar el menú de navegación
    menuContent.classList.toggle('hidden');
    event.stopPropagation(); // Evitar que el clic cierre el menú inmediatamente
  });

  // Cerrar el menú de registro y el menú de navegación si se hace clic fuera de ellos
  document.addEventListener('click', (event) => {
    const loginContent = document.getElementById('login-content');
    const menuContent = document.getElementById('menu-content');
    
    // Si clic en fuera de ambos menús, cerrarlos
    if (
      !loginContent.contains(event.target) &&
      !document.getElementById('login-toggle').contains(event.target)
    ) {
      loginContent.classList.add('hidden');
    }
    if (
      !menuContent.contains(event.target) &&
      !document.getElementById('menu-toggle').contains(event.target)
    ) {
      menuContent.classList.add('hidden');
    }
  });

  document.getElementById("register-movile").addEventListener("click", () => {
    // Redirigir a la página de registro
    window.location.href = "/Page/registro.html"; // Reemplaza con la URL de la página de registro
  });

  document.getElementById("register-desktop").addEventListener("click", () => {
    // Redirigir a la página de registro
    window.location.href = "/Page/registro.html"; // Reemplaza con la URL de la página de registro
  });
  
  // Mostrar el modal cuando se haga clic en "Iniciar sesión"
document.getElementById('open-login-modal').addEventListener('click', () => {
  const modal = document.getElementById('login-modal');
  modal.classList.remove('hidden'); // Muestra el modal
});

// Mostrar el modal para versión escritorio
document.getElementById('open-login-modal-desktop').addEventListener('click', () => {
  const modal = document.getElementById('login-modal');
  modal.classList.remove('hidden'); // Muestra el modal
});

// Cerrar el modal cuando se haga clic en el botón de cerrar
document.getElementById('close-modal').addEventListener('click', () => {
  const modal = document.getElementById('login-modal');
  modal.classList.add('hidden'); // Oculta el modal
});

// Cerrar el modal si se hace clic fuera del área del modal
document.getElementById('login-modal').addEventListener('click', (e) => {
  if (e.target === document.getElementById('login-modal')) {
    document.getElementById('login-modal').classList.add('hidden'); // Cierra el modal si se hace clic fuera de él
  }
});
