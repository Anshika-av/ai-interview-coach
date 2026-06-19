export const companies = (score) => {

  if (score < 40) {
    return [
      "TCS",
      "Wipro",
      "Tech Mahindra"
    ];
  }

  else if (score < 60) {
    return [
      "Infosys",
      "Capgemini",
      "HCL"
    ];
  }

  else if (score < 80) {
    return [
      "Accenture",
      "Cognizant",
      "Deloitte"
    ];
  }

  else {
    return [
      "Microsoft",
      "Amazon",
      "Google"
    ];
  }
};