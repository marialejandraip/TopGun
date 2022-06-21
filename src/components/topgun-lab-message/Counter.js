import {useState} from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)
  const [disabled, setDisabled] = useState(false)

  const handleOperation = (operator) => {
    if(operator === "plus"){
      setCount(count + 1)
      setDisabled(false)
    }
    else{
      if(count <= 0){
        setDisabled(true)
      }
      else{
        setDisabled(false)
        setCount(count - 1)
      }
    
    }
  }
  return (
    <div className='container-operator'>
      <button className='operator' disabled={disabled} onClick={()=> handleOperation('minus')}>-</button>
      <p>{count}</p>
      <button className='operator' onClick={()=> handleOperation('plus')}>+</button>
    </div>
  )
}

export default Counter