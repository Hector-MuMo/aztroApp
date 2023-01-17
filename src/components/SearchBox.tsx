import React from 'react'
import logo from "../images/1.png"
import "../Style/SearchBox.css"


interface SearchBoxProps {
    onSelectionZodiac: (value: string) => void,
    onSelectionDay: (value: string) => void,
}

const SearchBox = ({ onSelectionZodiac, onSelectionDay }: SearchBoxProps) => {

    return (
        <div className='search-box'>
            <div className='titles'>
                <figure className='logo'>
                    <img src={logo} alt="logo" />
                </figure>
            </div>
            <div className='input-search'>
                <h2>Take a look your Horoscope</h2>
                <select onChange={(e) => onSelectionZodiac(e.target.value)}>
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
                <h2>Choose a day</h2>
                <select onChange={(e) => onSelectionDay(e.target.value)}>
                    <option value="today">Today</option>
                    <option value="tomorrow">Tomorrow</option>
                    <option value="yesterday">Yesterday</option>
                </select>
            </div>
        </div>

    )
}

export default SearchBox