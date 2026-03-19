// ============================================
// ARCHIVO: dom.js
// DESCRIPCIÓN: Todas las funcionalidades del DOM
// ============================================

// ===== 1. MENÚ RESPONSIVE (TOGGLE MÓVIL) =====
const btnMenu = document.getElementById("menuToggle");
const menuLinks = document.getElementById("navLinks");

if (btnMenu && menuLinks) {
    console.log("✅ Menú responsive inicializado");
    
    btnMenu.addEventListener("click", () => {
        menuLinks.classList.toggle("show");
        console.log("📱 Menú toggled:", menuLinks.classList);
    });

    // Cerrar menú al hacer clic en un enlace
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                menuLinks.classList.remove('show');
            }
        });
    });
}

// ===== 2. TOGGLE DE ESTADO (COMPLETAR TAREAS) =====
function inicializarToggleTareas() {
    const tareasContainer = document.getElementById('lista-tareas-pendientes');
    if (!tareasContainer) return;

    console.log("✅ Toggle de tareas inicializado");

    const tareas = [
        { id: 1, texto: 'Vacunar a mascotas', completada: false },
        { id: 2, texto: 'Bañar perros', completada: false },
        { id: 3, texto: 'Revisión veterinaria', completada: false },
        { id: 4, texto: 'Comprar alimento', completada: true }
    ];

    function renderTareasPendientes() {
        tareasContainer.innerHTML = '';
        
        tareas.forEach(tarea => {
            const div = document.createElement('div');
            div.className = 'tarea-item';
            
            const span = document.createElement('span');
            span.textContent = tarea.texto;
            span.className = tarea.completada ? 'tarea-completada' : '';
            span.style.cursor = 'pointer';
            
            // Click en el texto para marcar/desmarcar
            span.addEventListener('click', () => {
                tarea.completada = !tarea.completada;
                renderTareasPendientes();
                mostrarNotificacionPersonalizada(
                    tarea.completada ? `✅ Tarea "${tarea.texto}" completada` : `↩️ Tarea "${tarea.texto}" pendiente`,
                    tarea.completada ? 'exito' : 'info'
                );
            });
            
            const btn = document.createElement('button');
            btn.textContent = tarea.completada ? 'Desmarcar' : 'Completar';
            btn.className = 'btn-small';
            
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                tarea.completada = !tarea.completada;
                renderTareasPendientes();
                mostrarNotificacionPersonalizada(
                    tarea.completada ? `✅ Tarea "${tarea.texto}" completada` : `↩️ Tarea "${tarea.texto}" pendiente`,
                    tarea.completada ? 'exito' : 'info'
                );
            });
            
            div.appendChild(span);
            div.appendChild(btn);
            tareasContainer.appendChild(div);
        });
        
        // Actualizar contador
        const pendientes = tareas.filter(t => !t.completada).length;
        const contador = document.getElementById('contador-tareas');
        if (contador) {
            contador.textContent = `📊 ${pendientes} tareas pendientes de ${tareas.length}`;
        }
    }

    renderTareasPendientes();
}

// ===== 3. VALIDACIÓN DE FORMULARIO (CON OBJETOS) =====
function inicializarValidacionFormulario() {
    const formContacto = document.getElementById('contactForm');
    if (!formContacto) return;

    console.log("✅ Validación de formulario inicializada");

    formContacto.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const nombre = document.getElementById('nombre');
        const email = document.getElementById('email');
        const mensaje = document.getElementById('mensaje');
        
        let isValid = true;
        
        // Validar nombre
        if (!nombre.value.trim()) {
            document.getElementById('error-nombre').textContent = '❌ El nombre es requerido';
            nombre.classList.add('error');
            isValid = false;
        } else if (nombre.value.trim().length < 3) {
            document.getElementById('error-nombre').textContent = '❌ El nombre debe tener al menos 3 caracteres';
            nombre.classList.add('error');
            isValid = false;
        } else {
            document.getElementById('error-nombre').textContent = '✅ Correcto';
            document.getElementById('error-nombre').style.color = 'green';
            nombre.classList.remove('error');
        }
        
        // Validar email con regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.value.trim()) {
            document.getElementById('error-email').textContent = '❌ El email es requerido';
            email.classList.add('error');
            isValid = false;
        } else if (!emailRegex.test(email.value)) {
            document.getElementById('error-email').textContent = '❌ Email inválido (ejemplo: usuario@dominio.com)';
            email.classList.add('error');
            isValid = false;
        } else {
            document.getElementById('error-email').textContent = '✅ Correcto';
            document.getElementById('error-email').style.color = 'green';
            email.classList.remove('error');
        }
        
        // Validar mensaje
        if (!mensaje.value.trim()) {
            document.getElementById('error-mensaje').textContent = '❌ El mensaje es requerido';
            mensaje.classList.add('error');
            isValid = false;
        } else if (mensaje.value.length < 10) {
            document.getElementById('error-mensaje').textContent = '❌ El mensaje debe tener al menos 10 caracteres';
            mensaje.classList.add('error');
            isValid = false;
        } else {
            document.getElementById('error-mensaje').textContent = '✅ Correcto';
            document.getElementById('error-mensaje').style.color = 'green';
            mensaje.classList.remove('error');
        }
        
        if (isValid) {
            // Crear objeto con los datos del formulario
            const datosContacto = {
                nombre: nombre.value,
                email: email.value,
                mensaje: mensaje.value,
                fecha: new Date().toLocaleString()
            };
            
            console.log('📝 Datos del formulario:', datosContacto);
            
            // Mostrar notificación de éxito
            mostrarNotificacionPersonalizada('✅ Mensaje enviado correctamente', 'exito');
            
            formContacto.reset();
            
            // Limpiar mensajes de éxito
            document.getElementById('error-nombre').textContent = '';
            document.getElementById('error-email').textContent = '';
            document.getElementById('error-mensaje').textContent = '';
        }
    });
}

// ===== 4. CREAR E INSERTAR ELEMENTOS DINÁMICAMENTE =====
function inicializarCreadorTareas() {
    const formTareas = document.getElementById('form-crear-tarea');
    const inputTarea = document.getElementById('input-nueva-tarea');
    const listaTareas = document.getElementById('lista-tareas-creadas');
    
    if (!formTareas || !inputTarea || !listaTareas) return;
    
    console.log("✅ Creador de tareas dinámicas inicializado");
    
    // Arreglo para guardar las tareas como objetos
    const tareasCreadas = [];
    let nextId = 1;
    
    function renderizarTareas() {
        listaTareas.innerHTML = '';
        
        if (tareasCreadas.length === 0) {
            const mensaje = document.createElement('li');
            mensaje.textContent = 'No hay tareas creadas';
            mensaje.style.color = '#999';
            mensaje.style.justifyContent = 'center';
            listaTareas.appendChild(mensaje);
            return;
        }
        
        tareasCreadas.forEach(tarea => {
            // Crear elementos con createElement
            const li = document.createElement('li');
            li.className = 'tarea-creada';
            
            const span = document.createElement('span');
            span.textContent = tarea.texto;
            span.style.cursor = 'pointer';
            span.style.flex = '1';
            
            // Marcar/desmarcar al hacer clic
            span.addEventListener('click', () => {
                tarea.completada = !tarea.completada;
                span.style.textDecoration = tarea.completada ? 'line-through' : 'none';
                span.style.color = tarea.completada ? '#999' : '#333';
                mostrarNotificacionPersonalizada(
                    tarea.completada ? `✅ Tarea "${tarea.texto}" completada` : `↩️ Tarea "${tarea.texto}" pendiente`,
                    'info'
                );
            });
            
            const btnEliminar = document.createElement('button');
            btnEliminar.textContent = '✕';
            btnEliminar.className = 'btn-eliminar';
            btnEliminar.style.fontSize = '1.2rem';
            
            // Eliminar tarea
            btnEliminar.addEventListener('click', () => {
                const index = tareasCreadas.findIndex(t => t.id === tarea.id);
                tareasCreadas.splice(index, 1);
                renderizarTareas();
                mostrarNotificacionPersonalizada(`🗑️ Tarea "${tarea.texto}" eliminada`, 'warning');
            });
            
            li.appendChild(span);
            li.appendChild(btnEliminar);
            listaTareas.appendChild(li);
        });
        
        // Actualizar contador
        const contador = document.getElementById('contador-tareas-creadas');
        if (contador) {
            const completadas = tareasCreadas.filter(t => t.completada).length;
            contador.textContent = `📊 Total: ${tareasCreadas.length} tareas (${completadas} completadas)`;
        }
    }
    
    formTareas.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const texto = inputTarea.value.trim();
        if (texto === '') {
            mostrarNotificacionPersonalizada('⚠️ Escribe una tarea', 'warning');
            return;
        }
        
        // Crear objeto tarea
        tareasCreadas.push({
            id: nextId++,
            texto: texto,
            completada: false,
            fecha: new Date().toLocaleDateString()
        });
        
        renderizarTareas();
        inputTarea.value = '';
        
        mostrarNotificacionPersonalizada(`✅ Tarea "${texto}" agregada`, 'exito');
    });
}

// ===== 5. FILTRADO DE MASCOTAS (CON OBJETOS Y ARREGLOS) =====
function inicializarFiltroMascotas() {
    const selectCategoria = document.getElementById('categoria');
    if (!selectCategoria) return;
    
    console.log("✅ Filtro de mascotas inicializado");
    
    selectCategoria.addEventListener('change', (event) => {
        const categoria = event.target.value;
        console.log(`🔍 Filtrando por categoría: ${categoria}`);
        
        // Mostrar indicador de filtro activo
        const filtroActivo = document.getElementById('filtro-activo');
        if (filtroActivo) {
            if (categoria === 'todas') {
                filtroActivo.textContent = '🐾 Mostrando todas las mascotas';
            } else {
                filtroActivo.textContent = `🐾 Mostrando: ${categoria.charAt(0).toUpperCase() + categoria.slice(1)}`;
            }
        }
    });
}

// ===== 6. NOTIFICACIONES PERSONALIZADAS =====
function mostrarNotificacionPersonalizada(mensaje, tipo = 'info') {
    const notificacion = document.createElement('div');
    notificacion.className = `notificacion ${tipo}`;
    notificacion.textContent = mensaje;
    
    document.body.appendChild(notificacion);
    
    setTimeout(() => {
        notificacion.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notificacion.remove(), 300);
    }, 2500);
}

// ===== 7. MOSTRAR DETALLES DE MASCOTA (EXTRA) =====
function verDetallesCompleto(id) {
    // Esta función necesita acceso a mascotasData, que está en main.js
    if (typeof mascotasData !== 'undefined') {
        const mascota = mascotasData.find(m => m.id === id);
        
        if (mascota) {
            const modal = document.createElement('div');
            modal.className = 'modal-detalles';
            
            modal.innerHTML = `
                <div class="modal-contenido">
                    <span class="modal-cerrar">&times;</span>
                    <h2 style="color: #2c3e50; margin-bottom: 1rem;">${mascota.nombre}</h2>
                    <img src="${mascota.imagen}" alt="${mascota.nombre}" style="width: 100%; height: 250px; object-fit: cover; border-radius: 8px; margin-bottom: 1rem;">
                    <p><strong>Descripción:</strong> ${mascota.descripcion}</p>
                    <p><strong>Precio:</strong> <span style="color: #e67e22; font-weight: bold;">$${mascota.precio}</span></p>
                    <p><strong>Categoría:</strong> ${mascota.categoria}</p>
                    <p><strong>Edad:</strong> ${mascota.edad || 'No especificada'}</p>
                    <p><strong>Personalidad:</strong> ${mascota.personalidad || 'No especificada'}</p>
                    <button class="btn" onclick="agregarAlCarrito(${mascota.id})" style="width: 100%; margin-top: 1rem;">Agregar al carrito</button>
                </div>
            `;
            
            document.body.appendChild(modal);
            
            modal.querySelector('.modal-cerrar').addEventListener('click', () => {
                modal.remove();
            });
            
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.remove();
                }
            });
        }
    } else {
        console.error('mascotasData no está definido');
    }
}

// ===== INICIALIZAR TODAS LAS FUNCIONALIDADES =====
document.addEventListener('DOMContentLoaded', () => {
    console.log("🚀 Inicializando todas las funcionalidades DOM");
    
    inicializarValidacionFormulario();
    inicializarToggleTareas();
    inicializarCreadorTareas();
    inicializarFiltroMascotas();
    
    // Verificar qué página estamos
    const path = window.location.pathname;
    console.log(`📄 Página actual: ${path.split('/').pop()}`);
});

// Hacer la función disponible globalmente
window.verDetallesCompleto = verDetallesCompleto;
window.mostrarNotificacionPersonalizada = mostrarNotificacionPersonalizada;