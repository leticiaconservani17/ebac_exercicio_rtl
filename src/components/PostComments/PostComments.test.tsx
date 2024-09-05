import { render, screen, fireEvent } from '@testing-library/react';
import PostComments from '.';

describe('Teste inserir 2 comentários', () => {
  test('Inserir 2 comentários', () => {
    render(<PostComments />)

    const commentInput = screen.getByTestId('comment-input') as HTMLTextAreaElement;
    const addButton = screen.getByTestId('add-comment-button');

    fireEvent.change(commentInput, { target: { value: 'Uau, adorei' } });
    fireEvent.click(addButton);

    const commentItems = screen.getAllByTestId('comment-item');
    expect(commentItems).toHaveLength(1);
    expect(commentItems[0]).toHaveTextContent('Uau, adorei');
    console.log(`Comentário 1 adicionado: ${commentItems[0].textContent}`);

    fireEvent.change(commentInput, { target: { value: 'Muito bom!' } });
    fireEvent.click(addButton);

    const updatedCommentItems = screen.getAllByTestId('comment-item');
    expect(updatedCommentItems).toHaveLength(2);
    expect(updatedCommentItems[1]).toHaveTextContent('Muito bom!');
    console.log(`Comentário 2 adicionado: ${updatedCommentItems[1].textContent}`);
  });
});
