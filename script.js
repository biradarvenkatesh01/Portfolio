document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        
        const name = contactForm.querySelector('input[name="name"]').value;
        alert(`Thank you for your message, ${name}!`);

        contactForm.reset();
    });
});