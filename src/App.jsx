import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 1, packed: true },
  { id: 3, description: "Shoes", quantity: 2, packed: false },
];

export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackageList />
      <Stat />
    </div>
  );
}
function Logo() {
  return <h1>🌴Tom Cafee💼</h1>;
}

function Form() {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;
    const newItem = {
      description: description,
      quantity: quantity,
      id: new Date(),
      packed: false,
    };
    console.log(newItem);
    setQuantity(1);
    setDescription("");
  }

  return (
    <form onSubmit={handleSubmit} className="add-form">
      <h3>What do you need for your 😁trip?</h3>
      <select
        value={quantity} // Set the value to the state
        onChange={(e) => {
          setQuantity(Number(e.target.value)); // Update state on change
        }}
      >
        {Array.from({ length: 25 }, (_, i) => i + 1).map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Items..."
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <button>Add</button>
    </form>
  );
}
function PackageList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item item={item} />
        ))}
      </ul>
    </div>
  );
}
function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
        <button>❌</button>
      </span>
    </li>
  );
}
function Stat() {
  return (
    <footer className="stats">
      <p>you have X items on your lsits and you already packed X(X%)</p>
    </footer>
  );
}
