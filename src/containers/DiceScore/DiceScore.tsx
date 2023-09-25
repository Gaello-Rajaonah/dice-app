import { displayPlayer } from "../../utils/functions"
import { NumberDictionary } from "../../utils/types"

interface DiceScoreProps {
    playerScore: NumberDictionary
}

const DiceScore = (props: DiceScoreProps) => {
    const { playerScore } = props

    return (
        <div>
            {Object.entries(playerScore).map(([key, value]) => (
               <div className="flex justify-between" key={key}>
                  {`Player ${ displayPlayer(Number(key))}`} : {value} 
               </div>
            ))}
        </div>

    )

}

export default DiceScore