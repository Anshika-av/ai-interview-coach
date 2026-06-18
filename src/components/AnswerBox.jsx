function AnswerBox({
  answer,
  setAnswer,
  getFeedback,
}) {
  return (
    <div className="mt-8">
      <label className="font-bold text-2xl">
        Your Answer
      </label>

      <textarea
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        placeholder="Write your answer here..."
        className="w-full border rounded-xl p-4 h-40 mt-3"
      />

      <button
        onClick={getFeedback}
        className="mt-4 bg-green-600 text-white px-6 py-3 rounded-xl"
      >
        🤖 Get AI Feedback
      </button>
    </div>
  );
}

export default AnswerBox;