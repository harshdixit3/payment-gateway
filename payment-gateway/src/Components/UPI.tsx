import { FormEvent, useState } from "react";
import ConfermationDialog from "./ConfermationDialog";
import PaymentsOptions from "../Enums/PaymentsOptions";

const UPI = () => {
  const [upi, setUpi] = useState("");

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
                <label htmlFor="cardNumber">UPI ID:</label>
              </td>
              <td>
                <input
                  type="text"
                  id="upi"
                  name="upi"
                  value={upi}
                  onChange={(event) => setUpi(event.target.value)}
                />
              </td>
            </tr>
            <td>
              <button className="btn btn-pay">Pay</button>
            </td>
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

export default UPI;
