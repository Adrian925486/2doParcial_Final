// Función para inicializar validación
function inicializarValidacion() {
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', validarFormulario);
    }
}

// Función para validar formulario
function validarFormulario(event) {
    event.preventDefault();
    
    const nombre = document.getElementById('nombre');
    const email = document.getElementById('email');
    const mensaje = document.getElementById('mensaje');
    
    let isValid = true;
    
    // Validar nombre
    if (!nombre.value.trim()) {
        document.getElementById('error-nombre').textContent = 'El nombre es requerido';
        nombre.classList.add('error');
        isValid = false;
    } else {
        document.getElementById('error-nombre').textContent = '';
        nombre.classList.remove('error');
    }
    
    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.trim()) {
        document.getElementById('error-email').textContent = 'El email es requerido';
        email.classList.add('error');
        isValid = false;
    } else if (!emailRegex.test(email.value)) {
        document.getElementById('error-email').textContent = 'Email inválido';
        email.classList.add('error');
        isValid = false;
    } else {
        document.getElementById('error-email').textContent = '';
        email.classList.remove('error');
    }
    
    // Validar mensaje
    if (!mensaje.value.trim()) {
        document.getElementById('error-mensaje').textContent = 'El mensaje es requerido';
        mensaje.classList.add('error');
        isValid = false;
    } else if (mensaje.value.length < 10) {
        document.getElementById('error-mensaje').textContent = 'El mensaje debe tener al menos 10 caracteres';
        mensaje.classList.add('error');
        isValid = false;
    } else {
        document.getElementById('error-mensaje').textContent = '';
        mensaje.classList.remove('error');
    }
    
    if (isValid) {
        alert('Formulario enviado correctamente');
        event.target.reset();
    }
}