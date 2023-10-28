import { useState } from "react";
import "./App.css";

function App() {
  // let count = 0;
  const [count, setCount] = useState(0);

  const addValue = () => {
    console.log("djv");
    // count++;
    setCount(count + 1);
  };
  const subValue = () => {
    setCount(count - 1);
  };
  return (
    <>
      <h1>Counter : {count}</h1>
      <button onClick={addValue}>Increament</button>
      <button onClick={subValue}>Decreament</button>
    </>
  );
}

export default App;
