// Selección de elementos
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const body = document.body;

// Evento click en el hamburguesa
hamburger.addEventListener("click", () => {
    // Alternar clases activas
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
    body.classList.toggle("menu-open");
});

// Cerrar menú al hacer click en un enlace
document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navLinks.classList.remove("active");
        body.classList.remove("menu-open");
    });
});

// Cerrar menú al hacer click fuera de él (en móviles)
document.addEventListener("click", (event) => {
    if (window.innerWidth <= 768) {
        const isClickInsideNav = navLinks.contains(event.target);
        const isClickOnHamburger = hamburger.contains(event.target);
        
        if (!isClickInsideNav && !isClickOnHamburger && navLinks.classList.contains("active")) {
            hamburger.classList.remove("active");
            navLinks.classList.remove("active");
            body.classList.remove("menu-open");
        }
    }
});

// Efecto de scroll en navbar
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = "rgba(0, 0, 0, 0.95)";
        navbar.style.boxShadow = "0 4px 20px rgba(255, 215, 0, 0.3)";
    } else {
        navbar.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
        navbar.style.boxShadow = "0 4px 20px rgba(255, 215, 0, 0.2)";
    }
});