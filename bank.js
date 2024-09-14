document.getElementById('transfer-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const accountNumber = document.getElementById('account-number').value;
    const ifscCode = document.getElementById('ifsc-code').value;
    const accountHolderName = document.getElementById('account-holder-name').value;
    const branchName = document.getElementById('branch-name').value;

    // Basic validation and confirmation
    if (accountNumber && ifscCode && accountHolderName && branchName) {
        alert('Payment details submitted successfully!');
    } else {
        alert('Please fill in all the details.');
    }
});