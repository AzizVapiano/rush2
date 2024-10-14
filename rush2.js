document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('nav ul li a');
    
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();  // Empêche la navigation par défaut
            console.log(`You clicked on ${this.textContent}`);
        });
    });
});
