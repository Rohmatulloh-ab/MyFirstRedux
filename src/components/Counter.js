import React from 'react';

import {incr,decr,random} from '../redux/action';
import { useSelector,useDispatch } from 'react-redux';


function Counter() {

const counter = useSelector(state => state.value);
const name = useSelector(state=> state.names);

const dispatch = useDispatch()
console.log(counter);

return (
    <>
      <div>
    <h1 > counter:{counter} </h1>

    <h1><b>name:  {name}</b></h1>

    <button className="btn btn-primary" onClick={ ()=> dispatch(incr())}> + incre</button>
    <button className="btn btn-danger" onClick={ ()=> dispatch(decr())}>- decre</button>
    <button className="btn btn-secondary"onClick={ ()=> dispatch(random())}> random </button>
  </div>
    </>
  )
}

export default Counter;

// export  class Counter extends Component {
//   render() {

//     const {incr,decr,random,counter,names}= this.props;
//     return (
//         <>
//         <div>
//       <h1 > counter:{counter} </h1>
  
//       <h1><b>name:  {names}</b></h1>
  
//       <button className="btn btn-primary" onClick={ incr}> + incre</button>
//       <button className="btn btn-danger" onClick={decr }>- decre</button>
//       <button className="btn btn-secondary"onClick={random }> random </button>
//     </div>
//       </>
//     )
//   }
// }



// const mapStateToProps = (state)=>{
//     return {
//         counter: state.value,
//         names: state.names,

//     }
// };



// export default connect(mapStateToProps,actions) (Counter)
