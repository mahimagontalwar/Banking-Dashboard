// Initial balance set to $1,000
let balance = 1000.00;

// Function to update the displayed balance
function updateBalanceDisplay() {
    document.getElementById('balance').textContent = balance.toFixed(2);
}

// Function to handle deposits
function deposit() {
    const depositAmount = parseFloat(document.getElementById('deposit-amount').value);
    if (depositAmount > 0) {
        balance += depositAmount;
        updateBalanceDisplay();
        document.getElementById('deposit-amount').value = ''; // Clear the input field
    } else {
        alert('Please enter a valid amount to deposit.');
    }
}

// Function to handle withdrawals
function withdraw() {
    const withdrawAmount = parseFloat(document.getElementById('withdraw-amount').value);
    if (withdrawAmount > 0 && withdrawAmount <= balance) {
        balance -= withdrawAmount;
        updateBalanceDisplay();
        document.getElementById('withdraw-amount').value = ''; // Clear the input field
    } else if (withdrawAmount > balance) {
        alert('Insufficient balance.');
    } else {
        alert('Please enter a valid amount to withdraw.');
    }
}
