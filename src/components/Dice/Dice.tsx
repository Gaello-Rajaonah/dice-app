
interface DiceProps{
    value:number
}
const Dice = (props: DiceProps) => {
    const {value} = props
    const imageUrl =`/dice/${value}.png`;
  
    return (
      <div>
        <img src={imageUrl} alt="Image" />
      </div>
    );
  };

  export default Dice