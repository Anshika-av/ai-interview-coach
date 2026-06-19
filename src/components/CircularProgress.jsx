function CircularProgress({ score }) {
  return (
    <div className="flex flex-col items-center mt-6">
      <div className="relative w-40 h-40">

        <svg className="w-40 h-40">
          <circle
            cx="80"
            cy="80"
            r="70"
            stroke="#E5E7EB"
            strokeWidth="10"
            fill="none"
          />

          <circle
            cx="80"
            cy="80"
            r="70"
            stroke="#9333EA"
            strokeWidth="10"
            fill="none"
            strokeDasharray="440"
            strokeDashoffset={440 - (440 * score) / 100}
            strokeLinecap="round"
            transform="rotate(-90 80 80)"
          />
        </svg>

        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-3xl font-bold">
            {score}%
          </h1>
        </div>

      </div>
    </div>
  );
}

export default CircularProgress;