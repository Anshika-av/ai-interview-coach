function InterviewHistory({ history }) {
  return (
    <div className="bg-white rounded-3xl shadow-xl p-8 mt-8">
      <h1 className="text-3xl font-bold text-purple-600 mb-6">
        Interview History
      </h1>

      {history.map((item, index) => (
        <div
          key={index}
          className="border rounded-xl p-4 mb-4"
        >
          <h2 className="font-bold">
            {item.role}
          </h2>

          <p>Score : {item.score}</p>

          <p>{item.date}</p>
        </div>
      ))}
    </div>
  );
}

export default InterviewHistory;