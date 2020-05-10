import React, { useState, useEffect } from "react";
import GameBoardItem from './GameBoardItem'
function GameBoard2(props) {

    const [board, setBoard] = useState([]);
    const [position,setPosition]=useState(8)
    const [rerender,setRerender]=useState(true);
    const [board2,setBoard2]=useState([])

    const handleClick = (e) => {
        console.log('CLICKEDD LISTENRE',e.path[1].id)
        console.log('board1', board)
        let temp=board;
        temp.pop();
        setBoard(temp);
        let temppos=rerender;
        setRerender(!temppos)
        board[5]

    }
    const swap=(index1,index2)=>{
        // let i=board[index1].props.i;
        // let j=board[index1].props.j;
        // let value=board[index1].props.value;
        // let i2=board[index2].props.i;
        // let j2=board[index2].props.j;
        // let value2=board[index2].props.value;
        // let newItem1=<GameBoardItem id={value} key={value} value={value} i={i} j={j} image={'https://i.imgur.com/YLWsY4G.jpg'}></GameBoardItem>
        // let newItem2=<GameBoardItem id={value2} key={value2} value={value2} i={i2} j={j2} image={'https://i.imgur.com/YLWsY4G.jpg'}></GameBoardItem>
        // let tempboard=board;
        // tempboard[index1]=newItem2;
        // tempboard[index2]=newItem1;
        // setBoard(prev=>tempboard)
    let newItem1=<GameBoardItem id={0} key={0} img={<div></div>} value={0} i={0} j={0} image={'https://i.imgur.com/YLWsY4G.jpg'}></GameBoardItem>
        let tempboard=board;
        tempboard.pop();
        tempboard[0]=newItem1;
        setBoard(prev=>tempboard)
    }

    useEffect(() => {
        console.log('rereender')
        let temp = [];
        let tempStyle=[];
        let count = 0;
        if (board.length === 0) {

            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    if ((i != 2) || (j != 2)) {
                        console.log('count is', count)
                        console.log('i,j', i, ' ', j)
                        let img=<img style={{height:'300%',width:'300%',margin:'-'+(100*(i))+'%'+' 0px 0px -'+(100*(j))+'%'}} src={'https://i.imgur.com/YLWsY4G.jpg'}></img>
                        temp.push(<GameBoardItem id={count} img={img} key={count} value={count} i={i} j={j} image={'https://i.imgur.com/YLWsY4G.jpg'}></GameBoardItem>)
                        tempStyle.push({height:'33%',width:'33%',overflow:'hidden',position:'absolute',transition:"right 1s",right:''+(100/3)*(2-props.j)+'%',top:''+(100/3)*(props.i)+'%',borderRadius:'10px'})
                    }
                    else {
                        console.log('else', i, j)
                        temp.push(<GameBoardItem id={count} key={count} value={count} i={i} j={j} image={''}></GameBoardItem>)
                        tempStyle.push({height:'33%',width:'33%',overflow:'hidden',position:'absolute',transition:"right 1s",right:''+(100/3)*(2-props.j)+'%',top:''+(100/3)*(props.i)+'%',borderRadius:'10px'})    
                    }
                    count++;
                }
            }
            setBoard(prev => temp)
            console.log('board is ', temp)
        }
        for (let i = 0; i < 3 * 3; i++) {
            // console.log(document.getElementById(i),'testtest')
            if (document.getElementById(i)) {
                console.log('exist')
                document.getElementById(i).addEventListener('click', handleClick)
            }
            else {
                console.log('doesnt exist')
            }
        }
        return () => {
            for(let i=0;i<3*3;i++){
                // console.log(document.getElementById(i),'testtest')
                console.log('deleting')
                if(document.getElementById(i)){
                    // console.log('exist')
                    document.getElementById(i).removeEventListener('click',handleClick)
                }
            }
        };

    }, [board,position,rerender]);
    return (
        <div style={{ height: '0', width: '40%', paddingBottom: '40%', position: 'relative' }}>
            {board}
        </div>
    );
}

export default GameBoard2;
