import './App.css';
import FreeCodeCamp_logo from './img/FreeCodeCamp_logo.png';
import { Button } from './components/button';

function App() {
  const manageClick = () => {
    console.log('Click');
  };

  const restartCounter = () => {
    console.log('restart');
  };

  return (
    <div className='App'>
      <div className='freecodecamp-logo-container'>
        <img
          className='freecodecamp-logo'
          src={FreeCodeCamp_logo}
          alt='freecodecamp logo'
        />
      </div>
      <div className='buttons-container'>
        <Button text='click' isClickButton={true} manageClick={manageClick} />
        <Button
          text='restart'
          isClickButton={false}
          manageClick={restartCounter}
        />
      </div>

      <div className='counter-container'></div>
    </div>
  );
}

export default App;
