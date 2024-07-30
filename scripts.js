document.addEventListener("DOMContentLoaded", function() {
    // Add your JavaScript code here for interactivity
    const form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Thank you for contacting us!");
    });

    // Scroll animation for navigation links
    const links = document.querySelectorAll('nav ul li a');
    for (const link of links) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    }
});