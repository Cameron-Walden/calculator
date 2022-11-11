import { useState } from 'react';
import ButtonContainer from './components/ButtonContainer';
import Screen from './components/Screen';

function App() {
  const [calculator, setCalculator] = useState({
    sign: '',
    number: 0,
    reset: 0
  });

  return (
    <div className="App">
      <Screen calculator={calculator}/>
      <ButtonContainer calculator={calculator} setCalculator={setCalculator}/>
    </div>
  );
}

export default App;
