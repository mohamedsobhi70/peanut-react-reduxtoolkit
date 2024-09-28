import { Link } from "react-router-dom";
import { addToCart } from "../../features/slices/Cartslice";
import { addToWishList, removeFromWishList } from "../../features/slices/Wishlistslice";
import { useDispatch, useSelector } from "react-redux";

const Producitem = ({ item }) => {
    const dispatch = useDispatch();
    let wishList = useSelector(state => state.favourite)
    const isInWishlist = wishList.find((wishListItem) => wishListItem.id === item.id);

    const handleClick = () => {
        if (isInWishlist) {
            dispatch(removeFromWishList(item.id));
        } else {
            dispatch(addToWishList(item));
        }
    };
    console.log(wishList);

    return (
        <div className="bundle-card" >
            <div className="flex items-start justify-between gap-2">
                <div className="relative text-center">
                    <div>
                        <svg className="absolute left-0" width={(+item.stock / 100 * 112).toFixed(1)} height="54" viewBox={`0 0 ${(+item.stock / 100 * 112).toFixed(1)} 54`} fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M70.1323 47.5222C61.0283 42.2527 49.5152 42.4684 40.6647 48.1893L40.2768 48.4214C30.6863 54.1612 18.065 52.9021 9.79034 44.642C0.0336208 34.8843 0.0339337 19.0604 9.79127 9.30307C18.4285 0.665821 31.8122 -0.324785 41.5484 6.33073L41.5879 6.35772L41.629 6.38214C49.9864 11.3451 60.3419 12.9302 70.2272 6.53678L70.0001 6.18567C70.0095 6.18186 70.0189 6.17793 70.0283 6.17389L70.2717 6.52223C80.0138 -0.284874 93.5129 0.661195 102.209 9.35699C111.966 19.1146 111.966 34.9393 102.209 44.6969C93.7823 53.1233 80.8276 54.266 71.1799 48.1345L70.165 47.4895L70.1323 47.5222Z" fill="#FDE8CD"></path>
                        </svg>
                        <svg className="absolute left-0" width="112" height="54" viewBox="0 0 112 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M70.1323 47.5222C61.0283 42.2527 49.5152 42.4684 40.6647 48.1893L40.2768 48.4214C30.6863 54.1612 18.065 52.9021 9.79034 44.642C0.0336208 34.8843 0.0339337 19.0604 9.79127 9.30307C18.4285 0.665821 31.8122 -0.324785 41.5484 6.33073L41.5879 6.35772L41.629 6.38214C49.9864 11.3451 60.3419 12.9302 70.2272 6.53678L70.0001 6.18567C70.0095 6.18186 70.0189 6.17793 70.0283 6.17389L70.2717 6.52223C80.0138 -0.284874 93.5129 0.661195 102.209 9.35699C111.966 19.1146 111.966 34.9393 102.209 44.6969C93.7823 53.1233 80.8276 54.266 71.1799 48.1345L70.165 47.4895L70.1323 47.5222Z" stroke="#F7AB4B" strokeWidth="3"></path>
                        </svg>
                    </div>
                    <div className="flex justify-around items-center relative w-28 h-[54px]">
                        <div className="">
                            <b className="font-semibold text-Dark text-sm">{(+item.stock)}</b>
                            <p className="mb-0 font-medium text-Dark text-[10px]">sold</p>
                        </div>
                        <div className="">
                            <p className="mb-0 font-medium text-Dark text-[10px]">out of</p>
                            <b className="font-semibold text-Dark text-sm">100</b>
                        </div>
                    </div>
                </div>
                {/* add to wish list  */}
                <button onClick={handleClick}>
                    <span className={` rounded-full flex items-center justify-center size-14 transition-all duration-300 ${isInWishlist ? 'bg-Primary' : ' p-3.5'}`}>
                        <svg width="32" height="29" viewBox="0 0 32 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_3266_355)">
                                <path className=" transition-colors duration-300" fill={isInWishlist ? "#fff" : "#3269AC"} d="M15.9925 29C15.7988 29 15.5901 28.9249 15.4411 28.7748L2.60829 16.2862C0.909176 14.455 0 12.1134 0 9.66667C0 4.33799 4.30741 0 9.59851 0C11.9981 0 14.2338 0.8706 15.9925 2.47671C17.7662 0.8706 20.0019 0 22.4015 0C27.6926 0 32 4.33799 32 9.66667C32 12.1134 31.0908 14.455 29.4215 16.2562L16.5589 28.7748C16.395 28.9249 16.2012 29 15.9925 29ZM9.59851 1.60611C5.18677 1.60611 1.59478 5.2236 1.59478 9.66667C1.59478 11.7081 2.35491 13.6594 3.74103 15.1605L15.9925 27.0787L28.2739 15.1304C29.6302 13.6594 30.3903 11.7231 30.3903 9.66667C30.3903 5.2236 26.7983 1.60611 22.3866 1.60611C20.1658 1.60611 18.109 2.50673 16.5738 4.14286C16.2757 4.47308 15.7094 4.47308 15.4113 4.14286C13.8761 2.50673 11.8193 1.60611 9.59851 1.60611Z" />
                            </g>
                            <defs>
                                <clipPath id="clip0_3266_355">
                                    <rect width="32" height="29" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </span>
                </button>
            </div>

            <div className="flex flex-col items-center gap-4">
                <Link to={`/productdetails/${item.id}`} className=" h-80 overflow-hidden">
                    <img src={item.thumbnail} alt={item.title} className='object-contain h-full w-full' />
                </Link>
                <h3 className='text-Dark text-lg font-semibold text-center flex flex-col'>
                    <Link to={`/productdetails/${item.id}`}>
                        {item.title}
                    </Link>
                </h3>
                <p className="text-Text text-xs font-semibold line-clamp-3 text-center">
                    {item.description}
                </p>
            </div>

            <div className="flex flex-col gap-3 mt-auto">
                <div className="text-Primary text-center shrink-0 grow">
                    <div className="flex justify-center items-end gap-2">
                        <p className="text-lg font-semibold">
                            EGP  {(item.price - (item.price * item.discountPercentage / 100)).toFixed(2)}
                        </p>
                        <del className="text-xs text-Error font-semibold">
                            EGP  {item.price.toFixed(2)}
                        </del>
                    </div>
                </div>
                  <button className='btn-secondary btn-lg' onClick={() => dispatch(addToCart(item))} >
                    Add to Cart
                </button>
            </div>
        </div>
    )
};

export default Producitem;
