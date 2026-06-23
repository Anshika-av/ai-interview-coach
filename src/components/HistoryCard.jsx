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
            className={`rounded-2xl p-5 mb-4 shadow ${
              darkMode ? "bg-gray-700" : "bg-gray-100"
            }`}
          >
            <h2 className="font-bold text-xl">
              💼 {item.role}
            </h2>

            <p className="mt-2">
              🏆 Score: {item.score}/100
            </p>

            <p>
              💻 Technical: {item.technical}
            </p>

            <p>
              🗣 Communication: {item.communication}
            </p>

            <p>
              🔥 Confidence: {item.confidence}
            </p>

            <p className="text-gray-500 mt-2">
              📅 {item.date}
            </p>
          </div>
        ))
      )}
    </div>
  );
}

export default HistoryCard;