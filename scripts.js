function showCrane(craneId) {
    // Ocultar todas las secciones
    const sections = document.querySelectorAll('.crane-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    // Quitar clase active de todos los botones
    const buttons = document.querySelectorAll('.nav-btn');
    buttons.forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Mostrar la sección seleccionada
    document.getElementById(craneId).classList.add('active');
    
    // Activar el botón correspondiente
    event.target.classList.add('active');
    
    // Scroll suave hacia arriba
    window.scrollTo({
        top: 200,
        behavior: 'smooth'
    });
}

// Animación de entrada para las tarjetas de especificaciones
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.animation = 'fadeInUp 0.6s ease both';
            }, index * 100);
        }
    });
});

// Observar elementos cuando se carga la página
document.addEventListener('DOMContentLoaded', () => {
    const specItems = document.querySelectorAll('.spec-item');
    specItems.forEach(item => observer.observe(item));
});

