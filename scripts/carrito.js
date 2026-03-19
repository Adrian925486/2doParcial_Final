// ============================================
// ARCHIVO: carrito.js
// DESCRIPCIÓN: Funciones del carrito de compras
// ============================================

// Función para agregar al carrito (mascotas)
function agregarAlCarrito(id) {
    const mascota = mascotasData.find(m => m.id === id);
    if (mascota) {
        const itemCarrito = {
            ...mascota,
            id: Date.now() + Math.random(),
            tipo: 'mascota'
        };
        cart.push(itemCarrito);
        guardarCarritoEnStorage();
        actualizarCarritoFlotante();
        mostrarNotificacion(`✅ ${mascota.nombre} agregado al carrito`);
    }
}

// Función para agregar servicio al carrito
function agregarServicioCarrito(tipo) {
    const servicios = {
        // Servicios Médicos
        consultaGeneral: { 
            id: Date.now() + Math.random(), 
            nombre: 'Consulta General', 
            precio: 45,
            imagen: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=100',
            tipo: 'servicio'
        },
        vacunacion: { 
            id: Date.now() + Math.random() + 1, 
            nombre: 'Vacunación', 
            precio: 35,
            imagen: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=100',
            tipo: 'servicio'
        },
        desparasitacion: { 
            id: Date.now() + Math.random() + 2, 
            nombre: 'Desparasitación', 
            precio: 30,
            imagen: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=100',
            tipo: 'servicio'
        },
        cirugias: { 
            id: Date.now() + Math.random() + 3, 
            nombre: 'Cirugía Veterinaria', 
            precio: 350,
            imagen: 'https://images.unsplash.com/photo-1584556812952-905ffd0c611a?w=100',
            tipo: 'servicio'
        },
        esterilizacion: { 
            id: Date.now() + Math.random() + 4, 
            nombre: 'Esterilización', 
            precio: 200,
            imagen: 'https://images.unsplash.com/photo-1584556812952-905ffd0c611a?w=100',
            tipo: 'servicio'
        },
        emergencia: { 
            id: Date.now() + Math.random() + 5, 
            nombre: 'Emergencia Veterinaria', 
            precio: 250,
            imagen: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=100',
            tipo: 'servicio'
        },
        
        // Diagnóstico
        hospitalizacion: { 
            id: Date.now() + Math.random() + 6, 
            nombre: 'Hospitalización (día)', 
            precio: 80,
            imagen: 'https://images.unsplash.com/photo-1584556812952-905ffd0c611a?w=100',
            tipo: 'servicio'
        },
        analisis: { 
            id: Date.now() + Math.random() + 7, 
            nombre: 'Análisis Clínicos', 
            precio: 95,
            imagen: 'https://images.unsplash.com/photo-1579154204601-01588f7b2a33?w=100',
            tipo: 'servicio'
        },
        odontologia: { 
            id: Date.now() + Math.random() + 8, 
            nombre: 'Odontología Veterinaria', 
            precio: 130,
            imagen: 'https://images.unsplash.com/photo-1584636633447-6f9d4b1a3b3a?w=100',
            tipo: 'servicio'
        },
        
        // Estética
        estetica: { 
            id: Date.now() + Math.random() + 9, 
            nombre: 'Estética y Baño', 
            precio: 35,
            imagen: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=100',
            tipo: 'servicio'
        },
        nutricion: { 
            id: Date.now() + Math.random() + 10, 
            nombre: 'Asesoría Nutricional', 
            precio: 30,
            imagen: 'https://images.unsplash.com/photo-1494597564530-871f2b93ac55?w=100',
            tipo: 'servicio'
        },
        
        // Productos
        productos: { 
            id: Date.now() + Math.random() + 11, 
            nombre: 'Productos', 
            precio: 0,
            imagen: 'https://images.unsplash.com/photo-1583336663277-620dc54d6b3f?w=100',
            tipo: 'servicio'
        }
    };
    
    if (servicios[tipo]) {
        cart.push(servicios[tipo]);
        guardarCarritoEnStorage();
        actualizarCarritoFlotante();
        mostrarNotificacion(`✅ ${servicios[tipo].nombre} agregado al carrito`);
    }
}

// Función para eliminar del carrito
function eliminarDelCarrito(id) {
    const item = cart.find(item => item.id === id);
    cart = cart.filter(item => item.id !== id);
    guardarCarritoEnStorage();
    actualizarCarritoFlotante();
    mostrarNotificacion(`🗑️ ${item.nombre} eliminado`);
}

// Función para vaciar carrito
function vaciarCarrito() {
    if (cart.length > 0 && confirm('¿Vaciar el carrito?')) {
        cart = [];
        guardarCarritoEnStorage();
        actualizarCarritoFlotante();
        mostrarNotificacion('🛒 Carrito vaciado');
    }
}

// Función para mostrar notificaciones
function mostrarNotificacion(mensaje) {
    const notificacion = document.createElement('div');
    notificacion.className = 'notificacion';
    notificacion.textContent = mensaje;
    document.body.appendChild(notificacion);
    
    setTimeout(() => {
        notificacion.remove();
    }, 2000);
}