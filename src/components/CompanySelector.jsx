function CompanySelector({ company, setCompany }) {
  return (
    <div className="mt-6">
      <h2 className="font-bold text-lg mb-3">
        🏢 Select Company
      </h2>

      <select
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        className="w-full p-3 border rounded-xl"
      >
        <option value="">General Interview</option>
        <option>Google</option>
        <option>Amazon</option>
        <option>Microsoft</option>
        <option>TCS</option>
        <option>Infosys</option>
        <option>Accenture</option>
      </select>
    </div>
  );
}

export default CompanySelector;