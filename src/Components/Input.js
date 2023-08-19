import React, { Fragment } from "react";
import classes from "./Input.module.css";
import DigitButton from "./DigitButton";
import OperationButton from "./OperationButton";

import { ACTIONS } from "../App";
import Button from "../UI/Button";

export default function Input(props) {

  function handleDispatch({ type, payload }) {
    props.dispatch({ type: type, payload: payload });
  }

  return (
    <Fragment>
      <Button
        className={classes["span-two"]}
        onClick={() => {
          handleDispatch({ type: ACTIONS.CLEAR });
        }}
      >
        AC
      </Button>
      <Button
        onClick={() => {
          handleDispatch({ type: ACTIONS.DELETE_DIGIT });
        }}
      >
        DEL
      </Button>
      <OperationButton operation="/" dispatch={handleDispatch} />
      <DigitButton digit="1" dispatch={handleDispatch} />
      <DigitButton digit="2" dispatch={handleDispatch} />
      <DigitButton digit="3" dispatch={handleDispatch} />
      <OperationButton operation="*" dispatch={handleDispatch} />
      <DigitButton digit="4" dispatch={handleDispatch} />
      <DigitButton digit="5" dispatch={handleDispatch} />
      <DigitButton digit="6" dispatch={handleDispatch} />
      <OperationButton operation="+" dispatch={handleDispatch} />
      <DigitButton digit="7" dispatch={handleDispatch} />
      <DigitButton digit="8" dispatch={handleDispatch} />
      <DigitButton digit="9" dispatch={handleDispatch} />
      <OperationButton operation="-" dispatch={handleDispatch} />
      <DigitButton digit="." dispatch={handleDispatch} />
      <DigitButton digit="0" dispatch={handleDispatch} />
      <Button
        className={classes["span-two"]}
        onClick={() => handleDispatch({ type: ACTIONS.EVALUATE })}
      >
        =
      </Button>
    </Fragment>
  );
}
