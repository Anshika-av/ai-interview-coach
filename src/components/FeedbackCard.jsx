function FeedbackCard({ feedback, darkMode }) {
  if (!feedback) return null;

  return (
    <div
      className={`mt-8 rounded-xl shadow p-5 ${
        darkMode
          ? "bg-gray-700 text-white"
          : "bg-white"
      }`}
    >
      <h2 className="text-2xl font-bold text-green-600 mb-4">
        AI Feedback
      </h2>

      <pre className="whitespace-pre-wrap">
        {feedback}
      </pre>
    </div>
  );
}

export default FeedbackCard;