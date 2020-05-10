import React, { useState, useEffect, Component,useRef, useLayoutEffect } from "react";
import GameBoard from './components/GameBoard'
import logo from './logo.svg';
import './App.css';

function App() {  
  const [forceRerender,setRerender]=useState(false);
  const [size,setSize]=useState(3);
  const [board, setBoard] = useState([<div style={{height:''+800/3+'px',width:''+800/3+'px',overflow:'hidden'}}>
    <img style={{}} src='https://i.imgur.com/YLWsY4G.jpg'></img>
  </div>]);
  const [test,setTest]=useState([{height:''+800/3+'px',width:''+800/3+'px',overflow:'hidden',position:'absolute',right:'0px',transition:"right 1s"},{height:''+800/3+'px',width:''+800/3+'px',overflow:'hidden',position:'absolute',right:''+800/3+'px',transition:"right 1s"}])
   const setSomething=(e)=> {
     console.log('test')
     let temp=[...test]
     let tempval=temp[0];
     temp[0]=temp[1];
     temp[1]=tempval;
     setTest(prev=>temp)
     console.log(temp)
   }
  return (
    <div className="App">
      <header className="App-header">
        {/* <div style={{height:'800px',width:'800px',position:'relative'}}>
          <div style={test[0]} onClick={e=>{setSomething(e)}}>
            <img style={{}} src='https://i.imgur.com/YLWsY4G.jpg'></img>
          </div>
        <div style={test[1]}>
          <img style={{margin:'0px 0px 0px -100%'}} src='https://i.imgur.com/YLWsY4G.jpg'></img>
        </div>
          </div> {/* game container*/}
          {/* <img style={{height:'50vh'}} src='https://i.imgur.com/YLWsY4G.jpg'></img> */}
          {/* alex */}
          <GameBoard rerender={forceRerender} size={size}></GameBoard>
          {/* <button style={{borderRadius:'5px',backgroundColor:'gray'}} onClick={e=>{setSize(prev=>prev+1)
          console.log(size)}}>test</button> */}
      </header>
    </div>
  );
}

export default App;
