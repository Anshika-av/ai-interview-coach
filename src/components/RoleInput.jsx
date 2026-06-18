import { Briefcase } from "lucide-react";

function RoleInput({ role, setRole }) {
  return (
    <div className="mt-10">
      <label className="font-semibold text-lg">
        Job Role
      </label>

      <div className="relative mt-2">
        <Briefcase
          className="absolute left-4 top-4 text-gray-400"
          size={20}
        />

        <input
          type="text"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          placeholder="Frontend Developer, Data Scientist..."
          className="w-full border-2 border-purple-200 rounded-xl py-4 pl-12 pr-4 outline-none focus:border-purple-500"
        />
      </div>
    </div>
  );
}

export default RoleInput;