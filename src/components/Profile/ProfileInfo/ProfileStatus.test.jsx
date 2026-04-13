import { render, screen } from '@testing-library/react';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import { Component } from 'react';

describe('ProfileStatus component', () => {
  test('Status from props should be displayed', () => {
    render(<ProfileStatusWithHooks status="it-kamasutra.com" />);
    expect(screen.getByText('it-kamasutra.com yo')).toBeInTheDocument();
  });

  test('Status should be updated from props', () => {
    const { rerender } = render(<ProfileStatusWithHooks status="initial status" />);
    expect(screen.getByText('initial status yo')).toBeInTheDocument();
    rerender(<ProfileStatusWithHooks status="updated status" />);
    expect(screen.getByText('updated status yo')).toBeInTheDocument();
  });

  test('after created span', () => {
    render(<ProfileStatusWithHooks status="it-kamasutra.com" />);

    // Используем screen для поиска элементов
    const spanElement = screen.getAllByText('it-kamasutra.com yo');
    expect(spanElement.length).toBe(1);
    // expect(spanElements.length).toBe(1);

    // Альтернативно можно найти по тегу
    const spanElement2 = screen.getByText(/it-kamasutra.com.*yo/);
    expect(spanElement2).toBeInTheDocument();
  });
  test('after created input', () => {
    render(<ProfileStatusWithHooks status="it-kamasutra.com" />);

    // Используем screen для поиска элементов
    const spanElement = screen.getAllByText('it-kamasutra.com yo');
    expect(spanElement.length).toBe(1);
    // expect(spanElements.length).toBe(1);

    // Альтернативно можно найти по тегу
    const spanElement2 = screen.getByText(/it-kamasutra.com.*yo/);
    expect(spanElement2).toBeInTheDocument();
  });
});
