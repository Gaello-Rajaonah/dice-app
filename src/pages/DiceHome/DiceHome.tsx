import DicePlatform from "../../containers/DicePlatform";

const DiceHome = () => {
    return (

        <div className="flex flex-col items-center h-full justify-between">
            <div className="flex flex-col items-center">
                <div> Player number </div>
                <div className="flex">
                    <div>Player number input</div>
                    <div>Button player number</div>
                </div>

            </div>
            <div className="flex h-full w-full items-center justify-center">
                <DicePlatform />
            </div>

            <div className="flex h-full w-full items-center justify-center">
                Winner is Player 1
            </div>

        </div>

    );
};

export default DiceHome;