function ProgressBar({ currentQuestion, totalQuestions }) {
  return (
    <>
      <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
        <div
          className="bg-purple-600 h-3 rounded-full"
          style={{
            width: `${((currentQuestion + 1) / totalQuestions) * 100}%`,
          }}
        ></div>
      </div>

      <p className="text-center text-gray-500 mb-5">
        {Math.round(((currentQuestion + 1) / totalQuestions) * 100)}%
        Complete
      </p>
    </>
  );
}

export default ProgressBar;