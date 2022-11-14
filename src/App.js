import { useState } from 'react';
import ButtonContainer from './components/buttonContainer/ButtonContainer';
import Screen from './components/screen/Screen';
import './App.css'

function App() {
  const [calculator, setCalculator] = useState({
    sign: '',
    number: 0,
    reset: 0
  });

  return (
    <div className="calcWrapper">
      <Screen calculator={calculator}/>
      <ButtonContainer calculator={calculator} setCalculator={setCalculator}/>
    </div>
  );
}

export default App;
