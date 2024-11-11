import { Button } from '@mui/material';
import React from 'react';
import './TaskList.css';
const TaskList = ({ deleteTodo, todos }) => {
  return (
    <>
      <ul className="list">
        {todos.map((todo) => (
          <li className="listItem" key={todo.id}>
            <div className="List_block">
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
    </>
  );
};

export default TaskList;
