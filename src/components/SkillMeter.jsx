function SkillMeter({
  title,
  score,
  color,
}) {
  return (
    <div className="bg-white shadow rounded-3xl p-6">
      <div className="flex justify-between">
        <h2 className="font-bold text-xl">
          {title}
        </h2>

        <h2 className="font-bold">
          {score}%
        </h2>
      </div>

      <div className="w-full bg-gray-200 h-4 rounded-full mt-4">
        <div
          className={`h-4 rounded-full ${color}`}
          style={{ width: `${score}%` }}
        ></div>
      </div>
    </div>
  );
}

export default SkillMeter;