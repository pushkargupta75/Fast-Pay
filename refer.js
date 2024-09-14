// Function to generate random referral code
function generateReferralCode() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let referralCode = '';
    for (let i = 0; i < 9; i++) {
        referralCode += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return referralCode;
}

// Display the generated referral code on page load
const referralCodeElement = document.getElementById('referral-code');
referralCodeElement.textContent = generateReferralCode();

// Copy referral code to clipboard
document.getElementById('copy-btn').addEventListener('click', function() {
    const referralCode = referralCodeElement.textContent;
    navigator.clipboard.writeText(referralCode).then(() => {
        alert('Referral code copied to clipboard!');
    }).catch(err => {
        alert('Failed to copy code: ' + err);
    });
});

// Simulate sharing functionality (just an alert for now)
document.getElementById('share-btn').addEventListener('click', function() {
    alert('Share this referral code with your friends: ' + referralCodeElement.textContent);
});