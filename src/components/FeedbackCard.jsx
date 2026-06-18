function FeedbackCard({ feedback }) {
  if (!feedback) return null;

  return (
    <div className="mt-8 border rounded-xl p-5 bg-white">
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