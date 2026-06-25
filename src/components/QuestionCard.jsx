function QuestionCard({
  currentQuestion,
  totalQuestions,
  question,
}) {
    return (
  <>
    <div className="flex items-center gap-3 mb-4">
      <span className="bg-purple-600 text-white px-4 py-2 rounded-full font-bold">
        Question {currentQuestion + 1}
      </span>

      <span className="text-gray-500">
        of {totalQuestions}
      </span>
    </div>

    <div className="bg-gradient-to-r from-slate-900 to-slate-800 p-6 rounded-2xl shadow-xl border border-gray-700">
      <p className="text-xl text-white leading-relaxed">
        {question}
      </p>
    </div>
  </>
);}
  

export default QuestionCard;