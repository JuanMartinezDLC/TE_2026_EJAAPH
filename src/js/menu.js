const btn = document.getElementById("menu-btn");
const panel = document.getElementById("menu-panel");

if (btn && panel) {
    btn.addEventListener("click", () => {
        btn.classList.toggle("active");
        panel.classList.toggle("active");
    });

    /* Cerrar al hacer clic fuera */
    document.addEventListener("click", (e) => {
        if (!btn.contains(e.target) && !panel.contains(e.target)) {
            btn.classList.remove("active");
            panel.classList.remove("active");
        }
    });
}
