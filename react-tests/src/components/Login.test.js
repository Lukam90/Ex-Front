import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import Login from './Login';

jest.mock("axios", () => ({
  __esModule: true,

  default: {
    get: () => ({
      data: { id: 1, name: "John" }
    })
  }
}));

// Username

test('username input should be rendered', () => {
  render(<Login />);
  
  const usernameInputEl = screen.getByPlaceholderText(/username/i);
  
  expect(usernameInputEl).toBeInTheDocument();
});

test('username input should be empty', () => {
  render(<Login />);
  
  const usernameInputEl = screen.getByPlaceholderText(/username/i);
  
  expect(usernameInputEl.value).toBe("");
});

test('username input should change', () => {
  render(<Login />);
  
  const usernameInputEl = screen.getByPlaceholderText(/username/i);

  const testValue = "test";

  fireEvent.change(usernameInputEl, { target: { value: testValue } });
  
  expect(usernameInputEl.value).toBe(testValue);
});

// Password

test('password input should be rendered', () => {
  render(<Login />);
  
  const passwordInputEl = screen.getByPlaceholderText(/password/i);
  
  expect(passwordInputEl).toBeInTheDocument();
});

test('password input should be empty', () => {
  render(<Login />);
  
  const passwordInputEl = screen.getByPlaceholderText(/password/i);
  
  expect(passwordInputEl.value).toBe("");
});

test('password input should change', () => {
  render(<Login />);
  
  const passwordInputEl = screen.getByPlaceholderText(/password/i);

  const testValue = "test";

  fireEvent.change(passwordInputEl, { target: { value: testValue } });
  
  expect(passwordInputEl.value).toBe(testValue);
});

// Button

test('button should be rendered', () => {
  render(<Login />);
  
  const buttonEl = screen.getByRole("button");
  
  expect(buttonEl).toBeInTheDocument();
});

test('button should be disabled', () => {
  render(<Login />);
  
  const buttonEl = screen.getByRole("button");
  
  expect(buttonEl).toBeDisabled();
});

test('button should not be disabled when inputs exist', () => {
  render(<Login />);
  
  const buttonEl = screen.getByRole("button");

  const usernameInputEl = screen.getByPlaceholderText(/username/i);
  const passwordInputEl = screen.getByPlaceholderText(/password/i);

  const testValue = "test";

  fireEvent.change(usernameInputEl, { target: { value: testValue } });
  fireEvent.change(passwordInputEl, { target: { value: testValue } });
  
  expect(buttonEl).not.toBeDisabled();
});

// Loading

test('Loading should not be rendered', () => {
  render(<Login />);
  
  const buttonEl = screen.getByRole("button");
  
  expect(buttonEl).not.toHaveTextContent(/please wait/i);
});

test('Loading should be rendered when clicked', () => {
  render(<Login />);
  
  const buttonEl = screen.getByRole("button");

  const usernameInputEl = screen.getByPlaceholderText(/username/i);
  const passwordInputEl = screen.getByPlaceholderText(/password/i);

  const testValue = "test";

  fireEvent.change(usernameInputEl, { target: { value: testValue } });
  fireEvent.change(passwordInputEl, { target: { value: testValue } });

  fireEvent.click(buttonEl);
  
  expect(buttonEl).toHaveTextContent(/please wait/i);
});

test('Loading should not be rendered after fetching', async () => {
  render(<Login />);
  
  const buttonEl = screen.getByRole("button");

  const usernameInputEl = screen.getByPlaceholderText(/username/i);
  const passwordInputEl = screen.getByPlaceholderText(/password/i);

  const testValue = "test";

  fireEvent.change(usernameInputEl, { target: { value: testValue } });
  fireEvent.change(passwordInputEl, { target: { value: testValue } });

  fireEvent.click(buttonEl);
  
  await waitFor(() => 
    expect(buttonEl).not.toHaveTextContent(/please wait/i)
  );
});

// User

test('User should be rendered after fetching', async () => {
  render(<Login />);
  
  const buttonEl = screen.getByRole("button");

  const usernameInputEl = screen.getByPlaceholderText(/username/i);
  const passwordInputEl = screen.getByPlaceholderText(/password/i);

  const testValue = "test";

  fireEvent.change(usernameInputEl, { target: { value: testValue } });
  fireEvent.change(passwordInputEl, { target: { value: testValue } });

  fireEvent.click(buttonEl);

  const userItem = await screen.findByText("John");
  
  expect(userItem).toBeInTheDocument();
});

// Error Messages

test('error message should not be visible', () => {
  render(<Login />);
  
  const errorEl = screen.getByTestId("error");
  
  expect(errorEl).not.toBeVisible();
});