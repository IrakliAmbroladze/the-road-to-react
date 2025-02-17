// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";

const title = "React";
function App() {
  // const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Hello {title}</h1>
      <label htmlFor="input">My input: </label>
      <input id="input"></input>
    </div>
  );
}

export default App;
