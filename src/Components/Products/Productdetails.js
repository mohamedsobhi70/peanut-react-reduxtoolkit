import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../Loading/Loading';
import { Rating } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../features/slices/Cartslice';

const Productdetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch(`https://dummyjson.com/products/${id}`);
            const data = await response.json();
            setProduct(data);
        };
        fetchProducts();
    }, [id]);

    return <div className="container">
        {
            Object.keys(product).length === 0 ?
                <Loading />
                :
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="rounded-3xl overflow-hidden bg-white flex items-center justify-center relative">
                        <button className="btn-secondary btn-sm absolute top-10 end-10 " onClick={() => dispatch(addToCart(product))}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                            </svg>
                            Add to Cart
                        </button>
                        <strong className="absolute bottom-10 end-10 border border-Error flex items-center gap-3 text-Error text-sm font-semibold px-4 py-3 rounded-full">
                            {product.discountPercentage}% OFF
                            <svg width="13" height="16" viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.29443 13.5L6.29443 0" stroke="#FF4F4F" strokeWidth="2" />
                                <path d="M11.7944 8.5L6.29443 14L0.794434 8.5" stroke="#FF4F4F" strokeWidth="2" />
                            </svg>

                        </strong>
                        {product.images && product.images.length > 0 ?
                            <img src={product.images[0]} alt={product.title} className="h-full w-full object-contain" /> :
                            <svg className="size-32"
                                viewBox="0 0 24 24">
                                <path d="m18 22-.01-6L14 12l3.99-4.01L18 2H6v6l4 4-4 3.99V22zM8 7.5V4h8v3.5l-4 4z"></path>
                            </svg>
                        }

                    </div>
                    <div className="bg-white rounded-3xl p-8 flex flex-col justify-center gap-12">
                        <div className="flex flex-col gap-2">
                            <h2 className="text-Dark text-lg lg:text-2xl font-semibold">
                                {product.title}
                            </h2>
                            <div className="flex gap-2">
                                <Rating name="read-only" value={product.rating} precision={0.1} readOnly />
                                <sub className='text-xs font-semibold'>
                                    ({product.rating})
                                </sub>
                            </div>

                        </div>
                        <ul className="flex flex-col gap-6">
                            <li className="flex flex-col gap-1">
                                <p className="font-bold text-Primary text-lg">
                                    Description :
                                </p>
                                <p className="text-Text text-sm font-semibold leading-relaxed">
                                    {product.description}
                                </p>
                            </li>
                            <li className="flex flex-col gap-1">
                                <p className="font-bold text-Primary text-lg">
                                    Category :
                                </p>
                                <p className="text-Text text-sm font-semibold leading-relaxed">
                                    {product.category}
                                </p>
                            </li>
                            <li className="flex flex-col gap-1">
                                <p className="font-bold text-Primary text-lg">
                                    Warranty Information :
                                </p>
                                <p className="text-Text text-sm font-semibold leading-relaxed">
                                    {product.warrantyInformation}
                                </p>
                            </li>

                            <li className="flex flex-col gap-1">
                                <p className="font-bold text-Primary text-lg">
                                    Price :
                                </p>
                                <p className="text-Secondary text-lg font-semibold leading-relaxed">
                                    EGP {product.price}
                                </p>
                            </li>
                            <li className="flex flex-col gap-1">
                                <p className="font-bold text-Primary text-lg">
                                    Brand :
                                </p>
                                <p className="text-Text text-sm font-semibold leading-relaxed">
                                    {product.brand}
                                </p>
                            </li>
                            <li className="flex flex-col gap-1">
                                <p className="font-bold text-Primary text-lg">
                                    Tags :
                                </p>
                                <ul className="text-Text text-sm font-semibold leading-relaxed flex items-center gap-7">
                                    {product.tags && product.tags.length && product.tags.map((el, index) => <li key={index}>{el}</li>)}
                                </ul>
                            </li>
                            <li>
                                <img width='150' height='150' src={product.meta.qrCode} alt="qr-code" />
                            </li>
                            {/* <li className="flex flex-col gap-1">
                        <p className="font-bold text-Primary text-lg">
                            Colors :
                        </p>
                        <ul className="text-Text text-sm font-semibold leading-relaxed flex flex-col gap-3">
                            {product.tags && product.tags.length && product.color.map((el, index) => <li key={index} className="flex items-center gap-2"><span className="w-16 h-4" style={{ backgroundColor: `${el}` }}></span>{el}</li>)}
                        </ul>
                    </li> */}
                        </ul>

                    </div>
                </div>
        }

    </div>;
};

export default Productdetails;
