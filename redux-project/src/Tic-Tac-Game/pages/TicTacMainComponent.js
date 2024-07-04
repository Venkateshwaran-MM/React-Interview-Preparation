import React, { useState } from "react";
import useTicTacCustomHook from '../components/TicTacComponent'

const TicTacMainComponent = () => {

    const {board,handleClick,restGame,getMessage} = useTicTacCustomHook()

    console.log("board ===>",board);
    return(
        <div style={{display: "flex"}}>
            
            <div style={{display: "flex",flex:1,}}>
            <h1>{getMessage()}</h1>
                <button onClick={() => restGame()}>Reset Game</button>
            </div>
            <div style={{display: "flex",flex:1,justifyContent:'center',flexWrap:"wrap"}}>
                {
                    board.map((ele,index) => {
                        return (
                            <div style={{flexGrow:1,width: "33%",}} key={index}>
                                <button onClick={() => handleClick(index)} style={{padding:40}} disabled={ele != null}>{ele}</button>
                            </div>
                        )
                    })
                }
            </div>
           <div style={{display: "flex",flex:1,}}></div>
        </div>
    )
}
export default TicTacMainComponent