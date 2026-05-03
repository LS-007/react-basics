import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const handleDecrement = () => {
    setCounter(counter - 1);
  };
  const handleIncrement = () => {
    setCounter(counter + 1);
  };
  return (
    <>
      <div>
        <div>{counter}</div>
        <button onClick={handleIncrement}>increment</button>
        <button onClick={handleDecrement}>increment</button>
      </div>
    </>
  );
}

export default App;
