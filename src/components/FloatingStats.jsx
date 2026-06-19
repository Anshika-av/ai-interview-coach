function FloatingStats({ score }) {
  return (
    <div className="fixed top-5 left-5 bg-white shadow-xl rounded-2xl p-5 z-50">
      <h2 className="font-bold text-lg">🔥 Streak : 4</h2>

      <h2 className="font-bold text-lg mt-2">
        🏆 Score : {score}
      </h2>
    </div>
  );
}

export default FloatingStats;