// =========================================================
// MOBILE NAVIGATION TOGGLE
// =========================================================
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    navToggle.classList.toggle("active");
    navMenu.classList.toggle("active");
    const isOpen = navMenu.classList.contains("active");
    navToggle.setAttribute("aria-expanded", isOpen);
  });

  navMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navToggle.classList.remove("active");
      navMenu.classList.remove("active");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}
