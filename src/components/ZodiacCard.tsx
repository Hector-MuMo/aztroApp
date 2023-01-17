import React from 'react'
import "../Style/ZodiacCard.css"
import { toMayus } from '../utils/toMayus'
import { zodiacImage } from '../utils/zodiacImage'


interface ZodiacObject {
    info?: {
        color: string
        compatibility: string
        current_date: string
        date_range: string
        description: string
        lucky_number: string
        lucky_time: string
        mood: string
    }
    error?: string
}

interface ZodiacCardProps {
    zodiac: ZodiacObject,
    zodiacName: string
}

const ZodiacCard = ({ zodiac, zodiacName }: ZodiacCardProps) => {
    return (
        <div className='zodiac-card-container'>
            <figure className='zodiac-img'>
                <img src={zodiacImage(zodiacName)} alt={zodiacName} />
            </figure>
            {zodiac && zodiac.info ?
                <>
                    <h2>{toMayus(zodiacName)}</h2>
                    <div className='zodiac-card-info'>
                        <span>Color: </span>
                        <span>{zodiac.info.color}</span>
                        <span>Compatibility: </span>
                        <span>{zodiac.info.compatibility}</span>
                        <span>Date Range: </span>
                        <span>{zodiac.info.date_range}</span>
                        <span>Lucky Number: </span>
                        <span>{zodiac.info.lucky_number}</span>
                        <span>Lucky Time: </span>
                        <span>{zodiac.info.lucky_time}</span>
                        <span>Mood: </span>
                        <span>{zodiac.info.mood}</span>
                    </div>
                    <div className='zodiac-card-msg'>
                        <p>Message of the universe</p>
                        <span>{zodiac.info.description}</span>
                    </div>
                </>
                :
                <p>{zodiac.error}</p>
            }
        </div>
    )
}

export default ZodiacCard