import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  test('Renderiza o componente App corretamente', () => {
    render(<App />);
    const postElement = screen.getByText(/Olha só que legal minha miniatura do Batmóvel/i);
    expect(postElement).toBeInTheDocument();
  });
});
