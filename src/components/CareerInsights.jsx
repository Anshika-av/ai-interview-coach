function CareerInsights({
  score,
  technical,
  communication,
  confidence,
}) {
  let readiness = "⭐";
  let companies = ["TCS", "Infosys"];
  let goal =
    "Practice basic interview questions.";

  if (score >= 60) {
    readiness = "⭐⭐⭐";
    companies = [
      "Accenture",
      "Capgemini",
      "Cognizant",
    ];
    goal =
      "Strengthen technical concepts and confidence.";
  }

  if (score >= 80) {
    readiness = "⭐⭐⭐⭐⭐";
    companies = [
      "Amazon",
      "Microsoft",
      "Google",
    ];
    goal =
      "You're ready for product-based company interviews.";
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 mt-8 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
      <h2 className="text-2xl font-bold text-purple-600 mb-5">
        🎯 Career Insights
      </h2>

      <div className="space-y-5">

        <div>
          <h3 className="font-bold">
            Interview Readiness
          </h3>

          <p className="text-yellow-500 text-2xl">
            {readiness}
          </p>
        </div>

        <div>
          <h3 className="font-bold">
            Recommended Companies
          </h3>

          <ul className="list-disc ml-6 mt-2">
            {companies.map((company) => (
              <li key={company}>
                {company}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-bold">
            Skills to Improve
          </h3>

          <ul className="list-disc ml-6 mt-2">

            {technical < 80 && (
              <li>Technical Skills</li>
            )}

            {communication < 80 && (
              <li>Communication</li>
            )}

            {confidence < 80 && (
              <li>Confidence</li>
            )}

          </ul>
        </div>

        <div>
          <h3 className="font-bold">
            Next Goal
          </h3>

          <p>{goal}</p>
        </div>

      </div>
    </div>
  );
}

export default CareerInsights;