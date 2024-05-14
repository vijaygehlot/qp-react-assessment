import React from 'react';
import { Provider } from 'react-redux';
import { Container, Typography } from '@mui/material';
import TaskList from './components/TaskList';
import store from './store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Container maxWidth="md">
        <Typography variant="h3" gutterBottom>
          Todo App
        </Typography>
        <TaskList />
      </Container>
    </Provider>
  );
};

export default App;
