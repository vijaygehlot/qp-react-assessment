import React, { useState } from 'react';
import { TextField, Button, Grid, Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { addTask } from '../store/todoSlice';
import TaskItem from './TaskItem';
import { FixedSizeList as VirtualizedList } from 'react-window';

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

  const Row = ({ index, style }: { index: number; style: React.CSSProperties }) => (
    <div style={style}>
      <TaskItem task={tasks[index]} />
    </div>
  );

  return (
    <>
      <Box mb={2}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={8}>
            <TextField
              label="New Task"
              value={taskText}
              onChange={(e) => setTaskText(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Button variant="contained" color="primary" onClick={handleAddTask} fullWidth style={{height:55}}>
              Add Task
            </Button>
          </Grid>
        </Grid>
      </Box>
      <VirtualizedList
        height={600}
        itemCount={tasks.length}
        itemSize={50}
        width="100%"
      >
        {Row}
      </VirtualizedList>
    </>
  );
};

export default TaskList;
