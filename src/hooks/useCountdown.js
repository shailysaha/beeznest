import { useEffect, useState } from "react";

export default function useCountdown(initialSeconds = 30) {
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    if (seconds <= 0) return;

    const timer = setInterval(() => {
      setSeconds((current) => current - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [seconds]);

  function restart() {
    setSeconds(initialSeconds);
  }

  return {
    seconds,
    canResend: seconds === 0,
    restart,
  };
}