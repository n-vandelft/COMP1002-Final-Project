// products.js
document.addEventListener("DOMContentLoaded", () => {
    const sidebar = document.getElementById("sidebar");
    const barItems = document.querySelectorAll(".bar-item");
    const products = document.querySelectorAll(".product-item");

    // Expand sidebar on hover
    sidebar.addEventListener("mouseenter", () => {
        sidebar.classList.add("expanded");
        barItems.forEach(item => {
            const text = item.querySelector(".text");
            if (text) text.style.display = "inline";
        });
    });

    // Collapse sidebar when hover ends
    sidebar.addEventListener("mouseleave", () => {
        sidebar.classList.remove("expanded");
        barItems.forEach(item => {
            const text = item.querySelector(".text");
            if (text) text.style.display = "none";
        });
    });

    // Filtering logic
    barItems.forEach((item) => {
        item.addEventListener("click", () => {
            const category = item.querySelector(".text").textContent.trim().toLowerCase();
            products.forEach(product => {
                const productCategories = product.dataset.category.toLowerCase().split(',');
                if (category === "all products" || productCategories.includes(category)) {
                    product.style.display = "flex"; // Show matching products
                } else {
                    product.style.display = "none"; // Hide non-matching products
                }
            });
        });
    });
});