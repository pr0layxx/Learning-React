import { createContext, useContext } from "react";

export const TodoContext = createContext({
  Todos: [
    {
      id: 1,
      todo: "todo msg",
      complete: false,
    },
  ],
  addTodo: (id) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

export const useTodo = () => {
  return useContext(TodoContext);
};
export const TodoProvider = TodoContext.Provider;
