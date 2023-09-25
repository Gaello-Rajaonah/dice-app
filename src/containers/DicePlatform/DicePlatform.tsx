import Button from "../../components/Button";

interface Dices{
    dice1:number
    dice2:number
}

interface DicePlatformProps{
    playerTurn: number[]
    playerPlayedCount: number
    handlePlayerPlayed : ()=>void
    dices: Dices
}

const DicePlatform = (props: DicePlatformProps) => {

    const {playerTurn,playerPlayedCount,handlePlayerPlayed,dices} = props

    const score = dices.dice1 + dices.dice2

    const handlePlay= ()=>{
        handlePlayerPlayed()
    }

    return (
      <div className="">
         <h3>Current Player: Player 1</h3>

         <h3>Score: {score}</h3>

         <div>
            
            Dice container
            <div>Dice 1</div>
            <div>Dice 2</div>

         </div>

         <div>
            Play reset container
            <div><Button onClick={handlePlay} className="text-white" label="Play"/></div>
            <div><Button className="text-white" label="Reset"/></div>
         </div>
      </div>
    );
  };
  
  export default DicePlatform;