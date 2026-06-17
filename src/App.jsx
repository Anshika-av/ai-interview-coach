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
  const [answer, setAnswer] = useState("");
  const [feedback, setFeedback] = useState("");
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

      setQuestions(data.questions);
      setFeedback("");
    } catch (error) {
      console.error(error);
      alert("Failed to generate questions");
    } finally {
      setLoading(false);
    }
  };

  const getFeedback = async () => {
    if (!answer) {
      alert("Please enter an answer");
      return;
    }

    try {
      const response = await fetch(
        "http://127.0.0.1:3001/feedback",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            answer,
          }),
        }
      );

      const data = await response.json();

      setFeedback(data.feedback);
    } catch (error) {
      console.error(error);
      alert("Failed to generate feedback");
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
            AI Interview <span className="text-purple-600">Coach</span>
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
          <label className="font-semibold text-lg">Job Role</label>

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
              <h3 className="font-bold text-lg">Fresher</h3>
              <p className="text-gray-500">0 - 1 year</p>
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
              <p className="text-gray-500">1 - 2 years</p>
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

        {/* Generate Questions */}
        <button
          onClick={generateQuestions}
          disabled={loading}
          className="w-full mt-8 bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 rounded-xl text-lg font-semibold"
        >
          {loading
            ? "Generating Questions..."
            : "✨ Generate Interview Questions"}
        </button>

        {/* Questions */}
        {questions && (
          <div className="mt-10 border rounded-2xl p-6 bg-gray-50">
            <h2 className="text-2xl font-bold text-purple-600 mb-4">
              Generated Questions
            </h2>

            <pre className="whitespace-pre-wrap">
              {questions}
            </pre>

            {/* Answer Box */}
            <div className="mt-8">
              <label className="font-bold text-2xl">
                Your Answer
              </label>

              <textarea
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                placeholder="Write your answer here..."
                className="w-full border rounded-xl p-4 h-40 mt-3"
              />

              <button
                onClick={getFeedback}
                className="mt-4 bg-green-600 text-white px-6 py-3 rounded-xl"
              >
                🤖 Get AI Feedback
              </button>
            </div>

            {/* Feedback */}
            {feedback && (
              <div className="mt-8 border rounded-xl p-5 bg-white">
                <h2 className="text-2xl font-bold text-green-600 mb-4">
                  AI Feedback
                </h2>

                <pre className="whitespace-pre-wrap">
                  {feedback}
                </pre>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;