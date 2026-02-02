export default function Header({ onAddClick, darkMode, toggleDarkMode }) {
  return (
    <header className="header">
      <h2>💰 Expense Tracker</h2>

      <div className="header-actions">
        <button className="btn secondary" onClick={toggleDarkMode}>
          {darkMode ? "☀ Light" : "🌙 Dark"}
        </button>

        <button className="btn" onClick={onAddClick}>
          + Add Expense
        </button>
      </div>
    </header>
  );
}
