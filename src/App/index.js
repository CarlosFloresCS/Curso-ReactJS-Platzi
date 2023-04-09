import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoHeader } from "../TodoHeader";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";
import { useTodos } from "./useTodos";

//const defaultItem = [
//  { text: "Cortar cebolla", completed: true },
//  { text: "Tomar el cursso de intro a React", completed: false },
//  { text: "Llorar con la llorona", completed: true },
//  { text: "LALALALAA", completed: false },
//];

function App() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    addTodo,
  } = useTodos();
  // ---------------------------------
  return (
    <React.Fragment>
      <TodoHeader>
        <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos} />
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      </TodoHeader>

      <TodoList>
        {error && <p>Desesperate, hubo un error...</p>}
        {loading && <p>Estamos cargando, no desesperes</p>}
        {!loading && !searchedTodos.length && <p>!Crea tu primer TODO!</p>}

        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      {!!openModal && (
        <Modal>
          <TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
        </Modal>
      )}

      <CreateTodoButton setOpenModal={setOpenModal} />
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
