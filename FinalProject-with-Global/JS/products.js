// products.js

document.addEventListener("DOMContentLoaded", () => {
    const sidebar = document.getElementById("sidebar");
    const barItems = document.querySelectorAll(".bar-item .text");

    // Expand sidebar on hover
    sidebar.addEventListener("mouseenter", () => {
        sidebar.classList.add("expanded");
        barItems.forEach(item => (item.style.display = "inline"));
    });

    // Collapse sidebar when hover ends
    sidebar.addEventListener("mouseleave", () => {
        sidebar.classList.remove("expanded");
        barItems.forEach(item => (item.style.display = "none"));
    });
});
