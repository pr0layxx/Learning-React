import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);

  const addValue = () => {
    if (counter >= 20) {
      return;
    } else {
      counter = counter + 1;
    }
    console.log("clicked", counter);
    setCounter(counter);
  };

  const removeValue = () => {
    if (counter <= 0) {
      return;
    } else {
      counter = counter - 1;
    }
    console.log("clicked", counter);
    setCounter(counter);
  };
  return (
    <>
      <h1> Chai aur React </h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <button onClick={removeValue}>Remove value</button>
    </>
  );
}

export default App;
