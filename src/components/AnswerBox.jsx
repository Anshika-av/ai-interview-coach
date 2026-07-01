function AnswerBox({
  answer,
  setAnswer,
  getFeedback,
  darkMode,
  loadingFeedback,
}) {
  return (
    <div
  className={`mt-8 rounded-2xl p-6 shadow-md
  hover:shadow-2xl hover:-translate-y-1 transition-all duration-300
  ${darkMode ? "bg-gray-800" : "bg-white"}`}
>
      <label className="font-bold text-xl text-purple-600">
        Your Answer
      </label>

      <textarea
  value={answer}
  onChange={(e) => setAnswer(e.target.value)}
  placeholder="Write your answer here..."
  className={`w-full rounded-2xl p-4 h-32 mt-3 border-2 shadow-sm
    focus:outline-none focus:border-purple-500
    ${
      darkMode
        ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
        : "bg-white border-gray-200 text-black placeholder-gray-500"
    }`}
/>
     <button
  onClick={getFeedback}
  disabled={loadingFeedback}
  className="mt-4 w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 rounded-xl shadow-md hover:scale-105 active:scale-95 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
>
  {loadingFeedback
    ? "🧠 Analyzing your answer..."
    : "🤖 Get AI Feedback"}
</button>
    </div>
  );
}

export default AnswerBox; 