document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name && email && message) {
            alert(`Teşekkürler, ${name}. Mesajınız alındı!`);
        } else {
            alert('Lütfen tüm alanları doldurunuz.');
        }
    });
});
