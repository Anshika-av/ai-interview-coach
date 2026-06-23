function AnalyticsCard({ history }) {

  const totalInterviews = history.length;

  const highestScore =
    history.length > 0
      ? Math.max(...history.map((item) => item.score))
      : 0;

  const averageScore =
    history.length > 0
      ? (
          history.reduce(
            (sum, item) => sum + item.score,
            0
          ) / history.length
        ).toFixed(1)
      : 0;

  return (
    <div className="bg-white shadow-xl rounded-3xl p-8 mt-8">

      <h2 className="text-2xl font-bold mb-6">
        📈 Analytics Dashboard
      </h2>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-purple-100 p-5 rounded-2xl">
          <h3 className="font-bold">
            📋 Total Interviews
          </h3>

          <p className="text-3xl mt-2">
            {totalInterviews}
          </p>
        </div>

        <div className="bg-green-100 p-5 rounded-2xl">
          <h3 className="font-bold">
            🏆 Highest Score
          </h3>

          <p className="text-3xl mt-2">
            {highestScore}
          </p>
        </div>

        <div className="bg-blue-100 p-5 rounded-2xl">
          <h3 className="font-bold">
            📈 Average Score
          </h3>
          <div className="bg-yellow-100 p-5 rounded-2xl">
  <h3 className="font-bold">
    🥇 Best Badge
  </h3>

  <p className="text-3xl mt-2">
    Advanced 🥇
  </p>
</div>

          <p className="text-3xl mt-2">
            {averageScore}
          </p>
        </div>

      </div>

    </div>
  );
}

export default AnalyticsCard;