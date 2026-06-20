function TechnicalScoreCard({ technical }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-5">
      <h2 className="text-xl font-bold text-purple-600">
        💻 Technical Skill
      </h2>

      <p className="text-4xl font-bold mt-3">
        {technical}%
      </p>

      <div className="w-full bg-gray-200 rounded-full h-3 mt-4">
        <div
          className="bg-purple-600 h-3 rounded-full"
          style={{ width: `${technical}%` }}
        ></div>
      </div>
    </div>
  );
}

export default TechnicalScoreCard;