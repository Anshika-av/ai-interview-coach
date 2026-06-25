function AchievementBadge({ score }) {
  let badge = "🥉 Beginner";

  if (score >= 50) {
    badge = "🥈 Intermediate";
  }

  if (score >= 75) {
    badge = "🥇 Advanced";
  }

  if (score >= 90) {
    badge = "👑 Expert";
  }

  return (
    <div className="bg-yellow-100 text-yellow-700 px-5 py-3 rounded-2xl font-bold text-lg shadow">
      {badge}
    </div>
  );
}

export default AchievementBadge;