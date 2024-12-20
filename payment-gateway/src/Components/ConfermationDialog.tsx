import { useState } from "react";
import Dialog from "./Dialog";
import SuccessDialog from "./SuccessDialog";
import PaymentsOptions from "../Enums/PaymentsOptions";

type confermationDialogProps = {
  onClickNo: () => void;
  paymentOption: PaymentsOptions;
};

const ConfermationDialog = (props: confermationDialogProps) => {
  const [showSuccessDialog, setshowSuccessDialog] = useState(false);
  return showSuccessDialog ? (
    <SuccessDialog
      onClose={props.onClickNo}
      paymentOption={props.paymentOption}
    />
  ) : (
    <Dialog>
      <div
        style={{
          textAlign: "center",
        }}
      >
        <h1>Proceed to complete the payment?</h1>
        <button className="btn btn-cancel" onClick={props.onClickNo}>
          No
        </button>
        <button
          className="btn btn-confirm"
          onClick={() => setshowSuccessDialog(true)}
        >
          Yes
        </button>
      </div>
    </Dialog>
  );
};

export default ConfermationDialog;
