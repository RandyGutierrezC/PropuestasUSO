document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header");
    const submenus = document.querySelectorAll(".submenu");

    // Verifica si el header existe antes de ejecutar el código de scroll
    if (header) {
        window.addEventListener("scroll", function () {
            if (window.scrollY > 50) {
                header.classList.remove("header-transparent");
                header.classList.add("header-solid");

                // También cambia los submenús a sólidos
                submenus.forEach(submenu => {
                    submenu.classList.remove("submenu-transparent");
                    submenu.classList.add("submenu-solid");
                });
            } else {
                header.classList.remove("header-solid");
                header.classList.add("header-transparent");

                // Cambia los submenús a transparentes
                submenus.forEach(submenu => {
                    submenu.classList.remove("submenu-solid");
                    submenu.classList.add("submenu-transparent");
                });
            }
        });
    }

    const menuItems = document.querySelectorAll(".menu li > a");

    menuItems.forEach(item => {
        item.addEventListener("click", function (e) {
            let submenu = this.nextElementSibling;

            if (submenu && submenu.classList.contains("submenu")) {
                e.preventDefault(); // Evita que el enlace redireccione
                submenu.style.display = submenu.style.display === "block" ? "none" : "block";
            }
        });
    });

    // Cerrar submenús al hacer clic fuera del menú
    document.addEventListener("click", function (e) {
        if (!e.target.closest(".menu")) {
            document.querySelectorAll(".submenu").forEach(submenu => {
                submenu.style.display = "none";
            });
        }
    });
});

let index = 0;
const slides = document.querySelectorAll(".slide");

function mostrarSlide(n) {
    slides.forEach(slide => slide.classList.remove("active")); // Oculta todos los slides
    slides[n].classList.add("active"); // Muestra el slide actual
}

// Cambia de slide con botones de flecha
function moverSlide(n) {
    index += n;
    if (index >= slides.length) { index = 0; } // Reinicia el ciclo
    if (index < 0) { index = slides.length - 1; }
    mostrarSlide(index);
}

// Cambio automático cada 5 segundos
setInterval(() => { moverSlide(1); }, 5000);

mostrarSlide(index); // Muestra el primer slide al cargar la página


