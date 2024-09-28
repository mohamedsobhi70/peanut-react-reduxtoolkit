import { useState } from "react";
import { storeData } from '../../assets/data/dummy';
import Bundle from "./Bundle/Bundle";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const Bundles = () => {
    const [currentPage, setCurrentPage] = useState(1); // State for Current Pagination Page
    const [selectedCategory, setSelectedCategory] = useState('All'); // State for selected category
    const cat = ['All', ...new Set(storeData.map(product => product.type))].sort();

    const itemsPerPage = 12; // Number of items per page

    // Filter products by selected category
    const filteredProducts = selectedCategory === 'All'
        ? storeData
        : storeData.filter(product => product.type === selectedCategory);

    // Calculate the number of pages needed
    const pageCount = Math.ceil(filteredProducts.length / itemsPerPage);

    // Determine the products to display for the current page
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredProducts
        .sort((a, b) => a.id - b.id)
        .slice(indexOfFirstItem, indexOfLastItem);

    // Handle page change
    const handlePageChange = (event, value) => {
        setCurrentPage(value); // Set the current page to the selected page
    };

    // Handle category change
    const handleCat = (cat) => {
        setSelectedCategory(cat); // Update the selected category
        setCurrentPage(1); // Reset to the first page when category changes
    };

    return (
        <>
            <div className="container flex flex-col gap-6">
                <header className="mb-5">
                    <h2 className="text-Dark text-lg lg:text-2xl font-semibold">
                        Products
                    </h2>
                </header>
                <ul className="categories flex flex-wrap justify-center items-center gap-3">
                    {cat.map((cat, index) => (
                        <li 
                            className={` btn-sm text-xs ${selectedCategory === cat ? 'btn-primary-alt' : 'btn-primary'}`} 
                            key={index} 
                            onClick={() => handleCat(cat)}
                        >
                            {cat}
                        </li>
                    ))}
                </ul>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4">
                    {currentItems.map(item => <Bundle key={item.id} item={item} />)}
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
        </>
    );
};

export default Bundles;
