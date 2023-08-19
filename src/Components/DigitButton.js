import React from "react";
import { ACTIONS } from "../App";
import Button from "../UI/Button";
export default function DigitButton({ dispatch, digit }) {
  return (
    <Button
      onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}
    >
      {digit}
    </Button>
  );
}
