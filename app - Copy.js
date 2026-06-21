// 1. Select DOM Elements
const expenseForm = document.getElementById('expense-form');
const expenseNameInput = document.getElementById('expense-name');
const expenseAmountInput = document.getElementById('expense-amount');
const expenseCategoryInput = document.getElementById('expense-category');
const expenseList = document.getElementById('expense-list');
const totalAmountDisplay = document.getElementById('total-amount');

// 2. Initialize State (Try to get data from localStorage, otherwise start empty)
let expenses = JSON.parse(localStorage.getItem('expenses')) || [];

// 3. Function to calculate and update total amount
function updateTotal() {
    const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);
    totalAmountDisplay.innerText = `$${total.toFixed(2)}`;
}

// 4. Function to render the list items in DOM
function renderExpenses() {
    // Clear existing list to avoid duplicates
    expenseList.innerHTML = '';

    expenses.forEach((expense) => {
        const li = document.createElement('li');
        li.classList.add('expense-item');
        
        li.innerHTML = `
            <span><strong>${expense.name}</strong> <small>(${expense.category})</small></span>
            <span>$${expense.amount.toFixed(2)}</span>
            <button class="delete-btn" onclick="deleteExpense(${expense.id})">X</button>
        `;
        
        expenseList.appendChild(li);
    });

    // Keep localStorage updated
    localStorage.setItem('expenses', JSON.stringify(expenses));
    updateTotal();
}

// 5. Function to add a new expense
expenseForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent page refresh

    const name = expenseNameInput.value.trim();
    const amount = parseFloat(expenseAmountInput.value);
    const category = expenseCategoryInput.value;

    if (name === '' || isNaN(amount) || amount <= 0) return;

    const newExpense = {
        id: Date.now(), // Unique ID using timestamp
        name: name,
        amount: amount,
        category: category
    };

    expenses.push(newExpense);
    renderExpenses();

    // Clear form inputs
    expenseForm.reset();
});

// 6. Function to delete an expense
window.deleteExpense = function(id) {
    expenses = expenses.filter(expense => expense.id !== id);
    renderExpenses();
};

// 7. Initial render on page load
renderExpenses();