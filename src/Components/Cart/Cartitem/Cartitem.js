import React from "react";
import { addToCart, reduceItemAmount, removeFromCart } from "../../../features/slices/Cartslice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Cartitem = ({ item }) => {
    const dispatch = useDispatch();
    return <div className="cart-item">
        <div className="flex flex-col lg:flex-row lg:items-center gap-6 flex-1">
            <Link to={`/productdetails/${item.id}`} className="img-container">
                <img src={item.thumbnail} className="w-full h-full object-cover" alt={item.title} />
            </Link>
            <div className="flex flex-col items-center lg:items-start gap-6">
                <h3 className="text-Dark font-semibold leading-relaxed">
                    <Link to={`/productdetails/${item.id}`}>
                        {item.title}
                    </Link>
                </h3>
                <div className="flex items-center gap-8">
                    <button className="rounded-full bg-Accent size-8 flex items-center justify-center " onClick={() => dispatch(reduceItemAmount(item))}>
                        <svg width="11" height="3" viewBox="0 0 11 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="10.1953" y="0.222214" width="2.37037" height="9.50428" transform="rotate(90 10.1953 0.222214)" fill="#3269AC" />
                        </svg>
                    </button>
                    <span className="text-Primary font-bold">
                        {item.cartAmount || 1}
                    </span>
                    <button className="rounded-full bg-Accent size-8 flex items-center justify-center disabled:opacity-30" onClick={() => dispatch(addToCart(item))}>
                        <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="4.25586" y="0.666672" width="2.37607" height="9.48148" fill="#3269AC" />
                            <rect x="10.1953" y="4.22223" width="2.37037" height="9.50427" transform="rotate(90 10.1953 4.22223)" fill="#3269AC" />
                        </svg>
                    </button>
                </div>
                <strong className="text-2xl font-bold text-Primary flex gap-2 items-end">
                    EGP {((+item.price - (+item.price * +item.discountPercentage / 100)) * +item.cartAmount).toFixed(2)}
                    <del className="text-sm text-Secondary">{(+item.price * +item.cartAmount).toFixed(2)}</del>
                </strong>
            </div>
        </div>

        <div className="flex justify-center">

            <button className="text-Error font-semibold flex items-center gap-2 shrink-0" onClick={() => dispatch(removeFromCart(item.id))}>
                <svg width="18" height="24" viewBox="0 0 18 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.9369 23.3478H5.06383C2.89376 23.3478 1.12207 21.5605 1.12207 19.3713V4.62866H2.24379V19.3819C2.24379 20.9471 3.5018 22.2162 5.05335 22.2162H12.9264C14.4779 22.2162 15.7359 20.9471 15.7359 19.3819V4.62866H16.8577V19.3819C16.8786 21.5711 15.1069 23.3478 12.9369 23.3478Z" fill="#FF4F4F" />
                    <path d="M18 4.05756H0V5.18917H18V4.05756Z" fill="#FF4F4F" />
                    <path d="M6.75161 8.59459H5.62988V18.8108H6.75161V8.59459Z" fill="#FF4F4F" />
                    <path d="M12.3707 8.59459H11.249V18.8108H12.3707V8.59459Z" fill="#FF4F4F" />
                    <path d="M14.0684 4.34311H12.9466V2.77789C12.9466 2.22795 12.4434 1.78377 11.8249 1.78377H6.18485C5.56633 1.78377 5.06313 2.22795 5.06313 2.77789V4.34311H3.94141V2.77789C3.94141 1.60398 4.94781 0.652161 6.18485 0.652161H11.8144C13.0515 0.652161 14.0684 1.60398 14.0684 2.77789V4.34311Z" fill="#FF4F4F" />
                </svg>
                Remove
            </button>

        </div>
    </div>
};

export default Cartitem;
