import React,{FC} from 'react'
import Tile from './Tile'
import { Wrapper } from '../styles/tile.styled';

interface IGridProps{
  grid: string[][];
  playfn: (x:number, y:number) => void;
}

const Grid:FC<IGridProps> = ({grid, playfn}) => {
  return (
    <Wrapper>
        {
          grid.map((item, x) =>{
            return item.map((item, y) =>{
                return <Tile key={x+y} index={{x:x, y:y}} playfn={playfn} value={grid[x][y]}/>
            })
          })
        }
    </Wrapper>
  )
}



export default Grid;