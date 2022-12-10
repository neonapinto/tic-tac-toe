import { useEffect, useState } from 'react';
import './App.css';
import Grid from './components/Grid';

interface IPlayerInfo{
  name: string;
  score: number;
  type: string;
}

function App() {
  const [playerInfo, setPlayerInfo] = useState<IPlayerInfo[]>([
    {
      name: "player1",
      score: 0,
      type: "X"
    },
    {
      name: "player2",
      score: 0,
      type: "O"
    }
  ]);

  //grid for tic tac toe
  const [grid, setGrid] = useState<string[][]>([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);

  const [winner, setWinner] = useState<string>(""); //Winner is null 
  const [curr, setCurrent] = useState<string>("player1"); //start with player1

  useEffect(()=>{
    if(checkIfWinner()){
      let winner = curr === 'player1' ? 'player2' : 'player1';
      setWinner(winner);
      playerInfo.filter((item) =>item.name === winner)
      .map((item) =>{
        return item.score+= 100;
      });
      setPlayerInfo(playerInfo);
    }
  },[grid]);
  
  //update the grid on players choice
  const playfn = (x:number, y: number) =>{
      if(grid[x][y] === '' && !winner){
        if(curr === 'player1'){
          grid[x][y] = 'X';
          setCurrent('player2');
        }
        else{
          grid[x][y] = 'O';
          setCurrent('player1');
        }
        setGrid((grid:any) =>[...grid]);
      }
      else if(!winner){
        alert('The position is already filled');
      }
  }

  //check if anyone won
  const checkIfWinner = () =>{
    //Diagonal
      if(checkGrid(grid[0][0],grid[1][1],grid[2][2], 'X') || checkGrid(grid[0][0],grid[1][1],grid[2][2], 'O')
      || checkGrid(grid[2][0],grid[1][1],grid[0][2], 'X') || checkGrid(grid[2][0],grid[1][1],grid[0][2], 'O')
      )
        return true
    //Vertical
      if(checkGrid(grid[0][0],grid[1][0],grid[2][0], 'X') || checkGrid(grid[0][0],grid[1][0],grid[2][0], 'O')
      || checkGrid(grid[0][1],grid[1][1],grid[2][1], 'X') || checkGrid(grid[0][1],grid[1][1],grid[2][1], 'O') 
      || checkGrid(grid[0][2],grid[1][2],grid[2][2], 'X') || checkGrid(grid[0][2],grid[1][2],grid[2][2], 'O') 
      )
        return true
    //Horizontal
        if(checkGrid(grid[0][0],grid[0][1],grid[0][2], 'X') || checkGrid(grid[0][0],grid[0][1],grid[0][2], 'O')
        || checkGrid(grid[1][0],grid[1][1],grid[1][2], 'X') || checkGrid(grid[1][0],grid[1][1],grid[1][2], 'X') 
        || checkGrid(grid[2][0],grid[2][1],grid[2][2], 'X') || checkGrid(grid[2][0],grid[2][1],grid[2][2], 'X') 
        )
        return true
  }

  //utility to check grid combination
  const checkGrid = (x:string, y:string, z:string, value:string) =>{
      if(x === value && y === value && z === value)
        return true;
      else
        return false;
  }

  //restart the game
  const restart = () =>{
    setGrid([
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ]);
    setWinner("");
    setCurrent('player1');
  }

  return (
    <div className="App">
        <button onClick={restart}>Restart</button>
        <p>Player's turn: {curr}</p>
        <Grid grid={grid} playfn={playfn}/>
        {winner && 
          <p>Winner is {winner}: {playerInfo.filter((item) =>item.name === winner).map((item) => item.score)}</p>
        }
    </div>
  );
}

export default App;
