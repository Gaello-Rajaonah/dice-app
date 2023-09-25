import Button from "../../components/Button";
import { displayPlayer } from "../../utils/functions";

interface Dices {
    dice1: number
    dice2: number
}

interface DicePlatformProps {
    playerTurn: number[]
    playerPlayedCount: number
    handlePlayerPlayed: () => void
    handleReset: () => void
    dices: Dices
    isWinner: boolean
    currentPlayerIndex: number
}

const DicePlatform = (props: DicePlatformProps) => {
    const { handlePlayerPlayed, handleReset, dices, isWinner, currentPlayerIndex } = props
    const { dice1, dice2 } = dices

    const handlePlay = () => {
        handlePlayerPlayed()
    }

    return (
        <div className="flex flex-col  p-10 w-[60rem] h-[40rem] border-2 border-black">
            <div className="flex flex-[0.1] w-full">
            {!isWinner && (<h2>It is your turn : Player {displayPlayer(currentPlayerIndex)}</h2>)}
            </div>
            
            <div className="flex flex-[0.7]">
                <div>Dice 1: {dice1}</div>
                <div>Dice 2: {dice2}</div>

            </div>

            <div className="flex flex-col flex-[0.2]">
                {!isWinner && (<div><Button onClick={handlePlay} className="text-white" label="Play" /></div>)}
                <div className="mt-6"><Button onClick={handleReset} className="text-white" label="Reset" /></div>
            </div>
        </div>
    );
};

export default DicePlatform;