// Smooth scroll for the arrow
document.getElementById("scrollDown").addEventListener("click", () => {
    window.scrollTo({
        top: 700,
        behavior: "smooth"
    });
});

// Theme toggle
const toggleBtn = document.getElementById("themeToggle");

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");
    document.body.classList.toggle("dark");

    // Change emoji
    if (document.body.classList.contains("light")) {
        toggleBtn.textContent = "☀️";
    } else {
        toggleBtn.textContent = "🌙";
    }
});

// Mobile Menu Toggle
const hamburger = document.getElementById("hamburger");
const menuList = document.getElementById("menuList");

hamburger.addEventListener("click", () => {
    menuList.style.display =
        menuList.style.display === "flex" ? "none" : "flex";
});
