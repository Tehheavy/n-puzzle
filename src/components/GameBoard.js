import React, { useState, useEffect } from "react";
import GameBoardItem from './GameBoardItem'
import './button.css'
function GameBoard(props) {

    const [board, setBoard] = useState([]);
    const [position, setPosition] = useState(props.size * props.size - 1)
    const [rerender, setRerender] = useState(props.rerender);
    const [board2, setBoard2] = useState([])
    const [shuffled, setShuffled]= useState(false);

    const handleClick = (e) => {
        if (e.path[1].id) {
            console.log('CLICKEDD LISTENRE', e.path[1].id)
            swap(e.path[1].id, position)
        }
        console.log('board1', board)
        // let tempboard=board;
        // let img=<img style={{height:'300%',width:'300%',margin:'-'+(100*(0))+'%'+' 0px 0px -'+(100*(0))+'%'}} src={'https://i.imgur.com/YLWsY4G.jpg'}></img>
        // let newItem1=<GameBoardItem id={0} key={0} img={img} value={0} i={2} j={2} image={'https://i.imgur.com/YLWsY4G.jpg'}></GameBoardItem>
        // // temp.pop();
        // tempboard[0]=newItem1;
        // setBoard(prev=>tempboard)
        // let temppos=rerender;
        // setRerender(!temppos)

    }
    const convertToXY=(number)=>{
        let y=Math.floor(number%props.size);
        let x=Math.floor(number/props.size)
        console.log('x,y',x,y);
        let res=[x,y]
        return res;
    }
    const sumInversions2=(random)=>{
        console.log('random is ',random)
        let count=0;
        for(let i=0;i<random.length-1;i++){
          for(let j=i+1;j<random.length;j++){
            if(random[i]>random[j])
            count++;
          }
        }
        return count;
      }
    function isSolvable2(random) {
        return (sumInversions2(random) % 2 == 0)
      }
    const shuffle = () => {
        var tempArray=[];
    do{
      tempArray=[];
      for(let i=0;i<props.size*props.size-1;i++){
        tempArray.push(i);
      }
      tempArray.sort(() => Math.random() - 0.5);
      console.log(tempArray)
      console.log('is solvable2:',isSolvable2(tempArray))
      
    }
    while(!isSolvable2(tempArray))
        console.log(tempArray)
        for(let i=0;i<tempArray.length;i++){
            console.log(tempArray[i]);
            convertToXY(tempArray[i]);
            console.log('test',convertToXY(i)[0])
        }
        var oldBoard=[...board];
        var newBoard=[...board];
        for(let i=0;i<oldBoard.length-1;i++){
            let img = oldBoard[i].props.img;
            let newItem1 = <GameBoardItem id={i} size={props.size} key={i} img={img} value={i} i={convertToXY(tempArray[i])[0]} j={convertToXY(tempArray[i])[1]} image={'https://i.imgur.com/YLWsY4G.jpg'}></GameBoardItem>
            newBoard[i]=newItem1;
            console.log('index=',i,'random is',tempArray[i],'(i,j)=',oldBoard[tempArray[i]].props.i,oldBoard[tempArray[i]].props.j,oldBoard[tempArray[i]])
        }
        let img = oldBoard[oldBoard.length-1].props.img;
        let newItem1 = <GameBoardItem id={props.size*props.size-1} size={props.size} key={props.size*props.size-1} img={img} value={(props.size*props.size-1)} i={props.size-1} j={props.size-1} image={'https://i.imgur.com/YLWsY4G.jpg'}></GameBoardItem>
        newBoard[props.size*props.size-1]=newItem1;
        console.log('tempBoard is',tempArray)
        console.log('newBoard is',newBoard)
        console.log('oldBoard is',board)
        setBoard(prev => newBoard)
        let temppos = rerender;
        setRerender(!temppos)
        setShuffled(prev=>true)
    }
    const checkSolved = () => {
        
        let count=0;
        for(let i=0;i<props.size;i++){
            for(let j=0;j<props.size;j++){
                console.log(count,i,j)
                if(board[count].props.i==i&&board[count].props.j==j){
                    count++;
                }
            }
        }
        if(count===board.length&&shuffled===true){
            console.log('win')
            setShuffled(prev=>false);
            alert('level '+(props.size-2)+' complete!')
            props.nextLevel();
        }
        console.log('count is ',count)
    }
    const swap = (index1, index2) => {

        let tempboard = board;
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
        if (index1 != index2) {
            let newPosX = board[index1].props.i;
            let newPosY = board[index1].props.j;
            // console.log('X,Y:', newPosX, ',', newPosY)
            let oldPosX = board[index2].props.i;
            let oldPosY = board[index2].props.j;
            console.log('index1:(', newPosX, newPosY, ') pos:(', oldPosX, oldPosY, ')')
            if (newPosY == (oldPosY - 1) && oldPosX == newPosX) { //clicked above

                let img = board[index1].props.img;
                console.log('img is', img)
                let newItem1 = <GameBoardItem id={index1} size={props.size} key={index1} img={img} value={index1} i={board[index2].props.i} j={board[index2].props.j} image={'https://i.imgur.com/YLWsY4G.jpg'}></GameBoardItem>
                let img2 = board[index2].props.img;
                let newItem2 = <GameBoardItem id={index2} size={props.size} key={index2} img={img2} value={index2} i={board[index1].props.i} j={board[index1].props.j} image={'https://i.imgur.com/YLWsY4G.jpg'}></GameBoardItem>

                // tempboard.pop();
                tempboard[index1] = newItem1;
                tempboard[index2] = newItem2;
                setBoard(prev => tempboard)
                let temppos = rerender;
                setRerender(!temppos)
            }
            if (newPosY == (oldPosY + 1) && oldPosX == newPosX) { //clicked below

                let img = board[index1].props.img;
                console.log('img is', img)
                let newItem1 = <GameBoardItem id={index1} size={props.size} key={index1} img={img} value={index1} i={board[index2].props.i} j={board[index2].props.j} image={'https://i.imgur.com/YLWsY4G.jpg'}></GameBoardItem>
                let img2 = board[index2].props.img;
                let newItem2 = <GameBoardItem id={index2} size={props.size} key={index2} img={img2} value={index2} i={board[index1].props.i} j={board[index1].props.j} image={'https://i.imgur.com/YLWsY4G.jpg'}></GameBoardItem>

                // tempboard.pop();
                tempboard[index1] = newItem1;
                tempboard[index2] = newItem2;
                setBoard(prev => tempboard)
                let temppos = rerender;
                setRerender(!temppos)
            }
            if (newPosY == (oldPosY) && oldPosX == (newPosX + 1)) { //clicked below

                let img = board[index1].props.img;
                console.log('img is', img)
                let newItem1 = <GameBoardItem id={index1} size={props.size} key={index1} img={img} value={index1} i={board[index2].props.i} j={board[index2].props.j} image={'https://i.imgur.com/YLWsY4G.jpg'}></GameBoardItem>
                let img2 = board[index2].props.img;
                let newItem2 = <GameBoardItem id={index2} size={props.size} key={index2} img={img2} value={index2} i={board[index1].props.i} j={board[index1].props.j} image={'https://i.imgur.com/YLWsY4G.jpg'}></GameBoardItem>
                // tempboard.pop();
                tempboard[index1] = newItem1;
                tempboard[index2] = newItem2;
                setBoard(prev => tempboard)
                let temppos = rerender;
                setRerender(!temppos)
            }
            if (newPosY == (oldPosY) && oldPosX == (newPosX - 1)) { //clicked below

                let img = board[index1].props.img;
                console.log('img is', img)
                let newItem1 = <GameBoardItem size={props.size} id={index1} key={index1} img={img} value={index1} i={board[index2].props.i} j={board[index2].props.j} image={'https://i.imgur.com/YLWsY4G.jpg'}></GameBoardItem>
                let img2 = board[index2].props.img;
                let newItem2 = <GameBoardItem size={props.size} id={index2} key={index2} img={img2} value={index2} i={board[index1].props.i} j={board[index1].props.j} image={'https://i.imgur.com/YLWsY4G.jpg'}></GameBoardItem>
                // tempboard.pop();
                tempboard[index1] = newItem1;
                tempboard[index2] = newItem2;
                setBoard(prev => tempboard)
                let temppos = rerender;
                setRerender(!temppos)
            }
        }
        checkSolved(tempboard);
    }

    useEffect(() => {
        console.log('rereender')
        let temp = [];
        let tempStyle = [];
        let count = 0;
        if (board.length === 0) {

            for (let i = 0; i < props.size; i++) {
                for (let j = 0; j < props.size; j++) {
                    if ((i != props.size - 1) || (j != props.size - 1)) {
                        console.log('count is', count)
                        console.log('i,j', i, ' ', j)
                        let img = <img style={{ height: '' + 100 * props.size + '%', width: '' + 100 * props.size + '%', margin: '-' + (100 * (i)) + '%' + ' 0px 0px -' + (100 * (j)) + '%' }} draggable={'false'} src={'https://i.imgur.com/YLWsY4G.jpg'}></img>
                        temp.push(<GameBoardItem size={props.size} id={count} img={img} key={count} value={count} i={i} j={j} image={'https://i.imgur.com/YLWsY4G.jpg'}></GameBoardItem>)
                        tempStyle.push({ height: '' + Math.floor(100 / props.size) - 1 + '%', width: '' + Math.floor(100 / props.size) - 1 + '%', overflow: 'hidden', position: 'absolute', transition: "right 1s", right: '' + (100 / props.size) * (props.size - 1 - j) + '%', top: '' + (100 / props.size) * (i) + '%', borderRadius: '10px' })
                    }
                    else {
                        console.log('else', i, j)
                        temp.push(<GameBoardItem size={props.size} id={count} key={count} value={count} i={i} j={j} image={''}></GameBoardItem>)
                        tempStyle.push({ height: '' + Math.floor(100 / props.size) - 1 + '%', width: '' + Math.floor(100 / props.size) - 1 + '%', overflow: 'hidden', position: 'absolute', transition: "right 1s", right: '' + (100 / props.size) * (props.size - 1 - j) + '%', top: '' + (100 / props.size) * (i) + '%', borderRadius: '10px' })
                    }
                    count++;
                }
            }
            setBoard(prev => temp)
            console.log('board is ', temp)
        }
        for (let i = 0; i < props.size * props.size; i++) {
            // console.log(document.getElementById(i),'testtest')
            if (document.getElementById(i)) {
                console.log('exist')
                document.getElementById(i).addEventListener('mousedown', handleClick)
            }
            else {
                console.log('doesnt exist')
            }
        }
        return () => {
            for (let i = 0; i < props.size * props.size; i++) {
                // console.log(document.getElementById(i),'testtest')
                console.log('deleting')
                if (document.getElementById(i)) {
                    // console.log('exist')
                    document.getElementById(i).removeEventListener('mousedown', handleClick)
                }
            }
        };

    }, [board, position, rerender]);
    return (
        <div style={{ height: '0', width: '40%', paddingBottom: '40%', position: 'relative' }}>
            <div>
               level {props.size-2}
            </div>
            <div style={{ height: '0', width: '100%', paddingBottom: '100%', position: 'relative' }}>
                {board}
            </div>
            <button className="fancyButton" onClick={e => {shuffle()
                console.log('Shuffle')
            }}>{shuffled?'reshuffle':'start'}</button>
        </div>
    );
}

export default GameBoard;
