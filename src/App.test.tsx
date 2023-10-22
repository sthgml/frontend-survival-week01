import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component Test', () => {
  it('should render App', () => {
    // 테스트를 위해 특정 컴포넌트를 jsdom에 렌더링함.
    render(<App />);
  });

  it('"Gretting" component that rendered the', () => {
    render(<App />);

    const target = screen.getByText('Hello');

    expect(target).toBeInTheDocument();
  });
});
