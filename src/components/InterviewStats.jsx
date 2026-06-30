function InterviewStats({ history, streak }) {
  const totalInterviews = history.length;

  const highestScore =
    totalInterviews > 0
      ? Math.max(...history.map((item) => item.score))
      : 0;

  const averageScore =
    totalInterviews > 0
      ? Math.round(
          history.reduce((sum, item) => sum + item.score, 0) /
            totalInterviews
        )
      : 0;

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 mt-8 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
      <h2 className="text-2xl font-bold text-purple-600 mb-6">
        📊 Interview Statistics
      </h2>

      <div className="grid grid-cols-2 gap-5">

        <div className="bg-blue-100 rounded-xl p-4">
          <p className="text-gray-600">Total Interviews</p>
          <h3 className="text-3xl font-bold text-blue-700">
            {totalInterviews}
          </h3>
        </div>

        <div className="bg-green-100 rounded-xl p-4">
          <p className="text-gray-600">Highest Score</p>
          <h3 className="text-3xl font-bold text-green-700">
            {highestScore}
          </h3>
        </div>

        <div className="bg-yellow-100 rounded-xl p-4">
          <p className="text-gray-600">Average Score</p>
          <h3 className="text-3xl font-bold text-yellow-700">
            {averageScore}
          </h3>
        </div>

        <div className="bg-red-100 rounded-xl p-4">
          <p className="text-gray-600">Current Streak</p>
          <h3 className="text-3xl font-bold text-red-700">
            🔥 {streak}
          </h3>
        </div>

      </div>
    </div>
  );
}

export default InterviewStats;