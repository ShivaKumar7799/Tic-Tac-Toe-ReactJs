import { Button } from "./button";
import {useEffect, useState} from 'react';

function Board(){
        const [click,setClick] = useState(1)
        const [count,setCount] = useState(1);
        const [char0, setChar0] = useState("-");
        const [char1, setChar1] = useState("-");
        const [char2, setChar2] = useState("-");
        const [char3, setChar3] = useState("-");
        const [char4, setChar4] = useState("-");
        const [char5, setChar5] = useState("-");
        const [char6, setChar6] = useState("-");
        const [char7, setChar7] = useState("-");
        const [char8, setChar8] = useState("-");
        const [gameWinner, setGameWinner] = useState("-")
        
        let turn = function(){  
               (count === 1) ? setCount(2) :setCount(1)
        }

        let PlayGame = function(char,setChar){
                this.char = char;
                this.setChar = setChar;
                this.play =  function(){
                        if(this.char === "-" && (gameWinner !==1 && gameWinner !==2) ){
                                turn();
                                if(count === 1){
                                        this.setChar("X");
                                } 
                                else{
                                        this.setChar("O");
                                }
                                winner();
                        }                               
                }
        }

        let playGame0 = new PlayGame(char0, setChar0);
        let playGame1 = new PlayGame(char1, setChar1);
        let playGame2 = new PlayGame(char2, setChar2);
        let playGame3 = new PlayGame(char3, setChar3);
        let playGame4 = new PlayGame(char4, setChar4);
        let playGame5 = new PlayGame(char5, setChar5);
        let playGame6 = new PlayGame(char6, setChar6);
        let playGame7 = new PlayGame(char7, setChar7); 
        let playGame8 = new PlayGame(char8, setChar8);

       useEffect(()=>{
               winner()
                },[char0,char1,char2,char3,char4,char5,char6,char7,char8])
      
        let winner = function(){
                if((char0 === char1) && (char1 === char2) && (char2 !== "-") ){
                       count === 1? setGameWinner(2) : setGameWinner(1)
                }
                else if((char3 === char4) && (char4 === char5) && (char5 !== "-") ){
                        count === 1? setGameWinner(2) : setGameWinner(1)
                }
                else if((char6 === char7) && (char7 === char8) && (char8 !== "-") ){
                        count === 1? setGameWinner(2) : setGameWinner(1)
                }
                else if((char0 === char3) && (char3 === char6) && (char6 !== "-") ){
                        count === 1? setGameWinner(2) : setGameWinner(1)
                }
                else if((char1 === char4) && (char4 === char7) && (char7 !== "-") ){
                        count === 1? setGameWinner(2) : setGameWinner(1)
                }
                else if((char2 === char5) && (char5 === char8) && (char8 !== "-") ){
                        count === 1? setGameWinner(2) : setGameWinner(1)
                }
                else if((char0 === char4) && (char4 === char8) && (char8 !== "-") ){
                        count === 1? setGameWinner(2) : setGameWinner(1)
                }
                else if((char2 === char4) && (char4 === char6) && (char6 !== "-") ){
                        count === 1? setGameWinner(2) : setGameWinner(1)
                }
                else if(gameWinner === "-"){
                       setGameWinner("Game is not yet started")
                }
                else{
                        setGameWinner("Game is still going on")
                }
        }

        return(
                <>
                        <span> Player {count} turn </span>
                       <div>
                               <Button text = {char0} callBack = {() => playGame0.play()} />
                               <Button text = {char1} callBack = {() => playGame1.play()} />
                               <Button text = {char2} callBack = {() => playGame2.play()} />
                       </div>
                       <div>
                               <Button text = {char3} callBack =  {() => playGame3.play()} />
                               <Button text = {char4} callBack =  {() => playGame4.play()} />
                               <Button text = {char5} callBack =  {() => playGame5.play()} />
                       </div>
                       <div>
                               <Button text = {char6} callBack =  {() => playGame6.play()} />
                               <Button text = {char7} callBack =  {() => playGame7.play()} />
                               <Button text = {char8} callBack =  {() => playGame8.play()} />
                       </div>
                       <span> Game Winner: Player {gameWinner} </span>
                </>
        )
}

export {Board}