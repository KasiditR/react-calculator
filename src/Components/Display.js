import React, { Fragment } from "react";
import classes from "./Display.module.css";

const INTEGER_FORMATTER = new Intl.NumberFormat("en-us", {
  maximumFractionDigits: 0,
});

function formatOperand(operand) {
  if (operand == null) {
    return;
  }

  const [integer, decimal] = operand.split(".");
  if (decimal == null) {
    return INTEGER_FORMATTER.format(integer);
  }

  return `${INTEGER_FORMATTER.format(integer)}.${decimal}`;
}

export default function Display(props) {
  return (
    <Fragment>
      <div className={classes.output}>
        <div className={classes["previous-operand"]}>
          {props.previousOperand} {props.operation}
        </div>
        <div className={classes["current-operand"]}>
          {formatOperand(props.currentOperand)}
        </div>
      </div>
    </Fragment>
  );
}
