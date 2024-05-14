import React from 'react';
import { Checkbox, ListItem, ListItemText } from '@mui/material';
import { useDispatch } from 'react-redux';
import { toggleTask } from '../store/todoSlice';
import { Task } from '../types';

interface TaskItemProps {
  task: Task;
}

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTask(task.id));
  };

  return (
    <ListItem>
      <Checkbox
        edge="start"
        checked={task.completed}
        tabIndex={-1}
        disableRipple
        onChange={handleToggle}
      />
      <ListItemText primary={task.text} />
    </ListItem>
  );
};

export default TaskItem;
