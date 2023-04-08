import React from "react";
//import { TodoProvider } from "../TodoContext";
//import { AppUI } from "./AppUI";

//const defaultItem = [
//  { text: "Cortar cebolla", completed: true },
//  { text: "Tomar el cursso de intro a React", completed: false },
//  { text: "Llorar con la llorona", completed: true },
//  { text: "LALALALAA", completed: false },
//];

function App() {
  const [state, setState] = React.useState("estado compartido");
  // ---------------------------------
  return (
    <React.Fragment>
      <TodoHeader>
        <TodoCounter />
        <TodoSearch />
      </TodoHeader>

      <TodoList>
        <TodoItem state={state} />
      </TodoList>
    </React.Fragment>
  );
}

function TodoHeader({ children }) {
  return <header>{children}</header>;
}

function TodoList({ children }) {
  return <section className="TodoList-container">{children}</section>;
}

function TodoCounter() {
  return <p>TodoCounter</p>;
}
function TodoSearch() {
  return <p>TodoSearch</p>;
}
function TodoItem({ state }) {
  return <p>TodoItem: {state}</p>;
}

export default App;
