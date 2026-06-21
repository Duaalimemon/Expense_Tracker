# 💰 Project 01: Smart Expense Tracker

An interactive, production-grade financial tracking utility engineered with modern ES6+ JavaScript. This application enables users to log dynamic financial transactions, classify outlays by operational category, and evaluate real-time aggregated metrics through a persistent browser state layer.

---

## 🛠️ Tech Stack & Architecture

* **Frontend Structure:** Semantic HTML5 layouts
* **Style Engine:** CSS3 Custom Properties (Variables), Flexbox layouts, and custom `@keyframes` micro-animations.
* **Core Logic:** Pure Vanilla JavaScript (ES6+), Event-driven updates, and synchronous DOM rendering.

---

## 🚀 Core Features Engineered

* **Data Persistence:** Integrated `localStorage` pipelines so user ledgers stay safe and intact even during hard browser refreshes.
* **Automated Bookkeeping Engine:** Utilizes advanced declarative array reduction to calculate complex running balances immediately.
* **Dynamic Node Generation:** Mounts custom HTML layout components instantly into the document tree when transactions are logged.
* **Responsive Dark Aesthetics:** Built using modern high-contrast design variables that dynamically scale cleanly across diverse viewport sizes.

---

## 🧠 Core Engineering Concepts Applied

### 1. Web Storage Serialization
Data is securely transferred between the local state array and browser database storage using explicit serialization steps:
```javascript
// Parsing text files back into native data arrays on application initialization
let expenses = JSON.parse(localStorage.getItem('expenses')) || [];
```

// Serializing live arrays back into text matrices for persistent storage
```
localStorage.setItem('expenses', JSON.stringify(expenses));
```

2. Higher-Order Reductions
Bypassed slow procedural iteration routines in favor of mathematical array aggregation methods:

```
const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);
```

3. Non-Destructive Array Mutating
Engineered immediate row-level deletion utilizing deterministic key filters mapped across dynamic system timestamps (Date.now()):

```
expenses = expenses.filter(expense => expense.id !== id);
```

📂 File Directory Mapping
```
01-expense-tracker/
├── index.html   # Markup architecture and data capture nodes
├── style.css    # Interactive layouts, variables, and dark UI system
└── app.js       # Array engines, storage handlers, and DOM render loops
```

👤 Development Context
Developed intentionally as part of the core JavaScript track assignments during the DevWeekends Fellowship program.
