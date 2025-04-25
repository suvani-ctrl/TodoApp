import { Header } from './components/Header';
import { Tabs } from './components/Tabs';
import { TodoInput } from './components/TodoInput';
import { TodoList } from './components/TodoList';
import { useEffect, useState } from 'react';

function App() {
  const [todos, setTodos] = useState([
    { input: 'Hello! Add your first to-do list please!', complete: true },
  ]);
  const [selectedTab, setSelectedTab] = useState('All');




  function handleSaveData(currentTodos) {
    localStorage.setItem('todo-app', JSON.stringify(currentTodos));
  }



  function handleAddTodo(newTodo) {
    const newTodoList = [...todos, { input: newTodo, complete: false }];
    setTodos(newTodoList);
    handleSaveData(newTodoList); 
  }




  function handleCompleteTodo(index) {
    const newTodoList = [...todos];
    newTodoList[index].complete = true;
    setTodos(newTodoList);
    handleSaveData(newTodoList);
  }



  function handleDeleteTodo(index) {
    const newTodoList = todos.filter((val, valIndex) => valIndex !== index);
    setTodos(newTodoList);
    handleSaveData(newTodoList);
  }



  useEffect(() => {
    const savedTodos = localStorage.getItem('todo-app');
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos)); 
    }
  }, []); 

  return (
    <>
      <Header todos={todos} />


      <Tabs
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        todos={todos}
      />


      <TodoList
        selectedTab={selectedTab}
        todos={todos}
        handleDeleteTodo={handleDeleteTodo}
        handleCompleteTodo={handleCompleteTodo}
      />


      <TodoInput handleAddTodo={handleAddTodo} />


    </>
  );
}

export default App;
