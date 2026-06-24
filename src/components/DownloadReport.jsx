import { jsPDF } from "jspdf";

function DownloadReport({
  score,
  technical,
  communication,
  confidence,
}) {

  const downloadPDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(20);
    doc.text("AI Interview Coach Report", 20, 20);

    doc.setFontSize(14);
    doc.text(`Overall Score: ${score}/100`, 20, 50);
    doc.text(`Technical Skills: ${technical}%`, 20, 70);
    doc.text(`Communication: ${communication}%`, 20, 90);
    doc.text(`Confidence: ${confidence}%`, 20, 110);

    doc.text(
      `Date: ${new Date().toLocaleDateString()}`,
      20,
      140
    );

    doc.save("Interview_Report.pdf");
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