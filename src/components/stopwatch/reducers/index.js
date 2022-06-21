//Con useState tocaria hacer un objeto o uno por uno se puede borrar el estado

export default function reducer (state, action) {
  switch(action.type){
    case 'start':
      return {...state, isRunning: true}
    case 'stop':
      return{...state, isRunning: false}
    case 'reset':
      return{...state, isRunning:false, time:0}
    case 'tick':
      return{...state, time:state.time+1}
    default:
      throw new Error();
  }
}