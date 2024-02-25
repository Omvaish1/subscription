import { ChangeEvent, useState } from "react";

export function Purchase() {
  const [users, setUsers] = useState(1);
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setUsers(Number(e.target.value));
  }
  return (
    <div className="purchase-details">
      <input
        type="range"
        min={1}
        max={500}
        value={users}
        onChange={handleChange}
      ></input>
      <p>
        {users} {users === 1 ? "user" : "users"}
      </p>
      <div className="pricing">
        <p>Price</p>
        <p>$0000</p>
      </div>
      <div id="total" className="pricing">
        <p>Total</p>
        <p>$0000</p>
      </div>
      <div className="pricing-buttons">
        <button>Contact Us</button>
        <button>Buy Now</button>
      </div>
    </div>
  );
}
