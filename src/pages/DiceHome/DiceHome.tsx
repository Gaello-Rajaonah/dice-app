import { ChangeEvent, useState } from "react";
import DicePlatform from "../../containers/DicePlatform";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { generatePlayerArray } from "../../utils/functions";

const DiceHome = () => {
    const [totalPlayer, setTotalPlayer] = useState(0)
    const [playerScore, setPlayerScore] = useState({})
    const [dices, setDices] = useState({ dice1: 0, dice2: 0 })
    const [playerPlayedCount, setPlayerPlayedCount] = useState(0)
    const [playerTurn, setPlayerTurn] = useState([] as number[])

    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setTotalPlayer(Number(value));
    };

    const handleSetTotalPlayer = () => {
        const playerArray = generatePlayerArray(totalPlayer)
        setPlayerTurn(playerArray)
    }

    const handlePlayerPlayed = () => {
        setPlayerPlayedCount(playerPlayedCount + 1)
        setDices({ ...dices, dice1: 3, dice2: 5 })
    }

    const isWinner = playerPlayedCount == totalPlayer


    return (

        <div className="flex flex-col items-center h-full justify-between">
            <div className="flex flex-col items-center">
                <div> Player number </div>
                <div className="flex">
                    <div><Input onChange={onChangeInput} /></div>
                    <div><Button onClick={handleSetTotalPlayer} className="text-white" label="Set" /></div>
                </div>

            </div>
            <div className="flex h-full w-full items-center justify-center">
                <DicePlatform dices={dices} handlePlayerPlayed={handlePlayerPlayed} playerPlayedCount={playerPlayedCount} playerTurn={playerTurn} />
            </div>

            {isWinner && (
                <div className="flex h-full w-full items-center justify-center">
                    Winner is Player 1
                </div>
            )}


        </div>

    );
};

export default DiceHome;