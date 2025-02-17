import React from "react";
// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";

function getTitle(title) {
  return title;
}

const title = "React";

function App() {
  // const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Hello {getTitle("React")}</h1>
      {React.createElement("h1", null, `Hello from ${title}`)}
      {React.createElement("h1", { id: 1 }, `Hello from ${title}`)}
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />
    </div>
  );
}

export default App;
