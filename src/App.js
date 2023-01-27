import './App.css';
import FreeCodeCamp_logo from './img/FreeCodeCamp_logo.png';
import { Button } from './components/button';
import { Counter } from './components/counter';
import { useState } from 'react';

function App() {
  const [numClicks, setNumClicks] = useState(0);

  const manageClick = () => {
    setNumClicks(numClicks + 1);
  };

  const restartCounter = () => {
    setNumClicks(0);
  };

  return (
    <div className="App">
      <div className="freecodecamp-logo-container">
        <img
          className="freecodecamp-logo"
          src={FreeCodeCamp_logo}
          alt="freecodecamp logo"
        />
      </div>

      <div className="buttons-container">
        <Counter numClicks={numClicks} />
        <Button text="click" isClickButton={true} manageClick={manageClick} />
        <Button
          text="restart"
          isClickButton={false}
          manageClick={restartCounter}
        />
      </div>
    </div>
  );
}

export default App;
