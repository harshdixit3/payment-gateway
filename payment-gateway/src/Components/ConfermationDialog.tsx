import React from "react";
import Dialog from "./Dialog";

type confermationDialogProps = {
  onClickNo: () => void;
};

const ConfermationDialog = (props: confermationDialogProps) => {
  return (
    <Dialog>
      <div
        style={{
          textAlign: "center",
        }}
      >
        <h1>Proceed to complete the payment?</h1>
        <button className="btn btn-cancel" onClick={props.onClickNo}>No</button>
        <button className="btn btn-confirm">Yes</button>
      </div>
    </Dialog>
  );
};

export default ConfermationDialog;
