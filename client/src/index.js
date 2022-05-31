import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));

function App() {
  const [year, setYear] = useState(2050);
  const [manager, setManager] = useState("Alex");
  const [status, setStatus] = useState("Open");
  return (
    <>
      <div>
        <h1>{year}</h1>
        <button onClick={() => setYear(year + 1)}>New Year</button>
      </div>
      <div>
        <h1>Manager on duty: {manager}</h1>
        <button onClick={() => setManager("Rachel")}>New Manager</button>
      </div>
      <div>
        <h1>Status: {status}</h1>
        <button onClick={() => setStatus("Open")}>Open</button>
        <button onClick={() => setStatus("Back in 5")}>Break</button>
        <button onClick={() => setStatus("Closed")}>Closed</button>
      </div>
    </>
  );
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
