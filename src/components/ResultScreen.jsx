function ResultScreen({ score }) {
  return (
    <div className="text-center mt-10">
      <h1 className="text-5xl font-bold text-green-600">
        🎉 Interview Completed
      </h1>

      <p className="text-xl mt-4">
        Your Final Score: {score}/100
      </p>
    </div>
  );
}

export default ResultScreen;