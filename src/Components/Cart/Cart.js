import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import Cartitem from "./Cartitem/Cartitem";
import { Link } from "react-router-dom";

const Cart = () => {
    const cart = useSelector(state => state.cart);

    // Memoize subTotal calculation to avoid recalculating on every render
    const subTotal = useMemo(() => {
        return cart.reduce((acc, cartItem) => acc + (cartItem.price - (cartItem.price * cartItem.discountPercentage / 100)) * cartItem.cartAmount, 0).toFixed(1);
    }, [cart]);


    // Calculate VAT and total amount only once
    const VAT = (subTotal * 0.14).toFixed(1);
    const totalAmount = (subTotal * 1.14).toFixed(1);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Implement submit logic
    }

    return (
        <div className="container">
            <header className="mb-5">
                <h2 className="text-Primary text-lg lg:text-4xl font-bold">Cart</h2>
            </header>

            {/* Cart Form */}
            <form className={cart.length ? 'grid grid-cols-1 lg:grid-cols-3 gap-8' : ''} onSubmit={handleSubmit}>
                {/* Cart Items Section */}
                <div className="lg:col-span-2 flex flex-col gap-6">
                    {
                        cart.length ? (
                            cart.map(cartItem => (
                                <Cartitem key={cartItem.id} item={cartItem} />
                            ))
                        ) :
                            <div className="p-8 rounded-2xl border bg-white border-Error border-opacity-50 transition-colors duration-300 ease-in-out flex flex-col items-center gap-12">
                                {/* Empty Cart Icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" width='120' height='120' fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="stroke-Error">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636" />
                                </svg>
                                {/* Empty Cart Message */}
                                <p className="text-Primary text-2xl font-semibold text-center capitalize">
                                    Your cart is currently empty
                                </p>
                                {/* Link to Home Page */}
                                <Link to='/' className="btn-secondary btn-lg">
                                    Home Page
                                </Link>
                            </div>
                    }
                </div>

                {/* Payment Summary Section */}
                {cart.length ? (
                    <aside className="h-fit lg:sticky lg:top-32">
                        <div className="proceed-payment flex flex-col gap-6">
                            <div>
                                <ul className="divide-y divide-Accent">
                                    {/* Total Product(s) */}
                                    <li className="py-4 first:pt-0 last:pb-0 flex items-center justify-between">
                                        <p className="text-Text font-semibold">Total product(s)</p>
                                        <span className="text-Text font-semibold">
                                            {cart.length}
                                        </span>
                                    </li>
                                    {/* Subtotal */}
                                    <li className="py-4 first:pt-0 last:pb-0 flex items-center justify-between">
                                        <p className="text-Text font-semibold">Subtotal</p>
                                        <span className="text-Text font-semibold">
                                            EGP {subTotal}
                                        </span>
                                    </li>
                                    {/* VAT (14%) */}
                                    <li className="py-4 first:pt-0 last:pb-0 flex items-center justify-between">
                                        <p className="text-Text font-semibold">VAT <span className="text-[10px]">(14%)</span></p>
                                        <span className="text-Text font-semibold">
                                            EGP {VAT}
                                        </span>
                                    </li>
                                    {/* Total Amount */}
                                    <li className="py-4 first:pt-0 last:pb-0 flex items-center justify-between">
                                        <span className="text-xl text-Text font-semibold">
                                            Total amount
                                        </span>
                                        <span className="text-xl text-Secondary font-semibold">
                                            EGP {totalAmount}
                                        </span>
                                    </li>
                                </ul>
                            </div>
                            {/* Payment Button */}
                            <button className="btn-secondary btn-lg">
                                Pay EGP {totalAmount} Now
                            </button>
                        </div>
                    </aside>
                ) : null}
            </form>
        </div>
    );
};

export default Cart;
