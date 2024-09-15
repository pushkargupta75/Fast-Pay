// Simulating a balance check
function checkBalance(event) {
    event.preventDefault(); // Prevent form submission

    const pin = document.getElementById("pin").value;
    const errorMessage = document.getElementById("error-message");
    const balanceSection = document.getElementById("balance-section");
    const balanceAmount = document.getElementById("balance-amount");

    // Simulate a correct PIN for demonstration
    const correctPIN = "1234";

    if (pin === correctPIN) {
        errorMessage.textContent = ""; // Clear error message
        document.getElementById("balance-form").style.display = "none"; // Hide form
        balanceSection.style.display = "block"; // Show balance section

        // Simulated account balance
        balanceAmount.textContent = "₹1,2455415.67"; // Replace with actual balance from backend
    } else {
        errorMessage.textContent = "Incorrect PIN. Please try again.";
    }
}

// Toggle PIN visibility
function togglePIN() {
    const pinField = document.getElementById("pin");
    const showPinCheckbox = document.getElementById("show-pin");

    if (showPinCheckbox.checked) {
        pinField.type = "text";
    } else {
        pinField.type = "password";
    }
}

// Reset the form to check another account
function resetForm() {
    document.getElementById("balance-form").style.display = "block";
    document.getElementById("balance-section").style.display = "none";
    document.getElementById("pin").value = ""; // Clear PIN input
    document.getElementById("error-message").textContent = ""; // Clear error message
}
