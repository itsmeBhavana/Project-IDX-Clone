import { useState } from "react";
import "./App.css";
import usePing from "./hooks/apis/queries/usePing";
import { PingComponent } from "./components/atoms/pingComponent";

function App() {
  const [isVisible, setIsVisible] = useState();
  return (
    <div>
      <button
        onClick={() => {
          setIsVisible(!isVisible);
        }}
      >
        Toggle
      </button>
      {isVisible && <PingComponent />}
    </div>
  );
}

export default App;
