document.addEventListener('DOMContentLoaded', () => {
    // Populate Header
    const head1 = document.getElementById("header1");
    const myHeader = `
        <nav>
            <div class="menu-icon" id="mobile-menu">☰</div>
            <a href="index.html"><img src="images/nintendologo.png" alt="site logo"></a>
            <ul class="nav-list" id="nav-list">
                <li><a href="index.html">Home</a></li>
                <li><a href="products.html">Products</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
        </nav>`;
    head1.innerHTML = myHeader;

    // Mobile menu toggle
    const mobileMenu = document.getElementById('mobile-menu');
    const navList = document.getElementById('nav-list');
    mobileMenu.addEventListener('click', () => {
        navList.classList.toggle('active');
    });

    // Populate Footer
    const footer1 = document.getElementById("footer1");
    const myFooter = `
        <ul>
            <li><a href="about.html">About Us</a></li>
            <li><a href="privacy.html">Privacy Policy</a></li>
            <li><a href="terms.html">Terms of Service</a></li>
            <li><a href="contact.html">Contact Us</a></li>
        </ul>
        <div>
            <p>&copy; <span id="year"></span> Your Company Name. All rights reserved.</p>
        </div>`;
    footer1.innerHTML = myFooter;

    // Populate year dynamically
    document.getElementById("year").textContent = new Date().getFullYear();
});
