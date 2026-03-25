import React from "react";
import Discount from "./Discount";

function AllProducts({ products, setPage, setProducts,setSelectedProduct }) {
  const handleDiscount = (id, newPrice) => {
    const update = products.map((p) =>
      p.id === id ? { ...p, price: newPrice } : p,
    );
    setProducts(update);
  };
  return (
    <>
      {products.map((product) => (
        <div
          key={product.id}
          onClick={() => {
            setSelectedProduct(product)
            setPage("product")
            set;
          }}
        >
          <div><img src={product.image} alt="" /></div>
          <div>{product.productName}</div>
          <div>{product.price}</div>
          <Discount product={product} onUpdatePrice={handleDiscount} />
        </div>
      ))}
    </>
  );
}

export default AllProducts;
