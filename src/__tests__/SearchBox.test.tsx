import React from 'react';
import { render, screen } from '@testing-library/react';
import SearchBox from '../components/SearchBox';

test('renders learn react link', () => {
    render(<SearchBox onSelectionZodiac={() => { }} onSelectionDay={() => { }} />);
    const linkElement = screen.getByText(/Horoscope/i);
    expect(linkElement).toBeInTheDocument();
});
