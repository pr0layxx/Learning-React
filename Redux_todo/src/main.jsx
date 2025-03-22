import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

import { Provider } from "react-redux";
import { store } from "./app/Store.js";
import AddTodo from "./components/Addtodo.jsx";
import Todos from "./components/Todo.jsx";
createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <AddTodo />
    <Todos />
  </Provider>
);
