function CommunicationScoreCard({ communication }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-5">
      <h2 className="text-xl font-bold text-blue-600">
        🗣 Communication
      </h2>

      <p className="text-4xl font-bold mt-3">
        {communication}%
      </p>

      <div className="w-full bg-gray-200 rounded-full h-3 mt-4">
        <div
          className="bg-blue-600 h-3 rounded-full"
          style={{ width: `${communication}%` }}
        ></div>
      </div>
    </div>
  );
}

export default CommunicationScoreCard;