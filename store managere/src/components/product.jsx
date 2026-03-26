import { useState, useEffect } from "react";
import Update from "./Update";
import axios from "axios";
import API from "../API";
import { useParams } from "react-router-dom";

function Product({ products, setProducts }) {
  const [updated, setUpdated] = useState(false);
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const found = products.find((p) => p.id.toString() === id);
    setProduct(found);
  }, [id, products]);

  if (!product) return <p>Loading product...</p>;

  return (
    <div className="post-container">
      <img src={product.image} alt="" className="post-img" />
      <div className="details-container">
        <h2 className="post-title">{product.productName}</h2>
        <p className="post-details">{product.details}</p>
        <p className="post-price">price: {product.price} TND</p>
        <p className="post-quantity">Qte: {product.quantity}</p>
        <button onClick={() => setUpdated(!updated)}>update product</button>
        <button
          onClick={() => {
            try {
              axios.delete(`${API}/${product.id}`);
              const deleted = products.filter((p) => p.id !== product.id);
              setProducts(deleted);
              alert("post deleted");
            } catch (err) {
              console.log(err);
              alert("failed to delete");
            }
          }}
        >
          delete
        </button>
        {updated && (
          <Update product={product} setProducts={setProducts} products={products} />
        )}
      </div>
    </div>
  );
}

export default Product;