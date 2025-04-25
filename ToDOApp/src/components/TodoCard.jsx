export function TodoCard({ todo, todoIndex, handleDeleteTodo, handleCompleteTodo }) {
  if (!todo || !todo.input) return null;

  return (
    <div className="card todo-item">
      <p>{todo.input}</p>
      <div className="todo-buttons">
        <button 
          disabled={todo.complete} 
          onClick={() => handleCompleteTodo(todoIndex)} // Pass todoIndex, not index
        >
          <h6>Done</h6>
        </button>
        <button onClick={() => handleDeleteTodo(todoIndex)}> {/* Pass todoIndex, not index */}
          <h6>Delete</h6>
        </button>
      </div>
    </div>
  );
}
