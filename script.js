// Chatbox functionality
document.addEventListener('DOMContentLoaded', function() {
    const chatbox = document.getElementById('chatbox');
    const chatboxClose = document.getElementById('chatbox-close');
    const chatboxSend = document.getElementById('chatbox-send');
    const chatboxInput = document.getElementById('chatbox-input');
    const chatboxMessages = document.getElementById('chatbox-messages');

    // Toggle chatbox visibility
    setTimeout(() => {
        chatbox.style.display = 'flex';
    }, 1000); // Show chatbox after 1 second

    chatboxClose.addEventListener('click', function() {
        chatbox.style.display = 'none';
    });

    chatboxSend.addEventListener('click', function() {
        const messageText = chatboxInput.value.trim();
        if (messageText) {
            const message = document.createElement('div');
            message.className = 'message sent';
            message.textContent = messageText;
            chatboxMessages.appendChild(message);
            chatboxInput.value = '';

            // Simulate receiving a response
            setTimeout(() => {
                const response = document.createElement('div');
                response.className = 'message received';
                response.textContent = 'Thank you for your message! We will get back to you soon.';
                chatboxMessages.appendChild(response);
                chatboxMessages.scrollTop = chatboxMessages.scrollHeight;
            }, 1000);
        }
    });
});
