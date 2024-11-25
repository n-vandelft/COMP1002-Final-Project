// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    // Populate Header
    const head1 = document.getElementById("header1");
    const myHeader = `
        <nav>    
            <a href="index.html"><img src="images/logo.png" alt="site logo"></a>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="products.html">Products</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="services.html">Contact</a></li>
            </ul>
        </nav>`;
    head1.innerHTML = myHeader;

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

    // Populate the current year dynamically
    document.getElementById("year").textContent = new Date().getFullYear();

    // Highlight the active navigation link
    const currentPath = window.location.pathname;
    const fileName = currentPath.split('/').pop();
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === fileName) {
            link.classList.add('active');
        }
    });
});

/*
/// LOOK INTO THIS.

// Get the current URL path 
const currentPath = window.location.pathname; 
// Extract the file name from the path 
const fileName = currentPath.split('/').pop();

// Get all navigation links 
const navLinks = document.querySelectorAll('nav ul li a'); 
// Loop through each link 
navLinks.forEach(link => { 
    // Check if the link's href matches the current path 
    if (link.getAttribute('href') === fileName) { 
        // Add the 'active' class to the matching link 
        link.classList.add('active'); 
    }});*/
