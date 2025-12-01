// Menú móvil con animación de apertura/cierre
const navToggle = document.getElementById('nav-toggle');
const mainNav = document.getElementById('main-nav');

let navIsOpen = false;

function openNav() {
    if (!mainNav) return;
    mainNav.classList.remove('closing');
    mainNav.classList.add('open');
    navIsOpen = true;
}

function closeNav() {
    if (!mainNav || !navIsOpen) return;

    // Primero animamos letras de derecha → izquierda
    mainNav.classList.add('closing');

    // Después de un pequeño tiempo, hacemos que el panel se deslice hacia la izquierda
    setTimeout(() => {
        mainNav.classList.remove('open');
    }, 220); // debe matchear con el tiempo de transición de las letras

    // Quitamos la clase closing al final de la animación
    setTimeout(() => {
        mainNav.classList.remove('closing');
    }, 450);

    navIsOpen = false;
}

if (navToggle && mainNav) {
    navToggle.addEventListener('click', () => {
        if (!navIsOpen) {
            openNav();
        } else {
            closeNav();
        }
    });

    // Cerrar menú al hacer click en cualquier link
    mainNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            closeNav();
        });
    });
}

// Año dinámico
const yearSpan = document.getElementById('year');
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

// URL de WhatsApp (cambiás el número acá una sola vez)
const WHATSAPP_URL = "https://wa.me/5491141999497?text=Hola,%20quiero%20hacer%20una%20consulta%20legal";

const btnWhatsappHero = document.getElementById('btn-whatsapp-hero');
const btnWhatsappSide = document.getElementById('btn-whatsapp-side');

if (btnWhatsappHero) {
    btnWhatsappHero.addEventListener('click', () => {
        window.open(WHATSAPP_URL, '_blank');
    });
}

if (btnWhatsappSide) {
    btnWhatsappSide.addEventListener('click', () => {
        window.open(WHATSAPP_URL, '_blank');
    });
}

// Animación reveal en secciones
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.15
    }
);

document.querySelectorAll('.section, .hero-alt, .strip-images').forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
});

// Manejo simple del formulario (demo)
const formConsulta = document.getElementById('form-consulta');

if (formConsulta) {
    formConsulta.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Tu consulta fue enviada. Nos pondremos en contacto a la brevedad.');
        formConsulta.reset();
    });
}
