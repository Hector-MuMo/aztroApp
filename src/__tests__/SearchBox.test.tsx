import React from 'react';
import { render, screen } from '@testing-library/react';
import SearchBox from '../components/SearchBox';

test('renders learn react link', () => {
    render(<SearchBox onSelection={() => { }} />);
    const linkElement = screen.getByText(/Aztro App/i);
    expect(linkElement).toBeInTheDocument();
});
