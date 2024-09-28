import { useState, useEffect, useMemo } from "react";
import Producitem from "./Producitem";
import Loading from "../Loading/Loading";
import { Pagination, Stack } from "@mui/material";
const Products = () => {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedCategories, setSelectedCategories] = useState([]); // Changed to an array for multiple selections
    const itemsPerPage = 10;

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch("https://dummyjson.com/products?limit=194");
                const data = await response.json();
                setProducts(data.products.sort((a, b) => a.id - b.id));
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };
        fetchProducts();
    }, []);

    // Memoize the category calculation
    const categories = useMemo(() => {
        return [...new Set(products.map(product => product.category))].sort();
    }, [products]);

    const filteredProducts = selectedCategories.length === 0 || selectedCategories.includes('All')
        ? products
        : products.filter(product => selectedCategories.includes(product.category));


    const pageCount = Math.ceil(filteredProducts.length / itemsPerPage);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);

    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };

    const handleCat = (category) => {
        setCurrentPage(1); // Reset to the first page on filter change

        setSelectedCategories(prev => {
            // Toggle category selection
            if (prev.includes(category.target.id)) {
                // If category is already selected, remove it
                const updatedCategories = prev.filter(cat => cat !== category.target.id);
                return updatedCategories;
            } else {
                // Add the new category to the selected ones
                return [...prev, category.target.id];
            }
        });
    };
    
    return <div className="container">

        {
            products.length === 0 ?
                <Loading />
                :
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
                    <div className="flex flex-col rounded-xl overflow-hidden bg-white h-fit lg:sticky lg:top-32">
                        <h3 className="text-xl font-semibold p-5 border-b border-Accent">
                            Categories
                        </h3>
                        <ul className="flex flex-col gap-3 p-5 max-h-[700px] overflow-auto">
                            {categories.map((cat, index) => {
                                const categoryCount = products.filter(product => product.category === cat).length;
                                return (
                                    <li key={index} className="flex items-center gap-3">
                                        <input type="checkbox" className="peer cursor-pointer size-5 rounded-2xl accent-Primary" name="check-1" id={cat} onChange={handleCat} />
                                        <label htmlFor={cat} className="capitalize cursor-pointer w-full text-Text font-semibold text-xs transition-colors duration-300 text-opacity-60 flex-1 peer-checked:text-opacity-100 line-clamp-1">
                                            {cat}
                                        </label>
                                        <span className="size-6 text-[11px] bg-Primary bg-opacity-10 peer-checked:bg-opacity-100 rounded-full flex items-center justify-center transition-colors duration-300 text-opacity-60 peer-checked:text-opacity-100 peer-checked:text-white">
                                            {categoryCount}
                                        </span>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <div className="lg:col-span-3 flex flex-col gap-8">
                        <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
                            {currentItems.map(item => <Producitem key={item.id} item={item} />)}
                        </div>

                        {
                            pageCount > 1 && (
                                <div className="flex justify-center">
                                    <Stack spacing={2} mt={4}>
                                        <Pagination
                                            count={pageCount}
                                            page={currentPage}
                                            onChange={handlePageChange}
                                            sx={{
                                                "& .MuiPaginationItem-root.Mui-selected": {
                                                    backgroundColor: "#F7AB4B",
                                                    color: "white",
                                                },
                                            }}
                                        />
                                    </Stack>
                                </div>
                            )
                        }
                    </div>

                </div>
        }



    </div>;
};

export default Products;
