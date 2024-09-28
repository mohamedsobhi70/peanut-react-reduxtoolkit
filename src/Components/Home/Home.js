import { useEffect, useState } from 'react';
import Winner from '../Winner/Winner';
import heroimg from '../../assets/images/shoe3.webp';
import Producitem from '../Products/Producitem';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://dummyjson.com/products?limit=194");
      const data = await response.json();
      setProducts(data.products.filter(prod => prod.stock < 97).sort((a, b) => b.stock - a.stock).slice(0, 12));
    };
    fetchProducts();
  }, []);

  return (
    <div className='flex flex-col gap-12' >
      <div className="container">
        <div className="relative h-[600px] rounded-3xl overflow-hidden">
          <div className="absolute size-full top-0 left-0 bg-gradient-to-b from-transparent to-[#000000b0]"></div>
          <img
            src={heroimg} alt='heroimg' className="w-full h-full object-cover" />
          <p className="absolute top-1/2 -translate-x-1/2 left-1/2 text-white text-xl lg:text-3xl font-bold w-full lg:w-1/2 text-center leading-relaxed">
            Summers SALE up to 50% OFF what are you wating for ,Make your feet as comfortable as walking on the beach
          </p>
        </div>
      </div>

      <div className="container">
        <header className="mb-5">
          <h2 className="text-Dark text-lg lg:text-2xl font-semibold">
            Closing soon
          </h2>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map(item => <Producitem key={item.id} item={item} />)}
        </div>
      </div>

      <div className="container">
        <header className="mb-5">
          <h2 className="text-Dark text-lg lg:text-2xl font-semibold">
            Winners
          </h2>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Winner />
          <Winner />
          <Winner />
        </div>
      </div>


    </div>
  );
};

export default Home;
