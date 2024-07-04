import React,{useState} from "react";

const initialBoard = () => Array(9).fill(null);

const useTicTacCustomHook = () => {
    const [board,setBoard] = useState(initialBoard());
    const [isNext,setIsNext] = useState(true);

    const handleClick = (val) => {
        console.log("hello",val);
        let copyData = [...board];
        copyData[val] = isNext ? "X" : "O";
        setBoard(copyData);
        setIsNext(!isNext)
    }
    const restGame = () => {
        setBoard(initialBoard());
        setIsNext(true)
    }

    const getMessage = () => {
        return `Player ${isNext ? '"X"' : '"O"'} turn`
    }

    return {board,handleClick,restGame,getMessage}

}
export default useTicTacCustomHook;