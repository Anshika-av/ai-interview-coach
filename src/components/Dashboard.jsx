import CircularProgress from "./CircularProgress";
import PerformanceBadge from "./PerformanceBadge";

function Dashboard({ score }) {
  return (
    <div className="bg-white p-8 rounded-3xl shadow-xl mt-10">
      <h1 className="text-3xl font-bold text-center text-purple-600 mb-8">
        Dashboard
      </h1>

      <CircularProgress score={score} />

      <PerformanceBadge score={score} />
    </div>
  );
}

export default Dashboard;