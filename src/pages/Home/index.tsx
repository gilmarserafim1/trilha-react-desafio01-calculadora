import React, { useState } from 'react';
import Button from '../../components/Button';
import ZeroButton from '../../components/ZeroButton';
import './styles.css';
import Display from '../../components/Display';

function Home() {

  const [number, setNumber] = useState('');
  const [firstNumber, setFirstNumber] = useState(0);
  const [operation, setOperation] = useState('');

  const handleNumber = (n: number) => {
    setNumber(prev => prev + n.toString());
  }

  const handleEqual = () => {
    switch(operation){
      case '+':
        let sum: number = firstNumber + Number(number);
        setNumber(() => sum.toString());
        break;
      case '-':
        let sub: number = firstNumber - Number(number);
        setNumber(() => sub.toString());
        break;
      case '*':
        let mult: number = firstNumber * Number(number);
        setNumber(() => mult.toString());
        break;
      case '/':
        let div: number = firstNumber / Number(number);
        setNumber(() => div.toString());
        break;
      case '%':
        let porc: number = (firstNumber / 100) * Number(number);
        setNumber(() => porc.toString());
        break;
      default:
        break;
    }
  }

  const handleOperation = (op: string) => {
    setFirstNumber(() => Number(number));
    setNumber('');
    setOperation(() => op);
  } 

  const handleClear = () => {
    setNumber('');
    setFirstNumber(0);
    setOperation('');
  }

  const handleSignal = () => {
    setNumber(() => {
      let n: number = Number(number) * -1;
      return n.toString();
    });
  }

  const handlePoint = () => {
    setNumber(prev => {
      if(!prev.includes('.'))
        return prev + ".";
      return prev;
    });
  }

  return (
    <div className="App">

      <Display number={number} />

      <div className="row">
        <Button onClick={() => handleClear()} text={"C"} backgroundColor={"#A7A7A7"} color={"black"}/>
        <Button onClick={() => handleSignal()} text={"+/-"} backgroundColor={"#A7A7A7"} color={"black"}/>
        <Button onClick={() => handleOperation('%')} text={"%"} backgroundColor={"#A7A7A7"} color={"black"}/>
        <Button onClick={() => handleOperation('/')} text={"÷"} backgroundColor={"#FE9400"}/>
      </div>
      <div className="row">
        <Button onClick={() => handleNumber(7)} text={7} backgroundColor={"#343434"}/>
        <Button onClick={() => handleNumber(8)}text={8} backgroundColor={"#343434"}/>
        <Button onClick={() => handleNumber(9)}text={9} backgroundColor={"#343434"}/>
        <Button onClick={() => handleOperation('*')} text={"x"} backgroundColor={"#FE9400"}/>
      </div>
      <div className="row">
        <Button onClick={() => handleNumber(4)} text={4} backgroundColor={"#343434"}/>
        <Button onClick={() => handleNumber(5)} text={5} backgroundColor={"#343434"}/>
        <Button onClick={() => handleNumber(6)} text={6} backgroundColor={"#343434"}/>
        <Button onClick={() => handleOperation('-')} text={"-"} backgroundColor={"#FE9400"}/>
      </div>
      <div className="row">
        <Button onClick={() => handleNumber(1)} text={1} backgroundColor={"#343434"}/>
        <Button onClick={() => handleNumber(2)} text={2} backgroundColor={"#343434"}/>
        <Button onClick={() => handleNumber(3)} text={3} backgroundColor={"#343434"}/>
        <Button onClick={() => handleOperation('+')} text={"+"} backgroundColor={"#FE9400"}/>
      </div>
      <div className="row">
        <ZeroButton onClick={() => handleNumber(0)}/>
        <Button onClick={() => handlePoint()} text={","} backgroundColor={"#343434"}/>
        <Button onClick={() => handleEqual()} text={"="} backgroundColor={"#FE9400"}/>
      </div>
      
    </div>
  );
}

export default Home;
