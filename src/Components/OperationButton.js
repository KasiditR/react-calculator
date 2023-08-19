import React from "react";
import { ACTIONS } from "../App";
import Button from "../UI/Button";
export default function OperationButton({ dispatch, operation }) {
  return (
    
    <Button
      onClick={() =>
        dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })
      }
    >
      {operation}
    </Button>
  );
}
