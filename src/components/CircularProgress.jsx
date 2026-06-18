function CircularProgress({ score }) {
  return (
    <div className="flex justify-center">
      <div className="relative w-40 h-40 rounded-full border-[12px] border-purple-600 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold">{score}</h1>
          <p className="text-gray-500">Score</p>
        </div>
      </div>
    </div>
  );
}

export default CircularProgress;