import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [seconds, setSeconds] = useState(0);
  const [start, setStart] = useState(false);
  useEffect(() => {
    let intervalID;
    if (start) {
      intervalID = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
    }
    return () => clearInterval(intervalID); // clearInterval (null)
  }, [start]);
  const reset = () => {
    setStart(false);
    setSeconds(0);
  };
  const stopWatchFormat = (s) => {
    const minutes = Math.floor(s / 60);
    const remainingSeconds = s % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };
  return (
    <div>
      <h1>Stopwatch</h1>
      <p>Time: {stopWatchFormat(seconds)}</p>
      {start ? (
        <button onClick={() => setStart(false)}>Stop</button>
      ) : (
        <button onClick={() => setStart(true)}>Start</button>
      )}
      <button onClick={() => reset()}>Reset</button>
    </div>
  );
}

export default App;
