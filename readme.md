# 📘 El Hotel de Carmen
Sistema de reservas de habitaciones mediante API REST

## 🌟 Descripción General
Página web para un hotel que consume una API externa (alojada en Render) para:

  - Mostrar habitaciones disponibles.

  - Gestionar reservas.

  - Registrar usuarios y autenticarlos.

### Audiencia:

Desarrolladores: Integración con la API y mantenimiento del código.

Clientes: Instrucciones claras para reservar habitaciones.

## 🛠 Stack Tecnológico
Tecnología	Uso
JavaScript	Lógica de consumo de API y dinamismo web.
HTML + CSS + Tailwind CSS	Maquetación y estilos.
Render (JSON Server)	Hosting de la API REST.


## 📂 Estructura del Proyecto
plaintext
HOTEL-CARMEN

├── Page                  # Páginas principales

│   ├── contacto.html

│   ├── habitaciones.html   # Listado de habitaciones

│   └── registro.html       # Formulario de registro

├── scripts               # Lógica JavaScript

│   ├── habitaciones.js     # Consumo API y reservas

│   └── registro.js         # Registro de usuarios

└── style                # Estilos por página



## 🔌 Integración con la API

  1. Endpoints Clave
Endpoint	Método	Descripción
/habitaciones	GET	Obtiene listado de habitaciones.
/habitaciones/:id	PATCH	Actualiza reservas de una habitación.
/usuarios	POST	Registra un nuevo usuario.
  2. Ejemplo de Consumo (JavaScript)
javascript
// Obtener habitaciones
fetch('https://json-server-1-m5tg.onrender.com/habitaciones')
  .then(response => response.json())
  .then(data => console.log(data));


## 📝 Módulos Principales
  1. Registro y Autenticación
Validación de contraseñas y términos.

Almacenamiento en localStorage tras registro.
Código clave:

  ### javascript
// Validación de formulario
if (password !== confirmPassword) {
  alert("Las contraseñas no coinciden");
}

  2. Reserva de Habitaciones
Modal interactivo para seleccionar fechas.

### Actualización simultánea en:

  - Habitación (fechas reservadas).

  - Usuario (historial de reservas).
    

## ⚠️ Consideraciones Importantes
Check-in/Check-out:

Hora límite: 14:00 (check-in).

Tolerancia: 2 horas (hasta 16:00) antes de liberar la habitación.

Errores comunes:

Fecha fin anterior a fecha inicio.

Usuario no autenticado al reservar.
