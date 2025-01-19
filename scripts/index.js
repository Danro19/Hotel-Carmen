document.addEventListener("DOMContentLoaded", () => {
  // Aquí va tu código




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





if (document.getElementById("login-toggle" && "login-content")) {
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

  });
}


  

  document.getElementById("register-movile").addEventListener("click", () => {
    // Redirigir a la página de registro
    window.location.href = "/Page/registro.html"; // Reemplaza con la URL de la página de registro
  });
  document.getElementById("register-desktop").addEventListener("click", () => {
    // Redirigir a la página de registro
    window.location.href = "/Page/registro.html"; // Reemplaza con la URL de la página de registro
  });
  
  

  // Función de login
  const login = async (email, password, modal) => {
    try {
      const response = await fetch('http://localhost:3000/usuarios');
      const users = await response.json();
      const user = users.find((u) => u.email === email);

      if (!user) {
        throw new Error('Usuario no encontrado');
      }

      if (user.password !== password) {
        throw new Error('Contraseña incorrecta');
      }

      alert('¡Ingreso exitoso!');
      modal.close();
      localStorage.setItem('user', JSON.stringify(user));
      window.location.reload();
      // Guardamos al usuario en el localStorage
    } catch (error) {
      document.getElementById('error-message').innerText = error.message;
      document.getElementById('error-message').style.display = 'block';
    }
  };

  // Modal móvil
  const loginMovil = document.getElementById('open-login-modal');
  const modalLogin = document.getElementById('modalLogin');

  loginMovil.addEventListener('click', () => modalLogin.showModal());

  modalLogin.addEventListener('click', (event) => {
    if (event.target === modalLogin) {
      modalLogin.close();
    }
  });

  // Enviar formulario de login móvil
  document.getElementById('logMovil').addEventListener('submit', async function (e) {
    e.preventDefault();
    const email = document.getElementById('emailLogin').value;
    const password = document.getElementById('passwordLogin').value;
    await login(email, password, modalLogin);
  });

  // Modal escritorio
  const loginDesktop = document.getElementById('open-login-modal-desktop');
  const modalLoginDesktop = document.getElementById('modalLoginDesktop');

  loginDesktop.addEventListener('click', () => modalLoginDesktop.showModal());

  modalLoginDesktop.addEventListener('click', (event) => {
    if (event.target === modalLoginDesktop) {
      modalLoginDesktop.close();
    }
  });

  // Enviar formulario de login escritorio
  document.getElementById('LoginDesktop').addEventListener('submit', async function (e) {
    e.preventDefault();
    const email = document.getElementById('emailLoginDesktop').value;
    const password = document.getElementById('passwordLoginDesktop').value;
    await login(email, password, modalLoginDesktop);
    
  });
  
  window.addEventListener("load", () => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user) {
      
      // Si existe un usuario, mostrar su nombre
      const userMovil = document.getElementById("userMovil");
      const userDesktop = document.getElementById("userDesktop");
      userDesktop.innerHTML = `${user.name} <br><button id="salirD" class="bg-teal-700 text-white text-sm font-semibold py-1 px-3 rounded-lg hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50">Salir</button>`;
      userMovil.innerHTML = `${user.name} <br><button id="salirM" class="bg-teal-700 text-white text-sm font-semibold py-1 px-3 rounded-lg hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50">Salir</button>`;
      const salirM = document.getElementById("salirM");
      const salirD = document.getElementById("salirD");
      salirM.addEventListener("click", () => {
        localStorage.clear();  // Borra todos los datos del localStorage
        alert("Se ha cerrado sesión");
        window.location.reload();  
      });
      salirD.addEventListener("click", () => {
        localStorage.clear();  // Borra todos los datos del localStorage
        alert("Se ha cerrado sesión");
        window.location.reload();
      
    })
  }});

});