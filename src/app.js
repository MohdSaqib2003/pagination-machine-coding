import React from "react";
import Listing from "./components/Listing";
import { productData } from "./dummyData";

const App = () => {
  return (
    <div>
      <h1>Pagination</h1>
      <Listing products={productData} />
    </div>
  );
};

export default App;

// const totalItems = 100;
// const itemsPerPage = 10;
// const noOfPages = totalItems / itemsPerPage; // 10
// const page = 1; // Change this to any page number

// const startItem = (page - 1) * itemsPerPage + 1;
// const endItem = page * itemsPerPage;

// 1, 2, 3, 4, 5, 6, 7, 8, 9, 10;

//page -> start -> end
// 1 - > 1  - > 10,
// 2 - > 11 - > 20 ,
// 3 - > 21 - > 30 ,
// .
// .
// .
// 9 - > 81 - > 90,
// 10 - > 91 - > 100,
