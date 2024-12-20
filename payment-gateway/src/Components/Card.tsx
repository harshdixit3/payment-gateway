import { FormEvent, useState } from "react";
import { range } from "../utils";
import ConfermationDialog from "./ConfermationDialog";
import PaymentsOptions from "../Enums/PaymentsOptions";

const Card = () => {
  const [cardNumber, seCardNumber] = useState("");
  const [name, setName] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [CVV, setCVV] = useState("");

  const [showConfermationDialog, setshowConfermationDialog] = useState(false);

  const date = new Date();
  const currentYear = date.getFullYear();

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setshowConfermationDialog(true);
  };

  const closeDialog = () => {
    setshowConfermationDialog(false);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <table>
          <tbody>
            <tr>
              <td>
                <label htmlFor="cardNumber">
                  Credit Card Number: (12 Digit number) :
                </label>
              </td>
              <td>
                <input
                  type="number"
                  id="cardNumber"
                  min="1000000000000"
                  max="999999999999"
                  name="cardNumber"
                  value={cardNumber}
                  onChange={(event) => seCardNumber(event.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="name">Name : </label>
              </td>
              <td>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="expiryDate">Expiry Date:</label>
              </td>
              <td>
                <div id="expiryDate">
                  <select
                    id="month"
                    name="month"
                    value={month}
                    onChange={(event) => setMonth(event.target.value)}
                  >
                    <option value="">mm</option>
                    <option value="1">01</option>
                    <option value="2">02</option>
                    <option value="3">03</option>
                    <option value="4">04</option>
                    <option value="5">05</option>
                    <option value="6">06</option>
                    <option value="7">07</option>
                    <option value="8">08</option>
                    <option value="9">09</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                  </select>
                  <select
                    id="year"
                    name="year"
                    value={year}
                    onChange={(event) => setYear(event.target.value)}
                  >
                    <option value="">year</option>
                    {range(currentYear, currentYear + 10).map((year) => (
                      <option value={year} key={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="cvv">CVV Number : </label>
              </td>
              <td>
                <input
                  type="number"
                  id="cvv"
                  name="cvv"
                  value={CVV}
                  onChange={(event) => setCVV(event.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>
                <button className="btn btn-pay">Pay</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
      {showConfermationDialog && (
        <ConfermationDialog
          onClickNo={closeDialog}
          paymentOption={PaymentsOptions.CARD}
        />
      )}
    </div>
  );
};

export default Card;
