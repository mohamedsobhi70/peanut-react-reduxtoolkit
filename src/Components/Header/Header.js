import React, { useState } from "react";
import logo from '../../assets/images/Logo.svg'
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectTotalItems } from "../../features/slices/Cartslice";
const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const totalItems = useSelector(selectTotalItems);

    const handleCloseMenu = () => {
        setIsMenuOpen(false);
    }
    const handleOpenMenu = () => {
        setIsMenuOpen(true);
    }
    return (
        <header className="peanut-header">
            <div className="container">
                <div className="peanut-header-contaianer">
                    <Link to="/" className="shrink-0">
                        <img src={logo} width="147" height="46" alt="Logo" />
                        <span className="sr-only">Logo</span>
                    </Link>
                    <button className="open-mobile-menu-btn flex flex-col gap-1 lg:hidden" onClick={handleOpenMenu}>
                        <span className="bg-Primary rounded-full h-0.5 w-5"></span>
                        <span className="bg-Primary rounded-full h-0.5 w-5"></span>
                        <span className="bg-Primary rounded-full h-0.5 w-5"></span>
                    </button>
                    <div className={`mobile-menu-container ${isMenuOpen && 'active'}`}>
                        <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-12 grow">
                            <button className="close-mobile-menu-btn size-12 rounded-full flex lg:hidden items-center justify-center bg-opacity-10 bg-Primary" onClick={handleCloseMenu}>
                                <svg width="11" height="18" viewBox="0 0 12 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path clipRule="evenodd" d="M11.9872 2.0085L3.74938 10.2492L12 18.4646L10.2457 20.4512L-6.17858e-08 10.2492L10.2457 -8.40767e-05L11.9872 2.0085Z" fill="#3269AC" />
                                </svg>
                            </button>
                            <nav className="grow flex">
                                <ul className="flex flex-col lg:flex-row justify-center lg:justify-start items-center gap-8 xl:gap-12 grow">
                                    <li>
                                        <NavLink to="/" className="nav-link">
                                            Home
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/products" className="nav-link">
                                            Products
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/wishlist" className="nav-link">
                                            Favorites
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/tickets" className="nav-link">
                                            Tickets
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/draws" className="nav-link">
                                            Draws
                                        </NavLink>
                                    </li>
                                </ul>
                            </nav>
                            <div className="flex justify-evenly lg:justify-start items-center gap-8 xl:gap-12">
                                <NavLink to="/login" className="nav-link">
                                    <svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.7522 20.3157V20.4657H15.9022H16.8889H16.8981H17.0481V20.3157V15.886C17.0481 13.9076 15.4214 12.2948 13.4308 12.2948H4.52283C2.5322 12.2948 0.905542 13.9076 0.905542 15.886V20.3157V20.4657H1.05554H2.05147H2.20147V20.3157V15.886C2.20147 14.6154 3.23982 13.5833 4.52283 13.5833H13.4308C14.7138 13.5833 15.7522 14.6154 15.7522 15.886V20.3157Z" fill="#364456" stroke="#364456" strokeWidth="0.3" />
                                        <path d="M3.38625 6.08411C3.38625 9.14247 5.89818 11.6339 8.97695 11.6339C12.0557 11.6339 14.5676 9.14247 14.5676 6.08411C14.5676 3.02574 12.0557 0.534326 8.97695 0.534326C5.89818 0.534326 3.38625 3.02574 3.38625 6.08411ZM4.67296 6.07496C4.67296 3.72439 6.6058 1.80446 8.97695 1.80446C11.3481 1.80446 13.2809 3.72439 13.2809 6.07496C13.2809 8.42553 11.3481 10.3455 8.97695 10.3455C6.6058 10.3455 4.67296 8.42553 4.67296 6.07496Z" fill="#364456" stroke="#364456" strokeWidth="0.3" />
                                    </svg>
                                    Login
                                </NavLink>
                                <NavLink to="/cart" className="nav-link relative">
                                    {totalItems ? <span className="absolute -top-3 -start-3 size-5 text-[10px] font-semibold text-white rounded-full bg-Secondary flex items-center justify-center">{totalItems}</span> : null}
                                    <svg width="25" height="23" viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19.1092 15.1069H6.50446C4.24523 15.1069 2.07547 13.295 1.68402 11.0693L0.50967 4.40349C0.476118 4.22455 0.532039 4.0456 0.643882 3.91138C0.755725 3.77717 0.92349 3.69888 1.10244 3.69888H20.9098V4.8956H1.81823L2.86956 10.8457C3.16035 12.5009 4.82681 13.899 6.50446 13.899H19.1092V15.1069Z" fill="#364456" strokeWidth="0" />
                                        <path d="M15.5078 18.7083H1.69519V17.5116H15.4966C17.4315 17.5116 18.2032 15.8115 18.5164 14.38L20.9098 0.600889C20.9657 0.310097 21.2118 0.0975952 21.5026 0.0975952H24.5V1.29432H22.0059L19.6907 14.6036C19.1315 17.2208 17.6105 18.7083 15.5078 18.7083Z" fill="#364456" strokeWidth="0" />
                                        <path d="M14.4565 22.9024C13.1368 22.9024 12.0519 21.8287 12.0519 20.4978C12.0519 19.178 13.1256 18.0932 14.4565 18.0932C15.7763 18.0932 16.8611 19.1669 16.8611 20.4978C16.8499 21.8287 15.7763 22.9024 14.4565 22.9024ZM14.4565 19.3011C13.7966 19.3011 13.2598 19.8379 13.2598 20.4978C13.2598 21.1577 13.7966 21.6945 14.4565 21.6945C15.1164 21.6945 15.6532 21.1577 15.6532 20.4978C15.6532 19.8379 15.1164 19.3011 14.4565 19.3011Z" fill="#364456" strokeWidth="0" />
                                        <path d="M4.84921 22.9024C3.52946 22.9024 2.44458 21.8287 2.44458 20.4978C2.44458 19.178 3.51827 18.0932 4.84921 18.0932C6.16895 18.0932 7.25383 19.1669 7.25383 20.4978C7.25383 21.8287 6.16895 22.9024 4.84921 22.9024ZM4.84921 19.3011C4.18933 19.3011 3.65248 19.8379 3.65248 20.4978C3.65248 21.1577 4.18933 21.6945 4.84921 21.6945C5.50908 21.6945 6.04593 21.1577 6.04593 20.4978C6.04593 19.8379 5.50908 19.3011 4.84921 19.3011Z" fill="#364456" strokeWidth="0" />
                                    </svg>
                                    Cart
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
