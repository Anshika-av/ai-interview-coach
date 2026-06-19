function CareerRecommendation({ score }) {

  let role = "";

  if (score < 40) {
    role = "Junior Frontend Developer";
  }

  else if (score < 60) {
    role = "Frontend Developer";
  }

  else if (score < 80) {
    role = "React Developer";
  }

  else {
    role = "Software Engineer";
  }

  return (
    <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-3xl p-8 mt-10 shadow-xl">

      <h1 className="text-3xl font-bold">
        🚀 AI Career Recommendation
      </h1>

      <h2 className="mt-6 text-2xl font-semibold">
        Recommended Role:
      </h2>

      <p className="text-xl mt-3">
        {role}
      </p>

      <p className="mt-5 opacity-90">
        Based on your interview performance and communication skills.
      </p>

    </div>
  );
}

export default CareerRecommendation;