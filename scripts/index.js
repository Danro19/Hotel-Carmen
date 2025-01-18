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
const itemWidth = carouselContainer.offsetWidth;
let currentIndex = 0;
let isScrolling = false; // Bandera para evitar conflictos entre el intervalo y los clics

// Función para actualizar el carrusel
function updateCarousel() {
  carouselContainer.scrollTo({
    left: currentIndex * itemWidth,
    behavior: "smooth",
  });
}

leftButton.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  updateCarousel();
});

rightButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % items.length;
  updateCarousel();
});

setInterval(() => {
  currentIndex = (currentIndex + 1) % items.length;
  updateCarousel();
}, 3000);
function updateCarousel() {
  carouselContainer.scrollTo({
    left: currentIndex * itemWidth,
    behavior: "smooth",
  });
}






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
  
  
// Modal Login

const loginMovil = document.getElementById("open-login-modal")
const loginDesktop = document.getElementById("open-login-modal-desktop")
const modalLogin = document.getElementById("modalLogin")
const registro =document.getElementById("logMovil")

loginMovil.addEventListener("click",()=> modalLogin.showModal())

addEventListener("submit",()=>{
  registro.close();
})

document.addEventListener('click', (event) => {
    const loginContent = document.getElementById('login-content');
    loginContent.classList.toggle("hidden");
  })

  modalLogin.addEventListener("click", (event) => {
    if (event.target === modalLogin) {
      modalLogin.close(); // Cierra el modal si se hace clic fuera de él
    }
  });


  // verificacion de usuario

  document
    .getElementById("logMovil")
    .addEventListener("submit", async function (e) {
      e.preventDefault(); // Prevenir la recarga de la página al enviar el formulario

      // Obtener los valores de correo y contraseña del formulario
      const email = document.getElementById("emailLogin").value;
      const password = document.getElementById("passwordLogin").value;

      try {
        // Hacer una solicitud GET a la API de JSON Server para obtener los usuarios
        const response = await fetch("http://localhost:3000/usuarios");
        const users = await response.json();

        // Buscar al usuario por su correo electrónico
        const user = users.find((u) => u.email === email);

        if (!user) {
          // Si el usuario no existe, mostrar un mensaje de error
          document.getElementById("error-message").innerText =
            "Usuario no encontrado";
          document.getElementById("error-message").style.display = "block";
          return;
        }

        // Verificar si la contraseña coincide
        if (user.password !== password) {
          // Si la contraseña no coincide, mostrar un mensaje de error
          document.getElementById("error-message").innerText =
            "Contraseña incorrecta";
          document.getElementById("error-message").style.display = "block";
          return;
        }

        // Si todo es correcto, mostrar un mensaje de éxito
        alert("¡Ingreso exitoso!");

        // Cerrar el modal (si es necesario)
        document.getElementById("modalLogin").close();
      } catch (error) {
        console.error("Error al verificar las credenciales:", error);
        document.getElementById("error-message").innerText =
          "Ocurrió un error. Intenta nuevamente.";
        document.getElementById("error-message").style.display = "block";
      }
    });
