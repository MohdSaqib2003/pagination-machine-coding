import React, { useEffect, useState } from "react";
import Pagination from "../Pagination";
import "./index.css";

const ITEMS_PER_PAGE = 10;

const Listing = ({ products }) => {
  const [page, setPage] = useState(1);
  const [startItem, setStartItem] = useState(1);
  const [endItem, setEndItem] = useState(1);

  useEffect(() => {
    // This logic generally used in backend
    // In real world scenerio, we pass page no. to get the data
    setStartItem((page - 1) * ITEMS_PER_PAGE + 1);
    setEndItem(page * ITEMS_PER_PAGE);
  }, [page]);

  return (
    <div>
      {/* Product Listing */}
      <div className="card-container">
        {products.slice(startItem - 1, endItem).map((product) => (
          <div className="card" key={product.id}>
            <img src={product.images[0]} alt={product.title} />
            <div className="card-content">
              <h2 className="card-title">{product.title}</h2>
              <p className="card-price">₹{product.price}</p>
              <a href="#" className="buy-button">
                Buy Now
              </a>
            </div>
          </div>
        ))}
      </div>
      {/* Pagination component */}
      <Pagination
        page={page}
        setPage={setPage}
        total={products.length}
        itemsPerPage={ITEMS_PER_PAGE}
      />
    </div>
  );
};

export default Listing;
