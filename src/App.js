import React from "react";
import "./styles.css";
import { ThemeProvider } from "emotion-theming";

import TodoList from "./pages/TodoList";

const theme = {
  color: {
    primary: {
      black: "#484848",
      red: "rgb(219, 67, 67)"
    }
  },
  background: {
    color: {
      primary: "#f2eecb"
    }
  }
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <TodoList />
    </ThemeProvider>
  );
}

export default App;
