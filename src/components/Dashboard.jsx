function Dashboard({ score, darkMode }) {
  return (
    <div
      className={`rounded-2xl p-6 shadow mb-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 ${
        darkMode
          ? "bg-gray-700 text-white"
          : "bg-white"
      }`}
    >
      <h2 className="text-2xl font-bold text-purple-600 mb-5">
        📊 Dashboard
      </h2>

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-4 rounded-xl shadow">
          <h3 className="font-bold">
            💬 Communication
          </h3>

          <p className="text-2xl mt-2">
            80%
          </p>
        </div>

        <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white p-4 rounded-xl shadow">
          <h3 className="font-bold">
            💻 Technical
          </h3>

          <p className="text-2xl mt-2">
            85%
          </p>
        </div>

        <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-4 rounded-xl shadow">
          <h3 className="font-bold">
            🔥 Confidence
          </h3>

          <p className="text-2xl mt-2">
            75%
          </p>
        </div>
      </div>

      <div className="mt-6 text-center">
        <h3 className="text-lg font-semibold">
          Overall Score
        </h3>

        <p className="text-4xl font-bold text-purple-600">
          {score}/100
        </p>
      </div>
    </div>
  );
}

export default Dashboard;