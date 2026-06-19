function QuestionCard({
  currentQuestion,
  totalQuestions,
  question,
}) {
  return (
    <>
      <h2 className="text-2xl font-bold text-purple-600 mb-4">
        Question {currentQuestion + 1} of {totalQuestions}
      </h2>

      <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow">
  <p className="text-lg text-black dark:text-white">
    {question}
  </p>
</div>
    </>
  );
}

export default QuestionCard;