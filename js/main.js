document.addEventListener("DOMContentLoaded", function () {
    // ----- Thème clair / sombre -----
    const themeToggle = document.getElementById("theme-toggle");
    if (themeToggle) {
        themeToggle.addEventListener("click", function () {
            const isDark = document.documentElement.classList.toggle("dark");
            localStorage.setItem("theme", isDark ? "dark" : "light");
        });
    }

    // ----- Menu mobile -----
    const menuToggle = document.getElementById("menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener("click", function () {
            mobileMenu.classList.toggle("hidden");
            const icon = menuToggle.querySelector("i");
            icon.classList.toggle("fa-bars");
            icon.classList.toggle("fa-xmark");
        });

        // Ferme le menu mobile après un clic sur un lien
        mobileMenu.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", function () {
                mobileMenu.classList.add("hidden");
                const icon = menuToggle.querySelector("i");
                icon.classList.add("fa-bars");
                icon.classList.remove("fa-xmark");
            });
        });
    }

    // ----- Année dans le pied de page -----
    const yearEl = document.getElementById("year");
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    // ----- Formulaire de contact (pas de backend : ouvre la messagerie) -----
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            const subject = encodeURIComponent("Nouveau message depuis mavor-it.com — " + name);
            const body = encodeURIComponent(message + "\n\n---\nEmail : " + email);

            window.location.href = "mailto:messan.monti@gmail.com?subject=" + subject + "&body=" + body;
        });
    }
});
