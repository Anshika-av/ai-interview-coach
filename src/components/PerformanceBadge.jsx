function PerformanceBadge({ score }) {
  let badge = "Beginner 🥉";

  if (score >= 70) badge = "Good 🥈";
  if (score >= 90) badge = "Excellent 🥇";

  return (
    <div className="text-center mt-6">
      <h2 className="text-2xl font-bold text-green-600">
        {badge}
      </h2>
    </div>
  );
}

export default PerformanceBadge;