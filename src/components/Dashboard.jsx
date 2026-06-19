import CircularProgress from "./CircularProgress";
import PerformanceBadge from "./PerformanceBadge";

function Dashboard({ score, darkMode }) {
  return (
    <div
      className={`rounded-2xl p-6 shadow mb-6 ${
        darkMode ? "bg-gray-700 text-white" : "bg-white"
      }`}
    >
      <h2 className="text-2xl font-bold text-purple-600">
        Dashboard
      </h2>

      <div className="mt-4 text-lg">
        Overall Score: <span className="font-bold">{score}/100</span>
      </div>
    </div>
  );
}

export default Dashboard;