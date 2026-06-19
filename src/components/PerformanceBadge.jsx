function PerformanceBadge({ score }) {
  let badge = "Beginner 🥉";
  let color = "text-green-500";

  if (score >= 50) {
    badge = "Intermediate 🥈";
    color = "text-yellow-500";
  }

  if (score >= 80) {
    badge = "Advanced 🥇";
    color = "text-purple-600";
  }

  return (
    <div className="bg-white shadow-xl rounded-2xl p-6 text-center">
      <h2 className="text-2xl font-bold mb-3">Performance</h2>

      <h1 className={`text-3xl font-bold ${color}`}>
        {badge}
      </h1>

      <p className="text-gray-500 mt-2">
        Score : {score}/100
      </p>
    </div>
  );
}

export default PerformanceBadge;