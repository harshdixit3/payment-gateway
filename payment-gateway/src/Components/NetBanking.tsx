import { FormEvent, useState } from "react";
import ConfermationDialog from "./ConfermationDialog";
import PaymentsOptions from "../Enums/PaymentsOptions";

const NetBanking = () => {
  const [name, setName] = useState("");
  const [password, setPasswaord] = useState("");

  const [showConfermationDialog, setshowConfermationDialog] = useState(false);

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
                <label htmlFor="cardNumber">Bank Name:</label>
              </td>
              <td>
                <select>
                  <option value="" disabled>
                    Select
                  </option>
                  <option value="Andhra Bank">Andhra Bank</option>
                  <option value="Axis Bank">Axis Bank</option>
                  <option value="Bank of Baroda">Bank of Baroda</option>

                  <option value="HDFC Bank">HDFC Bank</option>
                  <option value="ICICI Bank">ICICI Bank</option>
                  <option value="South Indian Bank">South Indian Bank</option>
                  <option value="State Bank of India">
                    State Bank of India
                  </option>
                  <option value="Yes Bank">Yes Bank</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="name">UserName</label>
              </td>
              <td>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  required
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="expiryDate">Password</label>
              </td>
              <td>
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={(event) => setPasswaord(event.target.value)}
                  id="pwd"
                  placeholder="password"
                  required
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
      {showConfermationDialog && (<ConfermationDialog onClickNo={closeDialog} paymentOption={PaymentsOptions.CARD} /> )}
    </div>
  );
};

export default NetBanking;
