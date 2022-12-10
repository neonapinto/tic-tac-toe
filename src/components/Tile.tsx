import {FC} from 'react'
import { Tiles } from '../styles/tile.styled';

interface ITileProps{
  index: {
    x: number,
    y: number
  };
  playfn: (x:number, y:number) =>void;
  value: string;
}

const Tile:FC<ITileProps> = ({index, playfn, value}) => {
  return (
    <Tiles onClick={()=>playfn(index.x, index.y)}>{value}</Tiles>
  )
}

export default Tile