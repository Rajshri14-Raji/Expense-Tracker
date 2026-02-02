import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const COLORS = ["#2563EB", "#22C55E", "#F97316", "#A855F7", "#EF4444"];

export default function Charts({ expenses }) {
  // If no data, show message
  if (!expenses || expenses.length === 0) {
    return (
      <div className="charts">
        <div className="chart">
          <p className="empty">Add expenses to see charts</p>
        </div>
      </div>
    );
  }

  // 🔹 Category-wise data (for Pie Chart)
  const categoryData = Object.values(
    expenses.reduce((acc, expense) => {
      acc[expense.category] =
        acc[expense.category] || {
          name: expense.category,
          value: 0
        };
      acc[expense.category].value += expense.amount;
      return acc;
    }, {})
  );

  // 🔹 Monthly data (for Bar Chart)
  const monthlyData = {};
  expenses.forEach((expense) => {
    const month = new Date(expense.date).toLocaleString("default", {
      month: "short"
    });
    monthlyData[month] = (monthlyData[month] || 0) + expense.amount;
  });

  const barData = Object.keys(monthlyData).map((month) => ({
    month,
    amount: monthlyData[month]
  }));

  return (
    <div className="charts">
      {/* PIE CHART */}
      <div className="chart">
        <h4>Expense Distribution</h4>
        <ResponsiveContainer width="100%" height={260}>
          <PieChart>
            <Pie
              data={categoryData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={90}
              label
            >
              {categoryData.map((_, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* BAR CHART */}
      <div className="chart">
        <h4>Monthly Expenses</h4>
        <ResponsiveContainer width="100%" height={260}>
          <BarChart data={barData}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="amount" fill="#2563EB" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
