import { useEffect, useState } from "react";

function Timer({ currentQuestion }) {
  const [seconds, setSeconds] = useState(60);

 useEffect(() => {
  setSeconds(60);

  const interval = setInterval(() => {
    setSeconds((prev) => {
      if (prev === 0) return 0;
      return prev - 1;
    });
  }, 1000);

  return () => clearInterval(interval);
}, [currentQuestion]);

  return (
  <div
    className={`px-5 py-3 rounded-2xl font-bold text-xl ${
      seconds > 30
        ? "bg-green-100 text-green-600"
        : seconds > 10
        ? "bg-orange-100 text-orange-600"
        : "bg-red-100 text-red-600"
    }`}
  >
    ⏱ {seconds}s
  </div>
);
}

export default Timer;