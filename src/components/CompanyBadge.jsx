function CompanyBadge({ company }) {
  let color = "bg-green-100 text-green-700";
  let level = "Easy";

  if (["TCS", "Infosys", "Wipro"].includes(company)) {
    level = "Easy";
  }

  if (["Accenture", "Capgemini"].includes(company)) {
    level = "Medium";
    color = "bg-yellow-100 text-yellow-700";
  }

  if (["Google", "Amazon", "Microsoft"].includes(company)) {
    level = "Hard";
    color = "bg-red-100 text-red-700";
  }

  return (
    <div
      className={`${color} px-4 py-2 rounded-xl font-bold inline-block`}
    >
      🏢 {company} • {level}
    </div>
  );
}

export default CompanyBadge;