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

// Efecto de click en galería
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('gallery-item')) {
        e.target.style.animation = 'none';
        setTimeout(() => {
            e.target.style.animation = 'float 3s ease-in-out infinite';
        }, 10);
        
        // Efecto de onda
        const ripple = document.createElement('span');
        ripple.style.position = 'absolute';
        ripple.style.width = '20px';
        ripple.style.height = '20px';
        ripple.style.background = 'rgba(255,255,255,0.6)';
        ripple.style.borderRadius = '50%';
        ripple.style.transform = 'translate(-50%, -50%)';
        ripple.style.pointerEvents = 'none';
        ripple.style.animation = 'ripple 0.6s ease-out';
        
        e.target.style.position = 'relative';
        e.target.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    }
});

// Añadir animación de ripple
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            width: 200px;
            height: 200px;
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
