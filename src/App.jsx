import { Button, Fab, TextField } from '@mui/material';
import './App.css';
import { useState } from 'react';
import { AddIcCallOutlined } from '@mui/icons-material';
import { EditNotifications } from '@mui/icons-material';

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
      <div className="appwarapper">
        <TextField
          id="outlined-basic"
          label="добавить"
          variant="outlined"
          value={task}
          placeholder="добавить задачу"
          onChange={(e) => setTask(e.target.value)}
          size="small"
        />

        <Button
          className="btnAdd"
          onClick={addTodo}
          size="small"
          variant="contained"
          color="success"
        >
          Добавить
        </Button>
      </div>
      <ul className="list">
        {todos.map((todo) => (
          <li className="listItem" key={todo.id}>
            <div className="title">
              {todo.title}
              <div className="btnDelete">
                <Button
                  onClick={() => deleteTodo(todo.id)}
                  size="small"
                  variant="outlined"
                  color="error"
                >
                  удалить
                </Button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
