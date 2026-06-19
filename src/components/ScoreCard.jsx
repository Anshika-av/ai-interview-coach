function ScoreCard({ title, value }) {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 text-center">
      <h3 className="text-gray-500">{title}</h3>

      <h1 className="text-3xl font-bold text-purple-600 mt-3">
        {value}
      </h1>
    </div>
  );
}

export default ScoreCard;