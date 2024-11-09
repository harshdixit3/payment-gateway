import PaymentsOptions from "../Enums/PaymentsOptions";
import Dialog from "./Dialog";
import "./SuccessPayment.css";

type SuccessDialogProps ={
  onClose: () => void;
  paymentOption: PaymentsOptions
}

const SuccessDialog = (props: SuccessDialogProps) => {
  return (
    <Dialog>
      <div style={{ textAlign: "center" }}>
        <h1>Your Payment of Rs 5000 is Successfull!!!</h1>
       <div>Your Payment was Done through{props.paymentOption}</div> 
        <button className="btn btn-close" onClick={props.onClose}>Close</button>
      </div>
    </Dialog>
  );
};

export default SuccessDialog;
