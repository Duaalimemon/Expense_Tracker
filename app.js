const expenseForm = document.getElementById('expense-form');
const expenseNameInput = document.getElementById('expense-name');
const expenseAmountInput = document.getElementById('expense-amount');
const expenseCategoryInput = document.getElementById('expense-category');
const expenseList = document.getElementById('expense-list');
const totalAmountDisplay = document.getElementById('total-amount');

let expenses = JSON.parse(localStorage.getItem('expenses')) || [];

function updateTotal() {
    const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);
    totalAmountDisplay.innerText = `$${total.toFixed(2)}`;
}

function renderExpenses() {
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

    localStorage.setItem('expenses', JSON.stringify(expenses));
    updateTotal();
}

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

    expenseForm.reset();
});

window.deleteExpense = function(id) {
    expenses = expenses.filter(expense => expense.id !== id);
    renderExpenses();
};

renderExpenses();
