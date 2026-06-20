function ConfidenceScoreCard({ confidence }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-5">
      <h2 className="text-xl font-bold text-green-600">
        🚀 Confidence
      </h2>

      <p className="text-4xl font-bold mt-3">
        {confidence}%
      </p>

      <div className="w-full bg-gray-200 rounded-full h-3 mt-4">
        <div
          className="bg-green-600 h-3 rounded-full"
          style={{ width: `${confidence}%` }}
        ></div>
      </div>
    </div>
  );
}

export default ConfidenceScoreCard;