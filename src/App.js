import './App.css';
import myLogo from './images/LogoBlanco.png';
import Boton from './components/boton.js';
import Pantalla from './components/pantalla.js';
import BotonClear from './components/botonclear.js';
import { useState } from 'react';
import { evaluate } from 'mathjs';


function App() {

  const [input, setInput] = useState('');

  const addInput = val => {
    setInput(input + val);
  };

  const calcResult = () => {
    if (input) {
      setInput(evaluate(input));
    } else {
      alert("Por favor ingrese valores para realizar los cálculos");
    }
    
  };

  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img 
        src={myLogo}
        className='my-logo'
        alt='Logo de mi Calculadora'
         />
      </div>
      <div className='container-calculator'>
        <Pantalla input={input}/>
        <div className='row'>
          <Boton driveClick={addInput}>7</Boton>
          <Boton driveClick={addInput}>8</Boton>
          <Boton driveClick={addInput}>9</Boton>
          <Boton driveClick={addInput}>/</Boton>
        </div>
        <div className='row'>
          <Boton driveClick={addInput}>4</Boton>
          <Boton driveClick={addInput}>5</Boton>
          <Boton driveClick={addInput}>6</Boton>
          <Boton driveClick={addInput}>*</Boton>
        </div>
        <div className='row'>
          <Boton driveClick={addInput}>1</Boton>
          <Boton driveClick={addInput}>2</Boton>
          <Boton driveClick={addInput}>3</Boton>
          <Boton driveClick={addInput}>-</Boton>
        </div>
        <div className='row'>
          <Boton driveClick={addInput}>0</Boton>
          <Boton driveClick={addInput}>.</Boton>
          <Boton driveClick={calcResult}>=</Boton>
          <Boton driveClick={addInput}>+</Boton>
        </div>
        <div className='row'>
          <BotonClear driveClear={() => setInput('')}>
            Clear
          </BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
