function QuestionCard({
  currentQuestion,
  totalQuestions,
  question,
}) {
    return (
  <>
    <div className="flex items-center gap-3 mb-4">
      <span className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-5 py-2 rounded-full font-bold shadow-md">
        Question {currentQuestion + 1}
      </span>

      <span className="text-gray-500">
        of {totalQuestions}
      </span>
    </div>

   <div className="bg-gradient-to-r from-slate-900 to-slate-800 p-6 rounded-2xl shadow-xl border border-gray-700 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
  <p className="text-xl text-white leading-relaxed font-medium">
    {question}
  </p>
</div>
  </>
);}
  

export default QuestionCard; 