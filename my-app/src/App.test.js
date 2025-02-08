import React from 'react';
import { render, fireEvent, waitFor,screen } from '@testing-library/react';
import App from './App'; 


test('When user clicks on submit button, 0 is displayed in value', () => {
  const { getByPlaceholderText, getByText } = render(<App />);
  const input = getByPlaceholderText('Enter value');
  const submitButton = getByText('Submit');
  const resultElement = getByText('Result:');
  fireEvent.change(input, { target: { value: '' } });
  fireEvent.click(submitButton);
  expect(resultElement.textContent).toContain(`Result: 0`);});

test('Adding any amount of numbers returns the correct result', () => {
  const { getByPlaceholderText, getByText } = render(<App />);
  const input = getByPlaceholderText('Enter value');
  const submitButton = getByText('Submit');
  const resultElement = getByText('Result:');

  const testCases = [
    { input: '10,20,30\n40,50', expected: '150' },
    { input: '10;20;30\n40;50', expected: '150' },
    { input: '10,20;30\n40,50', expected: '150' },
    { input: '10;20,30\n40;50', expected: '150' },
    { input: '10,20,30\n40,50//60', expected: '210' },
    { input: '10;20;30\n40;50;60', expected: '210' },
    { input: '10,20,30\n\n40,50', expected: '150' }
  ];
  testCases.forEach((testCase) => {
    fireEvent.change(input, { target: { value: testCase.input } });
    fireEvent.click(submitButton);
    expect(resultElement.textContent).toContain(`Result: ${testCase.expected}`);
  });

  
 
});
test('Numbers bigger than 1000 should be ignored', () => {
  const { getByPlaceholderText, getByText } = render(<App />);
  const input = getByPlaceholderText('Enter value');
  const submitButton = getByText('Submit');
  const resultElement = getByText('Result:');

  const testCases = [
    { input: '2000,1001', expected: '0' },
    { input: '1001,2', expected: '2' },
    { input: '2,1001,3', expected: '5' },
    { input: '1001,2,3', expected: '5' },
  ];

  testCases.forEach((testCase) => {
    fireEvent.change(input, { target: { value: testCase.input } });
    fireEvent.click(submitButton);
    expect(resultElement.textContent).toContain(`Result: ${testCase.expected}`);
  });
});

test('Negative numbers not allowed', () => {
  const { getByPlaceholderText, getByText } = render(<App />);
  const input = getByPlaceholderText('Enter value');
  const submitButton = getByText('Submit');

  // Test with negative numbers
  const testCases = [
    { input: '-1', expected: 'Negetive number not allowed: -1' },
    { input: '-2,3', expected:'Negetive number not allowed: -2' },
    { input: '2,-3', expected:'Negetive number not allowed: -3' },
    { input: '-1,-2', expected:'Negetive number not allowed: -1,-2' },
  ];

  testCases.forEach((testCase) => {
    fireEvent.change(input, { target: { value: testCase.input } });
    fireEvent.click(submitButton);
    const errorText = getByText(testCase.expected);
    expect(errorText).toBeInTheDocument();
  });
});