import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../store';
import TaskList from './TaskList';

test('renders TaskList and adds a task', () => {
  render(
    <Provider store={store}>
      <TaskList />
    </Provider>
  );

  const input = screen.getByLabelText(/new task/i);
  fireEvent.change(input, { target: { value: 'Test Task' } });

  const button = screen.getByText(/add task/i);
  fireEvent.click(button);

  expect(screen.getByText(/test task/i)).toBeInTheDocument();
});
