import { Mic, Square } from "lucide-react";
import { useRef, useState } from "react";

function VoiceInput({ setAnswer }) {
  const [isListening, setIsListening] = useState(false);
  const recognitionRef = useRef(null);

  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    return (
      <p className="text-red-500">
        Speech Recognition is not supported in this browser.
      </p>
    );
  }

  const startListening = () => {
    const recognition = new SpeechRecognition();

    recognitionRef.current = recognition;

    recognition.lang = "en-US";
    recognition.continuous = false;
    recognition.interimResults = false;

    setIsListening(true);

    recognition.onresult = (event) => {
      const text = event.results[0][0].transcript;

      setAnswer((prev) =>
        prev ? prev + " " + text : text
      );
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.onerror = (event) => {
      console.error(event.error);
      setIsListening(false);
    };

    recognition.start();
  };

  const stopListening = () => {
    recognitionRef.current?.stop();
    setIsListening(false);
  };

  return (
    <button
      onClick={
        isListening
          ? stopListening
          : startListening
      }
      className={`px-6 py-3 rounded-xl flex items-center gap-2 text-white transition-all duration-300 ${
        isListening
          ? "bg-red-600 animate-pulse"
          : "bg-red-500 hover:bg-red-600"
      }`}
    >
      {isListening ? (
        <>
          <Square size={18} />
          Listening...
        </>
      ) : (
        <>
          <Mic size={20} />
          Speak Answer
        </>
      )}
    </button>
  );
}

export default VoiceInput;