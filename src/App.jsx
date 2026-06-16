import { useState } from "react";
import {
  Briefcase,
  GraduationCap,
  Rocket,
  TrendingUp,
  Sparkles,
} from "lucide-react";

function App() {
  const [experience, setExperience] = useState("Fresher");
  const [role, setRole] = useState("");
  const [questions, setQuestions] = useState("");
  const [loading, setLoading] = useState(false);

  const generateQuestions = async () => {
    if (!role) {
      alert("Please enter a job role");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        "http://127.0.0.1:3001/generate-questions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            role,
            experience,
          }),
        }
      );

      const data = await response.json();

console.log("Backend Response:", data);

if (!response.ok) {
  throw new Error(data.error || "Backend Error");
}

setQuestions(data.questions);
    } catch (error) {
  console.error(error);
  alert(error.message);

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 flex items-center justify-center p-6">
      <div className="bg-white w-full max-w-5xl rounded-3xl shadow-2xl p-10">
        
        {/* Hero */}
        <div className="text-center">
          <div className="w-24 h-24 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Sparkles size={40} className="text-purple-600" />
          </div>

          <h1 className="text-6xl font-bold mb-4">
            AI Interview{" "}
            <span className="text-purple-600">Coach</span>
          </h1>

          <p className="text-gray-500 text-xl mb-6">
            Practice smarter. Get better. Land your dream job.
          </p>

          <div className="inline-block bg-purple-100 text-purple-700 px-5 py-2 rounded-full font-medium">
            ✨ AI-generated questions & instant feedback
          </div>
        </div>

        {/* Job Role */}
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

        {/* Experience */}
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
              <h3 className="font-bold text-lg">
                Fresher
              </h3>
              <p className="text-gray-500">
                0 - 1 year
              </p>
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
              <h3 className="font-bold text-lg">
                1-2 Years
              </h3>
              <p className="text-gray-500">
                1 - 2 years
              </p>
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
              <h3 className="font-bold text-lg">
                3+ Years
              </h3>
              <p className="text-gray-500">
                Experienced
              </p>
            </div>
          </div>
        </div>

        {/* Generate Button */}
        <button
          onClick={generateQuestions}
          disabled={loading}
          className="w-full mt-8 bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 rounded-xl text-lg font-semibold hover:scale-[1.02] transition disabled:opacity-50"
        >
          {loading
            ? "Generating Questions..."
            : "✨ Generate Interview Questions"}
        </button>

        {/* Selected Info */}
        <div className="mt-6 text-center text-gray-600">
          Selected Role: <b>{role || "Not Selected"}</b>
          <br />
          Experience: <b>{experience}</b>
        </div>

        {/* Questions */}
        {questions && (
          <div className="mt-10 bg-gray-50 border rounded-2xl p-6">
            <h2 className="text-2xl font-bold text-purple-600 mb-4">
              Generated Interview Questions
            </h2>

            <pre className="whitespace-pre-wrap text-gray-700 leading-8">
              {questions}
            </pre>
          </div>
        )}

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-4 mt-10">
          <div className="bg-gray-50 p-4 rounded-xl">
            <h3 className="font-semibold text-purple-600">
              Smart Questions
            </h3>
            <p className="text-gray-500 text-sm mt-1">
              AI generates role-specific interview questions.
            </p>
          </div>

          <div className="bg-gray-50 p-4 rounded-xl">
            <h3 className="font-semibold text-green-600">
              Instant Feedback
            </h3>
            <p className="text-gray-500 text-sm mt-1">
              Get detailed feedback on your answers.
            </p>
          </div>

          <div className="bg-gray-50 p-4 rounded-xl">
            <h3 className="font-semibold text-blue-600">
              Track Progress
            </h3>
            <p className="text-gray-500 text-sm mt-1">
              Monitor improvement over time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;