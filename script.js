document.addEventListener("DOMContentLoaded", function() {
    let balance = 1000;
    const balanceElement = document.getElementById('balance');
    const depositBtn = document.getElementById('depositBtn');
    const withdrawBtn = document.getElementById('withdrawBtn');

    // Update the balance display
    function updateBalance() {
        balanceElement.textContent = balance.toFixed(2);
    }

    // Handle deposit action
    depositBtn.addEventListener('click', function() {
        const depositAmount = parseFloat(document.getElementById('depositAmount').value);
        if (depositAmount > 0) {
            balance += depositAmount;
            updateBalance();
            document.getElementById('depositAmount').value = '';
        } else {
            alert('Please enter a valid deposit amount.');
        }
    });

    // Handle withdraw action
    withdrawBtn.addEventListener('click', function() {
        const withdrawAmount = parseFloat(document.getElementById('withdrawAmount').value);
        if (withdrawAmount > 0) {
            if (withdrawAmount <= balance) {
                balance -= withdrawAmount;
                updateBalance();
            } else {
                alert('Insufficient balance. Please enter a smaller amount.');
            }
            document.getElementById('withdrawAmount').value = '';
        } else {
            alert('Please enter a valid withdrawal amount.');
        }
    });

    // Initialize the balance
    updateBalance();
});
