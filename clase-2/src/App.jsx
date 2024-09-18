import { useState } from "react";

import Button from "./componets/Button";
import Counter from "./componets/Counter";

function App() {
  const [clicks, setClicks] = useState(0);

  function handlePlus() {
    setClicks(clicks + 1);
  }

  function handleRest() {
    setClicks(clicks - 1);
  }

  function handleReset() {
    setClicks(0);
  }

  return (
    <div className="h-screen flex flex-col items-center justify-center gap-6">
      <Counter numClicks={clicks} />
      <Button text="Suma" handleClick={handlePlus} />
      <Button text="Resta" handleClick={handleRest} />
      <Button text="Reset" handleClick={handleReset} />
    </div>
  );
}

export default App;
