import { jsPDF } from "jspdf";

function DownloadReport({
  role,
  company,
  difficulty,
  score,
  technical,
  communication,
  confidence,
}) {

  const downloadPDF = () => {
  const doc = new jsPDF();

  // Title
  doc.setFontSize(22);
  doc.setTextColor(88, 28, 135);
  doc.text("AI Interview Coach Report", 20, 20);

  // Divider
  doc.setDrawColor(180);
  doc.line(20, 25, 190, 25);

  // Candidate Details
  doc.setFontSize(15);
  doc.setTextColor(0);

  doc.text(`Role: ${role}`, 20, 40);
  doc.text(`Company: ${company || "General Interview"}`, 20, 50);
  doc.text(`Difficulty: ${difficulty}`, 20, 60);
  doc.text(`Date: ${new Date().toLocaleDateString()}`, 20, 70);

  // Score
  doc.setFontSize(18);
  doc.setTextColor(0, 102, 204);
  doc.text(`Overall Score: ${score}/100`, 20, 90);

  // Skills
  doc.setFontSize(14);
  doc.setTextColor(0);

  doc.text(`Technical: ${technical}%`, 20, 110);
  doc.text(`Communication: ${communication}%`, 20, 120);
  doc.text(`Confidence: ${confidence}%`, 20, 130);

  // Badge
  let badge = "🥉 Beginner";

  if (score >= 50) badge = "🥈 Intermediate";
  if (score >= 75) badge = "🥇 Advanced";
  if (score >= 90) badge = "👑 Expert";

  doc.setFontSize(16);
  doc.setTextColor(34, 139, 34);
  doc.text(`Achievement: ${badge}`, 20, 150);

  // Recommendation
  doc.setFontSize(15);
  doc.setTextColor(128, 0, 128);
  doc.text("Recommendation", 20, 170);

  doc.setFontSize(12);
  doc.setTextColor(0);

  if (score >= 90) {
    doc.text(
      "Excellent performance. Ready for top product companies.",
      20,
      180
    );
  } else if (score >= 75) {
    doc.text(
      "Strong interview skills. Keep practicing advanced questions.",
      20,
      180
    );
  } else {
    doc.text(
      "Focus on fundamentals and continue mock interviews.",
      20,
      180
    );
  }

  doc.save("AI_Interview_Report.pdf");
};
  return (
    <div className="mt-8 flex justify-center">
      <button
        onClick={downloadPDF}
        className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow"
      >
        📄 Download Report
      </button>
    </div>
  );
}

export default DownloadReport;