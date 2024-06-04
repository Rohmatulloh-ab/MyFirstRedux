const root = ReactDOM.createRoot(document.getElementById('root'));
root




import{ createStore} from 'redux';
import reducer from './redux/reducer';

import App from './App';
import {Provider} from 'react-redux';






// ( creater,dispatch)=>
  //   (...args)=>{
    // dispatch(creater(...args));
    // };
    
    // const inHandler = bindAction(incr,dispatch);
    // const decHandler = bindAction(decr,dispatch);
    // const randHandler = bindAction(random,dispatch);
    
    // document.getElementById('increment').addEventListener('click',incr);
    // document.getElementById('decrement').addEventListener('click',decr);
    
    // document.getElementById('random').addEventListener('click',()=>{
      
      //   const rand = Math.floor(Math.random()* 10);
      //   random(rand)
      // });
      
      
      
      // store.dispatch({type:'increment'});
      // store.dispatch({type:'increment'});
      // store.dispatch({type:'random'});
      
      
      
      // let state = reducer(initialState,{type: 'increment'});
      
      // state =reducer(state,{type:'increment'});
      // state =reducer(state,{type:'increment'});
      // state =reducer(state,{type:'increment'});
      
      // console.log(state);
      const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
      
      // const {dispatch,getState,subscribe} =store;
      // const {incr,decr,random} = bindActionCreators(
      
      //   actions,
      //   dispatch,
       
      //  );
      
      // const upDate = ()=>{


      // };
      // upDate();
      // subscribe(upDate);
      // document.getElementById('counter').textContent = getState().value;
      
      
      
      // subscribe(()=>{
      
      //   document.getElementById('counter').textContent = getState().value;
      
      //   console.log(getState());
      
      // });