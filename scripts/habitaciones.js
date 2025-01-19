if (document.getElementById("login-toggle")) {
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


// Redirección al registro
document.getElementById('register-movile').addEventListener('click', () => {
  window.location.href = '/Page/registro.html';
});
document.getElementById('register-desktop').addEventListener('click', () => {
  window.location.href = '/Page/registro.html';
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
  }
});


let tarjetaCuartos = document.getElementById("tarjetaCuartos");

fetch('http://localhost:3000/habitaciones')
  .then(response => {
    if (!response.ok) {
      throw new Error('No se pudo obtener la respuesta de la API');
    }
    return response.json();
  })
  .then(data => {
    
    // Aquí trabajamos con los datos de la API
    let habitaciones = data[0]; // Usamos el primer objeto de la API que contiene las categorías
    



    // Función para crear las tarjetas de habitación
    function renderHabitaciones(habitaciones) {
      tarjetaCuartos.innerHTML = ''; // Limpiar tarjetas previas

      habitaciones.forEach(habitacion => {
        const card = document.createElement("div");
        card.className = "flex bg-white shadow-lg rounded-lg overflow-hidden mb-4";

        

        card.innerHTML = `
          <div class="flex flex-col md:flex-row gap-4 p-2.5">
            <div id="carruselHabitacion" class="flex-shrink-0 flex  md:w-1/3">
              <img src="${habitacion.imagenes[0]}" 
                   alt="${habitacion.nombre}"
                   class="w-full h-auto object-cover mb-4 md:mb-0"
              />
             
              
            </div>
            <div class="flex flex-col md:flex-grow md:justify-between">
              <div>
                <h3 class="text-lg font-bold">${habitacion.nombre}</h3>
                <p class="text-sm text-gray-600">${habitacion.descripcion}</p>
                <ul class="text-sm text-gray-700 space-y-1 mt-2">
                  <li>#️⃣ Numero de Cuarto: ${habitacion.id}</li>
                  <li>👥 Capacidad: ${habitacion.cantPersonas} personas</li>
                  <li>💻 Internet: ${habitacion.internet ? "Sí" : "No"}</li>
                  <li>🍹 Minibar: ${habitacion.minibar ? "Sí" : "No"}</li>
                  <li>🛁 Jacuzzi: ${habitacion.jacuzzi ? "Sí" : "No"}</li>
                  <li>🛏️ Tipo de Cuarto: ${habitacion.tipoRoom}</li>
                </ul>
              </div>
              <div class="flex flex-col mt-4 md:mt-0">
                <p class="text-lg font-bold text-teal-900">$${habitacion.precio} por noche</p>
                <button class="bg-teal-900 text-white py-2 px-4 rounded-md hover:bg-teal-700 mt-2 md:mt-0">Reservar</button>
              </div>
            </div>
          </div>
        `;
        
        tarjetaCuartos.appendChild(card);
      });
    }
    
    // Función para filtrar las habitaciones
    function filtrarHabitaciones() {
      const tipoCuarto = document.getElementById("tipoCuarto").value;
      const capacidad = document.getElementById("capacidad").value;
      const precio = document.getElementById("precio").value;
      
      

      let habitacionesFiltradas = [];

      // Filtramos las habitaciones por tipo de cuarto
      for (const categoriaNombre in habitaciones) {
        const categoria = habitaciones[categoriaNombre];
        categoria.forEach(habitacion => {
          let match = true;
          

          // Filtrar por tipo de cuarto
          if (tipoCuarto && habitacion.tipoRoom !== tipoCuarto) {
            match = false;
          }

          // Filtrar por capacidad
          if (capacidad && habitacion.cantPersonas != capacidad) {
            match = false;
          }

    
          

          if (match) {
            habitacionesFiltradas.push(habitacion);
          }
        });
      }

      // Ordenar por precio (menor a mayor o mayor a menor)
      if (precio === 'asc') {
        habitacionesFiltradas.sort((a, b) => a.precio - b.precio);
      } else if (precio === 'desc') {
        habitacionesFiltradas.sort((a, b) => b.precio - a.precio);
      }

      renderHabitaciones(habitacionesFiltradas); // Renderizar las habitaciones filtradas
    }

    // Inicializar el renderizado de las habitaciones
    renderHabitaciones(Object.values(habitaciones).flat());

    // Escuchar cambios en los filtros
    document.querySelectorAll('.filters select').forEach(select => {
      select.addEventListener('change', filtrarHabitaciones);
    });
  })
  .catch(error => {
    console.error('Hubo un error:', error);
  });
  