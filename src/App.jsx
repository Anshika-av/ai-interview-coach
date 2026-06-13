import { useState } from "react";

function App() {
  const [role, setRole] = useState("");

  return (
    <div>
      <h1>AI Interview Coach</h1>

      <input
        type="text"
        placeholder="Enter role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      />

      <br />
      <br />

      <select>
        <option>Fresher</option>
        <option>1-2 Years</option>
        <option>3+ Years</option>
      </select>

      <br />
      <br />

      <button>Generate Questions</button>
    </div>
  );
}

export default App;