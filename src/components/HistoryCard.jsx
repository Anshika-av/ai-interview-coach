function HistoryCard({ history }) {
  return (
    <div className="bg-white p-6 rounded-3xl shadow-xl mt-8">
      <h1 className="text-2xl font-bold text-purple-600 mb-5">
        Interview History
      </h1>

      {history.map((item, index) => (
        <div
          key={index}
          className="border p-4 rounded-xl mb-3"
        >
          Score : {item}
        </div>
      ))}
    </div>
  );
}

export default HistoryCard;