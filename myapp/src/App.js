import React from 'react'
import {useSelector} from 'react-redux'
import { useDispatch } from 'react-redux';
import { increment } from './Redux/counter';
import { decrement } from './Redux/counter';


const App = () => {

  const count = useSelector((state)=>state.counter.value);
  const dispatch = useDispatch();

  const increase = ()=>{
    dispatch(increment())
  }

  const decrease = ()=>{
    dispatch(decrement());
  }
  return (
 <>
  <h1>count:{count}</h1>
  <br></br>
  <button onClick={increase}>Increment</button>
  <button onClick={decrease}>Decrement</button>
 </>
  )
}

export default App

