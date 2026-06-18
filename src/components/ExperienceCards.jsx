import {
  GraduationCap,
  TrendingUp,
  Rocket,
} from "lucide-react";

function ExperienceCards({ experience, setExperience }) {
  return (
    <div className="mt-8">
      <label className="font-semibold text-lg">
        Experience Level
      </label>

      <div className="grid md:grid-cols-3 gap-4 mt-4">

        <div
          onClick={() => setExperience("Fresher")}
          className={`p-5 rounded-2xl cursor-pointer transition-all ${
            experience === "Fresher"
              ? "border-2 border-purple-500 bg-purple-50"
              : "border"
          }`}
        >
          <GraduationCap
            className="text-purple-600 mb-3"
            size={28}
          />
          <h3 className="font-bold text-lg">Fresher</h3>
          <p className="text-gray-500">0-1 year</p>
        </div>

        <div
          onClick={() => setExperience("1-2 Years")}
          className={`p-5 rounded-2xl cursor-pointer transition-all ${
            experience === "1-2 Years"
              ? "border-2 border-purple-500 bg-purple-50"
              : "border"
          }`}
        >
          <TrendingUp
            className="text-purple-600 mb-3"
            size={28}
          />
          <h3 className="font-bold text-lg">1-2 Years</h3>
          <p className="text-gray-500">1-2 years</p>
        </div>

        <div
          onClick={() => setExperience("3+ Years")}
          className={`p-5 rounded-2xl cursor-pointer transition-all ${
            experience === "3+ Years"
              ? "border-2 border-purple-500 bg-purple-50"
              : "border"
          }`}
        >
          <Rocket
            className="text-purple-600 mb-3"
            size={28}
          />
          <h3 className="font-bold text-lg">3+ Years</h3>
          <p className="text-gray-500">Experienced</p>
        </div>

      </div>
    </div>
  );
}

export default ExperienceCards;