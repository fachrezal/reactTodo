/** @jsx jsx */
// import React, {useState} from "react";
import { jsx } from "@emotion/core";
import Todo from "../todo/Todo";
import PropTypes from "prop-types";
import { useTheme } from "emotion-theming";

// import styles from "./todos.module.css";
import * as styles from "./todos.style";

const Todos = ({ todos, completeTodo }) => {
  const theme = useTheme();

  return (
    <section css={styles.todos}>
      {todos.length > 0 &&
        todos.map((todo, index) => {
          return (
            <Todo
              key={index}
              text={todo.text}
              isCompleted={todo.isCompleted}
              completeTodo={completeTodo}
              index={index}
            />
          );
        })}
      {todos.length === 0 && (
        <div css={styles.todoPlaceholderText}>
          Create todo by clicking{" "}
          <span css={styles.addButtonPlaceholderText}>Add</span> button!
        </div>
      )}
    </section>
  );
};

Todos.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string
    })
  ),
  completeTodo: PropTypes.func.isRequired
};

export default Todos;
