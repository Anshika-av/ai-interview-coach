import CircularProgress from "./CircularProgress";
import StrengthCard from "./StrengthCard";
import WeaknessCard from "./WeaknessCard";
import SkillMeter from "./SkillMeter";
import CareerRecommendation from "./CareerRecommendation";
import { companies } from "../data/companies";
function ResultScreen({ score }) {
    const matchedCompanies = companies;
  let grade = "C";
  let stars = "⭐⭐";
  let badge = "Beginner 🥉";
  let role = "Junior Developer";
  let companyList = ["Wipro", "Cognizant"];

  if (score >= 50) {
    grade = "B";
    stars = "⭐⭐⭐";
    badge = "Intermediate 🥈";
    role = "Frontend Developer";
    companyList = ["TCS", "Infosys"];
  }

  if (score >= 75) {
    grade = "A";
    stars = "⭐⭐⭐⭐";
    badge = "Advanced 🥇";
    role = "React Developer";
    companyList = ["Accenture", "Capgemini"];
  }

  if (score >= 90) {
    grade = "A+";
    stars = "⭐⭐⭐⭐⭐";
    badge = "Expert 👑";
    role = "Software Engineer";
    companyList = ["Google", "Microsoft"];
  }

  return (
    <div className="bg-white rounded-3xl shadow-2xl p-8 mt-8">

      <h1 className="text-4xl font-bold text-center text-green-600">
        🎉 Interview Completed
      </h1>

      <div className="mt-8 text-center">
        <div className="mt-8 space-y-6">

  {/* Communication */}
  <div>
    <div className="flex justify-between mb-1">
      <span className="font-semibold">Communication</span>
      <span>80%</span>
    </div>

    <div className="w-full bg-gray-200 rounded-full h-3">
      <div
        className="bg-blue-500 h-3 rounded-full"
        style={{ width: "80%" }}
      ></div>
    </div>
  </div>

  {/* Technical */}
  <div>
    <div className="flex justify-between mb-1">
      <span className="font-semibold">Technical Skills</span>
      <span>90%</span>
    </div>

    <div className="w-full bg-gray-200 rounded-full h-3">
      <div
        className="bg-green-500 h-3 rounded-full"
        style={{ width: "90%" }}
      ></div>
    </div>
  </div>

  {/* Confidence */}
  <div>
    <div className="flex justify-between mb-1">
      <span className="font-semibold">Confidence</span>
      <span>75%</span>
    </div>

    <div className="w-full bg-gray-200 rounded-full h-3">
      <div
        className="bg-purple-500 h-3 rounded-full"
        style={{ width: "75%" }}
      ></div>
    </div>
  </div>

</div>

        <CircularProgress score={score}/>

        <p className="mt-3 text-2xl">
          Grade : {grade}
        </p>

        <div className="text-4xl mt-4">
          {stars}
        </div>

        <div className="mt-5 text-xl font-bold text-purple-600">
          {badge}
        </div>

        <div className="mt-8">
          <h2 className="font-bold text-2xl text-purple-600">
            Recommended Role
          </h2>


          <div className="mt-4 bg-purple-100 p-5 rounded-2xl">
  <h3 className="font-bold text-xl">
    🚀 Career Match
  </h3>

  <p className="mt-2 text-lg">
    {role}
  </p>

  <p className="text-gray-600 mt-2">
    Based on your interview performance and communication skills.
  </p>
</div>
        </div>

        <div className="mt-8">
          <h2 className="font-bold text-2xl text-purple-600">
            Suitable Companies
          </h2>

          <div className="grid md:grid-cols-2 gap-4 mt-5">

  {companyList.map((company,index)=>(
    <div
      key={index}
      className="bg-purple-100 rounded-2xl p-5 shadow"
    >
      <h2 className="font-bold text-xl">
        🏢 {company}
      </h2>

      <p className="text-gray-600 mt-2">
        Good match according to your skills.
      </p>
    </div>
    
  ))}

</div>
<div className="mt-10">
  <StrengthCard score={score} />
  <WeaknessCard score={score} />
</div>
<div className="grid md:grid-cols-3 gap-6 mt-10">

  <SkillMeter
    title="Communication"
    score={80}
    color="bg-blue-500"
  />

  <SkillMeter
    title="Technical"
    score={90}
    color="bg-green-500"
  />

  <SkillMeter
    title="Confidence"
    score={75}
    color="bg-purple-500"
  />

</div>
<CareerRecommendation score={score} />
        </div>

      </div>
    </div>
  );
}

export default ResultScreen;