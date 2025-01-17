import React, { useState } from "react";

export default function TicketPurchase() {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handlePurchase = () => {
    alert(`Purchasing ${quantity} tickets`);
  };

  return (
    <div className="ticket-purchase">
      <h1>Ticket Purchase</h1>
      <label>
        Quantity:
        <input type="number" value={quantity} onChange={handleQuantityChange} min="1" />
      </label>
      <button onClick={handlePurchase}>Complete Purchase</button>
    </div>
  );
}
