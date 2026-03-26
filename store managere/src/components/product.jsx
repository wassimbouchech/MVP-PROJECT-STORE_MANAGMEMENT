import { useState } from "react";
import Update from "./Update";
import axios from "axios";
import API from "../API";
function product({ product, products, setProducts, setPage }) {
  const [updated, setUpdated] = useState(false);
  return (
    <div className="post-container">
      
      <img src={product.image} alt="" className="post-img"/>
      <div className="details-container">
      <h2 className="post-title">{product.productName}</h2>
      <p className="post-details">{product.details}</p>
      <p className="post-price">price:{product.price}TND</p>
      <p className="post-quantity">Qte:{product.quantity}</p>
      <button onClick={() => setUpdated(!updated)}>update product</button>
      <button
        onClick={() => {
          try {
            axios.delete(`${API}/${product.id}`);
            const deleted = products.filter((p) => p.id !== product.id);
            setProducts(deleted);
            setPage("allProducts");
            alert("post deleted");
          } catch (err) {
            console.log(err);
            alert("faild to delete");
          }
        }}
      >
        delete
      </button>
      {updated && (
        <Update
          product={product}
          setProducts={setProducts}
          products={products}
        />
      )}</div>
    </div>
  );
}

export default product;
