import { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    const webgazer = window.webgazer;
    webgazer
      .setGazeListener(function (data, clock) {
        console(data, clock);
      })
      .begin();
  });
  return (
    <div className="App">
      Welcome to Avanoa
      <br></br>
      Developed by SD09
    </div>
  );
}

export default App;
