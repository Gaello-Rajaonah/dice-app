import { ChangeEvent, useEffect, useState } from "react";
import DicePlatform from "../../containers/DicePlatform";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { displayPlayer, findKeyWithHighestValue, generatePlayerArray, rollDice } from "../../utils/functions";
import { NumberDictionary } from "../../utils/types";
import DiceScore from "../../containers/DiceScore";



const DiceHome = () => {
    const [totalPlayer, setTotalPlayer] = useState(0)
    const [playerScore, setPlayerScore] = useState({} as NumberDictionary)
    const [dices, setDices] = useState({ dice1: 0, dice2: 0 })
    const [playerPlayedCount, setPlayerPlayedCount] = useState(0)
    const [playerTurn, setPlayerTurn] = useState([] as number[])
    const [winnerIndex, setWinnerIndex] = useState(null as null | number)

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


    useEffect(() => {
        const { dice1, dice2 } = dices

        if (dice1 && dice2 && currentPlayerIndex !== null && currentPlayerIndex !== undefined) {
            playerScore[currentPlayerIndex] = dice1 + dice2
            setPlayerScore({ ...playerScore })
            setPlayerPlayedCount(playerPlayedCount + 1)
        }
    }, [dices])

    useEffect(() => {
        const tempWinner = findKeyWithHighestValue(playerScore)
        if (isWinner && tempWinner) {
            setWinnerIndex(Number(tempWinner))
        }

    }, [isWinner])


    return (

        <div className="flex flex-col items-center h-full w-full">


            <div className="flex flex-[0.1] w-full flex-col items-center">

                {!isPlay && (
                    <div className="flex flex-col w-full items-center">
                        
                        <h1> Player number </h1>
                        <div className="flex w-full items-center justify-center">
                            <div className="flex"><Input onChange={onChangeInput} /></div>
                            <div className="flex w-40 ms-8"><Button disabled={isPlay} onClick={handleSetTotalPlayer} className="text-white" label="Set" /></div>
                        </div>
                    </div>

                )}

                {
                    isPlay && (
                        <DiceScore playerScore={playerScore} />
                    )
                }




            </div>


            <div className="flex flex-[0.8] h-full w-full items-center justify-center">
                {isPlay ? (
                    <DicePlatform handleReset={handleReset} currentPlayerIndex={currentPlayerIndex} isWinner={isWinner} dices={dices} handlePlayerPlayed={handlePlayerPlayed} playerPlayedCount={playerPlayedCount} playerTurn={playerTurn} />
                ) : (
                    <h1> Set player number</h1>
                )}
            </div>

            <div className="flex flex-[0.1] h-full w-full items-center justify-center">
                {isPlay && isWinner && (
                    <span>Winner is Player {displayPlayer(winnerIndex)}</span>
                )}
            </div>


        </div>

    );
};

export default DiceHome;