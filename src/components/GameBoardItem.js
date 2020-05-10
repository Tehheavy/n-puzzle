import React, { useState, useEffect, Component,useRef, useLayoutEffect } from "react";

function GameBoardItem(props) {  
    
  const [value, setValue] = useState(props.value);
  const clickImage=(e)=> {
    console.log('clicked on ',props.value)

  }
  console.log('props size is',props.size)
  return (
    <div style={{
        height:''+(100/props.size)-0.3+'%',width:''+(100/props.size)-0.3+'%',overflow:'hidden',position:'absolute',transition:"all 0.2s",right:''+(100/props.size)*(props.size-1-props.j)+'%',top:''+(100/props.size)*(props.i)+'%',borderRadius:'2px'}}
        onClick={e=>{clickImage(e)}}
        id={props.id}>
        {props.img}
    </div>
  );
}
// style={{
//     height:'33%',width:'33%',overflow:'hidden',position:'absolute',transition:"right 1s",right:''+(100/3)*(2-props.j)+'%',top:''+(100/3)*(props.i)+'%',borderRadius:'10px'}}
export default GameBoardItem;
