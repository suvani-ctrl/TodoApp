import { TodoCard } from './TodoCard';

export function TodoList({ todos = [], selectedTab, handleDeleteTodo, handleCompleteTodo }) {
  let filteredTodoList = [];

  if (selectedTab === "All") {
    filteredTodoList = todos;
  } else if (selectedTab === "Completed") {
    filteredTodoList = todos.filter((val) => val.complete);
  } else {
    filteredTodoList = todos.filter((val) => !val.complete);
  }

  return (
    <>
      {filteredTodoList.map((todo, index) => (
        <TodoCard
          key={index}
          todo={todo}
          todoIndex={index} 
          handleDeleteTodo={handleDeleteTodo}
          handleCompleteTodo={handleCompleteTodo}
        />
      ))}
    </>
  );
}
