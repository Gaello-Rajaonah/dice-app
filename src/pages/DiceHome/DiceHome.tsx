import { ChangeEvent, useEffect, useState } from "react";
import DicePlatform from "../../containers/DicePlatform";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { findKeyWithHighestValue, generatePlayerArray, rollDice } from "../../utils/functions";
import { NumberDictionary } from "../../utils/types";



const DiceHome = () => {
    const [totalPlayer, setTotalPlayer] = useState(0)
    const [playerScore, setPlayerScore] = useState({} as NumberDictionary)
    const [dices, setDices] = useState({ dice1: 0, dice2: 0 })
    const [playerPlayedCount, setPlayerPlayedCount] = useState(0)
    const [playerTurn, setPlayerTurn] = useState([] as number[])
    const [winnerIndex, setWinnerIndex] = useState(null as null|number)
    
    const currentPlayerIndex = playerTurn[playerPlayedCount]

    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setTotalPlayer(Number(value));
    };

    const handleSetTotalPlayer = () => {
        const playerArray = generatePlayerArray(totalPlayer)
        setPlayerTurn(playerArray)
    }

    const handlePlayerPlayed = () => {
        setDices({ ...dices, dice1: rollDice(), dice2: rollDice() })
    }

    const handleReset = () => {
        setDices({ ...dices, dice1: 0, dice2: 0 })
        setTotalPlayer(0)
        setPlayerTurn([])
        setPlayerScore({})
        setWinnerIndex(null)
        setPlayerPlayedCount(0)
    }

    const isWinner = playerPlayedCount == totalPlayer
    const isPlay = playerTurn.length !== 0


    useEffect(()=>{
        const {dice1,dice2}=dices
        
        if(dice1 && dice2 && currentPlayerIndex !== null && currentPlayerIndex !== undefined){
            playerScore[currentPlayerIndex]= dice1+dice2
            setPlayerScore({...playerScore})
            setPlayerPlayedCount(playerPlayedCount + 1)
        }
    },[dices])

    useEffect(()=>{
        const tempWinner = findKeyWithHighestValue(playerScore)
        if(isWinner && tempWinner){
            setWinnerIndex(Number(tempWinner))
        }
        
    },[isWinner])

    console.log("SCORE ==========", playerScore);
  
    return (

        <div className="flex flex-col items-center h-full justify-between">
            <div className="flex flex-col items-center">
                <div> Player number </div>
                <div className="flex">
                    <div><Input onChange={onChangeInput} /></div>
                    <div><Button disabled={isPlay} onClick={handleSetTotalPlayer} className="text-white" label="Set" /></div>
                </div>

            </div>
            <div className="flex h-full w-full items-center justify-center">
                {isPlay ? (
                <DicePlatform handleReset={handleReset} currentPlayerIndex={currentPlayerIndex} isWinner={isWinner} dices={dices} handlePlayerPlayed={handlePlayerPlayed} playerPlayedCount={playerPlayedCount} playerTurn={playerTurn} />
                ):(
                    <h1> Set player number</h1>
                )}
            </div>

            {isPlay && isWinner && (
                <div className="flex h-full w-full items-center justify-center">
                    Winner is Player {winnerIndex}
                </div>
            )}


        </div>

    );
};

export default DiceHome;