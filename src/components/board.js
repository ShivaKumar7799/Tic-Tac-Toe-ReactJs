import { Button } from "./button";
import {useState} from 'react';


function Board(){
        let [count,setCount] = useState(1);
        let [char0, setChar0] = useState("-");
        let [char1, setChar1] = useState("-");
        let [char2, setChar2] = useState("-");
        let [char3, setChar3] = useState("-");
        let [char4, setChar4] = useState("-");
        let [char5, setChar5] = useState("-");
        let [char6, setChar6] = useState("-");
        let [char7, setChar7] = useState("-");
        let [char8, setChar8] = useState("-");
        let [gameWinner, setGameWinner] = useState("Game not started")
        


        let turn = function(){
                if(count === 1){
                        setCount(2)
                } else{
                        setCount(1);
                }
        }
        
        let playGame0 = function(){
                if(char0 === "-" && (gameWinner !==1 && gameWinner !==2) ){
                        turn();
                        if(count === 1){
                                char0 = "X"
                                setChar0("X");
                        } 
                        else{
                                char0 = "O"
                                setChar0("O");
                        }
                        winner();
                }              
        }

        let playGame1 = function(){
                if(char1 === "-"  && (gameWinner !==1 && gameWinner !==2) ){
                        turn();
                        if(count === 1){
                                char1 = "X"
                                setChar1("X");
                        } 
                        else{
                                char1 = "O"
                                setChar1("O");
                        }
                        winner(); 
                }             
        }

        let playGame2 = function(){
                if(char2 === "-"  && (gameWinner !==1 && gameWinner !==2)){
                        turn();
                        if(count === 1){
                                char2 = "X"
                                setChar2("X");
                        } 
                        else{
                                char2 = "O"
                                setChar2("O");
                        }
                        winner(); 
                }           
        }

        let playGame3 = function(){
                if(char3 === "-"  && (gameWinner !==1 && gameWinner !==2)){
                        turn();
                        if(count === 1){
                                char3 = "X"
                                setChar3("X");
                        } 
                        else{
                                char3 = "O"
                                setChar3("O");
                        }
                        winner();   
                } 
                         
        }

        let playGame4 = function(){
                if(char4 === "-"  && (gameWinner !==1 && gameWinner !==2)){
                        turn();
                        if(count === 1){
                                char4 = "X"
                                setChar4("X");
                        } 
                        else{
                                char4 = "O"
                                setChar4("O");
                        }
                        winner();   
                }         
        }

        let playGame5 = function(){
                if(char5 === "-"  && (gameWinner !==1 && gameWinner !==2)){
                        turn();
                        if(count === 1){
                                char5 = "X"
                                setChar5("X");
                        } 
                        else{
                                char5 = "O"
                                setChar5("O");
                        }
                        winner();  
                }  
                         
        }

        let playGame6 = function(){
                if(char6 === "-"  && (gameWinner !==1 && gameWinner !==2)){
                        turn();
                        if(count === 1){
                                char6 = "X"
                                setChar6("X");
                        } 
                        else{
                                char6 = "O"
                                setChar6("O");
                        }
                        winner();  
                } 
                         
        }

        let playGame7 = function(){
                if(char7 === "-"  && (gameWinner !==1 && gameWinner !==2)){
                        turn();
                        if(count === 1){
                                char7 = "X"
                                setChar7("X");
                        } 
                        else{
                                char7 = "O"
                                setChar7("O");
                        }
                        winner();  
                }           
        }

        let playGame8 = function(){
                if(char8 === "-"  && (gameWinner !==1 && gameWinner !==2)){
                        turn();
                        if(count === 1){
                                char8 = "X"
                                setChar8("X");
                        } 
                        else{
                                char8 = "O"
                                setChar8("O");
                        }
                        winner();  
                }         
        }

        let winner = function(){
                if((char0 === char1) && (char1 === char2) && (char2 !== "-") ){
                        setGameWinner(count);
                }
                else if((char3 === char4) && (char4 === char5) && (char5 !== "-") ){
                        setGameWinner(count);
                }
                else if((char6 === char7) && (char7 === char8) && (char8 !== "-") ){
                        setGameWinner(count);
                }
                else if((char0 === char3) && (char3 === char6) && (char6 !== "-") ){
                        setGameWinner(count);
                }
                else if((char1 === char4) && (char4 === char7) && (char7 !== "-") ){
                        setGameWinner(count);
                }
                else if((char2 === char5) && (char5 === char8) && (char8 !== "-") ){
                        setGameWinner(count);
                }
                else if((char0 === char4) && (char4 === char8) && (char8 !== "-") ){
                        setGameWinner(count);
                }
                else if((char2 === char4) && (char4 === char6) && (char6 !== "-") ){
                        setGameWinner(count);
                }
                else{
                       setGameWinner("Game is still going on")
                }
        }

        return(
                <>
                        <span> Player {count} turn </span>
                       <div>
                               <Button text = {char0} callBack = {playGame0} />
                               <Button text = {char1} callBack = {playGame1} />
                               <Button text = {char2} callBack = {playGame2} />
                       </div>
                       <div>
                               <Button text = {char3} callBack = {playGame3} />
                               <Button text = {char4} callBack = {playGame4} />
                               <Button text = {char5} callBack = {playGame5} />
                       </div>
                       <div>
                               <Button text = {char6} callBack = {playGame6} />
                               <Button text = {char7} callBack = {playGame7} />
                               <Button text = {char8} callBack = {playGame8} />
                       </div>
                       <span> Game Winner: Player {gameWinner} </span>
                </>
        )
}

export {Board}