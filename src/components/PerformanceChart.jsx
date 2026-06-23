import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

function PerformanceChart({
  technical,
  communication,
  confidence,
}) {

  const data = [
    {
      name: "Technical",
      score: technical,
    },
    {
      name: "Communication",
      score: communication,
    },
    {
      name: "Confidence",
      score: confidence,
    },
  ];

  return (
    <div className="bg-white p-6 rounded-3xl shadow-xl mt-8">

      <h2 className="text-2xl font-bold mb-4">
        📊 Performance Chart
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="score" fill="#9333ea" />
        </BarChart>
      </ResponsiveContainer>

    </div>
  );
}

export default PerformanceChart;