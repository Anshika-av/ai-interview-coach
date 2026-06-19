function CompanyCard({ name, match }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 border">
      <h2 className="text-xl font-bold">{name}</h2>

      <p className="text-gray-500 mt-2">
        Match Score : {match}%
      </p>

      <button className="mt-4 bg-purple-600 text-white px-4 py-2 rounded-xl">
        Apply →
      </button>
    </div>
  );
}

export default CompanyCard;