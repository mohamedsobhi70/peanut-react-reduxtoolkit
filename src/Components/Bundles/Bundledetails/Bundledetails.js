import { useParams } from 'react-router-dom';
import { storeData } from '../../../assets/data/dummy';

const Bundledetails = () => {
    const { id } = useParams();
    const item = storeData.find(item => +item.id === +id);
   
   return <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="rounded-3xl overflow-hidden h-[850px] bg-white">
                <img src={item.img} alt={item.description} className="h-full w-full object-cover" />
            </div>
            <div className="bg-white rounded-3xl p-8 flex flex-col justify-center gap-12">
                <h2 className="text-Dark text-lg lg:text-2xl font-semibold">
                    {item.name}
                </h2>
                <ul className="flex flex-col gap-8">
                    <li className="flex flex-col gap-1">
                        <p className="font-bold text-Primary text-lg">
                            Description :
                        </p>
                        <p className="text-Text text-sm font-semibold leading-relaxed">
                            {item.description}
                        </p>
                    </li>
                    <li className="flex flex-col gap-1">
                        <p className="font-bold text-Primary text-lg">
                            Type :
                        </p>
                        <p className="text-Text text-sm font-semibold leading-relaxed">
                            {item.type}
                        </p>
                    </li>

                    <li className="flex flex-col gap-1">
                        <p className="font-bold text-Primary text-lg">
                            Price :
                        </p>
                        <p className="text-Secondary text-lg font-semibold leading-relaxed">
                            EGP {item.price}
                        </p>
                    </li>
                    <li className="flex flex-col gap-1">
                        <p className="font-bold text-Primary text-lg">
                            Gender :
                        </p>
                        <p className="text-Text text-sm font-semibold leading-relaxed">
                            {item.gender}
                        </p>
                    </li>
                    <li className="flex flex-col gap-1">
                        <p className="font-bold text-Primary text-lg">
                            Available Sizes :
                        </p>
                        <ul className="text-Text text-sm font-semibold leading-relaxed flex items-center gap-7">
                            {item.size.map((el, index) => <li key={index}>{el}</li>)}
                        </ul>
                    </li>
                    <li className="flex flex-col gap-1">
                        <p className="font-bold text-Primary text-lg">
                            Colors :
                        </p>
                        <ul className="text-Text text-sm font-semibold leading-relaxed flex flex-col gap-3">
                            {item.color.map((el, index) => <li key={index} className="flex items-center gap-2"><span className="w-16 h-4" style={{ backgroundColor: `${ el }` }}></span>{el}</li>)}
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>;
};

export default Bundledetails;
