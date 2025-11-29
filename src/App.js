import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [minutes, setMinutes] = useState(0);
  const [sec, setSec] = useState("00");
  const [num, setNum] = useState(0);
  const [start, setStart] = useState(false);
  useEffect(() => {}, [start]);
  const stopWatch = () => {
    return;
    // if (sec >= 59) {
    //   setMinutes++;
    // } else {
    //   setNum(num++);
    //   setSec(`${num}`);
    // }
  };
  const reset = () => {
    setMinutes(0);
    setSec("00");
    setNum(0);
  };

  return (
    <div>
      <h1>Stopwatch</h1>
      <p>
        Time: {minutes}:{sec}
      </p>
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
