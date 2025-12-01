// Menú móvil
const navToggle = document.getElementById('nav-toggle');
const mainNav = document.getElementById('main-nav');

if (navToggle && mainNav) {
    navToggle.addEventListener('click', () => {
        mainNav.classList.toggle('open');
    });

    mainNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => mainNav.classList.remove('open'));
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
