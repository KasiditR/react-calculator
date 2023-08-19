import React from "react";
import Input from "./Input";
import Display from "./Display";
import classes from "./Calculator.module.css";

export default function Calculator(props) {
  return (
    <div className={classes["calculator-grid"]}>
      <Display
        currentOperand={props.currentOperand}
        previousOperand={props.previousOperand}
        operation={props.operation}
      />
      <Input dispatch={props.disPatch} />
    </div>
  );
}
