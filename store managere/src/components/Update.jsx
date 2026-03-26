import axios from "axios";
import React, { useState } from "react";
import API from "../API";

function Update({ product, products, setProducts }) {
  const [field, setField] = useState("price");
  const [value, setValue] = useState("");
  const handleUpdate = () => {
    if (!value) {
      alert("Enter a value");
      return;
    }

    try {
      const updatedData = {
        [field]: field === "price" ? Number(value) : value,
      };
      axios.patch(`${API}/${product.id}`, updatedData);
      const updatedProducts = products.map((p) =>
        p.id === product.id ? { ...p, ...updatedData } : p,
      );

      setProducts(updatedProducts);
      alert(`${field} updated`);
      setValue("");
    } catch (err) {
      console.log(err);
      alert("Update failed");
    }
  };

  return (
    <div>
      <select value={field} onChange={(e) => setField(e.target.value)}>
        <option value="price">Price</option>
        <option value="productName">Product Name</option>
        <option value="details">Details</option>
        <option value="categorie">Category</option>
      </select>

      {field === "categorie" ? (
        <select value={value} onChange={(e) => setValue(e.target.value)}>
          <option value="0">Select a category</option>
          <option value="pc">PC</option>
          <option value="monitor">Monitor</option>
          <option value="accessories">accessories</option>
          <option value="digital">digital items / keys</option>
        </select>
      ) : (
        <input
          type={field === "price" ? "number" : "text"}
          placeholder={`Enter new ${field}`}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      )}

      <button onClick={handleUpdate}>Apply</button>
    </div>
  );
}

export default Update;
