function FeedbackCard({ feedback, darkMode }) {
  if (!feedback) return null;

  return (
    <div
     className={`mt-8 rounded-xl shadow p-5 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 ${
        darkMode
          ? "bg-gray-700 text-white"
          : "bg-white"
      }`}
    >
      <h2 className="text-2xl font-bold text-green-600 mb-4">
        🤖 AI Feedback
      </h2>

      <div
        className={`rounded-xl p-4 ${
          darkMode
            ? "bg-gray-800"
            : "bg-gray-50"
        }`}
      >
        <p className="whitespace-pre-wrap leading-relaxed">
          {feedback}
        </p>
      </div>
    </div>
  );
}

export default FeedbackCard;