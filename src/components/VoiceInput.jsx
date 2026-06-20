import { Mic } from "lucide-react";

function VoiceInput({ setAnswer }) {

  const startListening = () => {

    const recognition = new window.webkitSpeechRecognition();

    recognition.lang = "en-US";

    recognition.onresult = (event) => {

      const text = event.results[0][0].transcript;

      setAnswer((prev) => prev + " " + text);

    };

    recognition.start();
  };

  return (
    <button
      onClick={startListening}
      className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-xl flex items-center gap-2"
    >
      <Mic size={20} />
      Speak Answer
    </button>
  );
}

export default VoiceInput;