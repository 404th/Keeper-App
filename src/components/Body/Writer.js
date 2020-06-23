import React, { useState } from "react";
import { Input } from "@material-ui/core";
import { useStyles } from "../../styles/useStyles";
import { actionWords } from "../globalState";
import { observer } from "mobx-react"

function _Writer() {
  const classes = useStyles();
  let [words, setWords] = useState({ title: "", note: "" });

  function getWords(props) {
    let { name, value } = props.target;

    if (name === "title") {
      setWords((props) => ({
        title: value,
        note: props.note,
      }));
    } else if (name === "note") {
      setWords((props) => ({
        title: props.title,
        note: value,
      }));
    }
  }

  function buttonWords( item ) {
    actionWords( words )
    document.getElementById("input_1").value = ""
    document.getElementById("input_2").value = ""
  }

  return (
    <>
      <div className={classes.first}>
        <div className={classes.writer}>
          <Input
            id="input_1"
            required
            name="title"
            className={classes.input}
            onChange={getWords}
            placeholder="Title"
            type="text"
          />
          <Input
            id="input_2"
            required
            name="note"
            className={classes.input}
            onChange={getWords}
            placeholder="Take note..."
            type="text"
          />
          <button className={classes.button} type="primary" onClick={ buttonWords } >+</button>
        </div>
      </div>
    </>
  );
}

export const Writer = observer( _Writer )