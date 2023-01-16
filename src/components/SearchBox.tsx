import React from 'react'
import "../Style/SearchBox.css"

interface SearchBoxProps {
    onSelection: (value: string) => void
}

const SearchBox = ({ onSelection }: SearchBoxProps) => {

    return (
        <div className='search-box'>
            <div className='titles'>
                <h1>Aztro App</h1>
                <h2>Search your Zodiac Sign</h2>
            </div>
            <div className='message'>
                <p>Enter your Zodiac sign and wait for your fortune</p>
            </div>
            <div className='input-search'>
                <label>
                    Zodiac Sign
                </label>
                <select onChange={(e) => onSelection(e.target.value)}>
                    <option value="aries">Aries</option>
                    <option value="taurus">Taurus</option>
                    <option value="gemini">Gemini</option>
                    <option value="cancer">Cancer</option>
                    <option value="leo">Leo</option>
                    <option value="virgo">Virgo</option>
                    <option value="libra">Libra</option>
                    <option value="scorpio">Scorpio</option>
                    <option value="sagittarius">Sagittarius</option>
                    <option value="capricorn">Capricorn</option>
                    <option value="aquarius">Aquarius</option>
                    <option value="pisces">Pisces</option>
                </select>
            </div>
        </div>

    )
}

export default SearchBox