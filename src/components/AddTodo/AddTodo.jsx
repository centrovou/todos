import { Button, TextField } from '@mui/material';
import React from 'react';
import './AddTodo.css';

const AddTodo = ({ setTask, task, addTodo }) => {
  return (
    <>
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
          size="Medium"
          variant="contained"
          color="success"
        >
          Добавить
        </Button>
      </div>
    </>
  );
};

export default AddTodo;
