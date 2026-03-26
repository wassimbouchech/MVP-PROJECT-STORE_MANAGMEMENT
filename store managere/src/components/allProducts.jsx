import React from "react";

function AllProducts({ products, setPage,setSelectedProduct }) {
  return (
    <div className="product-container">
      {products.map((product) => (
        <div className="product-card"
          key={product.id}
          onClick={() => {
            setSelectedProduct(product)
            setPage("product")
          }}
        >
          <div><img src={product.image} alt="" /></div>
          <div className="product-name"> {product.productName}</div>
          <div className="product-price">{product.price}</div>
        </div>
      ))}
      </div>
    
  );
}

export default AllProducts;
