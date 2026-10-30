
// =================================
// HEERA'S BANK APP
// JavaScript Functionality
// =================================

// 1. INITIAL BALANCE
let balance = 1000000;

// 2. SELECT HTML ELEMENTS
const balanceDisplay = document.getElementById("balance");
const amountInput = document.getElementById("amount");

const creditButton = document.getElementById("credit-btn");
const debitButton = document.getElementById("debit-btn");

const message = document.getElementById("message");

// 3. UPDATE BALANCE DISPLAY
function updateBalance() {
    balanceDisplay.textContent = balance.toFixed(2);
}

// 4. DISPLAY TRANSACTION MESSAGE
function showMessage(text, color) {
    message.textContent = text;
    message.style.color = color;
}

// 5. CREDIT FUNCTION
creditButton.addEventListener("click", function() {

    const amount = Number(amountInput.value);

    if (amountInput.value.trim() === "" || !Number.isFinite(amount) || amount <= 0) {
        showMessage("Please enter a valid amount.", "#dc3545");
        return;
    }

    balance += amount;

    updateBalance();

    showMessage(
        "Successfully credited " + amount.toFixed(2) + "!",
        "#087f68"
    );

    amountInput.value = "";
});

// 6. DEBIT FUNCTION
debitButton.addEventListener("click", function() {

    const amount = Number(amountInput.value);

    if (amountInput.value.trim() === "" || !Number.isFinite(amount) || amount <= 0) {
        showMessage("Please enter a valid amount.", "#dc3545");
        return;
    }

    if (amount > balance) {
        showMessage("Insufficient funds! Transaction declined.", "#dc3545");
        return;
    }

    balance -= amount;

    updateBalance();

    showMessage(
        "Successfully debited " + amount.toFixed(2) + "!",
        "#087f68"
    );

    amountInput.value = "";
});

// 7. INITIALISE APP
updateBalance();
