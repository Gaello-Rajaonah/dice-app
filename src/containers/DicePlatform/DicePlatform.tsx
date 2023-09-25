import Button from "../../components/Button";

interface Dices {
    dice1: number
    dice2: number
}

interface DicePlatformProps {
    playerTurn: number[]
    playerPlayedCount: number
    handlePlayerPlayed: () => void
    dices: Dices
    isWinner: boolean
    currentPlayerIndex: number
}

const DicePlatform = (props: DicePlatformProps) => {
    const { handlePlayerPlayed, dices, isWinner, currentPlayerIndex } = props
    const { dice1, dice2 } = dices

    const handlePlay = () => {
        handlePlayerPlayed()
    }

    return (
        <div className="">
            {!isWinner && (<h3>Current Player: Player {currentPlayerIndex}</h3>)}
            
            <div>

                Dice container
                <div>Dice 1: {dice1}</div>
                <div>Dice 2: {dice2}</div>

            </div>

            <div>
                Play reset container
                {!isWinner && (<div><Button onClick={handlePlay} className="text-white" label="Play" /></div>)}

                <div><Button className="text-white" label="Reset" /></div>
            </div>
        </div>
    );
};

export default DicePlatform;