function DifficultySelector({ difficulty, setDifficulty }) {
  return (
    <div className="mt-6">
      <h2 className="font-bold text-lg mb-3">
        🎯 Difficulty Level
      </h2>

      <select
        value={difficulty}
        onChange={(e) => setDifficulty(e.target.value)}
        className="w-full p-3 border rounded-xl"
      >
        <option>Easy</option>
        <option>Medium</option>
        <option>Hard</option>
      </select>
    </div>
  );
}

export default DifficultySelector;