import { useState, useEffect } from "react";
import Hero from "./components/Hero";
import RoleInput from "./components/RoleInput";
import ExperienceCards from "./components/ExperienceCards";
import ProgressBar from "./components/ProgressBar";
import QuestionCard from "./components/QuestionCard";
import AnswerBox from "./components/AnswerBox";
import FeedbackCard from "./components/FeedbackCard";
import Dashboard from "./components/Dashboard";
import HistoryCard from "./components/HistoryCard";
import ThemeToggle from "./components/ThemeToggle";
import CircularProgress from "./components/CircularProgress";
import SkillMeter from "./components/SkillMeter";
import ScoreCard from "./components/ScoreCard";
import CompanyCard from "./components/CompanyCard";
import CareerRecommendation from "./components/CareerRecommendation";
import InterviewHistory from "./components/InterviewHistory";
import MotivationalQuote from "./components/MotivationalQuote";
import FloatingStats from "./components/FloatingStats";
import PerformanceBadge from "./components/PerformanceBadge";
import ResultScreen from "./components/ResultScreen";
import { companies } from "./data/companies";
import { getBadge } from "./utils/badgeUtils";
import TechnicalScoreCard from "./components/TechnicalScoreCard";
import CommunicationScoreCard from "./components/CommunicationScoreCard";
import ConfidenceScoreCard from "./components/ConfidenceScoreCard";
import VoiceInput from "./components/VoiceInput";
import Timer from "./components/Timer";
import PerformanceChart from "./components/PerformanceChart";
import AnalyticsCard from "./components/AnalyticsCard";
import DownloadReport from "./components/DownloadReport";
import SearchBar from "./components/SearchBar";
import CompanySelector from "./components/CompanySelector";
import DifficultySelector from "./components/DifficultySelector";
import AchievementBadge from "./components/AchievementBadge";
import CompanyBadge from "./components/CompanyBadge";
import InterviewStats from "./components/InterviewStats";
import CareerInsights from "./components/CareerInsights";



function App(){
  const [experience, setExperience] = useState("Fresher");
  const [role, setRole] = useState("");
  const [company, setCompany] = useState("");
  const [questionList, setQuestionList] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answer, setAnswer] = useState("");
  const [feedback, setFeedback] = useState("");
  const [loading, setLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [score, setScore] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [difficulty, setDifficulty] = useState("Easy");
  const [loadingQuestions, setLoadingQuestions] = useState(false);
  const [loadingFeedback, setLoadingFeedback] = useState(false);

  const [history, setHistory] = useState(
    JSON.parse(localStorage.getItem("history")) || []
);
  const filteredHistory = history.filter((item) =>
  item.role.toLowerCase().includes(searchTerm.toLowerCase())
);
  const [communication, setCommunication] = useState(75);
  const [technical, setTechnical] = useState(80);
  const [confidence, setConfidence] = useState(70);
  const [streak, setStreak] = useState(
  Number(localStorage.getItem("streak")) || 0
);

  useEffect(() => {
    const savedHistory =
      JSON.parse(localStorage.getItem("history")) || [];

    setHistory(savedHistory);
  }, []);
  const badge = getBadge(score);
  const saveHistory = () => {
  const newItem = {
  role,
  score,
  technical,
  communication,
  confidence,
  date: new Date().toLocaleDateString(),
};

  const updatedHistory = [...history, newItem];

  setHistory(updatedHistory);

  localStorage.setItem(
    "history",
    JSON.stringify(updatedHistory)
  );
};
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
          company,
          difficulty,
        }),
      }
    );

    const data = await response.json();

console.log("Questions:", data.questions);
console.log("Type:", typeof data.questions);
console.log("Length:", data.questions.length);

setQuestionList(data.questions);

    

  } catch (error) {
  console.error(error);
  alert("Failed to generate questions.");
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
    setLoadingFeedback(true);

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

    setTechnical(data.technical);
    setCommunication(data.communication);
    setConfidence(data.confidence);

    setScore(
      Math.round(
        (data.technical +
          data.communication +
          data.confidence) / 3
      )
    );
  } catch (error) {
    console.error(error);
    alert("Failed to generate feedback");
  } finally {
    setLoadingFeedback(false);
  }
};

  const nextQuestion = () => {
  if (currentQuestion === questionList.length - 1) {
    const newItem = {
  role,
  score,
  technical,
  communication,
  confidence,
  date: new Date().toLocaleDateString(),
};

    const updatedHistory = [...history, newItem];

    setHistory(updatedHistory);

    localStorage.setItem(
      "history",
      JSON.stringify(updatedHistory)
    );
  }
  const newStreak = streak + 1;
setStreak(newStreak);
localStorage.setItem("streak", newStreak);

  if (currentQuestion < questionList.length - 1) {
    setCurrentQuestion(currentQuestion + 1);
    setAnswer("");
    setFeedback("");
  }
};

  const previousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setAnswer("");
      setFeedback("");
    }
  };

  

  return (
    <div
      className={`min-h-screen p-6 flex justify-center ${
        darkMode
          ? "bg-gray-900 text-white"
          : "bg-gradient-to-br from-purple-50 via-white to-blue-50"
      }`}
    >
      <FloatingStats
  score={score}
  streak={streak}
/>
      <ThemeToggle
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <div
        className={`w-full max-w-5xl rounded-3xl shadow-2xl p-10 ${
          darkMode ? "bg-gray-800" : "bg-white"
        }`}
      >
        <Hero />

        <RoleInput role={role} setRole={setRole} />
        <CompanySelector
  company={company}
  setCompany={setCompany}
/>
<CompanyBadge company={company} />
       <DifficultySelector
  difficulty={difficulty}
  setDifficulty={setDifficulty}
/>

        <ExperienceCards
          experience={experience}
          setExperience={setExperience}
        />

       <button
  onClick={generateQuestions}
  disabled={loading}
  className="bg-purple-600 text-white px-6 py-3 rounded-xl hover:scale-105 active:scale-95 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
>
  {loading ? "🤖 Generating Questions..." : "Generate Interview"}
</button>

        {questionList.length > 0 && (
          <div className="mt-10 border rounded-3xl p-8 bg-gray-50">

            <Dashboard
              score={score}
              darkMode={darkMode}
            />
            
            <div className="my-4 flex justify-center">
  <AchievementBadge score={score} />
</div>
            <PerformanceBadge score={score} />

            <ProgressBar
              currentQuestion={currentQuestion}
              totalQuestions={questionList.length}
            />
            <div className="flex justify-end mb-4">
    <Timer currentQuestion={currentQuestion} />
</div>

            {questionList[currentQuestion] && (
  <QuestionCard
    currentQuestion={currentQuestion}
    totalQuestions={questionList.length}
    question={questionList[currentQuestion]}
    darkMode={darkMode}
  />
  
)}


            <AnswerBox
  answer={answer}
  setAnswer={setAnswer}
  getFeedback={getFeedback}
  darkMode={darkMode}
  loadingFeedback={loadingFeedback}
/>
            <div className="mt-4">
  <VoiceInput setAnswer={setAnswer} />
</div>
            <div className="flex justify-between mt-8">
              <button
                onClick={previousQuestion}
                disabled={currentQuestion === 0}
                className="bg-gray-500 text-white px-6 py-3 rounded-xl"
              >
                ← Previous
              </button>

              <button
                onClick={nextQuestion}
                disabled={
                  currentQuestion === questionList.length - 1
                }
                className="bg-purple-600 text-white px-6 py-3 rounded-xl"
              >
                Next →
              </button>
            </div>

           <FeedbackCard
                feedback={feedback}
                darkMode={darkMode}
            />
            <ResultScreen
                score={score}
                 darkMode={darkMode}
                 technical={technical}
  communication={communication}
  confidence={confidence}
            />

            <SearchBar
  searchTerm={searchTerm}
  setSearchTerm={setSearchTerm}
/>
<InterviewStats
  history={history}
  streak={streak}
/>
<PerformanceChart
  history={history}
/>
<CareerInsights
  score={score}
  technical={technical}
  communication={communication}
  confidence={confidence}
/>
<HistoryCard
  history={filteredHistory}
  darkMode={darkMode}
/>

        

           {currentQuestion === questionList.length - 1 && feedback && (
                <>
                  <ResultScreen score={score} />
                  <DownloadReport
  role={role}
  company={company}
  difficulty={difficulty}
  score={score}
  technical={technical}
  communication={communication}
  confidence={confidence}
/>
                  <div className="grid md:grid-cols-3 gap-6 mt-8">
                  <PerformanceChart
  technical={technical}
  communication={communication}
  confidence={confidence}
/>

<AnalyticsCard history={history} />
  <TechnicalScoreCard
    technical={technical}
  />

  <CommunicationScoreCard
    communication={communication}
  />

  <ConfidenceScoreCard
    confidence={confidence}
  />

</div>
                  <HistoryCard history={history} />
                </>
              )}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;