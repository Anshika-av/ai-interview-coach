function HistoryCard({ history, darkMode }) {
  return (
    <div
      className={`mt-8 rounded-2xl p-6 shadow ${
        darkMode ? "bg-gray-800 text-white" : "bg-white"
      }`}
    >
      <h2 className="text-2xl font-bold text-purple-600 mb-4">
        Previous Interviews
      </h2>

      {history.length === 0 ? (
        <p>No interviews yet.</p>
      ) : (
        history.map((item, index) => (
          <div
            key={index}
            className="border-b py-3"
          >
            Score: {item.score}/100
          </div>
        ))
      )}
    </div>
  );
}

export default HistoryCard;