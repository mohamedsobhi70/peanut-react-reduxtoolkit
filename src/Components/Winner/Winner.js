import winner from "../../assets/images/winner.jpg";
import im from "../../assets/images/hoodie2.webp";

const Winner = () => {
    return <div className="winner-card">
        <div className="img-container">
            <img src={winner} alt="" />
        </div>
        <div className="winner-card-content">
            <div className="h-60 overflow-hidden">
                <img src={im} alt="" className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col gap-1">
                <h3 className="text-Secondary font-bold text-2xl text-center">
                    Congratulations to
                </h3>
                <p className="text-Primary font-semibold text-center">
                    Fares Tayyar
                </p>
                <p className="text-Primary font-semibold text-center">
                    On winning an Apple bundle
                </p>
            </div>
            <div className="flex flex-col gap-1">
                <p className="text-xs text-Text font-medium text-center">
                    Ticket: 128235712
                </p>
                <p className="text-xs text-Text font-medium text-center">
                    Draw date: 22 Jan 2021
                </p>
            </div>
        </div>
    </div>;
};

export default Winner;
