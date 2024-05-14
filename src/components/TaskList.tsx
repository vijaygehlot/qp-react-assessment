import React, { useState } from 'react';
import { List, TextField, Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { addTask } from '../store/todoSlice';
import TaskItem from './TaskItem';

const TaskList: React.FC = () => {
  const [taskText, setTaskText] = useState('');
  const tasks = useSelector((state: RootState) => state.todos.tasks);
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (taskText.trim()) {
      dispatch(addTask(taskText));
      setTaskText('');
    }
  };

  return (
    <>
      <TextField
        label="New Task"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        fullWidth
      />
      <Button variant="contained" color="primary" onClick={handleAddTask}>
        Add Task
      </Button>
      <List>
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </List>
    </>
  );
};

export default TaskList;
