// Variables globales
let cart = [];
let mascotasDestacadas = new Set();

// Datos de mascotas con IMÁGENES ÚNICAS Y DIFERENTES
const mascotasData = [
    // Animal 1 - Golden Retriever (único)
    { 
        id: 1, 
        nombre: 'Golden Retriever', 
        precio: 102, 
        imagen: 'https://images.unsplash.com/photo-1552053831-71594a27632d?w=400&h=400&fit=crop&crop=faces', 
        descripcion: 'Amigable, cariñoso y excelente con niños', 
        categoria: 'perros',
        edad: '2 años',
        peso: '30 kg',
        personalidad: 'Juguetón, leal, paciente',
        salud: 'Vacunado, desparasitado',
        historia: 'Rescatado de un refugio'
    },
    
    // Animal 2 - Gato Persa (único)
    { 
        id: 2, 
        nombre: 'Gato Persa', 
        precio: 78, 
        imagen: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=400&h=400&fit=crop&crop=faces', 
        descripcion: 'Tranquilo, elegante y de carácter dulce', 
        categoria: 'gatos',
        edad: '3 años',
        peso: '4 kg',
        personalidad: 'Tranquilo, independiente',
        salud: 'Esterilizado, vacunas al día',
        historia: 'Busca hogar tranquilo'
    },
    
    // Animal 3 - Labrador (único)
    { 
        id: 3, 
        nombre: 'Labrador', 
        precio: 75, 
        imagen: 'https://images.unsplash.com/photo-1591769225440-811ad7d6eab3?w=400&h=400&fit=crop&crop=faces', 
        descripcion: 'Energético, leal y perfecto para familias activas', 
        categoria: 'perros',
        edad: '1 año',
        peso: '25 kg',
        personalidad: 'Activo, inteligente',
        salud: 'Vacunado, microchip',
        historia: 'Entrenado en comandos básicos'
    },
    
    // Animal 4 - Gato Siamés (único)
    { 
        id: 4, 
        nombre: 'Gato Siamés', 
        precio: 70, 
        imagen: 'https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?w=400&h=400&fit=crop&crop=faces', 
        descripcion: 'Inteligente, sociable y muy comunicativo', 
        categoria: 'gatos',
        edad: '2 años',
        peso: '3.5 kg',
        personalidad: 'Sociable, hablador',
        salud: 'Vacunado, sano',
        historia: 'Le encanta interactuar'
    },
    
    // Animal 5 - Conejo (único)
    { 
        id: 5, 
        nombre: 'Copita', 
        precio: 100, 
        imagen: 'https://images.unsplash.com/photo-1535241749838-299277b6305f?w=400&h=400&fit=crop&crop=faces', 
        descripcion: 'Suave, juguetón y fácil de cuidar', 
        categoria: 'otros',
        edad: '6 meses',
        peso: '1.5 kg',
        personalidad: 'Tímida, curiosa',
        salud: 'En buena salud, vacunas al día',
        historia: 'Ideal para departamento'
    },
    
    // Animal 6 - Caramelo (Perro Mestizo) - ÚNICO
    { 
        id: 6, 
        nombre: 'Caramelo', 
        precio: 112, 
        imagen: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400&h=400&fit=crop&crop=faces', 
        descripcion: 'Perro mestizo muy noble y cariñoso', 
        categoria: 'perros',
        edad: '2 años',
        peso: '15 kg',
        personalidad: 'Amigable, leal, juguetón',
        salud: 'Vacunado, desparasitado',
        historia: 'Rescatado, busca familia'
    },
    
    // Animal 7 - Luna (Gata Siamesa) - ÚNICA
    { 
        id: 7, 
        nombre: 'Luna', 
        precio: 150, 
        imagen: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400&h=400&fit=crop&crop=faces', 
        descripcion: 'Elegante y curiosa. Disfruta observar todo', 
        categoria: 'gatos',
        edad: '8 meses',
        peso: '3 kg',
        personalidad: 'Cariñosa, curiosa',
        salud: 'Vacunada, esterilizada',
        historia: 'Busca hogar con ventana'
    },
    
    // Animal 8 - Nube (Husky Siberiano) - NUEVA IMAGEN ÚNICA (CORREGIDA)
    { 
        id: 8, 
        nombre: 'Nube', 
        precio: 130, 
        imagen: 'https://images.unsplash.com/photo-1605568427561-40dd23c2acea?w=400&h=400&fit=crop&crop=faces', 
        descripcion: 'Husky activo y juguetón. Ideal para actividades al aire libre', 
        categoria: 'perros',
        edad: '2 años',
        peso: '22 kg',
        personalidad: 'Aventurero, inteligente',
        salud: 'Vacunado, microchip',
        historia: 'Necesita ejercicio diario'
    },
    
    // Animal 9 - Copito (Gato Persa Blanco) - NUEVA IMAGEN ÚNICA
    { 
        id: 9, 
        nombre: 'Einstein', 
        precio: 90, 
        imagen: 'https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=400&h=400&fit=crop&crop=faces', 
        descripcion: 'Gato persa de pelaje blanco y mirada dulce', 
        categoria: 'gatos',
        edad: '1 año',
        peso: '4 kg',
        personalidad: 'Calmado, tierno',
        salud: 'Vacunado, esterilizado',
        historia: 'Le encantan las siestas'
    },
    
    // Animal 10 - Canela (Pomerania) - NUEVA IMAGEN ÚNICA
    { 
        id: 10, 
        nombre: 'Canela', 
        precio: 80, 
        imagen: 'https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?w=400&h=400&fit=crop&crop=faces', 
        descripcion: 'Pomerania pequeña y muy tierna', 
        categoria: 'perros',
        edad: '10 meses',
        peso: '3 kg',
        personalidad: 'Dulce, juguetona',
        salud: 'Vacunada, desparasitada',
        historia: 'Le encantan los mimos'
    }
];

// Cargar carrito desde LocalStorage
function cargarCarritoDesdeStorage() {
    const carritoGuardado = localStorage.getItem('mundoMascotasCart');
    cart = carritoGuardado ? JSON.parse(carritoGuardado) : [];
    actualizarIconoCarrito();
}

// Guardar carrito en LocalStorage
function guardarCarritoEnStorage() {
    localStorage.setItem('mundoMascotasCart', JSON.stringify(cart));
    actualizarIconoCarrito();
}

// Cargar mascotas con FLIP CARDS
function cargarMascotas() {
    const container = document.getElementById('mascotas-container');
    if (container) {
        container.innerHTML = renderMascotas('todas');
    }
}

// Renderizar mascotas con FLIP CARDS - INFORMACIÓN CENTRADA
function renderMascotas(filtro) {
    const mascotasFiltradas = filtro === 'todas' 
        ? mascotasData 
        : mascotasData.filter(m => m.categoria === filtro);

    return mascotasFiltradas.map(mascota => `
        <div class="flip-card ${mascotasDestacadas.has(mascota.id) ? 'destacada' : ''}" id="card-${mascota.id}">
            <div class="flip-card-inner">
                <!-- FRENTE de la tarjeta -->
                <div class="flip-card-front">
                    <img src="${mascota.imagen}" alt="${mascota.nombre}">
                    <div class="card-content">
                        <h3>${mascota.nombre}</h3>
                        <p>${mascota.descripcion}</p>
                        <div class="price">$${mascota.precio}</div>
                    </div>
                </div>
                
                <!-- DORSO de la tarjeta - Información centrada -->
                <div class="flip-card-back">
                    <h3>${mascota.nombre}</h3>
                    <ul>
                        <li><strong>Edad:</strong> ${mascota.edad}</li>
                        <li><strong>Peso:</strong> ${mascota.peso}</li>
                        <li><strong>Personalidad:</strong> ${mascota.personalidad}</li>
                        <li><strong>Salud:</strong> ${mascota.salud}</li>
                        <li><strong>Historia:</strong> ${mascota.historia}</li>
                    </ul>
                    <div class="btn-container" style="display: flex; gap: 0.5rem; margin-top: 1rem; justify-content: center;">
                        <button class="btn" onclick="agregarAlCarrito(${mascota.id})">Agregar</button>
                        <button class="btn ${mascotasDestacadas.has(mascota.id) ? 'active' : ''}" style="background-color: ${mascotasDestacadas.has(mascota.id) ? '#f4a261' : '#e9c46a'};" onclick="toggleDestacar(${mascota.id})">⭐</button>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

// Función para destacar/resaltar una mascota
function toggleDestacar(id) {
    if (mascotasDestacadas.has(id)) {
        mascotasDestacadas.delete(id);
        mostrarNotificacionPersonalizada('⭐ Mascota quitada de destacados', 'info');
    } else {
        mascotasDestacadas.add(id);
        mostrarNotificacionPersonalizada('✨ Mascota destacada', 'exito');
    }
    
    // Re-renderizar para mostrar el cambio
    const filtro = document.getElementById('categoria').value;
    const container = document.getElementById('mascotas-container');
    if (container) {
        container.innerHTML = renderMascotas(filtro);
    }
}

// Filtrar mascotas
function filtrarMascotas() {
    const filtro = document.getElementById('categoria').value;
    const container = document.getElementById('mascotas-container');
    if (container) {
        container.innerHTML = renderMascotas(filtro);
    }
    
    // Actualizar indicador de filtro
    const filtroActivo = document.getElementById('filtro-activo');
    if (filtroActivo) {
        if (filtro === 'todas') {
            filtroActivo.textContent = '🐾 Mostrando todas las mascotas';
        } else {
            filtroActivo.textContent = `🐾 Mostrando: ${filtro.charAt(0).toUpperCase() + filtro.slice(1)}`;
        }
    }
}

// Actualizar ícono del carrito
function actualizarIconoCarrito() {
    const cartCount = document.getElementById('cart-count');
    const cartTotal = document.getElementById('cart-total-flotante');
    
    if (cartCount) cartCount.textContent = cart.length;
    if (cartTotal) {
        const total = cart.reduce((sum, item) => sum + item.precio, 0);
        cartTotal.textContent = `$${total}`;
    }
}

// Toggle carrito flotante
function toggleCarritoFlotante() {
    const cartDropdown = document.getElementById('cart-dropdown');
    if (cartDropdown) {
        cartDropdown.classList.toggle('show');
        if (cartDropdown.classList.contains('show')) {
            actualizarCarritoFlotante();
        }
    }
}

// Actualizar carrito flotante
function actualizarCarritoFlotante() {
    const cartItems = document.getElementById('cart-items-flotante');
    if (cartItems) {
        if (cart.length === 0) {
            cartItems.innerHTML = '<p class="cart-empty">🐾 El carrito está vacío</p>';
        } else {
            cartItems.innerHTML = cart.map(item => `
                <div class="cart-item-flotante">
                    <img src="${item.imagen || 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=100'}" class="cart-item-img">
                    <div class="cart-item-info">
                        <div class="cart-item-nombre">${item.nombre}</div>
                        <div class="cart-item-precio">$${item.precio}</div>
                    </div>
                    <button class="btn-eliminar" onclick="eliminarDelCarrito(${item.id})">✕</button>
                </div>
            `).join('');
        }
    }
}

// Cerrar carrito al hacer clic fuera
document.addEventListener('click', (e) => {
    const cartDropdown = document.getElementById('cart-dropdown');
    const cartIcon = document.querySelector('.cart-icon');
    
    if (cartDropdown && cartIcon && !cartIcon.contains(e.target) && !cartDropdown.contains(e.target)) {
        cartDropdown.classList.remove('show');
    }
});

// Función para mostrar notificaciones
function mostrarNotificacionPersonalizada(mensaje, tipo = 'info') {
    const notificacion = document.createElement('div');
    notificacion.className = `notificacion ${tipo}`;
    notificacion.textContent = mensaje;
    
    document.body.appendChild(notificacion);
    
    setTimeout(() => {
        notificacion.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notificacion.remove(), 300);
    }, 2000);
}

// Inicializar
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    
    cargarCarritoDesdeStorage();
    
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('show');
        });
    }
});

// Hacer funciones globales
window.toggleDestacar = toggleDestacar;
window.mostrarNotificacionPersonalizada = mostrarNotificacionPersonalizada;