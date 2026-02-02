export default function ExpenseList({ expenses, onDelete }) {
  // If no expenses exist
  if (!expenses || expenses.length === 0) {
    return <p className="empty">No expenses added yet</p>;
  }

  return (
    <div className="list">
      <h4>Recent Expenses</h4>

      {expenses
        .slice(-5)        // show last 5 expenses
        .reverse()
        .map((expense) => (
          <div className="item" key={expense.id}>
            <span className="category">{expense.category}</span>

            <span className="amount">
              ₹{expense.amount}
            </span>

            <span className="date">
              {expense.date}
            </span>

            <button
              className="delete-btn"
              onClick={() => onDelete(expense.id)}
            >
              ❌
            </button>
          </div>
        ))}
    </div>
  );
}
