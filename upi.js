document.addEventListener('DOMContentLoaded', function() {
    const amountInput = document.getElementById('amount');
    const pinInput = document.getElementById('pin');
    const payNowButton = document.getElementById('pay-now');

    function validateFields() {
        const amount = amountInput.value.trim();
        const pin = pinInput.value.trim();
        payNowButton.Disabled = !(amount && pin);
    }
8
    amountInput.addEventListener('input', validateFields);
    pinInput.addEventListener('input', validateFields);
});
