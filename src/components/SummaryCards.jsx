export default function SummaryCards({ expenses }) {
  const total = expenses.reduce((sum, e) => sum + e.amount, 0);

  return (
    <div className="cards">
      <div className="card">
        <p>Total Expenses</p>
        <h3>₹{total}</h3>
      </div>
    </div>
  );
}
