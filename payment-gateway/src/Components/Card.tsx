import { useState } from "react";

const Card = () => {
  const [cardNumber, seCardNumber] = useState("");

  return (
    <div>
      <form>
        <table>
          <tbody>
            <tr>
              <td>
                <label htmlFor="cardNumber">
                  Credit Card Number: (12 Digit number)
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
                  onChange={( event ) => seCardNumber( event.target.value)}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default Card;
