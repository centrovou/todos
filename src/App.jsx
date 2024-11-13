import './App.css';
import { useState } from 'react';
import AddTodo from './components/AddTodo/AddTodo';
import TaskList from './components/TaskList/TaskList';
import { v4 as uuidv4 } from 'uuid';
function App() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');

  // add task
  const addTodo = () => {
    setTask('');
    const newId = uuidv4(); //  generation id
    setTodos([...todos, { id: newId, title: task }]);
  };

  // delete
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="app">
      <h1>Todo</h1>
      <AddTodo task={task} setTask={setTask} addTodo={addTodo} />
      <TaskList deleteTodo={deleteTodo} todos={todos} />
    </div>
  );
}

export default App;
