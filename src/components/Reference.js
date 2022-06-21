import React, {useRef, useEffect} from 'react'

const Reference = () => {
  const elementRef = useRef();
  const elementSec = useRef();



  useEffect(() => {
    elementSec.current.focus()
    console.log(elementSec.current)
    if(elementRef.current){
      const divElement = elementRef.current;
      console.log(divElement);
      
    }

  }, [])
  
  const handleOnClick =() =>{
    if(elementRef.current){
      elementRef.current.style.backgroundColor = "red";
    }
  }

  const handleOnFocus =() =>{
    if(elementSec.current){
      elementSec.current.focus()
    }
  }
  return (
    <>
        <div ref={elementRef}>
          Im a div
        </div>
        <button onClick={handleOnClick}>Change Color</button>

        <input ref={elementSec} type="text" />
        <button onClick={handleOnFocus}>Focus</button>
    </>

  )
}

export default Reference