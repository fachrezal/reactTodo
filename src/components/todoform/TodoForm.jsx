/** @jsx jsx */
// import React, {useState} from "react";
import { jsx } from "@emotion/core";
import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "emotion-theming";

// import styles from "./todoform.module.css";
import * as styles from "./todoform.style";

const TodoForm = ({ addTodo, showAdd }) => {
  const theme = useTheme();
  const [value, setValue] = React.useState("");
  const handleFormSubmit = e => {
    e.preventDefault();

    if (!value) {
      alert("No blank todo!");
      return;
    }

    if (value.length > 40) {
      alert("Please create shorter todo!!");
      setValue("");
      return;
    }

    addTodo(value);
    setValue("");
  };

  if (showAdd) {
    return (
      <section css={styles.add}>
        <form action="" css={styles.addForm} onSubmit={handleFormSubmit}>
          <input
            type="text"
            css={styles.addInput({ theme })}
            value={value}
            onChange={e => setValue(e.target.value)}
          />
          <button css={styles.addBtn({ theme })}>Add</button>
        </form>
      </section>
    );
  } else {
    return null;
  }
};

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
  showAdd: PropTypes.bool.isRequired
};

export default TodoForm;
