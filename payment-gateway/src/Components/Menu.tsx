import PaymentsOptions from "../Enums/PaymentsOptions";
import "./Menu.css";
import { useState } from "react"; //hooks

const option = [
  PaymentsOptions.CARD,
  PaymentsOptions.NETBANKING,
  PaymentsOptions.UPI,
];

// const buttons = [
//   <button className="payment-option payment-option-selected">
//     Debit/Credit Card
//   </button>,
//   <button className="payment-option">Net Banking</button>,
//   <button className="payment-option">UPI</button>,
// ];

console.log(option);

const Menu = () => {
  const [selectedOption, setSelectionOption] = useState(
    PaymentsOptions.NETBANKING
  );

  const buttons = option.map((option) => (
    <button
      className={
        "payment-option" +
        (option === selectedOption ? " payment-option-selected" : "")
      }
      key={option}
      onClick={() => setSelectionOption( option)}
    >
      {option}
    </button>
  ));
  return (
    <div className="menu">
      <div className="payment-options">{buttons}</div>
      <div className="payment-details"></div>
    </div>
  );
};

export default Menu;
