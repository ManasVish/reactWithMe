import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // let counter = 5;

  let [counter, setCounter] = useState(15);

  return (
    <>
      <h1>Manas with React</h1>
      <h2>Count: {counter} </h2>

      <button
        onClick={() => {
          setCounter(++counter);
          console.log(counter);
        }}
      >
        Add value
      </button>
      <button
        onClick={() => {
          setCounter(--counter);
          console.log(counter);
        }}
      >
        Remove value
      </button>
    </>
  );
}

export default App;
