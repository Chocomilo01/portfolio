document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if(name && email && message) {
        alert('Thank you for your message, ' + name + '!');
        // Here you would typically send the form data to your server using an AJAX call
    } else {
        alert('Please fill in all fields.');
    }
});
