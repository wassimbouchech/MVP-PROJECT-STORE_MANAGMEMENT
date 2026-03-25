import React, { useState } from "react";

function Discount(product, onUpdatePrice) {
  const [editing, setEditing] = useState(false);
  const [discount, setDiscount] = useState(0);

  const applyDiscount = () => {
    const percentage = parseFloat(discount);
    if (isNaN(percentage) || percentage < 0 || percentage > 100) {
      alert("enter a valid discount (0-100%)");
    }
    const discountPrice = (product.price * percentage) / 100;
    onUpdatePrice(price.id, discountPrice);
    setEditing(false);
  };
  return (
    <div>
      {editing ? (
        <div>
          <input
            type="number"
            placeholder="Discount %"
            value={discount}
            onChange={(e) => setDiscount(e.target.value)}
          />
          <button onClick={applyDiscount}>apply</button>
          <button onClick={() => setEditing(false)}>cancel</button>
        </div>
      ) : (
        <button onClick={() => setEditing(true)}>set a Discount</button>
      )}
    </div>
  );
}

export default Discount;
