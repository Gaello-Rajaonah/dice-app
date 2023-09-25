import { displayPlayer } from "../../utils/functions"
import { NumberDictionary } from "../../utils/types"

interface DiceScoreProps {
    playerScore: NumberDictionary
}

const DiceScore = (props: DiceScoreProps) => {
    const { playerScore } = props

    return (
        <div className="flex ">
            <div className="flex">
               <h2>Scores : </h2> 
            </div>
            <div className="flex">
            {Object.entries(playerScore).map(([key, value]) => (
               <div className="flex justify-between ms-4 " key={key}>
                 <h2>{`Player ${ displayPlayer(Number(key))}`} : {value} /</h2> 
               </div>
            ))}
            </div>

        </div>

    )

}

export default DiceScore