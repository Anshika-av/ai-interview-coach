function FloatingStats({ score, streak }) {
  return (
    <div className="fixed top-5 left-5 bg-gradient-to-br from-purple-600 to-blue-600 text-white shadow-2xl rounded-2xl p-6 w-48 z-50">
      <h2 className="font-bold text-lg">🔥 Streak : {streak}</h2>

      <h2 className="font-bold text-xl">
        🏆 Score : {score}
      </h2>
    </div>
  );
}

export default FloatingStats;