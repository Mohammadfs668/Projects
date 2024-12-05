document.addEventListener('DOMContentLoaded', () => {
    console.log('Fast Pies website loaded.');

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', smoothScroll);
    });

    // Show welcome message
    showWelcomeMessage();
});

// Function for smooth scrolling
function smoothScroll(event) {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    window.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth'
    });
}

// Function to show a welcome message
function showWelcomeMessage() {
    setTimeout(() => {
        alert('Welcome to Fast Pies! Enjoy our delicious pies.');
    }, 500); // Show the message 500ms after the page loads
}
