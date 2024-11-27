document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const responseMessage = `Obrigado, ${name}! Sua mensagem foi enviada.`;
    document.getElementById('response-message').innerText = responseMessage;

    // Limpa o formulário
    document.getElementById('contact-form').reset();
});
