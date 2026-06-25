function ProgressBar({ currentQuestion, totalQuestions }) {
  const percentage = Math.round(
    ((currentQuestion + 1) / totalQuestions) * 100
  );

  return (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <h3 className="font-semibold text-gray-700">
          Progress
        </h3>

        <span className="font-bold text-purple-600">
          {percentage}%
        </span>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
        <div
          className="bg-gradient-to-r from-purple-600 to-blue-500 h-4 rounded-full transition-all duration-500"
          style={{
            width: `${percentage}%`,
          }}
        ></div>
      </div>

      <p className="text-center text-gray-500 mt-2">
        Question {currentQuestion + 1} of {totalQuestions}
      </p>
    </div>
  );
}

export default ProgressBar;