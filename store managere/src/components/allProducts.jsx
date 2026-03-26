import React from "react";
import { Link } from "react-router-dom";

function AllProducts({ products }) {
  return (
    <div className="product-container">
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <Link to={`/product/${product.id}`}>
            <div>
              <img src={product.image} alt="" />
            </div>
            <div className="product-name"> {product.productName}</div>
            <div className="product-price">{product.price}</div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default AllProducts;
