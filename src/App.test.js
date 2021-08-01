import { render, screen } from '@testing-library/react';
import App from './App';

test('word friend in text', () => {
  render(<App />);
  const wordFriend = screen.getByText(/friend/i);
  expect(wordFriend).toBeInTheDocument();
});

test('word friend in text', () => {
  render(<App />);
  const wordFriend = screen.getByText(/friend/i);
  expect(wordFriend).toBeInTheDocument();
});

test('word friend in text', () => {
  render(<App />);
  const wordFriend = screen.getByText(/friend/i);
  expect(wordFriend).toBeInTheDocument();
});