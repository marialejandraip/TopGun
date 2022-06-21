// import React from 'react'

// export default function TopGunLabMessage() {
//   return (
//     <div>index</div>
//   )
// }


//rafce
import React from 'react'

const TopGunLabMessage = ({message, hola, holi}) => {
  const MESSAGE = message
  return (
    <div>{MESSAGE} 
    <div>{hola}</div>
    </div>
  )
}

export default  TopGunLabMessage

