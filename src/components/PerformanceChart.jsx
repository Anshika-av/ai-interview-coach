import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

function PerformanceChart({ history }) {
  const data = history.map((item, index) => ({
    interview: `#${index + 1}`,
    score: item.score,
  }));

  if (history.length === 0) return null;

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 mt-8 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
      <h2 className="text-2xl font-bold text-purple-600 mb-6">
        📈 Performance Trend
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="interview" />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="score"
            stroke="#7C3AED"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default PerformanceChart;