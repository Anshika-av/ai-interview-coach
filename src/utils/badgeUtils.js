export function getBadge(score) {
  if (score >= 90) return "💎 Diamond";

  if (score >= 80) return "🥇 Gold";

  if (score >= 70) return "🥈 Silver";

  return "🥉 Beginner";
}