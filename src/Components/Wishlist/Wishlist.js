import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromWishList } from '../../features/slices/Wishlistslice'
import { Link } from "react-router-dom";

const Wishlist = () => {
    let wishList = useSelector(state => state.favourite)
    const dispatch = useDispatch();
    console.log(wishList);

    let items = wishList.map((item, index) => <div key={index} className="bundle-card items-start">
        <div className="h-52 overflow-hidden w-full">
            <img src={item.thumbnail} alt={item.title} className="w-full h-full object-cover" />
        </div>

        <h2 className="text-lg font-bold">
            <Link to={`/productdetails/${item.id}`}>
                {item.title}
            </Link>
        </h2>

        <p className="text-sm line-clamp-3 font-semibold">
            {item.description}
        </p>
        <div className="flex items-end gap-2">
            <p className="text-base font-semibold">
                {item.price - (item.price * item.discountPercentage / 100)}
            </p>
            <del className="text-xs text-Error font-semibold">
                {item.price}
            </del>
        </div>

        <button className="btn-primary-alt btn-sm mt-auto capitalize text-xs" onClick={() => dispatch(removeFromWishList(item.id))}> remove From wishlist</button>
    </div>
    )

    return <div className="container">


        {
            wishList.length ?
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
                    {items}
                </div>
                :
                <div className="p-8 rounded-2xl border bg-white border-Error border-opacity-50 transition-colors duration-300 ease-in-out flex flex-col items-center gap-12">
                    {/* Empty Cart Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" width='120' height='120' fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="stroke-Error">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636" />
                    </svg>
                    {/* Empty Cart Message */}
                    <p className="text-Primary text-2xl font-semibold text-center capitalize">
                        Your Wishlist is currently empty
                    </p>
                    {/* Link to Home Page */}
                    <Link to='/' className="btn-secondary btn-lg">
                        Home Page
                    </Link>
                </div>
        }

    </div>;
};

export default Wishlist;
