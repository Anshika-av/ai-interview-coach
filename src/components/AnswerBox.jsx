function AnswerBox({
  answer,
  setAnswer,
  getFeedback,
}) {
  return (
    <div className="mt-8 bg-white rounded-2xl p-6 shadow-md">
      <label className="font-bold text-xl text-purple-600">
        Your Answer
      </label>

      <textarea
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        placeholder="Write your answer here..."
        className="w-full border-2 border-gray-200 rounded-2xl p-4 h-32 mt-3 focus:outline-none focus:border-purple-500 shadow-sm"
      />

      <button
        onClick={getFeedback}
        className="mt-4 w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 rounded-xl shadow-md hover:scale-105 transition"
      >
        🤖 Get AI Feedback
      </button>
    </div>
  );
}

export default AnswerBox; 