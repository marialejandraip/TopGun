import {useEffect, useReducer, useRef} from 'react'
import {
  START,
  STOP,
  RESET,
  TICK
} from './actions/index'
import reducer from './reducers/index'



const Stopwatch = () => {
  const initialState = {
    isRunning: false,
    time: 0
  }
  const [state, dispatch] = useReducer(reducer, initialState)
  const idRef = useRef(0);

  useEffect(()=>{
    if(!state.isRunning){
      return
    }
    idRef.current = setInterval(()=>{dispatch(TICK)}, 1000)
    return () =>{
      clearInterval(idRef);
      idRef.current = 0;
    }
    //ComponentWillUnmount
  }, [state.isRunning])

  return (
    <div>
      {state.time }
      <button onClick={()=> dispatch(START)}>Start</button>
      <button onClick={()=> dispatch(STOP)}>Stop</button>
      <button onClick={()=> dispatch(RESET)}>Reset</button>
    </div>
  )
}

export default Stopwatch