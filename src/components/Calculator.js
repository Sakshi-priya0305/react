import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [currentOperand, setCurrentOperand] = useState('');
  const [prevOperand, setPrevOperand] = useState('');
  const [operation, setOperation] = useState(undefined);

  const clear = () => {
    setCurrentOperand('');
    setPrevOperand('');
    setOperation(undefined);
  };

  const deleteLast = () => {
    setCurrentOperand(prev => prev.toString().slice(0, -1));
  };

  const appendNumber = (number) => {
    if (number === '.' && currentOperand.includes('.')) return;
    setCurrentOperand(prev => prev.toString() + number.toString());
  };

  const chooseOperation = (op) => {
    if (currentOperand === '') return;
    if (prevOperand !== '') {
      compute();
    }
    setOperation(op);
    setPrevOperand(currentOperand);
    setCurrentOperand('');
  };

  const compute = () => {
    let computation;
    const prev = parseFloat(prevOperand);
    const current = parseFloat(currentOperand);
    if (isNaN(prev) || isNaN(current)) return;
    
    switch (operation) {
      case '+':
        computation = prev + current;
        break;
      case '-':
        computation = prev - current;
        break;
      case '*':
        computation = prev * current;
        break;
      case '÷':
        computation = prev / current;
        break;
      default:
        return;
    }
    setCurrentOperand(computation);
    setOperation(undefined);
    setPrevOperand('');
  };

  const handleEquals = () => {
    compute();
  };

  const handleKeyPress = (e) => {
    if (e.key >= '0' && e.key <= '9') {
      appendNumber(e.key);
    } else if (e.key === '.') {
      appendNumber('.');
    } else if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/') {
      chooseOperation(e.key);
    } else if (e.key === 'Enter' || e.key === '=') {
      handleEquals();
    } else if (e.key === 'Escape') {
      clear();
    } else if (e.key === 'Backspace') {
      deleteLast();
    }
  };

  React.useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [currentOperand, prevOperand, operation]);

  return (
    <div className="calculator-page">
      <div className="calculator-container">
      <div className="heading">
        <h1>Calculator</h1>
      </div>
      <div className="Calculator-grid">
        <div className="output">
          <div className="previous-operand">
            {operation != null ? `${prevOperand} ${operation}` : ''}
          </div>
          <div className="current-operand">
            {currentOperand || '0'}
          </div>
        </div>

        <button onClick={clear} className="span-two">AC</button>
        <button onClick={deleteLast}>DEL</button>
        <button onClick={() => chooseOperation('÷')}>÷</button>
        
        <button onClick={() => appendNumber('7')}>7</button>
        <button onClick={() => appendNumber('8')}>8</button>
        <button onClick={() => appendNumber('9')}>9</button>
        <button onClick={() => chooseOperation('*')}>*</button>
        
        <button onClick={() => appendNumber('4')}>4</button>
        <button onClick={() => appendNumber('5')}>5</button>
        <button onClick={() => appendNumber('6')}>6</button>
        <button onClick={() => chooseOperation('+')}>+</button>
        
        <button onClick={() => appendNumber('1')}>1</button>
        <button onClick={() => appendNumber('2')}>2</button>
        <button onClick={() => appendNumber('3')}>3</button>
        <button onClick={() => chooseOperation('-')}>-</button>
        
        <button onClick={() => appendNumber('.')}>.</button>
        <button onClick={() => appendNumber('0')}>0</button>
        <button onClick={handleEquals} className="span-two">=</button>
      </div>
      </div>
    </div>
  );
};

export default Calculator;
