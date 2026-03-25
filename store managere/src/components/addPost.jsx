import React, { useState } from "react";
import axios from "axios";
import API from "../API";

function addPost() {
  const [productName, setProductName] = useState("");
  const [categorie, setCategorie] = useState("");
  const [details, setDetails] = useState("");
  const [price, setPrice] = useState(0.0);
  const [image, setImage] = useState("");
  const [qte, setqte] = useState(0);

  const postProdduct = () => {
    e.preventDefault();
    if (categorie == "0") {
      alert("choose categorie");
    }
    const newProduct = {
      productName: productName,
      details: details,
      categorie: categorie,
      price: price,
      quantity: qte,
      image: image,
    };
    axios
      .post(API, newProduct)
      .then((res) => {
        console.log("product addedd", res.data);
        setProductName("");
        setCategorie("0");
        setDetails("");
        setPrice(0.0);
        setImage("");
        setqte(0);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <h1>New Product</h1>
      <form onSubmit={postProdduct}>
        <input
          type="text"
          placeholder="Product Name..."
          required
          minLength="3"
          value={productName}
          onChange={(e) => {
            setProductName(e.target.value);
          }}
        />
        <textarea
          placeholder="product Details"
          required
          minLength="20"
          value={details}
          onChange={(e) => {
            setDetails(e.target.value);
          }}
        />
        <select
          value={categorie}
          onChange={(e) => {
            setCategorie(e.target.value);
          }}
        >
          <option value="0">choose categorie</option>
          <option value="pc">pc</option>
          <option value="monitor">monitor</option>
          <option value="accessories">accessories</option>
          <option value="digital">digital items / keys</option>
        </select>
        <input
          type="number"
          placeholder="price ..."
          required
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        />
        <input
          type="number"
          placeholder="quantity..."
          required
          value={qte}
          onChange={(e) => {
            setqte(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="image link"
          required
          value={image}
          onChange={(e) => {
            setImage(e.target.value);
          }}
        />
        <input type="submit" value="post" />
      </form>
    </div>
  );
}

export default addPost;
