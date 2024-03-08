import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const increase = () => {
    // if (count >= 20) {
    // } else {
    //   setCount(count + 1);
    // }
    count >= 20 ? count : setCount(count + 1);
  };
  const decrease = () => {
    count <= 0 ? count : setCount(count - 1);
  };
  return (
    <>
      <h1>Counter App</h1>
      <h3>Value: {count}</h3>
      <button onClick={increase}>Increase+</button>
      <button onClick={decrease}>Decrease-</button>
    </>
  );
}

export default App;
