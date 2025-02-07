import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import App from './App'; 


test('When user clicks on submit button, 0 is displayed in value', () => {
  const { getByPlaceholderText, getByText } = render(<App />);
  const input = getByPlaceholderText('Enter value');
  const submitButton = getByText('Submit');

  fireEvent.change(input, { target: { value: '' } });
  fireEvent.click(submitButton);

  const valueElement = getByText('0');
  expect(valueElement).toBeInTheDocument();
});