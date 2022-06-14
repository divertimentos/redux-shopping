import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { sum, subtract } from '../store/Calculator/Calculator.actions'

function Calculator() {
  const result = useSelector(state => state.calculator)
  const dispatch = useDispatch();
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  // const handleSum = (parcelOne, parcelTwo) => {
  //   dispatch(sum(parcelOne, parcelTwo))
  // }

  return (
    <>
      <input value={a} type="text" placeholder="a" onChange={(e) => setA(Number(e.target.value))} />
      <input value={b} type="text" placeholder="b" onChange={(e) => setB(Number(e.target.value))} />

      <button onClick={() => {
        dispatch(sum(a, b))
      }}>somar</button>
      <button onClick={() => {
        dispatch(subtract(a, b))
      }}>subtrair</button>


      <div>
        resultado: {result}
      </div>
    </>
  )
}

export default Calculator
