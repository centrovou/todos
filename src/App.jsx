import './App.css';
import { useState } from 'react';
import AddTodo from './componetns/AddTodo/AddTodo';
import TaskList from './componetns/TaskList/TaskList';

function App() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');

  // добавить задачу
  const addTodo = () => {
    setTask('');
    const newId = todos.length + 1; // генирация id
    setTodos([...todos, { id: newId, title: task }]);
  };

  // удалить
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
