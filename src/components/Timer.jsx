import { useEffect, useState } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(60);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => {
        if (prev === 0) return 0;
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-red-100 text-red-600 px-5 py-3 rounded-2xl font-bold text-xl">
      ⏱ {seconds}s
    </div>
  );
}

export default Timer;